import React from 'react';
import axios from 'axios';
import styles from './App.module.sass';
import Product from '../components/Product/Product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
      try {
          const res = await axios(`/products`)
          this.setState({products: res.data});
          console.log(this.state.products);
      } catch (error) {
          console.log(error);
      }
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Witam w konfiguratorze!</h1>
        <Product />
      </div>
      
    );
  }
}

export default App;