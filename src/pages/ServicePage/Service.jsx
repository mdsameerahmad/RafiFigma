import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import React from 'react';

const ServicePage = () => {
  const handleLetsTalkClick = () => {
    alert('Let us discuss your project requirements!');
  };

  //   const handleStartPartnershipClick = () => {
  //     alert('Thank you for your interest in starting a partnership with NEXRO!');
  //   };

  //   const handleSocialClick = (platform) => {
  //     alert(`Redirecting to ${platform}...`);
  //   };

  return (
    <div className="flex flex-col bg-light-1 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[650px] w-full">
        <div className="absolute inset-0 bg-[#B1BAC4]">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Navigation */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 px-[140px] mt-[250px]">
          <h2 className="text-[55px] font-bold leading-[82px] text-white max-w-[1025px]">
            <span className="font-poppins">We break boundaries to craft extraordinary </span>
            <span className="font-normal font-poly">experiences.</span>
          </h2>
        </div>
      </div>

      {/* Branding & Identity Section */}
      <div className="flex items-start px-[54px] py-[155px] gap-[69px] bg-[#F3F3F3]">
        <div className="flex-1 max-w-[702px] ">
          <h3 className="text-[34px] font-semibold leading-[47px] text-dark mb-[40px] font-manrope">
            Branding & identity
          </h3>

          <p className="text-[20px] font-light leading-[28px] text-dark mb-[60px] font-manrope">
            We fuel the growth of purpose driven brands through strategy activation, design
            empowerment, and market adoption. From cultivating new ideas to connecting the dots for
            customers or users, these are our core principles.
          </p>

          <div className="space-y-[56px] text-gray-400">
            {[
              ['Brand Strategy & Experience', 'Guidelines & Systems'],
              ['Trends & Insights', 'Content Strategy'],
              ['Go-To-Market Strategy', 'Identity Design'],
            ].map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-[107px]">
                {row.map((text, i) => (
                  <div key={i} className="group flex items-center gap-[41px] cursor-pointer">
                    <div className="w-[25px] h-[1px] bg-gray-400 group-hover:bg-black transition-all duration-300"></div>
                    <span className="text-[18px] font-light leading-[25px] group-hover:text-black transition-all duration-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-[11px] mt-[69px] cursor-pointer"
            onClick={handleLetsTalkClick}
          >
            <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
              Let us talk.
            </span>
            <div className="w-[61px] h-[1px] bg-black"></div>
          </div>
        </div>

        <div className="w-[553px] h-[803px]">
          <img
            src="/images/img_frame_13.png"
            alt="Branding and identity work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Websites & Digital Platforms Section */}
      <div className="flex items-center px-[54px] py-[155px] gap-[69px]">
        <div className="w-[553px] h-[803px]">
          <img
            src="/images/img_frame_14.png"
            alt="Digital platforms showcase"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 max-w-[702px]">
          <h3 className="text-[34px] font-semibold leading-[47px] text-dark mb-[77px] font-manrope">
            Websites & Digital Platforms
          </h3>

          <p className="text-[20px] font-light leading-[28px] text-dark mb-[114px] font-manrope">
            We design digital platforms to empower users and your brand's tribe. This deep
            understanding of what motivates them allows us to forge and fine-tune the most powerful
            strategies that generate rapid ROI for your business.
          </p>

          <div className="space-y-[56px]">
            <div className="flex items-center gap-[317px]">
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Digital Strategy
                </span>
              </div>
              <div className="flex items-center gap-[42px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Digital Activation
                </span>
              </div>
            </div>

            <div className="flex items-center gap-[317px]">
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  UX & UI Design
                </span>
              </div>
              <div className="flex items-center gap-[37px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Web & App Development
                </span>
              </div>
            </div>

            <div className="flex items-center gap-[317px]">
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Functional Prototyping
                </span>
              </div>
              <div className="flex items-center gap-[37px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  SEO Strategy & Systems
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-[11px] mt-[69px] cursor-pointer"
            onClick={handleLetsTalkClick}
          >
            <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
              Let us talk.
            </span>
            <div className="w-[61px] h-[1px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="flex items-center px-[77px] py-[155px] gap-[40px]">
        <div className="flex-1 max-w-[719px]">
          <h3 className="text-[34px] font-semibold leading-[47px] text-dark mb-[65px] font-manrope">
            Digital Marketing
          </h3>

          <p className="text-[20px] font-light leading-[28px] text-dark mb-[180px] font-manrope">
            In the new digital era, users are in control of content and community, and experience
            design is essential. Together, we define, develop, and deliver different design
            solutions that create an unparalleled competitive advantage for companies in a sea of
            competition. Focused on radical differentiation at every turn, with growth moves
            pre-loaded into everything we touch.
          </p>

          <div className="flex gap-[213px] mb-[179px]">
            <div className="space-y-[56px]">
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Digital Strategy
                </span>
              </div>
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  UX & UI Design
                </span>
              </div>
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Functional Prototyping
                </span>
              </div>
            </div>

            <div className="space-y-[56px]">
              <div className="flex items-center gap-[42px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Digital Activation
                </span>
              </div>
              <div className="flex items-center gap-[37px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Web & App Development
                </span>
              </div>
              <div className="flex items-center gap-[37px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  SEO Strategy & Systems
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-[11px] cursor-pointer"
            onClick={handleLetsTalkClick}
          >
            <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
              Let us talk.
            </span>
            <div className="w-[61px] h-[1px] bg-black"></div>
          </div>
        </div>

        <div className="w-[553px] h-[803px]">
          <img
            src="/images/img_frame_15.png"
            alt="Digital marketing showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Performance Marketing Section */}
      <div className="flex items-center px-[66px] py-[155px] gap-[67px]">
        <div className="w-[553px] h-[803px]">
          <img
            src="/images/img_frame_16.png"
            alt="Performance marketing showcase"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 max-w-[725px]">
          <h3 className="text-[34px] font-semibold leading-[47px] text-dark mb-[77px] font-manrope">
            Performance Marketing
          </h3>

          <p className="text-[20px] font-light leading-[28px] text-dark mb-[123px] font-manrope">
            With a keen understanding of what is happening in the digital landscape, we leverage the
            power of marketing platforms to connect audiences with contagious content worth sharing
            & spreading, cross-channel and touchpoint.
          </p>

          <div className="flex gap-[213px] mb-[197px]">
            <div className="space-y-[56px]">
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Digital Strategy
                </span>
              </div>
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  UX & UI Design
                </span>
              </div>
              <div className="flex items-center gap-[41px]">
                <div className="w-[25px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Functional Prototyping
                </span>
              </div>
            </div>

            <div className="space-y-[56px]">
              <div className="flex items-center gap-[42px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Digital Activation
                </span>
              </div>
              <div className="flex items-center gap-[37px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  Web & App Development
                </span>
              </div>
              <div className="flex items-center gap-[37px]">
                <div className="w-[20px] h-[1px] bg-black-overlay"></div>
                <span className="text-[18px] font-light leading-[25px] text-black-overlay font-manrope">
                  SEO Strategy & Systems
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-[11px] cursor-pointer"
            onClick={handleLetsTalkClick}
          >
            <span className="text-[18px] font-light leading-[25px] text-black font-manrope">
              Let us talk.
            </span>
            <div className="w-[61px] h-[1px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;
