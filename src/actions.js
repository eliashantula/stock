export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";
export const NEW_TRANSACTION = "NEW_TRANSACTION";
export const DATE_SELECT = "DATE_SELECT";

//-------------------------------
// Initial Stocks Action
//-------------------------------
const data = require("./quandl/30DayStockData");
// Starts request

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

// Sends successful data response to reducer
export function getSuccess(data) {
  //data will be entire json object from api for 1 stock ({})
  return {
    type: GET_SUCCESS,
    data
  };
}

// Sends the response error to the reducer
export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function dateSelect(data) {
  return {
    type: DATE_SELECT,
    data
  };
}

//action to get 30 stocks and info
export function getInitialStocks() {
  //some initial setup for variables in the fetch call

  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getRequest());

    fetch("trade/api/")
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Dispatch success which sets the APOD.
        dispatch(getSuccess(data.default));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getFailure(error));
      });
  };
}

/*return dispatch => {
    dispatch(getRequest());
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("data in the action => ", data);
        dispatch(getSuccess(data.default));
        res(data);
      }, 100);
    });
  };
}*/

//-------------------------------
// Transaction Action
//-------------------------------

export function newTransaction(data) {
  return {
    type: NEW_TRANSACTION,
    data
  };
}

/*const baseUrl = "https://www.quandl.com/api/v3/datasets/EOD/";
  const quandleAPIKey = "BJQ4TqSUVtTDysdfSCxZ";
  const stockList = [
    "AAPL",
    "GOOG",
    "MSFT",
    "NVDA",
    "FB",
    "IBM",
    "LNKD",
    "INTC",
    "TWTR",
    "TSLA"
  ];

  //finds 30 days from today's date
  var days = 30; // Days you want to subtract
  var date = new Date();
  var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  var day = last.getDate().toString();
  var month = (last.getMonth() + 1).toString();
  var year = last.getFullYear();
  if (day.length < 2) {
    day = "0" + day.toString();
  }
  if (month.length < 2) {
    month = "0" + month;
  }

  //using ^^ gets the startDate and then we just calculate the currentDate
  let startDate = `${year}-${month}-${day}`;
  let currentDate = new Date().toISOString().split("T")[0];

  return async dispatch => {
    try {
      dispatch(getRequest());

      stockList.forEach(async stock => {
        fetch(
          `${baseUrl}${stock}.json?api_key=${quandleAPIKey}&start_date=${
            startDate
          }&end_date=${currentDate}`,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            mode: "no-cors"
          }
        )
          .then(response => {
            return response.json();
          })
          .then(response => {
            // let todayClose = response.dataset.data[0][4];
            // console.log(todayClose);
            dispatch(getSuccess(response));
          })
          .catch(error => {
            console.error(error);
          });
      });
    } catch (e) {
      console.error(e);
    }
  };*/
