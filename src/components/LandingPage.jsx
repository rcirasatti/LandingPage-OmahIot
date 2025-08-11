import React from "react";
import { GradientButton } from "./ui/button";
import { Card, GradientCard, HoverCard } from "./ui/card";
import Footer from "./Footer";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const LandingPage = () => {
  const projects = [
    {
      title: "MOKO",
      description: "MOKO memudahkan pengelolaan kolam koi",
      image: "/koi1-1.png",
    },
    {
      title: "AUTOFEEDER",
      description: "Meningkatkan kualitas berbagai jenis ikan",
      image: "/autofeeder1-1.png",
    },
    {
      title: "MONIK",
      description: "MONIK memudahkan pengelolaan greenhouse",
      image: "/hidroponik1-1.png",
    },
    {
      title: "MOBAN",
      description: "MOBAN membantu memantau curah hujan di tempat yang rawan.",
      image: "/monitoringhujan.png",
    },
    {
      title: "MANIS",
      description: "MANIS memudahkan pengelolaan lahan pertanian.",
      image: "/penyiraman1-1.png",
    },
    {
      title: "MOCKA",
      description: "MOCKA untuk kandang ayam closed house dan konvensional",
      image: "/kandangayam1-1.png",
    },
    {
      title: "WEBSITE",
      description: "Jasa pembuatan custom website",
      image: "/website.png",
    },
    {
      title: "ANDROID",
      description: "Jasa pembuatan custom android",
      image: "/androidd.png",
    },
  ];

  const handleExploreClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 10;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/50 to-background pt-16"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3A2F]/5 via-background to-background"></div>
          <div className="absolute w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A6741]/30 rounded-full mix-blend-multiply filter blur-[128px] animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2C3A2F]/30 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-float-delayed"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20"></div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">
                  OmahIoT
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto text-foreground/80 animate-fade-in-delay-1 leading-relaxed">
              Menghadirkan solusi inovatif untuk transformasi digital melalui.
              <span className="text-primary font-semibold"> IoT </span>
              dan
              <span className="text-secondary font-semibold">
                {" "}
                pengembangan web.
              </span>
            </p>
            <div className="flex flex-col items-center space-y-8 animate-fade-in-delay-2">
              <button
                onClick={handleExploreClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#2C3A2F] via-[#4A6741] to-primary rounded-xl font-medium text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(74,103,65,0.3)] active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                <span className="relative flex items-center">
                  Explore Our Solutions
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-foreground/70">
                  Scroll to explore
                </span>
                <div className="animate-bounce">
                  <svg
                    className="w-5 h-5 text-foreground/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-background via-card to-background relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.02] pattern-grid [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />
        </div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-lg opacity-50"></div>
              <h2 className="text-4xl font-bold relative">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/55">
                  About Us
                </span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
              OmahIoT merupakan salah satu perusahaan yang bergerak dibidang
              teknologi dengan fokus utamanya dibidang Internet of Things dan IT
              Solution. Dibidang Internet of Things kami menyediakan layanan
              pembuatan hardware dan software terkait Internet of Things dan
              pada bidang IT solution kami menyediakan layanan dalam membuat
              aplikasi android, situs web dan berbagai produk digital yang
              dibutuhkan untuk bisnis ataupun pribadi dengan fitur yang sesuai
              kebutuhan anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary text-center md:text-left">
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="group hover:bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-0.5 rounded-xl transition-all duration-300">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-card backdrop-blur-sm transition-all duration-300">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                        Pengembangan Perangkat IoT
                      </h4>
                      <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors">
                        Solusi IoT kustom untuk optimalisasi bisnis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Pengembangan Aplikasi Web
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Aplikasi modern dengan performa tinggi
                    </p>
                  </div>
                </div>
                <div className="group flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Konsultasi Teknologi
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Panduan ahli transformasi digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3 scale-105"></div>
              <div className="relative bg-card rounded-lg p-4 shadow-lg">
                <img
                  src="/omah-iot1.png"
                  alt="About Us"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">5+</p>
                  <p className="text-xs">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-background via-card/20 to-background"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block mb-4">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/55">
                Our Projects
              </h2>
            </div>
            <p className="text-lg text-foreground/70">
              Discover our innovative solutions and success stories
            </p>
          </div>
          <div className="grid md:lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#2C3A2F]/5 via-transparent to-[#4A6741]/5 rounded-xl p-0.5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,103,65,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                  <div className="relative mb-4 rounded-lg overflow-hidden bg-[#2C3A2F] flex items-center justify-center aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2C3A2F]/10 via-[#4A6741]/10 to-primary/10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="relative inline-block mb-4">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/55">
                Contact Us
              </h2>
            </div>
            <p className="text-lg text-foreground/70">
              Tertarik dengan layanan kami? Hubungi kami sekarang untuk
              konsultasi gratis dan temukan solusi terbaik untuk bisnis Anda.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Contact Info */}
            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="group relative bg-gradient-to-br from-[#2C3A2F]/5 via-transparent to-[#4A6741]/5 rounded-xl p-0.5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,103,65,0.2)] h-[150px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm p-4 rounded-xl h-full flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        Email Us
                      </h3>
                      <p className="text-sm text-foreground/60 mb-2">
                        24/7 Support
                      </p>
                      <a
                        href="mailto:omahiot@gmail.com"
                        className="text-base font-medium text-primary hover:text-primary/80 transition-all duration-300"
                      >
                        omahiot@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-gradient-to-br from-[#2C3A2F]/5 via-transparent to-[#4A6741]/5 rounded-xl p-0.5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,103,65,0.2)] h-[150px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm p-4 rounded-xl h-full flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        Call Us
                      </h3>
                      <p className="text-sm text-foreground/60 mb-2">
                        Mon-Fri, 9-5
                      </p>
                      <a
                        href="tel:+62 8127-6253-242"
                        className="text-base font-medium text-primary hover:text-primary/80 transition-all duration-300"
                      >
                        +62 8127-6253-242
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative bg-gradient-to-br from-[#2C3A2F]/5 via-transparent to-[#4A6741]/5 rounded-xl p-0.5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,103,65,0.2)] h-[175px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm p-4 rounded-xl h-full flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-xl group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        Visit Us
                      </h3>
                      <p className="text-sm text-foreground/60 mb-2">
                        Office Location
                      </p>
                      <p className="text-base font-medium text-primary hover:text-primary/80 transition-all duration-300">
                        Jl. Turus Asri IV No. 6, Bulusan, Kec. Tembalang, Kota
                        Semarang, Jawa Tengah 50277
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="group relative bg-gradient-to-br from-[#2C3A2F]/5 via-transparent to-[#4A6741]/5 rounded-xl p-0.5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(74,103,65,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/50 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col">
                <form className="space-y-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base font-medium text-foreground/90 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-foreground/90 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-medium text-foreground/90 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What is your message about?"
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-foreground/90 mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none backdrop-blur-sm"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#2C3A2F] via-[#4A6741] to-primary rounded-xl font-medium text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(74,103,65,0.3)] active:scale-95 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#4A6741]/20 via-primary/20 to-[#2C3A2F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                    <span className="relative flex items-center justify-center">
                      Send Message
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
