import React, { Component } from 'react';

class ToDoIndex extends Component {
    constructor() {
        super()
        this.state = {
            toDoList: [
                toDoTasks: [],
                completedTasks[]
            ] 
        }
    }
    
    addToList = (e) => {
        this.setState({
            toDoTasks: e.git target.value,
        })
        console.log(this.state.toDoTasks)
    };
    
    markAsComplete = (e) => {
     this.setState({
            completedTasks: e.target.value,
     })
         console.log(this.state.completedTasks)
    }
    
    render() { 
        return (
            
            <div> 
            <form>
                <h1>
                To Do List
                </h1>
                <label>
                Task
                </label>
          &nbsp;   &nbsp;
                <input
                    id="task"
                    type="text"
                    title="Add an task to your to do list"
                    placeholder="just do it"
                    // value=" "
                >
                </input>
                   &nbsp;
                <button
                    onClick={(e)=>{this.addToList(e)}}
                >
                Add to List
                </button>
                
                &nbsp;
                <button
                onClick={(e)=>{}}
                >
                Mark As Complete
                </button>
            
                </form>
                
                <div className="displayToDoList">
                {this.state.toDoList}
                </div>
            </div>
            
            
  );
    }
}
 
export default ToDoIndex;