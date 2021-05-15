import React,{useState} from 'react';
import List from './List';
import Header from  '../../HeaderMain/Header';

import {data} from '../MangalSutra/MangalSutraData';
import zIndex from '@material-ui/core/styles/zIndex';
export default function Chains() {

    
    //const products=require("../../JsonData/RingsData")
    console.log(data)
    const [product,setproduct]=useState(data);
    console.log(product);

    

    return (
        <section style={{zIndex:"10",height:"auto",width:"100vw",backgroundColor:"black"}}>
            <div style={{zIndex:"20"}}><Header ></Header></div>
                <section style={{zIndex:"0",display:"flex",flexWrap:"wrap"}}>
                    {product.map((user)=>(<List data={user} ></List>))}
                </section> 
        </section>
    )
}
