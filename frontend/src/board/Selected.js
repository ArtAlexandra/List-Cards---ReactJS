import React, { useState } from "react";
import "./Card.css"
import CloseButton from 'react-bootstrap/CloseButton';
export default function Selected({data, setSelected}){
    const [human, setHuman] = useState({})
    useState(()=>{
      setHuman(data[0])
    }, [])
   
    return(
        <div className="selected__popup-box">
         
            <div className="selected__box">
            <p>{human.name}</p>
            
            <CloseButton onClick={()=>setSelected(false)}  className='selected__box__close-button'/>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><p>Телефон: </p></td>
                <td><p>{human.phone}</p></td>
            </tr>
            <tr>
                <td> <p>Почта: </p></td>
                <td> <p>{human.email}</p></td>
           </tr>
           <tr>
            <td></td>
            <td></td>

           </tr>
           <tr>
            <td> <p>Дата приема: </p></td>
            <td> <p>{human.hire_date}</p></td>

           </tr>
           
           
            <tr>
            <td>  <p>Должность: </p></td>
            <td>  <p>{human.position_name}</p></td>

           </tr>
          
          
            <tr>
            <td> <p>Подразделение: </p></td>
            <td> <p>{human.department}</p></td>

           </tr>           
            </table>
            <p>Дополнительная информация: </p>
            <p>{human.address}</p>
          
            </div>
        </div>
    )
}