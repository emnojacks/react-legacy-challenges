import React, { Component } from 'react';


class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            dogImg: " "
        }
    }
    
    async componentDidMount() {
    let res = await fetch("https://dog.ceo/dog-api/breeds/image/random")
        let dogs = await res.json();
        
        this.setState({
            loaded: true,
        })
        
        console.log("here come the dogs", dogs)
    }
    
    async componentDidUpdate(dogs) {
        this.setState({
            dogImg: dogs.message
        })
    }
    
    render() { 
        return (
            <div className='main'>
                <img src=
                    {this.state.dogImg}
                    alt="no dogs so sad"
                >
                </img>
            
                <br>
                </br>
                <br>
                </br>
                <button
                    type="submit"
                    onClick={(e)=>this.componentDidMount()}
                >
                Fetch
                </button>
                
            </div>
            
          

 );
    }
}
 
export default DogIndex;