import React from 'react'
import '../index.css';

const AddPortfolioStock = () => {
    return (
        <div>
            <header className='header align-center'>Bucket Your Stocks here</header>
            <form className="add-form">
                <div className="form-control">
                    <label>Symbol</label>
                    <input type ="text" placeholder="Enter Stock symbol here"></input>
                </div>
        
                <div className="form-control">
                    <label>Price</label>
                    <input type ="decimal" placeholder="Stock Price"></input>
                </div>

                <div className="form-control">
                    <label>Buy Price</label>
                    <input type ="decimal" placeholder="Stock Current Price"></input>        
                </div>


                <input type='Add' value='Add Stock' className='btn btn-block ' />
                <input type='Add' value='Back'  className='btn btn-block' />
            </form>
            
        </div>
    )
}

export default AddPortfolioStock
