import React from "react";
import { freeTools, toolDownload } from "../mock";
import { Button } from "./ui/button";
import { FileText, Target, Users, Compass, Download } from "lucide-react";

const iconMap = {
  FileText: FileText,
  Target: Target,
  Users: Users,
  Compass: Compass,
};

const FreeTools = () => {
  return (
    <section className="py-50 bg-gradient-to-b from-[#EDEDFE] to-[#CACAFC]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            Free <span className="text-[#00A8A8]">Resources</span>
          </h2>
          <p className="text-lg md:text-xl text-[#0C6951] max-w-2xl mx-auto">
            Download worksheet dan template gratis untuk memulai perjalanan
            self-discovery Anda
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {freeTools.map((tool, index) => {
            const IconComponent = iconMap[tool.icon];
            return (
              <div
                key={tool.id}
                className="network-card bg-white text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-[#00A8A8]/10 to-[#F5C542]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-[#00A8A8]" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-lg text-[#1B263B] mb-3 group-hover:text-[#00A8A8] transition-colors duration-300">
                  {tool.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#0C6951] leading-relaxed mb-6">
                  {tool.description}
                </p>

                {/* Download Button */}
                <Button
                  onClick={() => toolDownload(tool.id)}
                  variant="outline"
                  className="w-full border-2 border-[#00A8A8] text-[#00A8A8] hover:bg-[#00A8A8] hover:text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
