// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
// var ReactDOM = require('react-dom');


// ReactDOM.render('kya dikhnaa hai', 'khana dikhnaa hai', 'callback function')

// In React Version v16 it's poossible for render()
// to return an array of elements
const arr = ["vikash ", "neha ", "maa ", "papa "]
ReactDOM.render(
  // Now this array acts as an one jsx element in the 
  // react version 16 or more update version of the react.
  // this is nothing array of the jsx elements.

  /*[
    <h1>Vikky Basant!</h1>,
    <p>Hello World!</p>,
    <h4>Bhagwatpur,Sarairanjan</h4>
  ]*/

  // <div>
  //   <h1>Hello! Vikash How are you</h1>
  //   <p>I am from Samastipur Bihar</p>
  //   <h3>And I'm born and brodup in Bihar Itself.</h3>
  // </div>

  // // React Fragment 
  // <React.Fragment>
  //   <h1>Hello! Vikash How are you</h1>
  //   <p>I am from Samastipur Bihar</p>
  //   <h3>And I'm born and brodup in Bihar Itself.</h3>
  // </React.Fragment>
  

  // this is also react fragement:
  <>
    <h1>Hello! Vikash How are you</h1>
    <p>I am from Samastipur Bihar</p>
    <h3>And I'm born and brodup in Bihar Itself.</h3>
  </>
  
  ,document.getElementById('root'));

  // ReactDOM.render( React.createElement("h1", null, "Prince Sexana"), 
  // document.getElementById('root'));


  // var h1 = document.createElement('h1');
  // h1.innerHTML = "Vikash Basant";
  // document.getElementById("root").appendChild(h1);

