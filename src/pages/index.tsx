import Header from '@/components/Header'
import HomeCenterSection from '@/components/HomeCenterSection'
import LeftSidebar from '@/components/LeftSidebar';
import Sidebar from '@/components/Sidebar'

function PageTest() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1 overflow-x-auto py-4 bg-[#F0F2F5]'>
        <Sidebar className='flex-none w-[20%]' />
        <HomeCenterSection className=' flex flex-col justify-between w-[60%] ' />
        <LeftSidebar className='flex-none  w-[20%] ' />
      </div>
    </div>
  );
}

export default PageTest;
