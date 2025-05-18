"use client"
import React, { useEffect, useState } from "react";
import { PiDotDuotone } from "react-icons/pi";

interface ScrollspyItem {
  id: string;
  title: string;
  children?: ScrollspyItem[];
}

interface Props {
  items: ScrollspyItem[];
  scrollspyId: string;
  scrollParentId: string;
}

const ScrollspyNav: React.FC<Props> = ({ items, scrollParentId }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollableParent = document.getElementById(scrollParentId);
      if (!scrollableParent) return;
      
      const scrollPosition = scrollableParent.scrollTop;
      
      // Find which section is currently visible
      const sections = items.flatMap(item => [
        document.getElementById(item.id),
        ...(item.children?.map(child => document.getElementById(child.id)) || [])
      ]).filter(Boolean) as HTMLElement[];
      
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 100 && 
            scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveItem(section.id);
          break;
        }
      }
    };
    
    const scrollParent = document.getElementById(scrollParentId);
    if (scrollParent) {
      scrollParent.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }
    
    return () => {
      if (scrollParent) {
        scrollParent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [items, scrollParentId]);

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block py-1.5 text-sm font-medium transition-colors duration-200 ${
              activeItem === item.id 
                ? "text-blue-500 dark:text-blue-400" 
                : "text-gray-200 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300"
            }`}
          >
            {item.title}
          </a>
          {item.children && (
            <ul className="ml-4 space-y-1 mt-1 border-l border-gray-700 pl-2">
              {item.children.map((child) => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(child.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-1 py-1 text-sm transition-colors duration-200 ${
                      activeItem === child.id 
                        ? "text-blue-500 dark:text-blue-400" 
                        : "text-gray-300 hover:text-blue-400 dark:text-gray-500 dark:hover:text-blue-300"
                    }`}
                  >
                    <PiDotDuotone className="text-lg" />
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ScrollspyNav;