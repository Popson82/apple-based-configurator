import React from 'react'
import Product from '../Product/Product'

const allProducts = (props) => props.products.map(product => {
    return (
        <Product
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.image}
            priceFrom={product.priceFrom}
            new={product.new}
            chosen={product.chosen}
            toogleChosen={props.toogleChosen}
        />
    )
})

export default allProducts;