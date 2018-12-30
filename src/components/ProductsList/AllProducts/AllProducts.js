import React from 'react'
import Product from '../Product/Product'

const AllProducts = (props) => {
    return (
        <div className="allProducts">
            {props.products.map(product => {
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
                        handleProductConfigurator={props.handleProductConfigurator}
                        renderAllProducts={props.renderAllProducts}
                    />
                )
            })}
        </div>
    )
}

export default AllProducts;