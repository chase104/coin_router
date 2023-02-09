import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './index.css';

const Currencies = () => {

  const navigate = useNavigate(); // return us a function that we can use

  const [currencies, setCurrencies] = useState(
    [
      { name: "Bitcoin", symbol: "BTC" },
      { name: "Litecoin", symbol: "LTC" },
      { name: "Ethereum", symbol: "ETH" },
      { name: "Ethereum Classic", symbol: "ETC" },
      { name: "Stellar Lumens", symbol: "XLM" },
      { name: "Dash", symbol: "DASH" },
      { name: "Ripple", symbol: "XRP" },
      { name: "Zcash", symbol: "ZEC" },
    ]
  )

  console.log(currencies);
  // listOfCoins will be an array of JSX

  const handleClick = (symbolOfItem) => {
    console.log('handle click executing, we have the symbol of what was clicked');
    console.log(symbolOfItem);
    // OPTION 1
    navigate(`/coin/${symbolOfItem}/Chase`)
    // Manually switch pages to coin/symbolOfItem
  }

  // make these lis clickable and take us to that specific coin's page
    // [
      //<li onClick={() => handleClick(item.symbol)} key={JSON.stringify(item)}>Bitcoin</li>
      //<li onClick={() => handleClick(item.symbol)} key={JSON.stringify(item)}>Bitcoin</li>
      //<li onClick={() => handleClick(item.symbol)} key={JSON.stringify(item)}>Bitcoin</li>
      // ]
  let listOfCoins = currencies.map((item) => {
    
    return <li onClick={() => handleClick(item.symbol)} key={JSON.stringify(item)}>{item.name}</li>
    // OPTION 2
    // return (
    //   <Link to={`/coin/${item.symbol}`}>
    //     <li key={JSON.stringify(item)}>{item.name}</li>
    //   </Link>
    // )
  })

  return (
    <div className='page-container'>
      <h1>Currencies Page</h1>
      <ul id="coin-list-ul">
        {listOfCoins}
      </ul>
  
    {/* HERE put list of currencies */}
    </div>
  )
}

export default Currencies