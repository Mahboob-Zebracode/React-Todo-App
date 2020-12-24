// import React, { Component } from 'react'
// import TodoApp from "./TODO APP/todoapp"

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <TodoApp/>
//       </div>
//     )
//   }
// }


import React from 'react';
import About from './TODO APP/About/About';
import TodoApp from './TODO APP/todoapp';
import Header from './TODO APP/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => {

// return <React.fragment> 
    {/* or import React, {fragment} from 'react' */}

// </React.fragment>;
return(
<Router>
    <Header  />
    <Route path="/" exact component={TodoApp} />
    <Route path="/about" component={About} />
</Router>
);

};

export default App;
