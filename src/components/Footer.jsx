import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 mt-10 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text */}
        <p className="mb-4 md:mb-0 text-center md:text-left">
          Built with ❤️ using React, Tailwind & Leaflet | Data from USGS
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/hemachandrakalluru/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://github.com/Kalluru-HemaChandraReddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/hemachandrakalluru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.youtube.com/@hemachandrareddy2269"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
