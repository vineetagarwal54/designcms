import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    expSec:[],
    exProp:[],
    error:''
}


const exploreSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        exploresection: (state,action) => {
            state.expSec = action.payload
        },
        exploreproperties: (state,action) => {
            state.exProp = action.payload
        }
    },
})

export const { exploresection, exploreproperties} = exploreSlice.actions

export default exploreSlice.reducer
export const explorePropertiesFetch = () => (dispatch) => {
    const config = {
      method: "get",
      url: `http://13.232.4.147:9000/section/page/59789662`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
    .then((response) => {
      // console.log(response.data, "iam pages response");
      dispatch(exploreproperties(response.data));
      
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};
export const exploreSectionFetch = () => (dispatch) => {
    const config = {
      method: "get",
      url: `http://13.232.4.147:9000/properties`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  
    axios(config)
      .then((response) => {
        // console.log(response.data, "iam pages response");
        dispatch(exploresection(response.data));
      })
  
      .catch((error) => {
        // console.log(error, "iam pages error");
      });
  };