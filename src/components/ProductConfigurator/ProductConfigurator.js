import React from 'react'
import Product from '../ProductsList/Product/Product'


const ProductConfigurator = (props) => {
    return (
        <div className="productConfigurator">
            {props.products.map(product => {
                console.log(product.configure)
                if (product.configure === true) {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.image}
                            priceFrom={product.priceFrom}
                            new={product.new}
                            renderProductConfigurator={props.renderProductConfigurator}
                        />
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
};

export default ProductConfigurator;