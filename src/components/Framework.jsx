import React from "react";
import { frameworkSteps } from "../mock";

const Framework = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFFEE] to-[#FAFAFF]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            The <span className="text-[#00A8A8]">MOTION</span> Framework
          </h2>
          <p className="text-lg md:text-xl text-[#0C6951] max-w-2xl mx-auto">
            Enam pilar yang memandu perjalanan transformasi dan pertumbuhan Anda
          </p>
        </div>

        {/* Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {frameworkSteps.map((step, index) => (
            <div
              key={step.id}
              className="network-card group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Letter Badge */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A8A8] to-[#1B263B] rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-3xl font-bold text-white">
                  {step.letter}
                </span>
              </div>

              {/* Title */}
              <h3 className="network-card-title text-[#1B263B] group-hover:text-[#00A8A8] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="network-card-content text-[#0C6951]">
                {step.description}
              </p>

              {/* Hover Accent Line */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#00A8A8] to-[#F5C542] rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#0C6951] mb-4">
            Siap mengaplikasikan framework ini dalam perjalanan karirmu?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Framework;
