import HomepageCard from "@/design-systems/Molecules/HomepageCard";
import Banner from "@/design-systems/Organisms/Banner";
import BlogCategories from "@/design-systems/Organisms/BlogCategories";
// import BlogOverview from "@/design-systems/Organisms/BlogOverview.tsx";
import Features from "@/design-systems/Organisms/Features";
import React from "react";

const HomePageTemplate: React.FC = () => {
  return (
    <>
      <Banner />
      <Features />
      <BlogCategories />
      {/* <BlogOverview /> */}

      <HomepageCard />
    </>
  );
};

export default HomePageTemplate;
