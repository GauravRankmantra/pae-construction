"use client";
import { Facebook, Phone, Mail } from 'lucide-react';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Name */}
        <div>
          <img src="/images/logo.svg" alt="PAE Construction" className="h-16 mb-3" />
          <h2 className="text-xl font-semibold">PAE CONSTRUCTION INDIAN OPC PVT LTD.</h2>
          <p className="text-sm mt-2">Building your dreams with strength and integrity.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">7/2/1 Convent Road, Near SBI Main Branch<br />Dehradun, Uttarakhand-248001</p>
          <p className="mt-2 text-sm">
            <Phone className="inline mr-2" size={16} />
            0135-4099051, 7895872139, 9412143346
          </p>
          <p className="text-sm mt-2">
            <Mail className="inline mr-2" size={16} />
            <a href="mailto:paeconstructionindian@gmail.com">paeconstructionindian@gmail.com</a>
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/pae.construction" target="_blank" rel="noopener noreferrer">@pae.construction</a>
            <a href="https://facebook.com/constructionpae" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} PAE Construction Indian OPC Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
