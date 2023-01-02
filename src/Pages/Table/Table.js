import React, { useState, useEffect } from 'react'
import { accomodationTable } from '../Accommodations/accomodationSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

const Table = () => {

    const tableData2  = useSelector((state) => state.page.tableData);
    const dispatch = useDispatch()
    const params = useParams();
    const { state } = useLocation();
    const {api} = state
    console.log(api)

console.log(state)

    useEffect(() => {
        if(api==="accomodationTabl"){
            dispatch(accomodationTable())
        }
        
    }, [])

    const boxDATA = [
        {
            "value": 12,
            "title": "Banner",
        },
        {
            "value": 12,
            "title": "Images",

        },
        {
            "value": 12,
            "title": "Active Tasks",

        },
        {
            "value": 12,
            "title": "Ongoing Tasks",

        }

    ]


    const [table,setTable] = useState(tableData2)


    // const [tableData, setTableData] = useState([
    //     {
    //         "img": "https://uselooper.com/assets/images/dummy/img-1.jpg",
    //         "title": "Tomato - Green",
    //         "inventory": 329,
    //         "variants": 4,
    //         "price": "31.70",
    //         "sales": 796
    //     },
    //     {
    //         "img": "https://uselooper.com/assets/images/dummy/img-3.jpg",
    //         "title": "Quiche Assorted",
    //         "inventory": 450,
    //         "variants": 5,
    //         "price": "33.70",
    //         "sales": 700
    //     },
    //     {
    //         "img": "https://uselooper.com/assets/images/dummy/img-5.jpg",
    //         "title": "Cookies Oatmeal Raisin",
    //         "inventory": 729,
    //         "variants": 8,
    //         "price": "71.60",
    //         "sales": 800
    //     },
    //     {
    //         "img": "https://uselooper.com/assets/images/dummy/img-2.jpg",
    //         "title": " Sour Puss - Tangerine",
    //         "inventory": 924,
    //         "variants": 9,
    //         "price": "81.70",
    //         "sales": 490
    //     },
    //     {
    //         "img": "https://uselooper.com/assets/images/dummy/img-7.jpg",
    //         "title": "Lemonade - Mandarin, 591 Ml",
    //         "inventory": 229,
    //         "variants": 3,
    //         "price": "37.70",
    //         "sales": 500
    //     },

    // ])

    const dragItem = React.useRef(null)
    const dragItemOver = React.useRef(null)

    const handleSort = () => {
        let data = [...table]


        const dragItems = data.splice(dragItem.current, 1)[0]

        data.splice(dragItemOver.current, 0, dragItems)

        dragItem.current = null
        dragItemOver.current = null

        setTable(data)

    }







    return (
        <>
            <div className="grid grid-rows-1 md:grid grid-cols-4 my-6  gap-x-8  px-6  ">


             
                        <div className="min-h-[9.1rem] flex flex-col rounded-[7px] justify-center items-center border border-slate-300 bg-[#fff] ]  ">
                            <p className="font-bold text-[26px]">{tableData2.length}</p>
                            <h2 className="text-[#888c9b] font-bold">Banner</h2>
                        </div>
                        <div className="min-h-[9.1rem] flex flex-col rounded-[7px] justify-center items-center border border-slate-300 bg-[#fff] ]  ">
                            <p className="font-bold text-[26px]">{tableData2.banner_image_url !=0 && tableData2.length}</p>
                            <h2 className="text-[#888c9b] font-bold">Images</h2>
                        </div>
                        <div className="min-h-[9.1rem] flex flex-col rounded-[7px] justify-center items-center border border-slate-300 bg-[#fff] ]  ">
                            <p className="font-bold text-[26px]">{tableData2.length}</p>
                            <h2 className="text-[#888c9b] font-bold">Active Tasks</h2>
                        </div>
                        <div className="min-h-[9.1rem] flex flex-col rounded-[7px] justify-center items-center border border-slate-300 bg-[#fff] ]  ">
                            <p className="font-bold text-[26px]">{tableData2.length}</p>
                            <h2 className="text-[#888c9b] font-bold">Ongoing Tasks</h2>
                        </div>
            </div>

            <div className="px-7 ">
                <table className="w-[100%] bg-[#fff] ">
                    <thead  >
                        <tr >

                            <th className="min-w-[320px]"> </th>
                            <th className=" p-[0.75rem]">Page Title</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th className="min-w-[100px]"> </th>
                        </tr>

                    </thead>

                    <tbody>

                        {table?.map((elem, index) => {
                            return (

                                <tr key={elem.index} className=" border border-t-[#ecedf1] "
                                    draggable

                                    onDragStart={(e) => dragItem.current = index}
                                    onDragEnter={(e) => dragItemOver.current = index}
                                    onDragEnd={handleSort}
                                    onDragOver={(e) => e.preventDefault()}
                                >

                                    <td className="p-[0.75rem] flex gap-3 items-center min-w-[320px] " >
                                        <input type="checkbox" className="h-[1.25rem] w-[1.25rem]"></input>

                                        <span className="pl-[10px]">
                                            <img className="relative w-8 h-9 rounded-[4px]" src={elem.banner_image_url} alt="img"></img>
                                        </span>
                                        <p className="text-[#346cb0]">{elem.banner_title}</p>

                                    </td>

                                    <td className=" text-center ">{elem.page_title}</td>
                                    <td className=" text-center ">{elem.CreatedAt}</td>
                                    <td className=" text-center ">Active</td>
                                    <td className=" text-center ">{elem.status}</td>
                                    <td className=" text-center ">

                                        <i className="fa-sharp fa-solid fa-pen border border-slate-300 p-[10px] rounded-full"></i>
                                        <i className="fa-solid fa-trash-can border border-slate-300 p-[10px] ml-2 rounded-full"></i>
                                    </td>

                                </tr>

                            )
                        })}


                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Table
