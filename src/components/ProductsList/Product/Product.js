import React from 'react'

class Product extends React.Component {

    ifNew = () => {
        if (this.props.new) {
            return <span>Nowość</span>
        }
    }
    compareClick = () => {
        this.props.toogleChosen(this.props.id)
    }
    buyProduct = (event) => {
        event.stopPropagation()
        this.props.handleProductConfigurator(this.props.id)
        // console.log("dupa")
    }

    allProducts = () => {
        return (
            <div className={["products__itemWrapper", this.props.chosen ? "chosen" : null].join(' ')} onClick={this.compareClick}>
                <div className="products__item">
                    <div className="products__imgWrapper">
                        <img src={this.props.img} alt="" title=""/>
                    </div>
                    <p className="newProduct">{this.ifNew()}</p>
                    <p>{this.props.name}</p>
                    <p>od {this.props.priceFrom} zł</p>
                    <button className="linkButton">{this.props.chosen ? "Wyłącz porównanie" : "Porównaj" }</button>
                    <button className="btnPrimary" onClick={(event) => this.buyProduct(event)}>Kup teraz</button>
                </div>
            </div>
        )
    }
    comparedProducts = () => {
        return(
            <div className="products__itemWrapper">
                <div className="products__item compared">
                    <div className="products__imgWrapper">
                        <img src={this.props.img} alt="" title=""/>
                    </div>
                    <p className="newProduct">{this.ifNew()}</p>
                    <p>{this.props.name}</p>
                    <p>od {this.props.priceFrom} zł</p>
                </div>
            </div>
        )
    }
    productConfigurator = () => {
        return (
            <>
                <div className="productConfigurator__image">
                    <div className="productConfigurator__imageWrapper">
                        <img src={this.props.img} alt="" title=""/>
                    </div>
                </div>
                <div className="productConfigurator__features">
                    <h1>Skonfiguruj sobie {this.props.name}</h1>
                </div>
            </>
        )
    }

    render() {
        let renderBasedOnState
        if (this.props.renderAllProducts) renderBasedOnState = this.allProducts()
        if (this.props.renderComparedProducts) renderBasedOnState = this.comparedProducts()
        if (this.props.renderProductConfigurator) renderBasedOnState = this.productConfigurator()

        console.log(this.props.renderAllProducts)
        console.log(this.props.renderComparedProducts)
        console.log(this.props.renderProductConfigurator)
        console.log(this.allProducts)
        
            
        return (
            renderBasedOnState
        )
    }
};

export default Product;