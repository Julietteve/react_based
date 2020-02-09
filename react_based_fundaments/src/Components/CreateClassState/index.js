import React from 'react'
import style from './CreateClassState.module.css'



// class Fruits extends React.Component { //Creating a class, extending react.component. ADDING THE FUNCTIONS OF A COMPONENT
//     constructor(){ //Here constructor is used to define the object and its properties. NO HTML involved.
//         super()
//         this.state={
//             quantity:0
//         }
//     }
//     render(){ //NO NEED TO USE THE PROP INSIDE OF RENDER. JUST USE THIS.
//       return(
//         <div>
//           <h3>{this.props.name}</h3> //this=> call the component itself, makes it dinamic
//           <p>Cantidad:{this.state.quantity} </p>
//           <button onClick={
//             ()=>{
//               this.setState({ quantity: this.state.quantity + 1 })// THIS METHOD, using SETSTATE isn't a good practise. It makes React execute render()  every time. it's better use a function.
//             }
//           }> Add </button>
//           <p>{this.props.price}</p>
//         </div>
//       )
//     }
       
//   }

  // a class component is more flexible to changes of states, can be modified and updated by themselves,compared to functional components.

  //STATE=> the current mode of the component. If the state changes, also the component.

//   **********************************************************************************

//USING BIND TO CALL THE FUNCTION

class Fruits extends React.Component { //Creating a class, extending react.component. ADDING THE FUNCTIONS OF A COMPONENT
    constructor(){ //Here constructor is used to define the object and its properties. NO HTML involved.
        super()
  
      const METHODS = [
        "add", 
        "less",
        "clean",
      ]
  
      METHODS.forEach((method)=>{  //Use forEach to run across an arrey of methods and assign them a bind()
        this[method]=this[method].bind(this)
      })
  
      this.state={ // State of a component is an object that holds some information that may change over the lifetime of the component
      quantity:0
      }
    }
  
   add(){
     this.setState({ 
       quantity: this.state.quantity + 1 })
    }
  
    less(){
     this.setState({ 
       quantity: this.state.quantity  -1 })
    }
    
    clean(){
     this.setState({ 
       quantity: this.state.quantity = 0})
    }
    
    render(){ //NO NEED TO USE THE PROP INSIDE OF RENDER. JUST USE THIS.
      
      const hasItem= this.state.quantity>0  // Better refactorize, creating a const to repeat the code
      const classes=  hasItem ? style['fruits-active'] + " " + style.fruits : style.fruits 

      return(
        <div className={classes}>
          <h3>{this.props.name}</h3>
          <p>Cantidad:{this.state.quantity} </p>
          <button onClick={this.add}>+ </button>
          <button onClick={this.less}>-</button>
          <button onClick={this.clean}> Clear </button>
          <p>{this.props.price}</p>
          <p>Total: {this.props.price * this.state.quantity}</p>
        </div>
      )
    } 
  }  
  
  export default Fruits