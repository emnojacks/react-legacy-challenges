import React, { Component } from 'react';
//import CatList from './CatList';
 
class CatIndex extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {
    // let {cats} = this.state.breeds
    return  (
      <div>
        <h1>Cat Breed List</h1>
        <div>
          {this.state.breeds.map((cat, index) => <li key={index}>{cat}</li>)}
        </div>
        {/* <CatList
          cats={cats}
        /> */}
      </div>
    );

  }
}
export default CatIndex;
