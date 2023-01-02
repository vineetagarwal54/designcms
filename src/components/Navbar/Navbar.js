import React, { useState } from 'react'
import LinearScaleIcon from '@mui/icons-material/LinearScale';

const Navbar = ({ toggle }) => {

    const [dropdown, setDropdown] = useState(false);

    const [activitiesToggle, setActivitiesToggle] = useState(false);


    const handleActivities = () =>{
       setActivitiesToggle(!activitiesToggle)

       setDropdown(false)
    }

    const handleDropdown = () =>{
    setDropdown(!dropdown)
    setActivitiesToggle(false)

    } 

    return (
        <div className="h-[73px] bg-[#7952b3] flex  items-center">

            <div className="flex  items-center justify-between  w-[100%] pr-[50px]">

                 <div className={` bg-slate-300  w-[230px] ${!toggle ? "hidden" : "block"} `}>
                  
                  <span className={" text-4xl font-bold text-white"} >loper</span>
                  </div> 

                

                {/* search */}
                <div className="flex items-center border-slate-50 px-[4px] rounded-lg  w-[74rem] ml-[34px] bg-white">
                    <i className="fa-solid fa-magnifying-glass text-slate-200 px-[6px]"></i>
                    <input className="border-none focus:outline-none mx-3 w-[98%] h-[40px] py-[8px]  " type="text" placeholder="Search" />

                </div>

                {/* items */}
                <div className="flex  w-[350px] gap-8 ">
                    <div className="flex items-center  " onClick={handleActivities}>
                        <LinearScaleIcon className="text-white" />

                    </div>

                    { activitiesToggle && <div className="absolute top-[80px]  left-[1300px] py-[12px] 
                   w-[380px] flex flex-col bg-white duration-400 z-10
                   before:content-[''] before:absolute before:top-[-5px] before:right-[28px] before:w-[20px] before:h-[20px] before: bg-[#fff] before:rotate-[45deg]">

                        <div className=" py-2">
                            <span className="pl-4  text-[#a6abbd] font-bold text-[18px]">Activities
                                <span className="pl-2">(2)</span>
                            </span>

                        </div>

                        <div className="flex pl-4 py-4 border border-t-slate-100">
                            <img className="w-[50px] h-[50px] rounded-[50%]" src="https://uselooper.com/assets/images/avatars/profile.jpg" alt="img" />

                            <div className="pl-4">
                                <p>Jeffrey Wells  created a schedule</p>
                                <p>just Now</p>
                            </div>

                        </div>

                        <div className="flex pl-4 py-4 border border-t-slate-100">
                            <img className="w-[50px] h-[50px] rounded-[50%]" src="https://uselooper.com/assets/images/avatars/profile.jpg" alt="img" />

                            <div className="pl-4">
                                <p>Jeffrey Wells  created a schedule</p>
                                <p>3 hours ago</p>
                            </div>

                        </div>
                        <div className="flex pl-4 py-4 border border-t-slate-100">
                            <img className="w-[50px] h-[50px] rounded-[50%]" src="https://uselooper.com/assets/images/avatars/profile.jpg" alt="img" />

                            <div className="pl-4">
                                <p>Jeffrey Wells  created a schedule</p>
                                <p>5 hours ago</p>
                            </div>

                        </div>

                        <div className="flex pl-4 py-4 border border-t-slate-50">
                            <img className="w-[50px] h-[50px] rounded-[50%]" src="https://uselooper.com/assets/images/avatars/profile.jpg" alt="img" />

                            <div className="pl-4">
                                <p>Jeffrey Wells  created a schedule</p>
                                <p>1 day ago</p>
                            </div>

                        </div>

                        <div className="flex items-center justify-center py-1 relative top-1">
                            <span className="text-[#7952b3] text-[23px]">All Activities <i className="fa-solid fa-arrow-right-long relative top-[7px]"></i></span>
                            </div>

                    </div>}


                    {/* profile */}
                    <div className="flex  " onClick={handleDropdown}>
                        <img className="w-[50px] h-[50px] rounded-[50%]" src="https://uselooper.com/assets/images/avatars/profile.jpg" alt="img"></img>

                        <div className="ml-4">
                            <h3 className="text-white font-bold">Beni Arisandi</h3>
                            <p className="text-white">Marketing Manager</p>

                        </div>

                    </div>


                    {  dropdown && <div className="absolute top-[80px]  left-[1700px] py-[20px] 
                   w-[200px] flex flex-col  bg-white rounded-lg duration-400 z-10
                   before:content-[' '] before:absolute before:top-[-5px] before:right-[28px] before:w-[20px] before:h-[20px] before: bg-[#fff] before:rotate-[45deg]">
                        <ul className="hover:text-[white]">
                            <li className="py-2  hover:bg-[#7952b3] hover:text-[white]"> <i className="fa-solid fa-user ml-4 text-[#a6abbd] "></i><span className="ml-4 text-[#191927] ">Profile</span>  </li>
                            <li className="py-2 hover:bg-[#7952b3] "> <i className="fa-solid fa-right-from-bracket ml-4 text-[#a6abbd] hover:text-[white]"></i><span className="ml-4 text-[#191927] hover:text-[white]">Logout</span>  </li>
                            <hr className=" w-[200px] my-[9px]" />
                            <li className="py-2 pl-[20px] hover:bg-[#7952b3] text-[18px] text-[#191927] hover:text-[white]"> Help Center</li>
                            <li className="py-2 pl-[20px] hover:bg-[#7952b3] text-[18px] text-[#191927] hover:text-[white]"> Ask forum </li>
                            <li className="py-2 pl-[20px] hover:bg-[#7952b3] text-[18px] text-[#191927] hover:text-[white]">Keyboard Shortcuts</li>

                        </ul>
                    </div>}

                </div>


            </div>

        </div>
    )
}

export default Navbar
