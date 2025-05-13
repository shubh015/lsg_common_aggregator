import Tab from "@/design-systems/Atoms/Tab";
import { blogOverview } from "@/utils";
import React from "react";

const BlogOverview: React.FC = () => {
  return <div>
    <Tab tabs={blogOverview} className="" activeClassName="" />
  </div>;
};

export default BlogOverview;
