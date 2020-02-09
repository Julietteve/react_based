//PROPS are like tubs through which we feed the components. They are named as parametres of the function, and then used like attributes of the node.

//ARE JUST FO LECTURE

const Card= (prop)=>{ //=> Create the component. USE PROP LIKE A PARAMETER
    return( //when there are many nodes to return, write them between ()
    <div>
        <h2>Description</h2>
        <p>Name: {prop.name}</p>
        <p>Surname:{prop.surname}</p>
    </div>
    )
  }
  
  function App() { 
    return (
      <div>
          <Card name="Sele" surname="Garcia"></Card>
          <Card name="July" surname= "Garcia"></Card>
          <Card name="July" surname= "Garcia"></Card>
      </div>
    );
  }
  //Uses the parameter as a tag attributte
