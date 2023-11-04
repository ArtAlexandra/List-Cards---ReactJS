import React, { useState } from "react"
import "./Card.css"
import axios from "axios"
import Selected from "./Selected"
import CloseButton from "react-bootstrap/esm/CloseButton"
export default function Card({data}){
    const [selected, setSelected] = useState(false)
    const [human, setHuman] = useState()
    const SelectedHuman  =async ()=>{
        const res =  await axios.get(`http://127.0.0.1:3000?term=${data.name}`);
       
        setSelected(true)
        setHuman(res.data)

      
      }
    return(
        <div>
        <div className="Card" onClick={SelectedHuman} >
           
            <p className="card__title">{data.name}</p>
            <div className="card__details">
            <div className="card__item">
           
            <p> <img src="/picture/union.png" alt="phone"/> {data.phone}</p>
          </div>
          <div className="card__item">
          
            <p>  <img src="/picture/email.png" alt="email"/> {data.email}</p>
            </div>
            </div>
          
       
        </div>
        {selected? <Selected data={human} setSelected={setSelected}/>:null}
        </div>
    )
}