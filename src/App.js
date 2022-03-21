import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = () => {
  return (
    <h1>Welcome</h1>
  )
}
const Hello = () => {
  const {input} = useParams();
  const {color1} = useParams();
  console.log(color1);
  const {color2} = useParams();
  if(isNaN(input)){
    return (
      <h1 style={{background: color1, color: color2}}>The word is: {input}</h1>
    )
  }else {
    return <h1>The number is: { input }</h1>
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route  exact path="/Home">
          <Home />
        </Route>
        <Route  exact path="/:input">
          <Hello />
        </Route>
        <Route  exact path="/:input/:color1/:color2">
          <Hello />
        </Route>
        <Route path="/:input">
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
