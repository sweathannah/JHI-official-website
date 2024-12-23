import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section className='bg-[#f1f1f1]'>
            <article style={{ backgroundImage: 'url(/images/bgs/connect.svg)'}} className='w-full bg-cover bg-no-repeat lg:p-[3.75rem] p-[2rem]'>
            <div className='m-auto text-[0.9rem] font-[400] max-w-[48rem] text-[#FFFFFF] text-center pt-[7.4rem]'>
                <h3 className=' font-[700] text-[2.5rem]'>
                Stay Connected With Us
                </h3>
                <p className=' py-[1.25rem] '>
                Stay connected with JHI by joining our newsletter! Be the first to receive updates on our impactful initiatives, latest insights and stories of positive change.
                </p>
                <form action="#" className="flex bg-[#FFFFFF] rounded-[0.5rem] w-fit m-auto">
                <input
                    type="email"
                    placeholder="Enter email address"
                    className="py-[1rem] lg:px-[1.5rem] px-[0.5rem] text-[1.125rem] rounded-s-[0.5rem] lg:w-fit w-[10rem] focus:outline-none focus:ring-2 focus:ring-[#FFAA00]"
                />
                <button className="bg-[#FFAA00] rounded-[0.5rem] py-[1.4rem] lg:px-[3.25rem] px-[2rem] text-[#292666] font-[700] text-[0.8rem]">
                    Subscribe
                </button>
                </form>
            </div>
            </article>
        </section>
        <section className="bg-gray-100 py-20 text-[#333333]">
          <div className="max-w-7xl mx-auto px-10">
            {/* Main Flex Container */}
            <div className="flex flex-wrap justify-between gap-8">
              {/* About Section */}
              <div className=" w-[40%]">
                <img
                  src="/images/jhi_logo.svg"
                  alt="Jimoh Habibullah Initiative Logo"
                  className="mb-6"
                />
                <p className="text-[0.8rem] font-[500] lg:w-[26rem] w-[20rem]">
                  The Jimoh Habibullah Initiative is an NGO dedicated to
                  fostering empathy, empowerment, and community growth. We offer
                  mentorship programs, including one-on-one mentoring and
                  workshops, to help individuals achieve their goals.
                </p>
                <div className="flex space-x-4 mt-6">
                  {/* Social Media Icons */}
                  <a href="https://www.facebook.com/NYP2023?mibextid=LQQJ4d">
                    <img
                      src="/images/social_media_icons/facebook_icon.svg"
                      alt="facebook_icon"
                    />
                  </a>
                  <a href="https://www.instagram.com/jimohhabibullahi_initiative?igsh=czk2MTVkc3VubDgy&utm_source=qr">
                    <img
                      src="/images/social_media_icons/instagram_icon.svg"
                      alt="instagram_icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/social_media_icons/youtube_icon.svg"
                      alt="youtube_icon"
                    />
                  </a>
                  <a href="https://x.com/jhinitiative01?s=21">
                    <img
                      src="/images/social_media_icons/X_icon.svg"
                      alt="X_icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/social_media_icons/linkedln_icon.svg"
                      alt="linkedln_icon"
                    />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex-1 min-w-[10rem]">
                <h3 className="text-[#292666] font-semibold text-[1.5rem] mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className=" text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Join Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="flex-1 min-w-[10rem]">
                <h3 className="text-[#292666] font-semibold text-[1.5rem] mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Photos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      News & Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="flex-1 min-w-[10rem]">
                <h3 className="text-[#292666] font-semibold text-[1.5rem] mb-4">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-20 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm">
              © 2024 Jimoh Habibullah Initiative. All Rights Reserved.
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
