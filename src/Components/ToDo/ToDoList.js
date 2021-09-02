import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: " ",
            toDoTasks: ["What do you have to do?"],
            completedTasks: ["What have you done?"],
            loaded: false
        }
    }
    
    componentDidMount() {
    this.setState({
        loaded: true
    })
        console.log("component mounted")
    }
    
    componentDidUpdate(toDoTasks) {
        console.log("component updated")
    }
    
    componentWillUnmount() {
        console.log("component destroyd")
    }
    
    //CREATE ONE TASK
    createTask = (e) => {
        this.setState({
            task: e.target.value
        })
        console.log(`${this.state.task} task created`)
    };
    
    //ADD TASK TO TO DO LIST
    addToList = (task) => {
        this.state.toDoTasks.push(this.state.task)
        console.log(`task ${this.state.task} added to to do list`)
        console.log(this.state.toDoTasks)
    }
    
    //REMOVE TASK FROM TO DO LIST
    markComplete = (event) => {
        this.state.completedTasks.push(event.target.value)
        this.state.toDoTasks.splice(0);
        console.log(`${event.target.value} marked completed`)
        console.log(`${this.state.completedTasks} tasks completed`)
    }
    
    render() {
        return (
            <div>
                    <h1>
                        To Do List
                    </h1>
                    <label>
                        New Task
                    </label>
                &nbsp;   &nbsp;
                
                    <input
                        id="tasks"
                        name="tasks"
                        type="text"
                        title="Add an task to your to do list"
                        placeholder=" Just do it"
                        onChange={(e) => this.createTask(e)}
                    >
                        
                </input>
                 <br></br>
                    &nbsp;
                    <button
                    onClick={(task) => { this.addToList(task); this.createTask(task) }}
                    
                    >
                        Add to List
                    </button>
                 <br></br>
                &nbsp;
                   <br></br>
               <br></br>
                
                <div>
                    <h2>Tasks to Complete</h2>
                    
                    {this.state.toDoTasks.map((item, index) => <li key={index}>{item}&nbsp;&nbsp;
                        <button
                            onClick={(e) => this.markComplete(e)}>Mark Complete</button>
                    </li>)}
                </div>
                <br></br>
                
                  <div className="completedTasks">
                    <h2>Completed Tasks</h2>
                    
                 {this.state.completedTasks.map((task, index) => <li key={index}>{task}</li>)}
                </div>
            </div>
            
        );
    }
}
 
export default ToDoList;