import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState ,useEffect} from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
  let [data,setData]=useState([])
  let[options,setOption]=useState([])
  let [val,setVal]=useState("")
  let[search,setSearch]=useState("")
  let[buttonval,setButtonval]=useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${val}`)
      .then(res => setOption(res.data))
      .catch(err => console.log(err));
  }, [val]); 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  let show=()=>{
    if (search === "") {
      setButtonval([]);
    } else {
      const filtered = data.filter((ele) =>
        ele.title.toLowerCase().includes(search.toLowerCase())
      );
      setButtonval(filtered);
    }
  }
  return (
    <div className="App">
      <Navbar/>
      <h1>E-Fly</h1>
      
      <Body setVal={setVal} search={search} setSearch={setSearch} show={show} />
      
      <br/>
      <h1>Men & Women Fashion 👕</h1>
      <div className='div'>
        
        {val && options.length === 0 ? (
          <p>No products found in this category.</p>
        ) : val ? (
          options.map((ele) => (
            <div className='outer'>
            <div className='cardss' key={ele.id}>
              <p id='title'>{ele.title}</p>
              <p id='val'><strong id='strong'>Price: </strong>$ {ele.price}</p>
              <img className='img' src={ele.image} alt={ele.title} />
              <button  id='button' className="btn btn-info ">BUY NOW</button>
            </div>
            </div>
          ))
        ) : buttonval.length > 0 ? (
          buttonval.map((ele) => (
            <div className='outer'>
            <div className='cardss' key={ele.id}>
              <p id='title'>{ele.title}</p>
              <p id='val'><strong id='strong'>Price: </strong>$ {ele.price}</p>
              <img className='img' src={ele.image} alt={ele.title} />
              <button id='button' className="btn btn-info ">BUY NOW</button>
            </div>
            </div>
          ))
        ) :
            data.map((ele)=>{
                return <div className='outer'>
                  <div className='cardss' key={ele.id}>
                    <p id='title'>{ele.title}</p>
                    <p id='val'><strong id='strong'>Price: </strong>$ {ele.price}</p>
                    <img className='img' src={ele.image}/>
                    <button  id='button' className="btn btn-info ">BUY NOW</button>
                    </div>
                </div>
            })
        }
    </div>
    </div>
  );
}

export default App;
