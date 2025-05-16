// import Image from "@/design-systems/Atoms/Image";
import React from "react";
// import banner_01 from "../../../assets/images/banner_01.png";
import Typography from "@/design-systems/Atoms/Typography";

const Banner: React.FC = () => {
  return (
    <div className="banner_wrp flex my-20">
      <div className="bnr_left flex flex-col gap-y-2.5 w-2/4">
        <Typography size="h6" variant="condensed" className="!text-[#525252]">
          Your Journey to Tomorrow Begins Here
        </Typography>
        <Typography variant="condensed" size="h1">
          Explore the Frontiers of Artificial Intelligence
        </Typography>
        <Typography variant="regular" size="paragraph" className="!text-[#525252]">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future. Join us on this visionary expedition into the heart of AI.
        </Typography>
      </div>
      <div className="bnr_right">
        {/* <Image
          ImageclassName="rounded-full relative"
          alt=""
          className="!h-full !w-full"
          height={1000}
          src={banner_01 || ""}
          width={1000}
        /> */}
      </div>
    </div>
  );
};

export default Banner;
