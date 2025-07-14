

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useRef } from "react"
import Footer from "../../components/common/Footer"
import Header from "../../components/common/Header"
import Button from "../../components/ui/Button"

const Home = () => {
  const heroRef = useRef(null)
  const nexroSectionRef = useRef(null)
  const contentSectionRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    })

    // Parallax scroll effect
    const handleScroll = () => {
      if (!heroRef.current || !nexroSectionRef.current || !contentSectionRef.current) return

      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight

      // Hero parallax effect
      const heroParallaxSpeed = 0.5
      const heroYPos = scrolled * heroParallaxSpeed
      heroRef.current.style.transform = `translateY(${heroYPos}px)`

      // Hero fade out
      const heroFadeStart = windowHeight * 0.3
      const heroFadeEnd = windowHeight * 0.8
      let heroOpacity = 1

      if (scrolled > heroFadeStart) {
        heroOpacity = Math.max(0, 1 - (scrolled - heroFadeStart) / (heroFadeEnd - heroFadeStart))
      }
      heroRef.current.style.opacity = heroOpacity.toString()

      // NEXRO section reveal
      const nexroRevealStart = windowHeight * 0.4
      const nexroRevealEnd = windowHeight * 1.2
      let nexroOpacity = 0
      let nexroScale = 0.8

      if (scrolled > nexroRevealStart) {
        const progress = Math.min(1, (scrolled - nexroRevealStart) / (nexroRevealEnd - nexroRevealStart))
        nexroOpacity = progress
        nexroScale = 0.8 + 0.2 * progress
      }

      nexroSectionRef.current.style.opacity = nexroOpacity.toString()
      nexroSectionRef.current.style.transform = `scale(${nexroScale})`

      // Content section reveal
      const contentRevealStart = windowHeight * 1.5
      let contentOpacity = 0
      let contentScale = 0.9

      if (scrolled > contentRevealStart) {
        const progress = Math.min(1, (scrolled - contentRevealStart) / (windowHeight * 0.5))
        contentOpacity = 0.3 + 0.7 * progress
        contentScale = 0.9 + 0.1 * progress
      }

      contentSectionRef.current.style.opacity = contentOpacity.toString()
      contentSectionRef.current.style.transform = `scale(${contentScale})`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleStartProject = () => alert("Let us start your project!")
  const handleViewWork = () => alert("Viewing our work portfolio")
  const handleContactNow = () => alert("Contact us now for your project!")

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section with Parallax */}
      <div
        ref={heroRef}
        className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 z-10"
        style={{
          backgroundImage: "url(/images/img77.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-left max-w-4xl" data-aos="fade-up">
          <h1 className="text-left text-[65px] font-bold text-white mb-6 leading-tight pt-[100px]">
            We Build Brands That <br /> Dominate
          </h1>
          <p className="text-lg sm:text-1xl md:text-2xl text-gray-200 mb-12">
            We craft experiences, not just visuals — made to convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              onClick={handleStartProject}
              variant="outline"
              size="md"
              className="bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-300 min-w-[200px]"
            >
              Start a Project
            </Button>
            <Button
              onClick={handleViewWork}
              variant="outline"
              size="md"
              className="border-2 border-white text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 p-[12px] min-w-[200px] bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for scroll effect */}
      <div className="h-[300vh]"></div>

      {/* NEXRO Branded Section - This matches your image */}
      <div
        ref={nexroSectionRef}
        className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-20"
        style={{
          opacity: 0,
          transform: "scale(0.2)",
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        }}
      >
        {/* Large NEXRO Logo */}
        <div className="text-center shadow-lg rounded-full">
          <h1
            className="text-[120px] sm:text-[150px] md:text-[200px] lg:text-[200px] xl:text-[250px] font-bold text-[#000000] leading-none tracking-wider"
            style={{
              fontFamily: "Arial, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              background: "#535252",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NEXRO
          </h1>
        </div>
      </div>

      {/* Main Content sections */}
      <div
        ref={contentSectionRef}
        className="relative z-30 bg-black"
        style={{
          opacity: 0.3,
          transform: "scale(0.9)",
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        }}
      >
        {/* Why NEXRO Section */}
        <div className="py-16 md:py-20 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center" data-aos="fade-up">
          <h2 className="font-satoshi font-medium text-2xl sm:text-3xl md:text-4xl leading-9 text-global-5 mb-6 md:mb-8">
            WHY NEXRO
          </h2>
          <p className="font-satoshi font-medium text-lg md:text-xl leading-7 tracking-wide text-global-2 max-w-2xl mx-auto">
            NEXRO blends bold design, smart strategy & conversion-driven marketing to help brands grow, scale, and
            dominate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pb-16 md:pb-20">
          {/* First Row - Single Large Card */}
          <div className="mb-8" data-aos="zoom-in-up">
            <div
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url(/images/capabilities-branding-r.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="max-w-md text-left" data-aos="fade-right">
                  <h3 className="font-manrope font-semibold text-xl sm:text-2xl md:text-3xl tracking-wide text-white mb-3 md:mb-4">
                    BRANDING AND STRATEGY
                  </h3>
                  <p className="font-manrope font-light text-sm sm:text-base md:text-lg leading-relaxed text-white">
                    NEXRO blends bold design, smart strategy & conversion-driven marketing to help brands grow, scale,
                    and dominate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div className="lg:col-span-2" data-aos="fade-right">
              <div
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[646px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url(/images/img__0x0.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="max-w-lg text-left" data-aos="fade-up">
                    <h3 className="font-manrope font-semibold text-xl sm:text-2xl md:text-3xl leading-7 tracking-wide text-white mb-3 md:mb-4">
                      MARKETING & SALES
                    </h3>
                    <p className="font-manrope font-light text-sm sm:text-base md:text-lg leading-relaxed text-white">
                      NEXRO blends bold design, smart strategy & conversion-driven marketing to help brands grow, scale,
                      and dominate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[646px] rounded-lg overflow-hidden border border-gray-600"
                style={{
                  backgroundImage: "url(/images/img__1.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0px 4px 6px rgba(136, 136, 136, 1)",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center text-left p-6 sm:p-8 md:p-12">
                  <div className="max-w-sm" data-aos="fade-up">
                    <h3 className="font-manrope font-bold text-xl sm:text-2xl leading-8 tracking-wide text-global-5 mb-3 md:mb-4">
                      SEO MARKETING
                    </h3>
                    <p className="font-manrope font-light text-xs sm:text-sm leading-5 text-global-3">
                      NEXRO blends bold design, smart strategy & conversion-driven marketing to help brands grow, scale,
                      and dominate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div data-aos="fade-right">
              <div
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[646px] rounded-lg overflow-hidden border border-gray-700"
                style={{
                  backgroundImage: "url(/images/img__2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6 sm:p-8">
                  <h3
                    className="font-sarpanch font-bold text-xl sm:text-2xl leading-8 tracking-wide text-global-1"
                    data-aos="zoom-in"
                  >
                    DIGITAL MARKETING
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2" data-aos="fade-left">
              <div
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[646px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url(/images/img__3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center text-left p-6 sm:p-8 md:p-12">
                  <div className="max-w-md" data-aos="fade-up">
                    <h3 className="font-manrope font-bold text-xl sm:text-2xl leading-8 tracking-wide text-global-5 mb-3 md:mb-4">
                      MARKETING & SALES
                    </h3>
                    <p className="font-manrope font-normal text-sm sm:text-base leading-6 text-global-3">
                      NEXRO blends bold design, smart strategy & conversion-driven marketing to help brands grow, scale,
                      and dominate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Home
