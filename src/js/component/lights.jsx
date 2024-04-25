import React from "react";
//import React, { useState, useEffect } from 'react';
import LightSelected from "./functions";
export default class Lights extends React.Component{
constructor(){
  super();
  this.state={
    selectedLight:null
  }
}
render(){
  console.log(this.state);
  let redExtraClass="";
  if(this.state.selectedLight=="red") redExtraClass="selected"
  let yellowExtraClass="";
  if(this.state.selectedLight=="yellow") yellowExtraClass="selected"
  let greenExtraClass="";
  if(this.state.selectedLight=="green") greenExtraClass="selected"


    return(
     
       <div className="container">
        <div className="top"></div>
        <div className="base">
        <div className={"red light "+redExtraClass} onClick={()=>this.setState({selectedLight:"red"})}></div>
        <div className={"yellow light "+yellowExtraClass} onClick={()=>this.setState({selectedLight:"yellow"})}></div>
        <div className={"green light " +greenExtraClass}  onClick={()=>this.setState({selectedLight:"green"})}></div>
        </div>
       </div>
    );
}
}
