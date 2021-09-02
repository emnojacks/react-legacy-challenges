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
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let dogs = await res.json()
        .then(dogs=> {
        this.setState({
            loaded: true,
            dogImg: dogs.message,
        })
            
        })
        .catch((err) =>
            console.log(err))
       
    }
    
    // async componentDidUpdate(dogs) {
    //     
    //     })
    // }
    
    render() { 
        return (
            <div className='main'>
                <img
                    src={this.state.dogImg}
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
                <br></br>
    </div>
 );
    }
}
 
export default DogIndex;