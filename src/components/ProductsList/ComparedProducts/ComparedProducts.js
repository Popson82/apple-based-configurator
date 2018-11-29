import React from 'react'
import Product from '../Product/Product'

const comparedProducts = (props) => props.products.map(product => {
    if (product.chosen === true) {
        return (
            <Product
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.image}
                priceFrom={product.priceFrom}
                new={product.new}
                // chosen={product.chosen}
                // toogleChosen={props.toogleChosen}
                comparingProducts={props.comparingProducts}
            />
        )
    }

})

export default comparedProducts;