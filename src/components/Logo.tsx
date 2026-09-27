/**
 * The XVS shield + wordmark. The image lives at /public/logo.png
 * (the browser tab icons in /public are made from the same file).
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "is-light" : ""}`}>
      <img src="/logo.png" alt="" width={233} height={296} />
      <span className="logo-text">
        <span className="logo-name">XVS</span>
        <span className="logo-by">by CodeX</span>
      </span>
    </span>
  );
}
