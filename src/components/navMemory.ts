/**
 * Remembers which menu link was active on the previous page.
 * Every page draws a fresh header, so SiteHeader reads this to start the
 * highlight on the OLD link and slide it across to the new one.
 * Pages without the menu (Contact) set it too, so the next page's
 * highlight slides out from their link.
 */
let previousPath: string | null = null;

export function getPreviousNavPath() {
  return previousPath;
}

export function rememberNavPath(path: string) {
  previousPath = path;
}
