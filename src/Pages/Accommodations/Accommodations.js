
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { accomodationPropertiesFetch, accomodationSectionFetch } from './accomodationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { accomodationTable } from './accomodationSlice'

const Accommodations = () => {
    const accomodationSectionData = useSelector((state) => state.accomodations.accomodationsec);
    const accPropertiesData = useSelector((state) => state.accomodations.accomodationprop);
    const navigate = useNavigate();
    const dispatch = useDispatch()
const navigateFunction = (e)=>{
    e.preventDefault()
    navigate("../Table/Table.js", {state:{api:"accomodationTable"}})
}


    useEffect(() => {


        dispatch(accomodationSectionFetch())

        dispatch(accomodationPropertiesFetch())
    }, [])

    console.log("fhgjk",accomodationSectionData );
    return (
        <div>

            <div className="ml-[25px] flex flex-col flex-wrap gap-y-4 max-w-[1560px] pt-4 ">
                <h1 className="text-[30px] font-bold text-[#888c9b] pl-[40px]">BANNER SECTION</h1>
                <img className="rounded-[12px] max-w-[1450px] pl-[40px] relative" src="https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg" alt="img" />
                <h1 className="absolute bottom-[650px] font-medium left-[400px] text-[28px] text-white">Accommodations Page</h1>
                <p className="absolute bottom-[610px] left-[400px] text-[18px] text-white" >To Know more  <button onClick={(e)=>navigateFunction(e)}>Click Here</button>
                </p>
            </div>

            <div className="ml-[55px] flex flex-col flex-wrap gap-y-5 max-w-[90%] pt-10 pl-[11px]  ">
                <h1 className="text-[30px] text-[#888c9b] font-bold ">PAGE SECTIONS</h1>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-7   ">

                    {accomodationSectionData.length == 0 ? <h1 className="font-medium text-[30px] text-[#888c9b]"> </h1> : accomodationSectionData.map((sec,index) => {
                        return <>
                            <div className="bg-white min-h-[11rem] rounded-[10px] duration-150 hover:scale-105  ">
                                <img className="h-[160px] w-[100%] object-cover " src={index.section_image_url}></img>
                                <div className="flex flex-col items-center justify-center ">   <h2 className="py-[10px] font-bold text-[#888c9b] scale-9x-75">{index.section_title}</h2></div>

                            </div>


                        </>
                    })}




                </div>

            </div>

            <div className="ml-[55px] flex flex-col flex-wrap gap-y-5 max-w-[90%] pt-10 pl-[11px]  ">
                <h1 className="text-[30px] text-[#888c9b] font-bold ">PROPERTIES</h1>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-7   ">

                    {accPropertiesData.map((sec) => {
                        return <>
                            <div className="bg-white min-h-[11rem] rounded-[10px] duration-150 hover:scale-105  ">
                                <img className="h-[160px] w-[100%] object-cover " src={sec.content_image_urls}></img>
                                <div className="flex flex-col items-center justify-center ">   <h2 className="py-[10px] font-bold text-[#888c9b] scale-9x-75">{sec.property_name}</h2></div>

                            </div>


                        </>
                    })}




                </div>

            </div>

        </div>
    )
}

export default Accommodations
