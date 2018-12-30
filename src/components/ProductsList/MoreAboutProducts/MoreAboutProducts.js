import React from 'react'
// import Product from '../Product/Product'

const MoreAboutProducts = (props) => {
    return (
        <div className="moreAboutProducts">
            <h2 className="borderBottom">Opis</h2>
            {props.products.map(product => {
                if (product.chosen === true) {
                    return (
                        <div className="moreAboutProducts__item" key={product.id}>
                            {product.description}
                        </div>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )

};

export default MoreAboutProducts;