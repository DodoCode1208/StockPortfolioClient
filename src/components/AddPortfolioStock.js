import React from 'react'
import '../index.css';
import {useForm} from "react-hook-form";
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { useHistory } from 'react-router';

const AddPortfolioStock = () => {

        const[formData,SetFormData] = useState({
            symbol:'',
            price:0.00,
            buyPrice:0.00
        });
        
        const [marketData ,SetMarketData] =useState();
        // const[register,handleSubmit] = useForm();

        const history = useHistory();

        const addStock =(data) =>{
            console.log(data);
        }

        //use effect hook to fetch the data from market API.
        const marketUrl = "https://test.solutions.vwdservices.com/internal/intake-test/sample-data/price-data/";

        const fetchMarketData =async (event) =>{
            const response = await fetch(marketUrl,
                {
                    method : 'GET',
                    header:
                    {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                });

            const data = await response.json();
            // console.log(items);
            console.log(data);

                    }

    //Hanlder to add Form Data
    const handleFormOnchange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newformData = [{...formData}];
        newformData[fieldName] = fieldValue;

        SetFormData(newformData);

    }

    const handleSubmit = (event) =>{

        saveNewStock();
        
    }

    //Call POST method to save new stock via form 
    const url = 'https://localhost:3001/StockPortfolioCommander';
    const saveNewStock = async () => {

        const resp = await fetch(url,
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({symbol:formData.symbol, price:formData.price,
                buyPrice : formData.buyPrice})
            }).then(()=> {console.log('Stock Added')});
    }
    
        

    return (
        <div>
            <header className='header align-center'>Bucket Your Stocks here</header>
            <form className="add-form" onSubmit={handleSubmit()}>
                <div className="form-control">
                    <label>Symbol</label>
                    <input type ="text" name = "symbol" placeholder="Enter Stock symbol here" onChange={handleFormOnchange}
                    ></input>
                </div>
        
                <div className="form-control">
                    <label>Price</label>
                    <input type ="decimal" name = "price"  placeholder="Stock Price"  onChange={handleFormOnchange}
                        ></input>
                </div>

                <div className="form-control">
                    <label>Buy Price</label>
                    <input type ="decimal" name = "buyPrice" placeholder="Stock Current Price" onChange={handleFormOnchange}
                    ></input>        
                </div>


                <input type='Submit'  className='btn btn-block btn-primary' />
                <Button className = 'btn btn-block btn-danger' onClick={() => history.goBack()}>Go Back</Button>
             
           
  
            </form>
            
        </div>
    )
}

export default AddPortfolioStock
