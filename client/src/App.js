import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from'./components/navbar';
import { Provider } from 'react-redux';
import store from './store';
import Items from'./components/items';





class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <div className="App">
                  <header className="App-header">
                  <Header />
                  </header>
                  <Items />

            </div>
      </Provider>
    
    );
  }
}

export default App;
