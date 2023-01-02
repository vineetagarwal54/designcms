import React, { useState, useEffect } from 'react'
import HouseIcon from '@mui/icons-material/House';
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';
// import { getPagesApi } from '../../redux/pagesSlice';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesApi } from '../../redux/pagesSlice';




const Sidebar = ({ setToggle, toggle }) => {
    const dispatch = useDispatch()
 const pagesData  = useSelector((state) => state.page.pages);
//   console.log(useSelector((state) => state))

    useEffect(() => {
        dispatch( getPagesApi())
      }, [])
    const [submenu, setSubMenu] = useState(false)
    const [submenu2, setSubMenu2] = useState(false)



   



   


    const arr = [
        {
            title: "Destinations"
        },
        {
            title: "Accomodation"
        },
        {
            title: "Home"
        },
        {
            title: "Plan Your Trip"
        },
        {
            title: "Explore"
        }

    ]

    return (

        // sidebar....
        <div className="  min-h-screen  ">


            {/* top */}

            <div className={` ${toggle ? "py-3" : "py-5"}  flex items-center gap-5 bg-[#7952b3] border-none`}>
                <i className="fa-sharp fa-solid fa-bars ml-7 text-2xl text-white" onClick={() => setToggle(!toggle)}></i>
                {toggle ? <img className=" h-[48px] w-[100px]" src="http://13.234.241.237:7003/assets/mpt-logo.c4a6617d.png" alt="img"></img> : ""}

            </div>


            {/* center */}

            <div className="pt-5  ">

                <ul className="m-0  p-0" >

                    {pagesData && pagesData.map((item) => {

                        return <>
                          <Link to={`/${item.page_title}`}> <li className="flex items-center py-3 gap-[22px] hover:bg-[#7952b3]"  >
                                <i className="fa-solid fa-house text-slate-400 ml-[21px] text-[20px]"></i>
                                <span className={`${!toggle ? "hidden" : "text-[20px]"}`}>{item.page_title}</span>
                            </li>
                            </Link> 

                        </>


                    })}





                </ul>
            </div>



            {/* mobile menu  */}





        </div>
    )
}

export default Sidebar
