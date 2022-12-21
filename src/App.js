import React, { Component } from "react";

const styles = {
  color: 'blue',
  fontStyle: 'italic',
}

const str = <h1 style={styles}> Learn JSX</h1>

function getGreeting(name) {
  return `Hello, ${name}`;
}

function handleEvent(e){
  alert('Button Clicked');
  console.log(e);
}

const error = true;
const items = [
  'Bread', 'Milk', 'Eggs'
]
function App() {
  return (
    <div className="App">
      Grocery List:<ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
      <div>
        <FunctionComponent />
        <ClassComponent />
      </div>
      <button onClick={handleEvent}>Is Button</button>
    </div>

  );
}

function FunctionComponent() {
  return <h1> This is a FunctionComponent.</h1>
}
class ClassComponent extends Component {
  render() {
    return <h1> This is a Class Component.</h1>
  }
}

export default App;
