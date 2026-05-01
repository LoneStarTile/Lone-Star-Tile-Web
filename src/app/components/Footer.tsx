import { useLocation, Link } from "react-router";
import { motion } from "motion/react";
import imgLogo from "figma:asset/68a37a034eedc37718aab8455cbb47758a75eaea.webp";

export default function Footer() {
  const location = useLocation();
  const isCommercial = location.pathname === "/commercial";
  const borderClass = isCommercial ? "" : "border-t-2 border-black";

  return (
    <footer className={`bg-[#fffae7] ${borderClass}`}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-8 md:pt-12 pb-2">
        {/* Desktop layout */}
        <div className="hidden md:flex justify-between gap-12">
          <div className="flex-shrink-0">
            <Link to="/" data-page-transition="curtain">
              <img
                src={imgLogo}
                alt="Lone Star Tile"
                className="h-[100px] w-auto object-contain"
              />
            </Link>
          </div>
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="switz-bold text-[22px] tracking-[0.44px] text-black leading-[48px]">contacts</p>
              <p className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px]">EMAIL: Lonestartile1@yahoo.com</p>
              <p className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px]">PHONE: (210)789-6361</p>
              <p className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px]">PHONE: (210)843-9852</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="switz-bold text-[22px] tracking-[0.44px] text-black leading-[48px]">company</p>
              <Link to="/residential" data-page-transition="curtain" className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px] hover:underline">Residential</Link>
              <Link to="/commercial" data-page-transition="curtain" className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px] hover:underline">Commercial</Link>
              <Link to="/about" data-page-transition="curtain" className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px] hover:underline">About</Link>
              <Link to="/contact" data-page-transition="curtain" className="switz-regular text-[14px] tracking-[0.28px] text-black leading-[28px] hover:underline">Contact</Link>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex gap-8">
          <div className="flex-1">
            <Link to="/" data-page-transition="curtain">
              <img
                src={imgLogo}
                alt="Lone Star Tile"
                className="h-[60px] w-auto object-contain mb-6"
              />
            </Link>
            <div className="mb-6 flex flex-col gap-1">
              <p className="switz-bold text-[14px] tracking-[0.28px] text-black leading-[28px]">contacts</p>
              <p className="switz-regular text-[12px] tracking-[0.24px] text-black leading-[20px] whitespace-nowrap">EMAIL: Lonestartile1@yahoo.com</p>
              <p className="switz-regular text-[12px] tracking-[0.24px] text-black leading-[20px] whitespace-nowrap">PHONE: (210)789-6361</p>
              <p className="switz-regular text-[12px] tracking-[0.24px] text-black leading-[20px] whitespace-nowrap">PHONE: (210)843-9852</p>
            </div>
          </div>
          <div className="mb-6 mr-[40px] flex-shrink-0">
            <p className="switz-bold text-[14px] tracking-[0.28px] text-black leading-[28px]">company</p>
            <Link to="/residential" data-page-transition="curtain" className="block switz-regular text-[12px] tracking-[0.24px] text-black leading-[28px]">Residential</Link>
            <Link to="/commercial" data-page-transition="curtain" className="block switz-regular text-[12px] tracking-[0.24px] text-black leading-[28px]">Commercial</Link>
            <Link to="/about" data-page-transition="curtain" className="block switz-regular text-[12px] tracking-[0.24px] text-black leading-[28px]">About</Link>
            <Link to="/contact" data-page-transition="curtain" className="block switz-regular text-[12px] tracking-[0.24px] text-black leading-[28px]">Contact</Link>
          </div>
        </div>

        {/* Copyright row */}
        <div className="flex items-center justify-between mt-12 md:mt-24">
          <p className="switz-regular text-[8px] md:text-[10px] tracking-[0.8px] md:tracking-[1px] text-black">© 2026 Lone Star Tile. All rights reserved</p>
          <p className="switz-regular text-[8px] tracking-[0.8px] text-black">CREATED BY HENRY NEFF</p>
        </div>
      </div>
    </footer>
  );
}