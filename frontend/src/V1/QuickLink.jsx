import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-200 text-sm text-gray-800 pt-16 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo */}
        <div>
          <h1 className="font-bold text-xl">
            <span className="inline-block w-6 h-6 rounded-full bg-black text-white mr-2 text-center leading-6 font-bold">●</span>
            
          </h1>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-medium text-gray-500 mb-3">Product</h4>
          <ul className="space-y-2">
            <li><a href="#">Components</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Feature requests</a></li>
            <li><a href="#">React authentication</a></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h4 className="font-medium text-gray-500 mb-3">Developers</h4>
          <ul className="space-y-2">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Discord server</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Glossary</a></li>
            <li><a href="#">Terms of Engagement</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-medium text-gray-500 mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-medium text-gray-500 mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Data Processing Agreement</a></li>
            <li><a href="#">Do Not Sell/Share My Info</a></li>
            <li><a href="#">Cookie manager</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <p className="text-gray-500">&copy; 2025 .</p>
        <div className="flex gap-4 text-gray-600 text-lg">
          <FaXTwitter className="hover:text-black" />
          <FaLinkedin className="hover:text-black" />
          <FaDiscord className="hover:text-black" />
          <FaGithub className="hover:text-black" />
          <FaYoutube className="hover:text-black" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
