import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { appLinkFiles, configFromEnv } from './scripts/app-links.ts'

/**
 * Publishes the Android and iPhone app-link files under `.well-known/` in the
 * build output, from the APP_LINK_* environment variables (scripts/app-links.ts,
 * docs/app-links.md). With none of them set nothing is emitted, and malformed
 * values fail the build. Skipped in the pre-render (SSR) build, whose output is
 * thrown away.
 */
const appLinks = (): Plugin => {
  let files: Record<string, string> = {}
  let ssr = false
  return {
    name: 'xvs-app-links',
    apply: 'build',
    configResolved(config) {
      ssr = Boolean(config.build.ssr)
    },
    buildStart() {
      if (ssr) return
      try {
        files = appLinkFiles(configFromEnv(process.env))
      } catch (error) {
        this.error(error instanceof Error ? error.message : String(error))
      }
    },
    generateBundle() {
      for (const [fileName, source] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), appLinks()],
})
