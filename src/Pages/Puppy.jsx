import React, {  useEffect } from 'react'
import { useState } from 'react';
import styles from "../styles/navbar.module.css"
const Puppy = () => {
const [data ,setData]=useState([])
  const getdata=(newdata)=>{
  
    fetch(`https://dog.ceo/api/breed/${newdata}/images`)
    .then((res)=>res.json())
    .then((res)=>{
       setData(res.message)
    //    console.log(res);
    })
  }
  useEffect(()=>{
    getdata(localStorage.getItem("xyz"))
  },[])
  
  return (
    <div style={{marginTop:"150px"}}>
       <div className={styles.searchimg}>
            {data.map((el,i)=>{
                return <div key={i}>
                  <img  width="200px" height="210px"src={el} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Puppy 