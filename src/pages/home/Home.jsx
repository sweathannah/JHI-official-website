const Home = () => {
  return (
    <div className="font-[Montserrat]">
      <header>
        <section className="bg-[#258CCF] px-[6.25rem] py-[0.938rem] lg:flex hidden flex-row flex-wrap justify-between space-y-2">
          <div className="flex flex-row items-center text-[#FFFFFF] font-[400] text-[0.75rem] space-x-[0.625rem]">
            <a href="tel:+2348179969112">
              <img src="./Assets/Images/telephone_icon.svg" alt="telephone_icon" />
            </a>
            <a href="tel:+2347087070523">
              <img src="./Assets/Images/whatsapp_icon.svg" alt="whatsapp_icon" />
            </a>
            <a href="tel:+2348179969112" className="w-fit">
              +234-817-996-9112 /
            </a>
            <a href="tel:+234-708-707-0523">
              +234-708-707-0523
            </a>
          </div>
          <div className="flex flex-row text-[#fff] space-x-[1.25rem]">
            <a href="https://x.com/jhinitiative01?s=21" className="flex flex-row space-x-[0.5rem] items-center">
              <img src="./Assets/Images/x_icon.svg" alt="X icon" className="w-[0.64rem]" />
              <span>@JHinitiative01</span>
            </a>
            <a href="https://www.facebook.com/NYP2023?mibextid=LQQJ4d" className="flex flex-row space-x-[0.5rem] items-center">
              <img src="./Assets/Images/facebook_icon.svg" alt="Facebook icon" />
              <span>Jimoh Habibullahi Initiatives</span>
            </a>
            <a href="https://www.instagram.com/jimohhabibullahi_initiative?igsh=czk2MTVkc3VubDgy&utm_source=qr" className="flex flex-row space-x-[0.5rem] items-center">
              <img src="./Assets/Images/instagram.svg" alt="Instagram icon" />
              <span>jimohhabibullahi_initiative</span>
            </a>
          </div>
        </section>

        {/* Mobile Navbar */}
        <div id="mobileMenu" className="lg:hidden fixed inset-0 bg-white z-20 transform -translate-x-full transition-transform duration-300">
          {/* Close Button (X icon) */}
          <button id="closeMenuButton" className="absolute top-4 right-4">
            <img src="./Assets/Images/close_icon.svg" alt="Close Icon" />
          </button>
          <nav className="p-8">
            <ul className="text-[#333333] text-lg space-y-6">
              <li><a href="./index.html" className="nav-link">Home</a></li>
              <li><a href="./about.html" className="nav-link">About Us</a></li>
              <li><a href="./programs.html" className="nav-link">Programs</a></li>
              <li><a href="./media.html" className="nav-link">Media</a></li>
              <li><a href="./join.html" className="nav-link">Join Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Header with Logo and Menu Icon */}
        <section className="lg:px-[6.25rem] px-[1rem] py-[1.6rem] bg-white flex items-center justify-between">
          <div className="flex flex-row items-center lg:w-[12rem] w-full">
            <img src="./Assets/Images/jhi_logo.svg" alt="JHI logo" className="w-[11rem] z-10" />
            <button id="menuButton" className="lg:hidden ml-auto">
              <img src="./Assets/Images/menu_icon.svg" alt="Menu Icon" className="w-8" />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="lg:flex hidden">
            <nav>
              <ul className="font-[400] text-[1rem] text-[#333333] flex flex-row space-x-[2.6rem]">
                <li><a href="./index.html" className="nav-link">Home</a></li>
                <li><a href="./about.html" className="nav-link">About Us</a></li>
                <li><a href="./programs.html" className="nav-link">Programs</a></li>
                <li><a href="./media.html" className="nav-link">Media</a></li>
                <li><a href="./join.html" className="nav-link">Join Us</a></li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="w-[100vw] h-[100vh] bg-cover bg-no-repeat" style={{ backgroundImage: 'url(./Assets/Images/header_background_Image.jpg)' }}>
        </section>
      </header>
    </div>
  );
};

export default Home;