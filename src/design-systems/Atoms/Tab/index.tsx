'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TabProps } from './interface';

const Tab: React.FC<TabProps> = ({
  tabs,
  className = '',
  activeClassName = 'text-blue-600 border-b-2 border-blue-600',
  inactiveClassName = 'text-gray-500 hover:text-blue-600',
}) => {
  const pathname = usePathname();

  return (
    <div className={`flex space-x-4', ${className} `}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
            <Link
            key={tab.href}
            href={tab.href}
            className={`
              'text-sm font-medium transition duration-150',
              ${isActive} ? ${activeClassName} : ${inactiveClassName},
              tab.className 
            `}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Tab;
