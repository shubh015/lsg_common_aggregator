import Image from "@/design-systems/Atoms/Image";
import React from "react";
import banner_01 from "../../../assets/images/banner_01.png";

const Banner: React.FC = () => {
  return (
    <div className="banner_wrp flex">
      <div className="bnr_left">
        <h4>Your Journey to Tomorrow Begins Here</h4>
        <h1>Explore the Frontiers of Artificial Intelligence</h1>
        <h6>
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future. Join us on this visionary expedition into the heart of AI.
        </h6>
      </div>
      <div className="bnr_right">
        <Image
          ImageclassName="rounded-full relative"
          alt=""
          className="!h-full !w-full"
          height={1000}
          src={banner_01 || ""}
          width={1000}
        />
      </div>
    </div>
  );
};

export default Banner;
