

const BookNowButton = () => {
  return (
    <a
      href="https://links.tailgrids.com/play-download"
      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-lg transition duration-300 ease-in-out hover:bg-gray-200 hover:text-body-color"
    >
      Book Now
    </a>
  );
};

const ContactUsButton = () => {
  return (
    
    <a
      href="https://github.com/tailgrids/play-tailwind"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
    >
      Contact Us
    </a>
  );
};

export default function HeroSection()  {
  return (
  <>
  
    <div id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                 build the house of your dream
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                We have over 9000 reviews, and our customers trust our property and quality products.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <BookNowButton />
                </li>
                <li>
                  <ContactUsButton />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src="/assets/images/hero/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
              <div className="absolute -left-9 bottom-0 z-[-1]">
                <svg
                  width="134"
                  height="106"
                  viewBox="0 0 134 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill="white"
                  />
                  {/* Add more circles here similar to the ones from your SVG */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
