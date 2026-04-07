/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ribbon from "./components/Ribbon";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HexagonTestimonials from "./components/HexagonTestimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-heading">
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <Services />
        <WhyChooseUs />
        <HexagonTestimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
