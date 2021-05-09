import React, { Component } from 'react'

 class Form extends Component {
     state={
         firstName:"",
         lastName:""
     };
     handleChange=(event)=>{
         this.setState({
             [event.target.name]:event.target.value
             
         })
         
     }
     onSubmit=(event)=>{
         event.preventDefault()    //the page will not refresh when we click submit button or we can use button type="button"
         console.log(this.state.firstName)
         console.log(this.state.lastName)
       
     }
    render() {
        return (
            <form>
                <h2>Form component</h2>
                <input type="text" name="firstName"  value={this.state.FirstName} onChange={this.handleChange}/>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                <button  onClick={this.onSubmit}>submit</button>
                
                
            </form>
        )
    }
}
export default Form
