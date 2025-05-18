import React from "react";
import Card from "@/design-systems/Molecules/Cards";
import { cardData, scrollspyItems } from "@/utils";
import ScrollspyNav from "@/design-systems/Molecules/ScrollspyNav";
import Typography from "@/design-systems/Atoms/Typography";
import { BlogTemplateProps } from "./interface";
import Image from "@/design-systems/Atoms/Image";

const BlogPageTemplate: React.FC<BlogTemplateProps> = ({
  stats,
  children,
  title = "The Rise of Artificial Intelligence in Healthcare",
  publicationDate = "21-05-2025",
  category = "Healthcare",
  readingTime = "10 mins",
  authorName = "Ritesh Sharma",
  heroImage,
  onShare,
  onSave,
}) => {
  const renderStats = () =>
    stats ? (
      <div className="flex gap-4 text-sm text-gray-500 dark:text-neutral-400">
        <div>❤️ {stats.likes}</div>
        <div>💬 {stats.comments}</div>
        <div>📤 {stats.shares}</div>
      </div>
    ) : null;

  return (
    <div className="flex flex-col gap-8 bg-white dark:bg-black text-black dark:text-white pb-8 w-full">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-b from-purple-200/30 to-white/80 dark:from-purple-700/30 dark:to-black/80 flex items-center justify-center w-full">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            height={100}
            width={100}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/30 to-white/80 dark:from-purple-700/30 dark:to-black/80"></div>
        )}
        <div className="relative z-10 text-center">
          <div className="bg-purple-600 text-white rounded-full px-6 py-2 mb-6 inline-block">
            Say something
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="mt-4 flex justify-center">{renderStats()}</div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto w-full px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Scrollspy Content */}
          <div
            className="w-full md:w-3/5 max-h-[700px] overflow-y-auto pr-4 scrollbar-hide"
            id="scrollspy-scrollable-parent-2"
          >
            <div id="scrollspy-2" className="space-y-10">
              {scrollspyItems.map((item) => (
                <div key={item.id} className="mb-8">
                  <h3
                    id={item.id}
                    className="text-xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2"
                  >
                    {item.title}
                  </h3>
                  <Typography size="paragraph" variant="regular" className="text-base text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    Artificial Intelligence (AI) has emerged as a transformative
                    force in the healthcare industry...
                  </Typography>

                  {item.children?.map((child) => (
                    <div
                      key={child.id}
                      className="mt-6 pl-4 border-l border-gray-200 dark:border-gray-800"
                    >
                      <h4 id={child.id} className="text-lg font-semibold">
                        {child.title}
                      </h4>
                      <Typography
                        size="paragraph"
                        variant="regular"
                        className=" text-gray-600 dark:text-gray-400 mt-2 leading-relaxed"
                      >
                        Artificial Intelligence (AI) has emerged as a
                        transformative force in the healthcare industry,
                        reshaping patient care, diagnostics, and research. In
                        this blog post, we explore the profound impact of AI in
                        healthcare, from revolutionizing diagnostic accuracy to
                        enhancing patient outcomes.
                      </Typography>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar & Scrollspy Navigation */}
          <aside className="w-full md:w-2/5 flex flex-col gap-6 sticky top-0 self-start">
            <div className="p-6 bg-gray-100 dark:bg-gray-900/30 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <InfoBlock label="Publication Date" value={publicationDate} />
                <InfoBlock label="Reading Time" value={readingTime} />
                <InfoBlock label="Category" value={category} />
                <InfoBlock label="Author Name" value={authorName} />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center mb-4">
                {renderStats()}
                <div className="flex gap-2">
                  <ActionButton label="Share" onClick={onShare} />
                  <ActionButton label="Save" onClick={onSave} />
                  {children && <div className="flex gap-2">{children}</div>}
                </div>
              </div>

              <Typography
                className="text-gray-600 dark:text-gray-400 mb-2"
                variant="condensed"
                size="h4"
              >
                Table of Contents
              </Typography>
              <div className="!bg-gray-100 dark:!bg-gray-900 rounded-xl px-6 py-4">
                <ScrollspyNav
                  items={scrollspyItems}
                  scrollspyId="scrollspy-2"
                  scrollParentId="scrollspy-scrollable-parent-2"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related News Section */}
      <div className="container mx-auto w-full px-4 mt-12">
        <Typography variant="regular" size="h3" className="mb-6">
          Similar News
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              layout="news"
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              updatedAt={card.updatedAt}
              className="border-0 !bg-gray-100 dark:!bg-gray-900/50 rounded-lg overflow-hidden"
              stats={{ likes: 245, comments: 50, shares: 20 }}
              buttonText="View Blog"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <Typography
      className="text-gray-600 dark:text-gray-400"
      variant="condensed"
      size="h4"
    >
      {label}
    </Typography>
    <Typography
      className="text-black dark:text-white"
      variant="regular"
      size="h4"
    >
      {value}
    </Typography>
  </div>
);

const ActionButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
  >
    {label}
  </button>
);

export default BlogPageTemplate;
