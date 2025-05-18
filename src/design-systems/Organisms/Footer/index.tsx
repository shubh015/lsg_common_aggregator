// import React from "react";
// import Typography from "@/design-systems/Atoms/Typography";

// const footerData = [
//   {
//     title: "Home",
//     links: ["Features", "Blogs", "Resources", "Testimonials", "Contact Us", "Newsletter"],
//   },
//   {
//     title: "News",
//     links: ["Trending Stories", "Featured Videos", "Technology", "Health", "Politics", "Environment"],
//   },
//   {
//     title: "Blogs",
//     links: ["Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy", "Biohacking"],
//   },
//   {
//     title: "Podcasts",
//     links: ["AI Revolution", "TechTalk AI", "AI Conversations"],
//   },
//   // Skip the "Resources" block as you instructed
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-4 md:px-16">
//       <div className="footer_wrp grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
//         {footerData.map((section, index) => (
//           <ul key={index} className="space-y-2">
//             <li>
//               <Typography variant="condensed" size="h4" className="mb-2">
//                 {section.title}
//               </Typography>
//             </li>
//             {section.links.map((link, idx) => (
//               <li key={idx} className="text-[#535353] hover:text-white transition-colors cursor-pointer">
                
//                 <Typography size="paragraph" className="!text-[#535353]" variant="regular">{link}</Typography>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>

//       <div className="mt-10 border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
//         <div className="mb-2 md:mb-0">
//           <span className="mr-4 cursor-pointer hover:underline">Terms & Conditions</span>
//           <span className="cursor-pointer hover:underline">Privacy Policy</span>
//         </div>
//         <p>© 2024 FutureTech. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import Image from "@/design-systems/Atoms/Image";
import logo from "../../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} width={80} height={80} alt="logo" />
              <span className="text-xl font-semibold text-white">LokSevaGyaan</span>
            </div>
            <p className="text-gray-400 text-sm">
              Providing valuable insights and information about government services and initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Help Center", "Privacy Policy", "Terms of Service", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>123 Government Plaza</p>
              <p>New Delhi, India</p>
              <p>Email: info@loksevagyaan.com</p>
              <p>Phone: +91 123 456 7890</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} LokSevaGyaan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;