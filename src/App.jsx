import './App.css'
import { RevenueCard } from './componenets/RevenueCard';
import { Navbar } from './componenets/Navbar';
import { Sidebar } from './componenets/Sidebar';

function App() {
  return (
    <>
      <div className="flex">
        <div className="hidden z-30 lg:flex">
          <Sidebar></Sidebar>
        </div>

        <div className='w-full'>
          <div className="pb-8" ><Navbar></Navbar></div>

          <div className='font-semibold text-xl pb-3 pl-5' >
            Overview
          </div>

          <div className="grid grid-cols-1 px-5 gap-5 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2">

            <RevenueCard title={"Amount Pending"} amount={"93,312.20"} orderCount={"13"}></RevenueCard>
            <RevenueCard title={"Amount Pending"} amount={"93,312.20"} orderCount={"13"}></RevenueCard>
            <RevenueCard title={"Amount Pending"} amount={"93,312.20"} orderCount={"13"}></RevenueCard>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
