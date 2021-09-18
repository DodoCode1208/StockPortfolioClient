import React from 'react'
import {Table} from 'react-bootstrap';

import { useEffect ,useState}  from 'react';
import Button from '@restart/ui/esm/Button';



const ViewStocks = () => {
    const[loading, setLoading] = useState(true);
    const[stocks, setStocks] = useState([]);

//fetch data from StockPortfolio Commander API

const url = 'https://localhost:3001/StockPortfolioCommander';
const getstocks = async () =>{
    const response = await fetch(url,
                    {
                        method : 'GET',
                        header:
                        {
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        }
                    });

    const items = await response.json();
    // console.log(items);
    setStocks(items);
      
}

useEffect( () => {

    getstocks();
    setLoading(false);
},[])


if(loading){
    return <h2>Loading Data...</h2>
}

//Delete Stock from Portfolio
const onRemoveHandler =(id) =>{

console.log(id);

}


    return (
        <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>No. of contracts</th>
                        <th>Bought Price</th>
                        <th>Current Price</th> 
                        <th>Yield</th>
                        <th>Remove item</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    stocks.map(stock => 
                        <tr key={stock.stockId}>
                        <td>{stock.symbol}</td>
                        <td>{stock.name}</td>
                        <td>{stock.price}</td>
                        <td>{stock.noOfContracts}</td>
                        <td>{stock.buyPrice}</td>
                        <td>{stock.currentPrice}</td>
                        <td>{stock.yield}</td>
                        <td><Button type="button" className='btn btn-block btn-danger' onChange={()=>onRemoveHandler(stock.stockId)}>X</Button></td>
                        </tr>
                    
                  )}
                 
                </tbody>
            </Table>
            
        </div>
    )
}

export default ViewStocks
