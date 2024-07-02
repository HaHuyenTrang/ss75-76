import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, getAllProduct } from '../store/reducer/productReducer';
import './product.css'
export default function Product() {
    // lấy data
    const disPatch=useDispatch();
    useEffect(()=>{
        disPatch(getAllProduct())
    },[])
    const data:any = useSelector(state=>state)
    const addToCart=(item:any)=>{
        console.log(item);
        disPatch(addProduct(item));
    }
   
  return (
    <div>Product
        <div>
            <h3>List Product</h3>
            <ul>
                {data.productReducer.product.map((item:any,index:any)=>{
                    return <li key={item.id} className='li-border'>
                        <div><img src={item.image} alt="" /></div>
                        <div> <b>{item.name}</b> <br /><br />
                            {item.description}  <br /> <br /> total: {item.stock}
                            <br />
                            <br />                                                                                  
                            {item.price} <br />
                            <br />
                            <button onClick={()=>addToCart(item)}>add to cart</button>
                        </div>
                        
                        

                    </li>
                })}
            </ul>
        </div>
        
    </div>
  )
}
