import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { contactFormSubmit } from "../mock";
import { useToast } from "../hooks/use-toast";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await contactFormSubmit(formData);
      toast({
        title: "Berhasil!",
        description: result.message,
      });
      setFormData({ name: "", email: "", goal: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
        error: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      "Halo! Saya ingin bertanya lebih lanjut tentang MOTION Coaching.",
    );
    window.open(`https://wa.me/6285875000806?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F5C542] via-[#f5d976] to-[#F5C542] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#1B263B] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00A8A8] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1B263B] mb-4">
              Ready to Move With Meaning?
            </h2>
            <p className="text-xl md:text-2xl text-[#1B263B]/80 font-medium">
              Mari mulai perjalanan transformasi Anda hari ini
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#1B263B] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-[#CACAFC] rounded-lg focus:border-[#00A8A8] transition-colors placeholder:text-lg"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#CACAFC] rounded-lg focus:border-[#00A8A8] transition-colors placeholder:text-lg"
                  />
                </div>
                <div>
                  <Textarea
                    name="goal"
                    placeholder="Apa goal atau tantangan yang ingin Anda selesaikan?"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-[#CACAFC] rounded-lg focus:border-[#00A8A8] transition-colors resize-none placeholder:text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00A8A8] hover:bg-[#1B263B] text-white rounded-xl py-5 h-auto font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </div>

            {/* WhatsApp Direct */}
            <div className="bg-gradient-to-br from-[#1B263B] to-[#00A8A8] rounded-3xl p-8 shadow-2xl flex flex-col justify-center items-center text-center text-white">
              <MessageCircle className="w-20 h-20 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Prefer WhatsApp?</h3>
              <p className="text-lg mb-8 opacity-90">
                Langsung chat dengan kami untuk response lebih cepat!
              </p>
              <Button
                onClick={handleWhatsAppDirect}
                className="bg-white text-[#1B263B] hover:bg-[#F5C542] hover:text-[#1B263B] rounded-xl px-8 py-5 h-auto font-bold text-lg flex items-center gap-2 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </Button>
              <p className="mt-6 text-sm opacity-75">0858-7500-0806</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
