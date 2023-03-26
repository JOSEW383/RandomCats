import React from "react";
import "./CatCard.css"
import Loading from './Loading'
import Error404 from './Error404'


function CatCard(props) {


  return (
    <div className="cat_card">
      {props.image && !props.error && <img src={props.image} width="500px" height="400px" alt="image" />}
      {!props.image && !props.error && <Loading/>}
      {props.error && <Error404/>}
      <p>{!props.error && props.text}</p>
    </div>
  );
  
}

export default CatCard;
