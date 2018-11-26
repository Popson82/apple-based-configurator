import React from 'react'
// import styles from './ProductsList.module.sass'
import ComparedProducts from './ComparedProducts/ComparedProducts'
import AllProducts from './AllProducts/AllProducts'

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsChosen: 0
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

    render () {

        return (
            <div>
                <h1>Porównaj modele Maców</h1>
                <p>Wybierz dwa modele i zobacz bardziej szczegółowe porównanie</p>
                <AllProducts
                    products={this.props.products}
                    toogleChosen={this.toogleChosen}
                />
                <p>DUPA DUPA</p>
                {/* {comparedProducts} */}
                <ComparedProducts
                    products={this.props.products}
                    toogleChosen={this.toogleChosen}
                />
            </div>
        )
    }
};

export default ProductsList;