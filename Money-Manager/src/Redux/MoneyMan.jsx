import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBudget, addExp } from '../Feature/BudgetSlice';

export default function MoneyMan() {
    const [count, setCount] = useState("");
    const [addProduct, setAddProduct] = useState("");
    const [addAmount, setAddAmount] = useState("");

    const [productList, setProductList] = useState([])

    const dispatch = useDispatch();

    const Data = useSelector((state) => {
        return state.BudgetKey.Data;
    });

    const handleAddBudget = () => {
        const amount = Number(count)

        if (amount) {
            dispatch(addBudget(amount));
            setCount('');
        }
        console.log(count)
    };

    const handleAddProduct = () => {
        const amount = Number(addAmount)

        if (amount) {
            dispatch(addExp(amount));
            setProductList([...productList, { addAmount: amount , addProduct}])
            setAddProduct('');  
            setAddAmount('')   
        }
    };
    return (
        <div>
            <h1>Money Manager</h1>

           
            <center>
                
            <div className="one">
            <h3>${Data}</h3> <br />
            <input
                type="number" placeholder='Enter budget' value={count} onChange={(e) => setCount(e.target.value)} />
          <br />  <br /> <button onClick={handleAddBudget}>Add Budget   &nbsp; &nbsp; +</button>

            </div>
            </center>

            
                <center>
                <div className="two"><br /><br />
             <input type="number" placeholder='Enter Product Price' value={addAmount} onChange={(e) => setAddAmount(e.target.value)}/>
                
            <input type="text" placeholder='Enter Product Name' value={addProduct} onChange={(e) => setAddProduct(e.target.value)}/>
          <br /><br />
            <button onClick={handleAddProduct}>Add Product  &nbsp; &nbsp; +</button>
            </div> 
            </center>  
            <div className="div">    
            {
              
                productList &&
                productList.map((e, i) => {
                    return <ul key={i}>
                        <li> ${e.addAmount}</li>
                        <li> {e.addProduct}</li>
                    </ul>
                     
                })
            }
            </div>
        </div>
    );
}
