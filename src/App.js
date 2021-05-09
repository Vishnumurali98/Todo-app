import React,{Component} from 'react'
// import logo from './logo.svg';
// import './App.css';
import Form from './component/form'
import List from './component/list';
import Todoapp from './component/Todoapp/Todoapp';

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <h1>Event</h1>
       <Form /> */}
       {/* <h1>List</h1>
       <List /> */}
       <Todoapp/>
      </div>
    )
  }
}

export default App;
