import "react";
import Header from "../../components/layout/Header";

const ContactHero = () => {
  return (
    <div className="relative w-full h-[95vh] overflow-hidden bg-none">
      <Header />

      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/WhatsApp Image 2026-06-02 at 08.45.00.jpeg")`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default ContactHero;