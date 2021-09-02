import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: " ",
            toDoTasks: [],
            completedTasks: [],
            loaded: false
        }
        this.createTask = this.createTask.bind(this);
        this.addToList = this.addToList.bind(this);
        this.markComplete = this.markComplete.bind(this);
    }
    
    componentDidMount() {
    this.setState({
        loaded: true
    })
        console.log("component mounted")
    }
    
    componentDidUpdate() {
        console.log("component updated")
    }
    
    componentWillUnmount(e) {
        this.setState({
            task: " ",
            toDoTasks: [],
            completedTasks: [],
        })
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
    addToList = () => {
        this.state.toDoTasks.push(this.state.task)
        console.log(`task ${this.state.task} added to to do list`)
        console.log(this.state.toDoTasks)
    }
    
    //REMOVE TASK FROM TO DO LIST
    markComplete = (index) => {
        window.alert("Are you sure?")
        // this.state.completedTasks.push()
        let completedTask=this.state.toDoTasks.splice(index, 1);
        this.setState({
            toDoTasks: completedTask
        })
        console.log(`${this.state.task} marked completed`)
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
                    <Button
                    onClick={(task) => { this.addToList(task); this.createTask(task) }}
                    >Add to List
                    </Button>
                 <br></br>
                &nbsp;
                <br></br>
                <br></br>
                
                <div>
                    <Table striped>
                <thead>
                <tr>
                <th scope="row">
                Task #</th>
                <th>
                Item Description</th>
                <th>
               Mark Completed</th>
                        </tr>
                </thead>
                    <tbody>
                    {this.state.toDoTasks.map((item, index) =>
                        <tr
                        className="toDoListType"
                            key={index}>
                            <td>{index}</td>
                            <td>{item}</td>
                            <td>
                            <Button   
                                    onClick={( e ) => this.markComplete( e)}>Completed</Button></td>
                        </tr>
                       
                            )}
                            </tbody>
                    </Table>
                </div>
                <br></br>
                  <div className="completedTasks">
                    {/* <h2>Completed Tasks</h2>  
                 {this.state.completedTasks.map((task, index) => <li key={index}>{task}</li>)} */}
                </div>
                
                <br></br><br></br>
                <Button
                onClick={(e)=>this.componentWillUnmount(e)}
                >Clear Lists</Button>
                     <br></br>
                    <br></br>
            </div>
        );
    }
}
 
export default ToDoList;