import Banner from '@/design-systems/Organisms/Banner'
import BlogOverview from '@/design-systems/Organisms/BlogOverview.tsx'
import Header from '@/design-systems/Organisms/Header'
import React from 'react'

const HomePageTemplate: React.FC = () => {
  return (
    <div className=''>
        <Header/>
        <Banner/>
        <BlogOverview/>
    </div>
  )
}

export default HomePageTemplate