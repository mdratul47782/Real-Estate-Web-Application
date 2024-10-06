import React from 'react';

const LogoSection = () => (
  <div className="mb-10 w-full">
    <a href="#" className="mb-6 inline-block  max-h-[100px]">
      <img src="assets/images/logo/logo.svg" alt="logo" className="max-w-full" />
    </a>
    <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
      We create digital experiences for brands and companies by using technology.
    </p>
    <SocialLinks />
  </div>
);

const SocialLinks = () => (
  <div className="-mx-3 flex items-center">
    {["facebook", "twitter", "instagram", "linkedin"].map((platform, index) => (
      <a href="#" key={index} className="px-3 text-gray-7 hover:text-white">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
          
          <path d="M16.294 8.86875H14.369...etc." />
        </svg>
      </a>
    ))}
  </div>
);

const AboutUsSection = () => (
  <div className="mb-10 w-full">
    <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
    <ul>
      {['Home', 'Features', 'About'].map((item, index) => (
        <li key={index}>
          <a href="#" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FeaturesSection = () => (
  <div className="mb-10 w-full">
    <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
    <ul>
      {['How it works', 'Privacy policy', 'Terms of Service', 'Refund policy'].map((feature, index) => (
        <li key={index}>
          <a href="#" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
            {feature}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const LatestBlogSection = () => (
  <div className="mb-10 w-full">
    <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
    <div className="flex flex-col gap-8">
      {['I think really important to design with...', 'Recognizing the need is the primary...'].map((title, index) => (
        <a href="blog-details.html" className="group flex items-center gap-[22px]" key={index}>
          <div className="overflow-hidden rounded">
            <img src={`./assets/images/blog/blog-footer-0${index + 1}.jpg`} alt="blog" />
          </div>
          <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">{title}</span>
        </a>
      ))}
    </div>
  </div>
);

 const FooterPart = () => {
  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <LogoSection />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <AboutUsSection />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <FeaturesSection />
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <LatestBlogSection />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterPart;


