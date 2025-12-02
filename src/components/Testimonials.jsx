import React from "react";
import { testimonials } from "../mock";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#EDEDFE]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            Client <span className="text-[#00A8A8]">Success Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-[#0C6951] max-w-2xl mx-auto">
            Dengar langsung dari mereka yang telah bertransformasi bersama
            MOTION
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="network-card bg-white group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-20 h-20 text-[#00A8A8]" />
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1B263B]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#0C6951]">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-base md:text-lg text-[#0C6951] leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#00A8A8] to-[#F5C542] rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
