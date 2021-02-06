import React, { Component } from 'react'
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"
import img6 from "./images/6.png"
import img7 from "./images/7.png"
import img8 from "./images/8.png"
import img9 from "./images/9.png"
import img10 from "./images/10.png"
import img11 from "./images/11.png"

export default class ImagesCount extends Component {
    constructor(props){
        super(props)
    }
    render() {
    
        const imgs= [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11]
       
        return (
          
               <img className="center-images" src={imgs[this.props.counter]} alt="img1" width="200"/>
             
           
        )
    }
}
