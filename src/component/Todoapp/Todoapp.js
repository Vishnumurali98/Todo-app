import React, { Component } from 'react'
import "./Todoapp.css";

 class Todoapp extends Component {
     state={
         input:"",
         items:[]
     }
     handleChange=event=>{
         this.setState({
             input:event.target.value
         })
         
     }
     storeItems=(event)=>{
         event.preventDefault()
        const {input}=this.state;
        // const allItem=this.state.items

        // allItem.push(input)
        this.setState({
            items:[...this.state.items,input],
            input:""
        })
     }
     deleteItem=(index)=>{
         const allItem=this.state.items
         allItem.splice(index,1)
         this.setState({
             items:allItem
            //  items:this.state.items.filter((data,index)=>{
            //      return(
            //          index!==key
            //      )
            //  })
         })
     }
    render() {
        const {input,items}=this.state
        console.log(items)
        return (
            <div className="todo-container">
               
                <form className="input-section" onSubmit={this.storeItems}>
                <h1>List</h1>

                    <input type="text" onChange={this.handleChange} value={this.state.input} placeholder="Enter items..."/>
                    
                </form>
                <ul>
                    {items.map((data,index)=>{
                        return(
                            <li key={index}>{data}<i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
                        )
                    })}
                </ul>
                
            </div>
        )
    }
}
export default Todoapp