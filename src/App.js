import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar"
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"



import { useDispatch } from 'react-redux'
import Accommodations from "./Pages/Accommodations/Accommodations"
import Destinations from "./Pages/Destinations/Destinations"
import Explore from "./Pages/Explore/Explore"
import PlanYourTrip from "./Pages/Plan Your Trip/PlanYourTrip"
import Home from "./Pages/Home/Home"
import Table from "./Pages/Table/Table"

function App() {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(true);


  //  


  return (


    <div className=" flex max-w-[100%]">

      <BrowserRouter>

        <div className={` ${toggle ? "w-[15%] " : "w-20"} `}>


          <Sidebar setToggle={setToggle} toggle={toggle} />
        </div>


        {/* homecontainer */}
        <div className={` bg-slate-100 ${toggle ? 'w-[85%]' : "w-[100%]"} `}>
          <Navbar />
          <Routes >
            <Route path="/Accommodations" element={<Accommodations />}></Route>
            <Route path="/Explore" element={<Explore />}></Route>
            <Route path="/Destinations" element={<Destinations />}></Route>
            <Route path="/Plan Your Trip" element={<PlanYourTrip />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/table" element={<Table />}></Route>


          </Routes>
          {/* <Routes>
            <Route path='/dashboard' element={<Dashboard/>}>   </Route>

          </Routes> */}
        </div>
      </BrowserRouter>

    </div>

  );
}

export default App;
