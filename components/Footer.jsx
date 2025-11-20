import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center space-y-4">
        {/* First Row: Name and Professional Title */}
        <div>
          <h2 className="text-xl font-bold">Nafis Abrar Ahmed</h2>
          <p className="text-sm">Front-End Developer</p>
        </div>

        {/* Second Row: Social Links */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/nafis0x"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nafis-abrar-ahmed-adaan-7600a720a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
