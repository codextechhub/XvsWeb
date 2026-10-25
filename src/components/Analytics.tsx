import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageview } from "../lib/analytics";

/** Starts analytics (if switched on in .env) and records each page the visitor opens. */
export default function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => initAnalytics(), []);
  useEffect(() => trackPageview(pathname), [pathname]);
  return null;
}
