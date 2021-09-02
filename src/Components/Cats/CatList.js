import React from 'react';


const CatList = (props) => {
 return (
     <div>
         <h2>Cat List as Functional Component</h2>
          {props.cats.map((cat, index) => <li key={index}>{cat}</li>)}
   </div>
 )
}
 
export default CatList;