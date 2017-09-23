import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <header className="app-header">header</header>
        <main className="app-main">main</main>
        <aside className="app-aside">aside</aside>
        <footer className="app-footer">footer</footer>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
