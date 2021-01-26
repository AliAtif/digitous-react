
import React from "react";
import Box from "./components/Box";
import "./styles/global.css"
import './App.css'; 

const tempMin = -20; 
const tempMax = 40; 
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" >
        <div className="row">

        < Box icon ="local_drink"  color="#3A85FF" value={1.5}  unit="L"  />
        < Box icon = "directions_walk" color= "#000000" value = {3000} unit = "steps"/>
        < Box icon = "favorite" color = "#ff0000" value= {120} unit = "bpm"/>
        < Box icon = "wb_sunny" color = "#ffff00" value = {-10} unit ="°C"/>

          <p>

            heart : {
              heartMin
            }

            Temperature :{
              tempMin
            }

            Steps :{
              stepsMin
            }
          </p>


        </div>
       
      </div>
    );
  }
}

export default App;