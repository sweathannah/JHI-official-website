import React from 'react';
import 'styles./Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-contact">
        <p>Contact us: +123 456 789 | info@ngo.org</p>
      </div>
      <div className="header-social">
        {/* Add icons or text for social media here */}
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </header>
  );
};

export default Header;
