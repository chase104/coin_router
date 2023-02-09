import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const Coin = () => {

    let { symbol } =  useParams();
    const [coinData, setCoinData] = useState(null)



    // make a call to our API with the symbol and get back real data about our coin (price, etc.);
    let myKey = process.env.REACT_APP_KEY;
  console.log({myKey});
    // API CALL HERE
    // happens every render

    // useRef > variable that will hold its value between renders 
    let isFirstRender = useRef(true);
    useEffect(() => {
      console.log("running useEffect");

      const makeApiCall = async () => {
        let response = await axios(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${myKey}`);
        console.log(response);
        setCoinData(response.data)

        // make call to exchange rate api, get that rate, then convert the data
        
        // display some of this data
        //set the state
      }
      if (isFirstRender.current) {
        console.log("Making API call!");
        // API CALL HERE 
        makeApiCall()
        isFirstRender.current = false;
      }
    }, []);



    // [] means run function on FIRST render
    // [selectedCoin] means run the on FIRST RENDER AND anytime selectedCoin changes value

  // how to get that param value
  return (
    <div className='page-container'>
      <h1>coin page</h1>
      <div>
        {symbol}
      </div>
      {coinData === null ? <div>loading...</div> : <div>{coinData.rate}</div>}
    </div>
  )
}

export default Coin