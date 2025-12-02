import React from "react";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-[#FAFFEE]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#00A8A8]/10 rounded-full">
              <Sparkles className="w-12 h-12 text-[#00A8A8]" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            About <span className="text-[#00A8A8]">MOTION</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#0C6951] leading-relaxed mb-8">
            MOTION adalah platform coaching berbasis makna yang dirancang khusus
            untuk Gen Z. Kami percaya bahwa setiap langkah dalam karir dan
            kehidupan harus memiliki makna yang jelas.
          </p>

          {/* Tagline Box */}
          <div className="bg-gradient-to-r from-[#00A8A8]/10 to-[#F5C542]/10 rounded-3xl p-8 md:p-12 border-2 border-[#00A8A8]/20 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-[#1B263B] italic leading-relaxed">
              "Gerak tanpa makna hanya melelahkan.
              <br />
              Gerak dengan makna melahirkan{" "}
              <span className="text-[#00A8A8]">pertumbuhan</span>."
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00A8A8] mb-2">8+</div>
              <p className="text-[#0C6951] font-medium">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00A8A8] mb-2">500+</div>
              <p className="text-[#0C6951] font-medium">Clients Berhasil</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00A8A8] mb-2">95%</div>
              <p className="text-[#0C6951] font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
