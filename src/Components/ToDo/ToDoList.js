import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: " ",
            taskId: 0,
            toDoTasks: [],
            completedTasks: [],
            loaded: false
        }
//I know these are unnecessary bc I used fat arrow funcs
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
    
    //CLEAR LIST
    componentWillUnmount() {
        // this.setState({
        //     task: " ",
        //     taskId: 0,
        //     toDoTasks: [],
        //     completedTasks: [],
        // })
        console.log("component destroyed")
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
        if (this.state.task !== " ") {
            this.state.toDoTasks.push(this.state.task)
        }
        // if (this.state.task!==" "){
        //     this.setState({
        //         task: " ",
        //         toDoTasks: [...this.state.toDoTasks, this.state.task]
        //     })
        // }
        console.log(`task ${this.state.task} added to to do list`)
        console.log(this.state.toDoTasks)
    }
    
    //REMOVE TASK FROM TO DO LIST
    markComplete = (index) => {
    console.log(index)
        window.alert("Are you sure?")
        //this.state.completedTasks.push()
        let updatedList = this.state.toDoTasks.splice(index, 1);
        console.log(updatedList)
        this.setState({
            toDoTasks: updatedList
        })
        console.log(`Task ${index} marked completed`)
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
                        //onChange={this.createTask}
                    >
                </input>
                 <br></br>
                    &nbsp;
                <Button
                    // onClick={this.addToList}
                    onClick={(task) => { this.createTask(task); this.addToList(task) }}
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
                        key={index}
                        className="toDoListType">
                         
                            <td>{index}</td>
                            <td>{item}</td>
                            <td>
                            <Button   
                                onClick={(e) => this.markComplete(index, e)}>Completed</Button></td>
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