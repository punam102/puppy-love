import React from 'react'
import styles from '../../src/styles/navbar.module.css'

const Navbar = () => {
  return (
    <div >

    
   
    <div className={styles.Navbar}> 
    {/* <h1 style={{marginRight:"10%"}}>🐶</h1> */}
      <h3><a href='/'>Home</a></h3>
      <h3><a href='/puppy'>Puppy</a></h3>
      <h3><a href='/search'>Search</a></h3>
      
    </div>
    </div>
  )
}

export default Navbar
