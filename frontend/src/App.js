
import React, {useEffect, useState} from 'react';
import Card from './board/Card';
import Search from './search/Search';
import axios from 'axios';
import "./App.css"
import Grid from "@material-ui/core/Grid";
import Selected from './board/Selected';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

 const [data, setData] = useState([])
 
  useEffect(()=>{
    async function fetchData() {
    const res =  await axios.get("http://127.0.0.1:3000?term");
 
    for(let i = 0;i <res.data.length; i++){
      setData(data=>[...data, res.data[i]])

    }
    }
    fetchData()
  }, [])


 


  return (
    <div className="App">
      <div className='container'>
      <Search/>
     
      <Grid container spacing={50}>
     {data.map((element, index)=>(
    <Grid item md={4}>
        <div key={index} >
        <Card data={element} />
     </div>
     
     </Grid>
      
      
     
     ))}
     </Grid>
      </div>
     
     
    </div>
  );
}

export default App;
