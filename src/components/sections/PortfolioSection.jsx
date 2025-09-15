import React from "react";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-[hsl(210,72%,25%)] to-[hsl(148,41%,58%)] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('''/LandingPage-OmahIot/grid.svg''')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Featured Work
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[hsl(146,51%,91%)]/60 via-[hsl(146,51%,91%)] to-[hsl(146,51%,91%)]/60 rounded-full"></div>
          </div>
          <p className="text-xl text-white/90 leading-relaxed mt-6 drop-shadow-sm">
            Explore our showcase of premium projects and detailed case studies
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-20 bg-white/15 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <img
                src="/LandingPage-OmahIot/koi1-1.png"
                alt="MOKO Case Study"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,72%,25%)]/80 to-transparent md:bg-gradient-to-b md:from-transparent md:to-[hsl(210,72%,25%)]/80"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="px-4 py-1 rounded-full bg-[hsl(146,51%,91%)]/20 text-[hsl(146,51%,91%)] text-sm font-medium inline-block mb-4 w-fit border border-[hsl(146,51%,91%)]/30">
                Featured Project
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                MOKO: Smart Koi Pond Monitoring
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                An innovative IoT solution that revolutionizes koi pond
                management with real-time water quality monitoring, feeding
                automation, and analytics.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-white/15 rounded-full text-sm border border-white/20">
                  IoT
                </span>
                <span className="px-3 py-1 bg-white/15 rounded-full text-sm border border-white/20">
                  Smart Monitoring
                </span>
                <span className="px-3 py-1 bg-white/15 rounded-full text-sm border border-white/20">
                  Aquaculture
                </span>
                <span className="px-3 py-1 bg-white/15 rounded-full text-sm border border-white/20">
                  Mobile App
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[hsl(146,51%,91%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>24/7 water quality monitoring with alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[hsl(146,51%,91%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Automated feeding and maintenance scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-[hsl(146,51%,91%)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Data analytics for optimal pond health</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(146,51%,91%)] to-white text-[hsl(210,72%,25%)] hover:from-white hover:to-[hsl(146,51%,91%)] rounded-lg transition duration-300 font-medium group shadow-lg"
              >
                View Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Portfolio Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="group bg-white/15 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10">
            <div className="relative h-60 overflow-hidden">
              <img
                src="/LandingPage-OmahIot/autofeeder1-1.png"
                alt="AutoFeeder"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,72%,25%)]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">AUTOFEEDER</h3>
                <p className="text-white/90 text-sm">
                  Smart Fish Feeding System
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/90 text-sm mb-4">
                Automated fish feeding system with precision control,
                scheduling, and mobile app integration.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[hsl(146,51%,91%)] hover:text-white group-hover:underline text-sm font-medium"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="group bg-white/15 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10">
            <div className="relative h-60 overflow-hidden">
              <img
                src="/LandingPage-OmahIot/hidroponik1-1.png"
                alt="MONIK"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,72%,25%)]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">MONIK</h3>
                <p className="text-white/90 text-sm">
                  Greenhouse Monitoring System
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/90 text-sm mb-4">
                Complete greenhouse monitoring and automation for optimal plant
                growth conditions.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[hsl(146,51%,91%)] hover:text-white group-hover:underline text-sm font-medium"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="group bg-white/15 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10">
            <div className="relative h-60 overflow-hidden">
              <img
                src="/LandingPage-OmahIot/website.png"
                alt="Website Services"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,72%,25%)]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Web Development
                </h3>
                <p className="text-white/90 text-sm">Custom Web Solutions</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/90 text-sm mb-4">
                Professional web development services with modern technologies
                and responsive design.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[hsl(146,51%,91%)] hover:text-white group-hover:underline text-sm font-medium"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-[hsl(146,51%,91%)] text-white rounded-full transition duration-300 font-medium group hover:bg-white/10"
          >
            View All Case Studies
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
