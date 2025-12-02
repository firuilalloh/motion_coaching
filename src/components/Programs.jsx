import React from "react";
import { programs } from "../mock";
import { Button } from "./ui/button";
import { Clock, DollarSign, ArrowRight } from "lucide-react";

const Programs = () => {
  const handleWhatsAppInquiry = (programTitle) => {
    const message = encodeURIComponent(
      `Halo! Saya tertarik dengan program "${programTitle}". Mohon info lebih lanjut.`,
    );
    window.open(`https://wa.me/6285875000806?text=${message}`, "_blank");
  };

  return (
    <section id="programs" className="py-20 bg-[#FAFAFF]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            Our <span className="text-[#00A8A8]">Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-[#0C6951] max-w-2xl mx-auto">
            Program coaching yang dirancang khusus untuk kebutuhan Gen Z di
            berbagai tahap karir
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="network-card bg-white group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="inline-block mb-3 text-lg font-semibold px-3 py-1 bg-[#E0F7F7] text-[#00A8A8] rounded-full uppercase tracking-wide">
                {program.category}
              </span>
              {/* Program Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#1B263B] mb-4 group-hover:text-[#00A8A8] transition-colors duration-300">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-[#0C6951] leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Program Details */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#0C6951]">
                  <Clock className="w-5 h-5 text-[#00A8A8]" />
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[#0C6951]">
                  {/* <DollarSign className="w-5 h-5 text-[#F5C542]" />*/}
                  <span className="text-[#F5C542] font-semibold text-base">
                    Rp
                  </span>
                  <span className="font-medium">{program.price}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => handleWhatsAppInquiry(program.title)}
                className="btn-primary w-full bg-[#1B263B] hover:bg-[#0C6951] text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                Tanya Program Ini
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
