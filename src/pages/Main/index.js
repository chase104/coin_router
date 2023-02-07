import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <div>
        <Link to="/currencies">
            <h1>Go to Currencies</h1>
        </Link>
        <Link to="/price/randompriceid">
            <h1>Go to Price</h1>
        </Link>
    </div>
  )
}

export default Main