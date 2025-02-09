import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { linkVariants } from '../../animation/animation';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'About Us',
      subMenu: [
        { label: 'Who We Are', path: '/about/whoWeAre' },
        { label: 'Our Team', path: '/about/ourTeam' },
        { label: 'Our Board', path: '/about/ourBoard' },
      ],
    },
    {
      label: 'Programs',
      subMenu: [
        { label: 'Youth Empowerment', path: '/programs/youth' },
        { label: 'Skill Acquisition', path: '/programs/skills' },
      ],
    },
    {
      label: 'Media',
      subMenu: [
        { label: 'News & Stories', path: '/media/News_Stories' },
        { label: 'Gallery', path: '/media/gallery' },
        { label: 'Events', path: '/media/Events' },
      ],
    },
    { label: 'Join Us', path: '/join' },
  ];

  const renderDropdown = (subMenu) => (
    <div className="absolute hidden group-hover:block w-[11rem] border bg-white rounded-md p-6 space-y-4 -left-6 font-[Mulish] z-20">
      {subMenu.map((item, index) => (
        <NavLink key={index} to={item.path} className="block hover:text-[#258CCF]">
          {item.label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <header className="font-[Montserrat] sticky  top-0 w-full z-50">
      <section className="bg-[#258CCF] px-[6.25rem] py-[0.938rem] lg:flex hidden flex-row flex-wrap justify-between space-y-2">
        <div className="flex flex-row items-center text-[#FFFFFF] font-[400] text-[0.75rem] space-x-[0.625rem]">
          <a href="tel:+2348179969112">
            <img src="/images/telephone_icon.svg" alt="Telephone" />
          </a>
          <a href="tel:+2347087070523">
            <img src="/images/whatsapp_icon.svg" alt="WhatsApp" />
          </a>
          <span>+234-817-996-9112 / +234-708-707-0523</span>
        </div>
        <div className="flex space-x-[1.25rem] text-[#FFFFFF]">
          <a href="https://x.com/jhinitiative01?s=21" className="flex items-center space-x-1">
            <img src="/images/x_icon.svg" alt="Twitter" className="w-4" />
            <span>@JHinitiative01</span>
          </a>
          <a href="https://www.facebook.com/NYP2023" className="flex items-center space-x-1">
            <img src="/images/facebook_icon.svg" alt="Facebook" className="w-4" />
            <span>Jimoh Habibullahi Initiatives</span>
          </a>
          <a href="https://www.instagram.com/jimohhabibullahi_initiative" className="flex items-center space-x-1">
            <img src="/images/instagram.svg" alt="Instagram" className="w-4" />
            <span>jimohhabibullahi_initiative</span>
          </a>
        </div>
      </section>
      {/* Mobile Navbar */}
      <div
       onMouseLeave={toggleMobileMenu}
        className={`lg:hidden fixed ml-auto w-[70%] inset-0 bg-white z-20 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[400%]"
        } transition-transform duration-300`}
      >
        {/* Close Button (X icon) */}
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
          <img src="/images/close_icon.svg" alt="Close Icon" />
        </button>
        <nav className="p-8">
          <ul className="text-[#333333] text-lg space-y-6">
            <motion.li
            variants={linkVariants}
            whileHover="hover">
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <li className="relative group text-lg">
                <div className="mb-6">
                  <motion.p 
                  variants={linkVariants}
                  whileHover="hover"
                  className="cursor-pointer flex gap-4 items-center  transition-all duration-200 ease-in-out">
                    About Us{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </motion.p>
                </div>
                <div className=" hidden group-hover:block  space-y-6">
                  <NavLink
                    to="/about/whoWeAre"
                    className="block"
                  >
                    Who we are
                  </NavLink>
                  <NavLink
                    to="/about/ourTeam"
                    className="block"
                  >
                    Our Team
                  </NavLink>
                 
                </div>
              </li>
              <li className="relative group text-lg">
                <div className="mb-6">
                  <motion.p 
                   variants={linkVariants}
                  whileHover="hover"
                  className="cursor-pointer flex gap-4 items-center  transition-all duration-200 ease-in-out">
                    Programs{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </motion.p>
                </div>
                <div className=" hidden group-hover:block  space-y-6">
                  <NavLink
                    to="/programs/mentorship"
                    className="block"
                  >
                    Mentorship
                  </NavLink>
                  <NavLink
                    to="/programs/socialImpact"
                    className="block"
                  >
                    Social Impact
                  </NavLink>
                  <NavLink
                    to="/programs/community-building"
                    className="block"
                  >
                    Community Building
                  </NavLink>
                </div>
              </li>
              <li className="relative group text-lg">
                <div className="mb-6">
                  <motion.p 
                  variants={linkVariants}
                  whileHover="hover"
                  className="cursor-pointer flex gap-4 items-center  transition-all duration-200 ease-in-out">
                    Media{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </motion.p>
                </div>
                <div className=" hidden group-hover:block  space-y-6">
                  <NavLink
                    to="/media/news&Stories"
                    className="block"
                  >
                    News & Stories
                  </NavLink>
                  <NavLink
                    to="/media/gallery"
                    className="block"
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/media/event"
                    className="block"
                  >
                    Events
                  </NavLink>
                </div>
              </li>
              <li className="relative group text-lg">
                <div className="mb-6">
                  <motion.p 
                  variants={linkVariants}
                  whileHover="hover"
                  className="cursor-pointer flex gap-4 items-center  transition-all duration-200 ease-in-out">
                    Join Us{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </motion.p>
                </div>
                <div className=" hidden group-hover:block  space-y-6">
                  <NavLink
                    to="/joinUs/contactUs"
                    className="block"
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="/joinUs/donate"
                    className="block"
                  >
                    Donate
                  </NavLink>
                  <NavLink
                    to="/joinUs/volunteer"
                    className="block"
                  >
                    Volunteer
                  </NavLink>
                </div>
              </li>
          </ul>
        </nav>
      </div>

      {/* Header with Logo and Navigation */}
      <section className="lg:px-[6.25rem] px-[1rem] py-[1.6rem] bg-white flex items-center justify-between">
        <div className="flex items-center lg:w-[12rem] w-full">
          <img src="/images/jhi_logo.svg" alt="JHI logo" className="w-[11rem]" />
          <button onClick={toggleMobileMenu} className="lg:hidden ml-auto">
            <img src="/images/menu_icon.svg" alt="Menu Icon" className="w-8" />
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <nav>
            <ul className="font-[400] text-[1rem] text-[#333333] flex flex-row space-x-[2.6rem]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative group">
                <div className="pb-4">
                  <p className="cursor-pointer flex gap-2 justify-between items-center group-hover:border-b-[3px] pb-1 group-hover:border-b-[#258CCF] group-hover:font-bold group-hover:text-[#258CCF] transition-all duration-200 ease-in-out">
                    About Us{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </p>
                </div>
                <div className="absolute hidden group-hover:block w-[11rem] border bg-white rounded-md p-6 space-y-8  -left-6 font-[Mulish] z-20">
                  <NavLink
                    to="/about/whoWeAre"
                    className="block hover:text-[#258CCF]"
                  >
                    Who we are
                  </NavLink>
                  <NavLink
                    to="/about/ourTeam"
                    className="block hover:text-[#258CCF]"
                  >
                    Our Team
                  </NavLink>
                </div>
              </li>
              <li className="relative group">
                <div className="pb-4">
                  <p className="cursor-pointer flex gap-2 justify-between items-center group-hover:border-b-[3px] pb-1 group-hover:border-b-[#258CCF] group-hover:font-bold group-hover:text-[#258CCF] transition-all duration-200 ease-in-out">
                    Programs{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </p>
                </div>
                <div className="absolute hidden group-hover:block w-[11rem] border bg-white rounded-md p-6 space-y-8  -left-6 font-[Mulish] z-20">
                  <NavLink
                    to="/programs/mentorship"
                    className="block hover:text-[#258CCF]"
                  >
                   Mentorship
                  </NavLink>
                  <NavLink
                    to="/programs/socialImpact"
                    className="block hover:text-[#258CCF]"
                  >
                    Social Impact
                  </NavLink>
                  <NavLink
                    to="/programs/community-building"
                    className="block hover:text-[#258CCF]"
                  >
                    Community Building
                  </NavLink>
                </div>
              </li>
              <li className="relative group">
                <div className="pb-4">
                  <p className="cursor-pointer flex gap-2 justify-between items-center group-hover:border-b-[3px] pb-1 group-hover:border-b-[#258CCF] group-hover:font-bold group-hover:text-[#258CCF] transition-all duration-200 ease-in-out">
                    Media{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </p>
                </div>
                <div className="absolute hidden group-hover:block w-[11rem] border bg-white rounded-md p-6 space-y-8  -left-6 font-[Mulish] z-20">
                  <NavLink
                    to="/media/news&Stories"
                    className="block hover:text-[#258CCF]"
                  >
                    News & Stories
                  </NavLink>
                  <NavLink
                    to="/media/gallery"
                    className="block hover:text-[#258CCF]"
                  >
                   Gallery
                  </NavLink>
                  <NavLink
                    to="/media/events"
                    className="block hover:text-[#258CCF]"
                  >
                  Events
                  </NavLink>
                </div>
              </li>
              <li className="relative group">
                <div className="pb-4">
                  <p className="cursor-pointer flex gap-2 justify-between items-center group-hover:border-b-[3px] pb-1 group-hover:border-b-[#258CCF] group-hover:font-bold group-hover:text-[#258CCF] transition-all duration-200 ease-in-out">
                    Join Us{" "}
                    <span className="font-semibold">
                      <IoMdArrowDropdown />
                    </span>
                  </p>
                </div>
                <div className="absolute hidden group-hover:block w-[11rem] border bg-white rounded-md p-6 space-y-8  -left-6 font-[Mulish] z-20">
                  <NavLink
                    to="/joinUs/contactUs"
                    className="block hover:text-[#258CCF]"
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="/joinUs/donate"
                    className="block hover:text-[#258CCF]"
                  >
                    Donate
                  </NavLink>
                  <NavLink
                    to="/joinUs/volunteer"
                    className="block hover:text-[#258CCF]"
                  >
                    Volunteer
                  </NavLink>
                </div>
              </li>
              
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
