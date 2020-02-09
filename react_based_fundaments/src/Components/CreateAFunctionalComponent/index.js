// ELEMENT vs COMPONENT

// A component can be used many times and be overwritable. Must iniciate in uppercase, and also, return a node.


//A FUNCTIONAL COMPONENT is  FUNCTION THAT RETURNS AN ELEMENT.

const Card= ()=>{ //=> Create the component
    return( //when there are many nodes to return, write them between ()
    <div>
        <h2>Description</h2>
        <p>Name:</p>
        <p>Surname:</p>
    </div>
    )
}

const App= ()=> { //=>Using the component
    <div>
        <Card/>
    </div>
    
}


ReactDOM.render(<App/>, document.getElementById("root"))