import React from 'react';
import '../../App.css'

const CardType1 = ({icon_type,title,description}) =>{
    return (
      <div className="card-type-1">
        <span style={{height:"50px",width:"50px",margin:"auto",display:"flex",justifyContent:"center",alignItems:"Center"}}>
          <i style={{fontSize:"25px"}} aria-hidden="true" className={icon_type}></i>
        </span>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet adipelit seum dolor sit amet adipelit sed
          eiusmtempor encid dolore.
        </p>
      </div>
    );
}

export default CardType1;