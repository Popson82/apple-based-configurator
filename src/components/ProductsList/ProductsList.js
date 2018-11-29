import React from 'react'
import styles from './ProductsList.module.sass'
import ComparedProducts from './ComparedProducts/ComparedProducts'
import AllProducts from './AllProducts/AllProducts'

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsChosen: 0,
            rednderComparedProducts: false,
            rednderAllProducts: true,
            comparingProducts: false
        }
    }
    incrementChosenItems = () => {
        this.setState({
            itemsChosen: this.state.itemsChosen + 1
        })
    }
    decrementChosenItems = () => {
        this.setState({
            itemsChosen: this.state.itemsChosen - 1
        })
    }
    toogleChosen = (productId) => {

        let products = [...this.props.products]

        products.map(product => {

            if (product.id === productId) {
                if (product.chosen === false && this.state.itemsChosen < 2) {
                    product.chosen = true
                    this.incrementChosenItems()
                    
                } else if (product.chosen === true) {
                    product.chosen = false
                    this.decrementChosenItems()
                }
            }

        })
    }
    handleProducts = () => {
        if (this.state.itemsChosen === 2) {
            this.setState({
                rednderComparedProducts: true,
                rednderAllProducts: false,
                comparingProducts: true
            })
        } else {

        }

    }

    render () {
        let compareText = ''
        if (this.state.itemsChosen === 0) {
            compareText = <p>Wybierz dwa modele i zobacz bardziej szczegółowe porównanie</p>
            // return <p>{compareText}</p>
        } else if (this.state.itemsChosen === 1) {
            compareText = <p>Wybierz kolejny model do porównania</p>
            // return <p>{compareText}</p>
        } else if (this.state.itemsChosen === 2) {
            compareText = <button className={styles.button} onClick={this.handleProducts}>Porównaj modele</button>
        }

        return (
            <div>
                <h1>Porównaj modele Maców</h1>
                {/* {this.compareTextBasedOnItemsChosen} */}
                {/* {console.log(this.compareTextBasedOnItemsChosen)} */}
                {compareText}
                {this.state.rednderAllProducts ? <AllProducts
                    products={this.props.products}
                    toogleChosen={this.toogleChosen}
                /> : null}
                {this.state.rednderComparedProducts ? <ComparedProducts
                    products={this.props.products}
                    toogleChosen={this.toogleChosen}
                    comparingProducts={this.state.comparingProducts}
                /> : null}
            </div>
        )
    }
};

export default ProductsList;