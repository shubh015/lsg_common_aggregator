import HomepageCard from "@/design-systems/Molecules/HomepageCard";
import Banner from "@/design-systems/Organisms/Banner";
import BlogOverview from "@/design-systems/Organisms/BlogOverview.tsx";
import Footer from "@/design-systems/Organisms/Footer";
import Header from "@/design-systems/Organisms/Header";
import React from "react";

const HomePageTemplate: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container-96  mx-auto">
        <Banner />
        <BlogOverview />
      </div>
        <HomepageCard />
        <Footer/>
    </>
  );
};

export default HomePageTemplate;
