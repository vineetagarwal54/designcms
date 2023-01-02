import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { destinationCityFetch, destinationPropertiesFetch, destinationSectionFetch } from '../../redux/pagesSlice';

const Destinations = () => {
    const destinationSectionData = useSelector((state) => state.page.destinationSectionData);
    const propertiesDestination = useSelector((state) => state.page.propertiesDestination);
    const destinationCities = useSelector((state) => state.page.destinationCities);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(destinationSectionFetch())
        dispatch(destinationPropertiesFetch())
        dispatch(destinationCityFetch())
    }, [])
    return (
        <div>

            <div className="ml-[25px] flex flex-col flex-wrap gap-y-4 max-w-[1560px] pt-4 ">
                <div className="pl-[40px] ">
                    <h3 className="text-[25px] font-medium ">Select City</h3>
                    <select className="py-[9px] w-[270px] outline-none border mt-[8px] px-[6px]">
                        <option className="text-[#888c9b]" hidden>Select City</option>
                        {destinationCities.map((item) => {
                            return <>
                                <option>{item.city_name}</option>
                            </>

                        })}

                    </select>
                </div>
                <h1 className="text-[30px] font-bold text-[#888c9b] pl-[40px]">BANNER SECTION</h1>
                <img className="rounded-[12px] max-w-[1450px] pl-[40px]" src="https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg" alt="img" />
                <h1 className="absolute bottom-[550px] left-[400px] font-medium text-[28px] text-white">Destinations Page</h1>
                <p className="absolute bottom-[510px] left-[400px] text-[18px] text-white" >To Know more <Link to="/table"><button>Click Here</button></Link></p>
            </div>


            <div className="ml-[55px] flex flex-col flex-wrap gap-y-5 max-w-[90%] pt-10 pl-[11px]  ">
                <h1 className="text-[30px] text-[#888c9b] font-bold ">PAGE SECTIONS</h1>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-7   ">

                    {destinationSectionData.map((sec) => {
                        return <>
                            <div className="bg-white min-h-[11rem] rounded-[10px] duration-150 hover:scale-105  ">
                                <img className="h-[160px] w-[100%] object-cover " src={sec.section_image_url}></img>
                                <div className="flex flex-col items-center justify-center ">   <h2 className="py-[10px] font-bold text-[#888c9b] scale-9x-75">{sec.section_title}</h2></div>

                            </div>


                        </>
                    })}




                </div>

            </div>
            <div className="ml-[55px] flex flex-col flex-wrap gap-y-5 max-w-[90%] pt-10 pl-[11px]  ">
                <h1 className="text-[30px] text-[#888c9b] font-bold ">PROPERTIES</h1>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-7   ">

                    {propertiesDestination.map((sec) => {
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

export default Destinations
