import React from "react";
import { linkVariants } from "../../animation/animation";
import { motion } from "framer-motion";
import { link } from "framer-motion/client";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="bg-[#f1f1f1]">
          <article
            style={{ backgroundImage: "url(/images/bgs/connect.svg)" }}
            className="w-full bg-cover bg-no-repeat lg:p-[3.75rem] p-[2rem]"
          >
            <div className="m-auto text-[0.9rem] font-[400] max-w-[48rem] text-[#FFFFFF] text-center pt-[7.4rem]">
              <h3 className=" font-[700] text-[2.5rem]">
                Stay Connected With Us
              </h3>
              <p className=" py-[1.25rem] ">
                Stay connected with JHI by joining our newsletter! Be the first
                to receive updates on our impactful initiatives, latest insights
                and stories of positive change.
              </p>
              <form
                action="#"
                className="flex bg-[#FFFFFF] rounded-[0.5rem] w-fit m-auto"
              >
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
              <div className=" min-w-[20rem]">
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
                  <motion.a
                    variants={linkVariants}
                    whileHover="hover"
                    className="inline-block"
                    href="https://www.facebook.com/NYP2023?mibextid=LQQJ4d"
                  >
                    <img
                      src="/images/social_media_icons/facebook_icon.svg"
                      alt="facebook_icon"
                    />
                  </motion.a>
                  <motion.a
                    variants={linkVariants}
                    whileHover="hover"
                    className="inline-block"
                    href="https://www.instagram.com/jimohhabibullahi_initiative?igsh=czk2MTVkc3VubDgy&utm_source=qr"
                  >
                    <img
                      src="/images/social_media_icons/instagram_icon.svg"
                      alt="instagram_icon"
                    />
                  </motion.a>
                  <motion.a
                    variants={linkVariants}
                    whileHover="hover"
                    className="inline-block"
                    href="#"
                  >
                    <img
                      src="/images/social_media_icons/youtube_icon.svg"
                      alt="youtube_icon"
                    />
                  </motion.a>
                  <motion.a
                    variants={linkVariants}
                    whileHover="hover"
                    className="inline-block"
                    href="https://x.com/jhinitiative01?s=21"
                  >
                    <img
                      src="/images/social_media_icons/X_icon.svg"
                      alt="X_icon"
                    />
                  </motion.a>
                  <motion.a
                    variants={linkVariants}
                    whileHover="hover"
                    className="inline-block"
                    href="#"
                  >
                    <img
                      src="/images/social_media_icons/linkedln_icon.svg"
                      alt="linkedln_icon"
                    />
                  </motion.a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex-1 min-w-[10rem]">
                <h3 className="text-[#292666] font-semibold text-[1.5rem] mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Home
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/about/whoWeAre"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Who we are
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/programs/mentorship"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Mentorship
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/programs/socialImpact"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Social impacts
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/joinUs/donate"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Donate
                    </Link>
                  </motion.li>
                </ul>
              </div>

              {/* Resources */}
              <div className="flex-1 min-w-[10rem]">
                <h3 className="text-[#292666] font-semibold text-[1.5rem] mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/media/gallery?id=photos"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Photos
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/media/gallery/?id=videos"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                     Videos
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/media/news&Stories"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                     New & Stories
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/media/events"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Events
                    </Link>
                  </motion.li>
                </ul>
              </div>

              {/* Support */}
              <div className="flex-1 min-w-[10rem]">
                <h3 className="text-[#292666] font-semibold text-[1.5rem] mb-4">
                  Support
                </h3>
                <ul className="space-y-2">
                <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/about/whoWeAre"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Privacy policy
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/aboutUs/contactUs"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/about/whoWeAre"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                     FAQS
                    </Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileHover="hover">
                    <Link
                      to="/joinUs/community"
                      className="text-[1rem] hover:font-[500] hover:text-blue-600 inline-block"
                    >
                      Community
                    </Link>
                  </motion.li>
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
