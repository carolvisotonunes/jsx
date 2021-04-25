//import the React and ReactDom
import React from 'react';
import ReactDom from 'react-dom';

//create a react component

const App = () => {
return <div> Hi there!</div>
}

//take the react comp and show it on the screen

ReactDom.render(
<App/>,
 document.querySelector('#root')
)