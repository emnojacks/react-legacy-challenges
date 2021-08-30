import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      search: " ",
      resultsArr: []
    };
    
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
    console.log(this.state.search)
  }
  
  searchFunction = (e) => {
    this.setState({
      resultsArr: [...this.state.things]
    })
    let filterArr = this.state.things.filter(supply => supply === this.state.search);
    if (filterArr.length === 1) {
      console.log("found item")
      console.log(filterArr)
      this.setState({
      resultsArr: [...filterArr]
    })
    }

      
    // //copy the array in state
    // console.log(this.state.search);
    // //empty array
    // console.log(this.state.resultsArr);
    // //full array 
    // console.log(this.state.things);
    
    console.log(this.state.resultsArr);
    //console.log(resultsArr)
    //console.log(typeof this.state.resultsArr);
    //search the existing array for the query and create a new one with the results
    //resultsArr.filter(supply => supply == this.state.search);
    
    
    //console.log(this.state.resultsArr)
    //if there is a match (if the filtered array has a length of 1, then set the state of the suppliesArr to the resultsArr, if not, then do nothing to suppliesArr
    // if (resultsArr.length == 1) {
    //   resultsArr.setState([resultsArr])
    // } else {
    //  resultsArr.setState([this.state.things])
    // }
    // return suppliesArr;
  };
  
  

  render() {
    // let { suppliesArr } = suppliesArr;
    // console.log(suppliesArr);
    
      return (
        <div>
          <p>Search the school supplies list for an item.  If it exists on the list, it will return.  If not, the entire list will be displayed. 
          </p>
          
          <Input
            required
            placeholder='Search Here'
            type='text'
            id="searchTerm"
            value={this.state.value}
            onChange={(e)=>{this.handleSearch(e)}}
          />
          <br></br>
          <button
            type="submit"
            onClick={(e)=>{this.searchFunction(e)}}>
          Submit
          </button>
          
          <h3>Results:</h3>
        
            {this.state.resultsArr.map((supply, index)=><li key={index}>{supply}</li>)}
         
      
        </div>
      );
}

}
 
export default SearchIndex;
