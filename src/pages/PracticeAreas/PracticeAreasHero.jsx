import Header from "../../components/layout/Header";

const PracticeAreasHero = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Header />

      <div className="w-full pt-0 sm:pt-0 md:pt-0">
        <div className="w-full overflow-hidden">

          {/* Mobile Image */}
          <img
            src="/WhatsApp Image 2026-06-10 at 15.44.45.jpeg"
            alt="Practice Areas Mobile"
            className="block lg:hidden w-full h-auto object-contain"
          />

          {/* Desktop / Tablet Image */}
          <img
            src="/WhatsApp Image 2026-06-08 at 16.26.24.jpeg"
            alt="Practice Areas Desktop"
            className="hidden lg:block w-full h-auto object-contain"
          />

        </div>
      </div>
    </div>
  );
};

export default PracticeAreasHero;