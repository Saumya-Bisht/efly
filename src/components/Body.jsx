import React from 'react'

function Body({setSearch,setVal,search,show}) {
  return (
    <div className='bg'>
      <select style={{border:"1px solid purple",margin:"10px",color:"purple"}}>
      <option >Select Language</option>
      <option >English</option>
      
      
    </select>
      <h2><img src='https://as2.ftcdn.net/v2/jpg/05/39/99/67/1000_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg'/></h2>
    <select className='select' onChange={(e)=>{setVal(e.target.value);console.log(e.target.value)}}>
      <option value="">All Category</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="men's clothing">Men's Clothing</option>
      
    </select>
    <input className='input' value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search for any product...'/>
    <button className="btn btn-warning" onClick={show}>🔍</button>
    <button className="btn btn-primary" style={{margin:"10px"}}>🛒</button>
    
  </div>
  )
}

export default Body



