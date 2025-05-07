import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Test Home Data',
}

const HomePage: React.FC = () => {
  return (
   <div className='text-amber-300'>
    Welcome
   </div>
    
  );
}

export default HomePage