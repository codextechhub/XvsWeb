/**
 * The XVS shield logo, on its own (no text beside it).
 * The image lives at /public/logo.png (the browser tab icons are made from it).
 * Change its size in layout.css → ".logo img".
 */
export default function Logo() {
  return (
    <span className="logo">
      <img src="/logo.png" alt="XVS" width={233} height={296} />
    </span>
  );
}
