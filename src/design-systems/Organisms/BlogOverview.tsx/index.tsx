import Button from "@/design-systems/Atoms/Button";
import Tab from "@/design-systems/Atoms/Tab";
import Typography from "@/design-systems/Atoms/Typography";
import { blogOverview } from "@/utils";
import React from "react";

const BlogOverview: React.FC = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-between px-0">
        <div className="flex flex-col items-start">

        <Typography
          className="text-center !font-bold text-white lmd:text-left bg-[#333333] py-2 px-4 rounded-sm"
          size="h6"
          variant="regular"
          >
          A Knowledge Treasure Trove
        </Typography>
        <Typography
          className="text-center !font-bold text-white lmd:text-left"
          size="h2"
          variant="regular"
          >
          Explore FutureTech&apos;s In-Depth Blog Posts
        </Typography>
          </div>
        <Button>All Blogs</Button>
      </div>
      <Tab
        tabs={blogOverview}
        className="gap-4 pl justify-center"
        inactiveClassName="bg-[#141414]"
        activeClassName="bg-[#141414] text-black rounded-xl p-3 border-2 outline-none border-[#7E7E81] text-white "
      />
    </div>
  );
};

export default BlogOverview;
