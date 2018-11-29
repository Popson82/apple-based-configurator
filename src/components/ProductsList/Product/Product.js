import React from 'react'
import styles from './Product.module.sass'

class Product extends React.Component {
    constructor() {
        super();
    }

    ifNew = () => {
        if (this.props.new) {
            return <span>Nowość</span>
        }
    }
    handleClick = () => {
        if (this.props.comparingProducts !== true) this.props.toogleChosen(this.props.id)
    }

    render() {
        let itemWrapperClassName
        if (this.props.comparingProducts !== true) {
            itemWrapperClassName = [styles.products__itemWrapper, this.props.chosen ? styles.chosen : null].join(' ')
        } else {
            itemWrapperClassName = styles.products__itemWrapper
        }

        let itemClassName
        if (this.props.comparingProducts !== true) {
            itemClassName = styles.products__item
        } else {
            itemClassName = [styles.products__item, styles.compared].join(' ')
        }
        
            
        return (
            <div className={itemWrapperClassName} onClick={this.handleClick}>
                <div className={itemClassName}>
                    <div className={styles.products__imgWrapper}>
                        <img src={this.props.img} alt="" title=""/>
                    </div>
                    <p className={styles.newProduct}>{this.ifNew()}</p>
                    <p>{this.props.name}</p>
                    <p>od {this.props.priceFrom} zł</p>
                    <button>Wybierz</button>
                </div>
            </div>
        )
    }
};

export default Product;