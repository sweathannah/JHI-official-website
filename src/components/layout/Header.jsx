import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

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
        { label: 'Events', path: '/media/events' },
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
    <header className="font-[Montserrat]">
      {/* Top Header */}
      <section className="bg-[#258CCF] px-[6.25rem] py-[0.938rem] lg:flex hidden justify-between">
        <div className="flex items-center text-[#FFFFFF] text-[0.75rem] space-x-[0.625rem]">
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
        className={`lg:hidden fixed w-[80%] inset-0 bg-white z-20 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
          <img src="/images/close_icon.svg" alt="Close" />
        </button>
        <nav className="p-8">
          <ul className="space-y-6 text-lg text-[#333333]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path || '#'} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
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
            <ul className="flex space-x-[2.6rem] text-[1rem] text-[#333333] font-[400]">
              {navLinks.map((link, index) =>
                link.subMenu ? (
                  <li key={index} className="relative group">
                    <p className="cursor-pointer flex items-center gap-2 group-hover:text-[#258CCF] transition-all">
                      {link.label} <IoMdArrowDropdown />
                    </p>
                    {renderDropdown(link.subMenu)}
                  </li>
                ) : (
                  <li key={index}>
                    <NavLink to={link.path} className="hover:text-[#258CCF]">
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
