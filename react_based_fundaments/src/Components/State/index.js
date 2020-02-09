import React from 'react'


class Counter extends React.Component{
    state= {
        click:0
    }
    add=()=>{
        this.setState({
            click: this.state.click+1
        })
    }
    render(){
        return(
            <button onClick={this.add}>Click ({this.state.click})</button>
        )
    }
}

export default Counter