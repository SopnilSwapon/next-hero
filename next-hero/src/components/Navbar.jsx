import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex gap-5 text-white justify-between bg-green-500 p-2 rounded">
          <h2>Next-Hero</h2>
          <ul className="flex gap-5 justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Sevices</li>
            <li>Contact</li>
          </ul>
        </nav>
    );
};

export default Navbar;