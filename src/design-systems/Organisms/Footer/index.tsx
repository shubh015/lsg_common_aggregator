import React from "react";
import Typography from "@/design-systems/Atoms/Typography";

const footerData = [
  {
    title: "Home",
    links: ["Features", "Blogs", "Resources", "Testimonials", "Contact Us", "Newsletter"],
  },
  {
    title: "News",
    links: ["Trending Stories", "Featured Videos", "Technology", "Health", "Politics", "Environment"],
  },
  {
    title: "Blogs",
    links: ["Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy", "Biohacking"],
  },
  {
    title: "Podcasts",
    links: ["AI Revolution", "TechTalk AI", "AI Conversations"],
  },
  // Skip the "Resources" block as you instructed
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
      <div className="footer_wrp grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {footerData.map((section, index) => (
          <ul key={index} className="space-y-2">
            <li>
              <Typography variant="condensed" size="h4" className="mb-2">
                {section.title}
              </Typography>
            </li>
            {section.links.map((link, idx) => (
              <li key={idx} className="text-[#535353] hover:text-white transition-colors cursor-pointer">
                
                <Typography size="paragraph" className="!text-[#535353]" variant="regular">{link}</Typography>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="mt-10 border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <div className="mb-2 md:mb-0">
          <span className="mr-4 cursor-pointer hover:underline">Terms & Conditions</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
        </div>
        <p>© 2024 FutureTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
