// import { FaHeart, FaComment } from "react-icons/fa";

import { Fragment } from "react";
import Card from "../Cards";
import { cardData } from "@/utils";

const HomepageCard: React.FC = () => {
  return (
    <Fragment>
      <div className="flex flex-col">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            updatedAt={card.updatedAt}
            className="border-0 border-b-1 !rounded-none"
            stats={{ likes: 24500, comments: 50, shares: 20 }}
            buttonText="View Blog"
          >
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default HomepageCard;
