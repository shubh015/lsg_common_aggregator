import HomePageTemplate from "@/design-systems/Templates/HomePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Test Home Data",
};

const HomePage: React.FC = () => {
  return (
    <>
      <HomePageTemplate />
    </>
  );
};

export default HomePage;
