

import React from "react";
import "../styles/global.css";
// import "./App.css";

class Box extends React.Component {
  render() {
    return (
      <div className ="box col-sm-3 col-6">
      <span className ="material-icons"  style = {{color : this.props.color , fontSize : 100}} >
        {this.props.icon}
       </span>

       <p>  
            valeur : {this.props.value}
            unité : {this.props.unit}
       </p>
        
       
      
      </div>
    )
 
   

  }
}

export default  Box;
