import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[{id:1, text:'Task1'},{id:2, text:'Task2'}, {id:3, text:'Task3'}],
            currTask:''
        }
    }

    handleChange=(e)=>{
        let cval = e.target.value;
        this.setState({currTask:cval});
    }

    handleClick=()=>{
        let arr = [...this.state.tasks, {id:this.state.tasks.length+1, text:this.state.currTask}];
        this.setState({
            tasks:arr,
            currTask:''
        })

    }
    ondelete=(id)=>{
        let nta= this.state.tasks.filter(obj=>{
            return obj.id!=id

        })
        this.setState({
            tasks:nta
        })

    }
    render() {
        return (
            <div>
                <div className='input-conatainer'>
                    <input onChange={this.handleChange} value={this.state.currTask} type='text'></input>
                    <button onClick={this.handleClick}>Add</button>
                </div>
                <div className='class-List'>
                    <ul>
                        {
                            this.state.tasks.map(task=>(
                                <li key={task.id}>
                                    <h1>
                                        {task.text}
                                    </h1>
                                    <button onClick={()=>this.ondelete(task.id)}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                
                
            </div>
        )
    }
}

 