import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    accomodationsec:[],
    accomodationprop:[],
    tableData:[],
    error:''
}


const accomodationSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        accomodationsection: (state,action) => {
            state.accomodationsec = action.payload
        },
        accomodationproperties: (state,action) => {
            state.accomodationprop = action.payload
        },
        tableFetchData: (state,action) =>{
            state.tableData = action.payload
        }
    },
})

export const { accomodationsection, accomodationproperties,tableFetchData} = accomodationSlice.actions

export default accomodationSlice.reducer
export const accomodationPropertiesFetch = () => (dispatch) => {
    const config = {
      method: "get",
      url: `http://3.108.249.72:9000/properties`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
    .then((response) => {
      // console.log(response.data, "iam pages response");
      dispatch(accomodationproperties(response.data));
      
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};
export const accomodationSectionFetch = () => (dispatch) => {
    const config = {
      method: "get",
      url: `http://13.232.4.147:9000/section/page/51522819`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  
    axios(config)
      .then((response) => {
        // console.log(response.data, "iam pages response");
        dispatch(accomodationsection(response.data));
      })
  
      .catch((error) => {
        // console.log(error, "iam pages error");
      });
  };
  export const accomodationTable = () => (dispatch) => {
    const config = {
      method: "get",
      url: `http://3.108.249.72:9000/banner/page/51522819`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  
    axios(config)
      .then((response) => {
        console.log(response.data, "iam pages response");
        dispatch(tableFetchData(response.data));
      })
  
      .catch((error) => {
        console.log(error, "iam pages error");
      });
  };