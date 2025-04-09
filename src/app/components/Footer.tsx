// src/app/components/Footer.tsx
"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-900 to-[#0D1224] text-gray-200">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Blurb */}
        <div>
          <Link href="/">
            <Image
              src="/Logo-v1-white.png"
              alt="Abdul Basit Logo"
              width={120}
              height={120}
            />
          </Link>
          <p className="mt-4 text-gray-400">
            Full Stack Developer passionate about crafting beautiful and performant web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "About", to: "about" },
              { label: "Experience", to: "experience" },
              { label: "Skills", to: "skills" },
              { label: "Projects", to: "projects" },
              { label: "Contact", to: "contact" },
            ].map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-pink-500 transition-colors"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-pink-500 transition-colors"
            >
              {personalData.email}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={`tel:${personalData.phone}`}
              className="hover:text-pink-500 transition-colors"
            >
              {personalData.phone}
            </a>
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href={personalData.github} target="_blank">
              <FaGithub size={24} className="hover:text-pink-500 transition-colors" />
            </Link>
            <Link href={personalData.linkedIn} target="_blank">
              <FaLinkedin size={24} className="hover:text-pink-500 transition-colors" />
            </Link>
            <Link href={personalData.twitter} target="_blank">
              <FaTwitter size={24} className="hover:text-pink-500 transition-colors" />
            </Link>
            <Link href={personalData.Instagram} target="_blank">
              <FaInstagram size={24} className="hover:text-pink-500 transition-colors" />
            </Link>
            <Link href={personalData.facebook} target="_blank">
              <FaFacebook size={24} className="hover:text-pink-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Abdul Basit. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
