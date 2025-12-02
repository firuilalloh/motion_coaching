import React from "react";
import { founderInfo } from "../mock";
import { Button } from "./ui/button";
import { MessageCircle, Award } from "lucide-react";

const Founder = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Halo Coach Dwi! Saya ingin berdiskusi lebih lanjut tentang coaching dengan MOTION.",
    );
    window.open(
      `https://wa.me/${founderInfo.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFAFF] to-[#EDEDFE]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
              Meet Your <span className="text-[#00A8A8]">Coach</span>
            </h2>
          </div>

          {/* Founder Card */}
          <div className="network-card bg-white flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={founderInfo.image}
                  alt={founderInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/50 to-transparent"></div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name & Credentials */}
              <div className="mb-4">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-2">
                  {founderInfo.name}
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#00A8A8] mb-2">
                  <Award className="w-5 h-5" />
                  <p className="font-semibold text-lg">
                    {founderInfo.credentials}
                  </p>
                </div>
                <p className="text-[#0C6951] font-medium text-lg">
                  {founderInfo.title}
                </p>
              </div>

              {/* Story */}
              <p className="text-base md:text-lg text-[#0C6951] leading-relaxed mb-6">
                {founderInfo.story}
              </p>

              {/* WhatsApp Contact */}
              <Button
                onClick={handleWhatsAppContact}
                className="btn-primary bg-[#F5C542] hover:bg-[#f5d976] text-[#1B263B] rounded-full px-8 py-6 h-auto font-bold text-lg flex items-center gap-2 mx-auto lg:mx-0"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 0858-7500-0806
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
