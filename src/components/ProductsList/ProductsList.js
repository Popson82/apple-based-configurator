import React from 'react'
import ComparedProducts from './ComparedProducts/ComparedProducts'
import AllProducts from './AllProducts/AllProducts'
import MoreAboutProducts from '../ProductsList/MoreAboutProducts/MoreAboutProducts'
import CompareText from '../CompareText/CompareText'
import ProductConfigurator from '../ProductConfigurator/ProductConfigurator';

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsChosen: 0,
            renderComparedProducts: false,
            renderAllProducts: true,
            renderProductConfigurator: false
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
    resetChosenItems = () => {
        this.setState({
            itemsChosen: 0,
            renderComparedProducts: false,
            renderAllProducts: true,
        })
        let products = [...this.props.products]
        products.map(product => product.chosen = false)
    }
    toogleChosen = (productId) => {
        let products = [...this.props.products]
        products.map(product => {
            if (product.id === productId) {
                if (product.chosen === false && this.state.itemsChosen < 2) {
                    product.chosen = true
                    // product.configure = true
                    // // product
                    this.incrementChosenItems()
                    
                } else if (product.chosen === true) {
                    product.chosen = false
                    this.decrementChosenItems()
                }
            }
            return false
        })
    }
    handleProductsCompare = () => {
        if (this.state.itemsChosen === 2 && this.state.renderComparedProducts === false) {
            this.setState({
                renderComparedProducts: true,
                renderAllProducts: false
            })
        } else if (this.state.itemsChosen === 2 && this.state.renderComparedProducts === true) {
            this.resetChosenItems()
        }
    }

    handleProductConfigurator = (productId) => {
        this.setState({
            renderComparedProducts: false,
            renderAllProducts: false,
            renderProductConfigurator: true
        }, () => console.log(this.state))
        let products = [...this.props.products]
        products.map(product => {
            if (product.id === productId) {
                product.configure = true
                console.log(product.configure)
                // console.log(this.state)
            }
            return false
        })

    }

    render () {
        return (
            <div>
                {this.state.renderAllProducts || this.state.renderComparedProducts ? <CompareText itemsChosen={this.state.itemsChosen} renderComparedProducts={this.state.renderComparedProducts} handleProductsCompare={this.handleProductsCompare} /> : null }
                {this.state.renderAllProducts ? <AllProducts products={this.props.products} toogleChosen={this.toogleChosen} handleProductConfigurator={this.handleProductConfigurator} renderAllProducts={this.state.renderAllProducts} /> : null}
                {this.state.renderComparedProducts ? <ComparedProducts products={this.props.products} renderComparedProducts={this.state.renderComparedProducts} /> : null}
                {this.state.renderComparedProducts ? <MoreAboutProducts products={this.props.products} /> : null}
                {this.state.renderProductConfigurator ? <ProductConfigurator products={this.props.products} renderProductConfigurator={this.state.renderProductConfigurator} /> : null}
            </div>
        )
    }
};

export default ProductsList;