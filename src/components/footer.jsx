import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#FCF8F1] flex justify-center px-4 pb-[30px]">
      <div className="w-full max-w-[1740px] bg-black rounded-[20px] md:rounded-[40px] p-6 md:p-8 lg:px-[60px] lg:py-12">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16 xl:gap-24">
          <div className="flex flex-col items-start justify-between w-full mb-8 lg:w-auto lg:mb-0">
            {/* Logo */}
            <div className="mb-8">
              <img
                className="h-[30px] brightness-0 invert"
                src="/logo.svg"
                alt="Luminous Labs"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex mb-8 space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#333333] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#333333] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#333333] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#333333] transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="gap-[16px] flex flex-col text-white">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 rounded">
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_profile_icon)">
                      <path
                        d="M12 13.7998C13.5802 13.7998 15.9727 14.2912 17.9629 15.2725C19.97 16.2621 21.4502 17.6865 21.4502 19.5V22.2002H2.5498V19.5C2.54981 17.6865 4.02999 16.2621 6.03711 15.2725C8.02729 14.2912 10.4198 13.7998 12 13.7998ZM10.1055 2.17676C10.897 1.8489 11.7583 1.73279 12.6045 1.83691L12.9658 1.89551C13.8059 2.06264 14.5858 2.44446 15.2314 3.00098L15.5 3.25C16.1057 3.85567 16.5428 4.60629 16.7705 5.42773L16.8545 5.78418C17.0216 6.62422 16.9682 7.49133 16.7012 8.30078L16.5732 8.64453C16.2454 9.43587 15.7187 10.1267 15.0469 10.6514L14.75 10.8662C13.936 11.41 12.9789 11.7002 12 11.7002C10.7693 11.7002 9.58573 11.242 8.67773 10.4199L8.5 10.25C7.5717 9.3217 7.0498 8.06282 7.0498 6.75C7.04981 5.89329 7.27237 5.05346 7.69238 4.31152L7.88379 4C8.35966 3.28781 9.01122 2.71266 9.77246 2.3291L10.1055 2.17676Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_profile_icon">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm">
                  Combined across all platforms: 11k followers
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 rounded">
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_bell_icon)">
                      <path
                        d="M14.9414 20.5498C14.7194 20.9122 14.4325 21.2314 14.0938 21.4902L13.8887 21.6357C13.3273 22.0033 12.671 22.1985 12 22.1992C11.4129 22.1985 10.8369 22.0494 10.3262 21.7656L10.1113 21.6357C9.6828 21.3551 9.32411 20.9833 9.05859 20.5498H14.9414Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                      <path
                        d="M13.6211 1.7998L13.9541 3.7998L13.9873 3.99805L14.1836 4.04297C15.7087 4.38987 16.7658 5.23914 17.4482 6.39453C18.1356 7.55828 18.4502 9.04638 18.4502 10.6631V13.5996L18.5098 13.6797L20.7002 16.5996V18.4502H3.2998V16.5996L5.49023 13.6797L5.5498 13.5996V10.6631C5.5498 9.04027 5.86213 7.55263 6.54785 6.39062C7.22859 5.23715 8.28512 4.39 9.81641 4.04297L10.0127 3.99805L10.0459 3.7998L10.3789 1.7998H13.6211Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_bell_icon">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm">Daily 80 requests/day</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 rounded">
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_columns_icon)">
                      <path
                        d="M5.7002 14.5498V22.9502H2.5498V14.5498H5.7002Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                      <path
                        d="M16.2002 10.0498V22.9502H13.0498V10.0498H16.2002Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                      <path
                        d="M21.4502 4.7998V22.9502H18.2998V4.7998H21.4502Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                      <path
                        d="M10.9502 1.0498V22.9502H7.7998V1.0498H10.9502Z"
                        stroke="#FCF8F1"
                        strokeWidth="0.6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_columns_icon">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm">
                  Growth: 7% organic growth monthly
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links - Responsive Grid */}
          <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
            <div className="flex flex-col gap-3">
              <h3 className="mb-1 font-medium text-white">Main Links</h3>
              <a className="text-sm text-[#FCF8F1] hover:text-white transition-colors" href="#">
                Technology
              </a>
              <a href="#" className="text-sm text-[#FCF8F1] hover:text-white transition-colors">
                Company
              </a>
              <a href="#" className="text-sm text-[#FCF8F1] hover:text-white transition-colors">
                Shop
              </a>
              <a href="#" className="text-sm text-[#FCF8F1] hover:text-white transition-colors">
                Commercial
              </a>
              <a href="#" className="text-sm text-[#FCF8F1] hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-[#FCF8F1] hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="mb-1 font-medium text-white">Legal</h3>
              <a href="#" className="text-sm text-[#f2ece280] hover:text-[#f2ece2] transition-colors">
                Shipping & Delivery
              </a>
              <a href="#" className="text-sm text-[#f2ece280] hover:text-[#f2ece2] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#f2ece280] hover:text-[#f2ece2] transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-[#f2ece280] hover:text-[#f2ece2] transition-colors">
                Revocation
              </a>
              <a href="#" className="text-sm text-[#f2ece280] hover:text-[#f2ece2] transition-colors">
                Imprint
              </a>
              <a href="#" className="text-sm text-[#f2ece280] hover:text-[#f2ece2] transition-colors">
                Press kit
              </a>
            </div>

            <div className="flex flex-col col-span-2 gap-3 md:col-span-1">
              <h3 className="mb-1 font-medium text-white">Newsletter</h3>
              <p className="text-sm text-[#f2ece280] mb-2">
                Stay updated with our latest products and news
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#FCF8F1]"
                />
                <button className="bg-[#FCF8F1] text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="my-8 lg:my-12">
          <p className="text-[#fcf8f166] text-xs leading-relaxed max-w-4xl">
            These statements have not been evaluated by the Food and Drug
            Administration. In the European Union, no medical use of our
            products does not fall within the scope of Annex I Section 1 of the
            Medical Device Regulation and therefore are not medical devices.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap items-center justify-center w-full gap-6 sm:justify-between">
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/paypal.svg"
              alt="PayPal"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/mastercard.svg"
              alt="Mastercard"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/visa.svg"
              alt="Visa"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/ae.svg"
              alt="American Express"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/klarna.svg"
              alt="Klarna"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/jcb.svg"
              alt="JCB"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/venmo.svg"
              alt="Venmo"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/applepay.svg"
              alt="Apple Pay"
            />
          </div>
          <div className="payment-icon">
            <img
              className="h-[28px] sm:h-[32px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              src="/gpay.svg"
              alt="Google Pay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};