import * as React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="relative flex flex-col items-center justify-start w-full bg-cover bg-center bg-blue-950"
    >
      <div className="flex flex-col w-[80%]">
        <div className="flex w-full min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap items-center mt-24 w-full max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          {/* Logo Section */}
          <div className="flex flex-col w-[30%] items-center gap-5 mr-20">
            <img src="/logo.png" alt="Company Logo" className="w-10" />
            <div className="flex gap-4 mt-4">
              <FaFacebookF size={24} className="text-white" />
              <FaTwitter size={24} className="text-white" />
              <FaLinkedinIn size={24} className="text-white" />
            </div>
          </div>
          
          {/* Text Columns Section */}
          <div className="flex gap-20 justify-around mt-1.5 max-md:max-w-full">
            <div className="flex justify-between gap-10 max-md:flex-col">
              {/* Column 1 */}
              <div className="flex flex-col max-md:w-full">
                <div className="text-lg font-medium text-white">
                  <div className="text-sm text-zinc-400">Company</div>
                  <div className="mt-6">Home</div>
                  <div className="mt-7">About</div>
                  <div className="mt-7">Contact</div>
                </div>
              </div>
              {/* Column 2 */}
              <div className="flex flex-col max-md:w-full">
                <div className="text-lg font-medium text-white">
                  <div className="text-sm text-zinc-400">Explore</div>
                  <div className="mt-6">Projects</div>
                  <div className="mt-7">Research</div>
                  <div className="mt-7">Outreach</div>
                </div>
              </div>
              {/* Column 3 */}
              <div className="flex flex-col max-md:w-full">
                <div className="text-lg font-medium text-white">
                  <div className="text-sm text-zinc-400">Resources</div>
                  <div className="mt-6">Blog</div>
                  <div className="mt-7">Publications</div>
                  <div className="mt-7">Privacy Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between mt-28 w-full text-sm text-zinc-500 max-md:mt-10">
          <div className="mt-11">
            2024 © All rights reserved DemicsTech
          </div>
          <div className="flex gap-4">
            <FaFacebookF size={24} className="text-zinc-500" />
            <FaTwitter size={24} className="text-zinc-500" />
            <FaLinkedinIn size={24} className="text-zinc-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
