import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo! Saya tertarik untuk Book Free Discovery Call dengan MOTION Coaching. Mohon info lebih lanjut.",
    );
    window.open(`https://wa.me/6285875000806?text=${message}`, "_blank");
  };

  const scrollToPrograms = () => {
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B263B] via-[#00A8A8] to-[#1B263B]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1651488829517-95af02975dd5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00A8A8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C542] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Move With{" "}
            <span className="text-[#F5C542] drop-shadow-glow">Meaning</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Coaching berbasis makna untuk membantu Gen Z menemukan arah,
            membangun karir pertama, dan menavigasi masa depan dengan percaya
            diri.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="btn-cta bg-[#F5C542] hover:bg-[#f5d976] text-[#1B263B] font-bold text-lg px-8 py-6 h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Discovery Call
            </Button>

            <Button
              onClick={scrollToPrograms}
              variant="outline"
              className="btn-secondary border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1B263B] font-semibold text-lg px-8 py-5.5 h-auto rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
