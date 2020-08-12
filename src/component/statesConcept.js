import React,{Component} from 'react'

export default class StatesConcept extends Component{
    constructor(){
        super();
        this.state={
            name:" yogireddy dondeti"
        }
    }
    changeState(){
        this.setState({
            name:"welcome to reactjs"
        })
    }
    render(){
        return(
            <div>
                <h1>hello{ this.state.name}</h1>
                <button onClick={()=>this.changeState() }>Click me..!</button>
            </div>
        )
    }
}