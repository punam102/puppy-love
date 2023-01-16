import React from 'react'
import { useState } from 'react'
import styles from "../styles/navbar.module.css"
const Search = () => {
  const [breedname,setBreedname]=useState("")
    const [data,setData]=useState([])
  
  const getdata=()=>{
        console.log(breedname)
        fetch(`https://dog.ceo/api/breed/${breedname}/images`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.message)
                
        })
      }
    //   useEffect(()=>{
    //     getdata()
    //   },[])
    return (
    <div>
        
        <div style={{marginTop:"150px"}}>
            <input type="text" placeholder='Enter the  breedname' 
            onChange={(el)=>setBreedname(el.target.value)}/>
            <button onClick={getdata}>Search</button>
        </div>

        <br />
        <div className={styles.searchimg}>
            { data.map((el,i)=>{
                return <div key={i}>
                  <img  src={el} alt="" />
                </div>
            })}
        </div>
    </div>
  )
}

export default Search