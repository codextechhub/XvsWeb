import { Navigate, Route, Routes } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import LegalPage from "./pages/Legal/LegalPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

/**
 * Every page on the site. To add a page:
 *   1. create a folder in src/pages (copy an existing one as a starting point)
 *   2. add a <Route> below
 *   3. add it to the menu in src/components/navigation.ts
 */
export default function App() {
  return (
    <>
      {/* Scrolls to the top (or to a #section) whenever the page changes */}
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />

        {/* Old addresses that people may still have bookmarked */}
        <Route path="/products" element={<Navigate to="/services" replace />} />
        <Route path="/xvs" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
