import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from'./components/navbar';
import { Provider } from 'react-redux';
import store from './store';
import Items from'./components/items';
import Addpost from './components/additem';





class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <div className="app">
                  <header className="App-header">
                  <Header />
                  </header>
                  <Addpost />
                  {/* < ItemForm /> */}
                    <Items />
            </div>
      </Provider>
    
    );
  }
}

export default App;
