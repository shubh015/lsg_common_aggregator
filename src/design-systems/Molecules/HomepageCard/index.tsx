// import { FaHeart, FaComment } from "react-icons/fa";

import { Fragment } from "react";
import Card from "../Cards";
import { cardData } from "@/utils";

const HomepageCard : React.FC = () => {
  return (
    <Fragment>
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          updatedAt={card.updatedAt}
          className="border-0 border-b-1 !rounded-none"
        >
          <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            {/* <FaHeart /> Like */}
          </button>
          <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            {/* <FaComment /> Comment */}
          </button>
        </Card>
      ))}
      
      </Fragment>
  );
};

export default HomepageCard;