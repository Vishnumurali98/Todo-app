import React, { Component } from 'react'

 class List extends Component {
     state={
         data:[
             {
                 id:1,
                 name:"hari",
                 age:25
             },
             {
                id:2,
                name:"ram",
                age:28
            },
          
            
         ]
     }
     
    render() {
        return (
            <div>
                <ul>
                     {this.state.data.map((value,index)=>{
                         return(
                             <li>{value.id}-{value.name}-{value.age}</li>
                         )
                     })}
                </ul>
                
            </div>
        )
    }
}
export default List