import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  pages: [],
  error: '',
  tableData: [],
  expSection: [],
  accomodationSectionData: [],
  accPropertiesData: [],
  expProperties: [],
  destinationSectionData: [],
  propertiesDestination: [],
  destinationCities:[],
  dataPyt:[],
  propertiesPytData:[],
  homeSectionData:[],
  propertiesHomeData:[]

}

// Generates pending, fulfilled and rejected action types
// export const fetchPages = createAsyncThunk('user/fetchPages', async () => {
//    return axios
//       .get('http://13.232.4.147:9000/pages')
//       .then(response => response.data)
// })

// export const AccomodationTableData = createAsyncThunk('user/fetchPages', async () => {
//    return axios
//       .get('http://13.232.4.147:9000/banner/page/51522819')
//       .then(response => response.data)
// })



const pagesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.pages = action.payload
    },
    // tableFetchData: (state, action) => {
    //   state.tableData = action.payload
    // },
    //  exploreSection: (state, action) => {
    //    state.expSection = action.payload
    // },
    // // accomodationSection: (state, action) => {
    // //   state.accomodationSectionData = action.payload
    // // },
    // // accomodationProperties: (state, action) => {
    // //   state.accPropertiesData = action.payload
    // // },
    // exploreProperties: (state, action) => {
    //   state.expProperties = action.payload
    // },
    destinationSection: (state, action) => {
      state.destinationSectionData = action.payload
    },
   destinationProperties: (state, action) => {
      state.propertiesDestination = action.payload
    },
    destinationCity: (state, action) => {
      state.destinationCities= action.payload
    },  
    sectionPyt: (state, action) => {
      state.dataPyt = action.payload
    },
    propertiesPyt: (state, action) => {
      state.homeSectionData = action.payload
    },
    propertiesHome: (state, action) => {
      state.propertiesHomeData = action.payload
    },
  },

  //  extraReducer: {
  //    [fetchPages.pending]: (state, action) => {
  //       state.loading = true;
  //    },
  //    [fetchPages.fulfilled]: (state, action) => {
  //       state.loading = false;
  //       state.pages = action.payload
  //    },
  //    [fetchPages.rejected]: (state, action) => {
  //       state.loading = false;
  //    }
  // }
  // extraReducers: builder => {
  //    builder.addCase(fetchPages.pending, state => {
  //       state.loading = true
  //    })
  //    builder.addCase(fetchPages.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.pages = action.payload
  //       state.error = ''
  //    })
  //    builder.addCase(fetchPages.rejected, (state, action) => {
  //       state.loading = false
  //       state.pages = []
  //       state.error = action.error.message
  //    })
  //    builder.addCase(AccomodationTableData.pending, state => {
  //       state.loading = true
  //    })
  //    builder.addCase(AccomodationTableData.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.tableData = action.payload
  //       state.error = ''
  //    })
  //    builder.addCase(AccomodationTableData.rejected, (state, action) => {
  //       state.loading = false
  //       state.tableData = []
  //       state.error = action.error.message
  //    })


  // },

})
export const { fetchData, tableFetchData, exploreSection, exploreProperties, accomodationSection, accomodationProperties,
  destinationSection,destinationProperties, destinationCity, sectionPyt, propertiesPyt,homeSection,  propertiesHome } = pagesSlice.actions

export default pagesSlice.reducer

export const getPagesApi = () => (dispatch) => {
  const config = {
    method: "get",
    url: `http://13.232.4.147:9000/pages`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then((response) => {
      //  console.log(response.data, "iam pages response");
      dispatch(fetchData(response.data));
    })

    .catch((error) => {
      //  console.log(error, "iam pages error");
    });
};

// export const accomodationTable = () => (dispatch) => {
//   const config = {
//     method: "get",
//     url: `http://13.232.4.147:9000/banner/page/51522819`,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   axios(config)
//     .then((response) => {
//       console.log(response.data, "iam pages response");
//       dispatch(tableFetchData(response.data));
//     })

//     .catch((error) => {
//       console.log(error, "iam pages error");
//     });
// };

export const exploreSectionFetch = () => (dispatch) => {
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
      dispatch(exploreSection(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};


// export const accomodationSectionFetch = () => (dispatch) => {
//   const config = {
//     method: "get",
//     url: `http://13.232.4.147:9000/section/page/51522819`,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   axios(config)
//     .then((response) => {
//       // console.log(response.data, "iam pages response");
//       dispatch(accomodationSection(response.data));
//     })

//     .catch((error) => {
//       // console.log(error, "iam pages error");
//     });
// };

// export const accomodationPropertiesFetch = () => (dispatch) => {
//   const config = {
//     method: "get",
//     url: `http://13.232.4.147:9000/properties`,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   axios(config)
//     .then((response) => {
//       // console.log(response.data, "iam pages response");
//       dispatch(accomodationProperties(response.data));
//     })

//     .catch((error) => {
//       // console.log(error, "iam pages error");
//     });
// };



// export const explorePropertiesFetch = () => (dispatch) => {
//   const config = {
//     method: "get",
//     url: `http://13.232.4.147:9000/properties`,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   };

//   axios(config)
//     .then((response) => {
//       // console.log(response.data, "iam pages response");
//       dispatch(exploreProperties(response.data));
//     })

//     .catch((error) => {
//       // console.log(error, "iam pages error");
//     });
// };

export const destinationSectionFetch = () => (dispatch) => {
  const config = {
    method: "get",
    url: `http://13.232.4.147:9000/section/page/59908572`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then((response) => {
      // console.log(response.data, "iam pages response");
      dispatch(destinationSection(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};
export const destinationPropertiesFetch = () => (dispatch) => {
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
      dispatch(destinationProperties(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};
export const destinationCityFetch = () => (dispatch) => {
  const config = {
    method: "get",
    url: `http://13.232.4.147:9000/cities`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then((response) => {
      // console.log(response.data, "iam pages response");
      dispatch( destinationCity(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};

export const PYTSectionFetch = () => (dispatch) => {
  const config = {
    method: "get",
    url: `http://13.232.4.147:9000/section/page/78886145`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then((response) => {
      // console.log(response.data, "iam pages response");
      dispatch(sectionPyt(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};

export const pytPropertiesFetch = () => (dispatch) => {
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
      dispatch(propertiesPyt(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};

export const homeSectionFetch = () => (dispatch) => {
  const config = {
    method: "get",
    url: `http://13.232.4.147:9000/section/page/80373489`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then((response) => {
      // console.log(response.data, "iam pages response");
      dispatch(homeSection(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};

export const homePropertiesFetch = () => (dispatch) => {
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
      dispatch(propertiesHome(response.data));
    })

    .catch((error) => {
      // console.log(error, "iam pages error");
    });
};