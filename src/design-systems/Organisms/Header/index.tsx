import Button from "@/design-systems/Atoms/Button";
import Tab from "@/design-systems/Atoms/Tab";
import { tabs } from "@/utils";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header_Wrp flex justify-between items-center bg-[#7E7E81]">
      <h1>Logo</h1>
      <Tab
        tabs={tabs}
        className="gap-3"
        inactiveClassName="bg-[#141414]"
        activeClassName="bg-white text-black rounded-xl p-5 outline-none"
      />

      <Button>Contact Us</Button>
    </div>
  );
};

export default Header;
