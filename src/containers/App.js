import React from 'react'
import axios from 'axios'
import styles from './App.module.sass'
import ProductList from '../components/ProductsList/ProductsList'

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
          // console.log(this.state.products[0].name);
      } catch (error) {
          console.log(error);
      }
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.products}>
          <ProductList
          products={this.state.products}
          />
        </div>
      </div>
      
    );
  }
}

export default App;