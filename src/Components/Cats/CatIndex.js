import React, { Component } from 'react';
import CatList from './CatList';
 
class CatIndex extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render() {
    return  (
      <div>
        <h2>Cat List as Class Component</h2>
        <div>
          {this.state.breeds.map((cat, index) => <li key={index}>{cat}</li>)}
        </div>
        <CatList
          cats={this.state.breeds}
        /> 
      </div>
    );

  }
}
export default CatIndex;
