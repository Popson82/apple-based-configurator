import React from 'react';
import styles from './Product.module.sass';

const product = () => {
    return (

        <div className="product">

            <div className={styles.product__info}>
                <img className={styles.product__image} src="../../static/laptop.jpg" alt=""/>
                <h1 className={styles.product__name}>Laptop 15&quot;</h1>
                <p className="product__desc">Ultra cienki, wydajny laptop z ekranem o wysokiej rozdzielczości.</p>
            </div>

            <div className={styles.features}>

                <h2 className="features__heading">Skonfiguruj urządzenie</h2>

                <div className="option">
                    <h3 className="option__label">Procesor</h3>

                    <div className="option__group">
                        <button className="btn btn-primary option__button">i7 2.5 GHz</button>
                        <button className="btn option__button" data-tooltip="+400 PLN">i7 2.8 GHz</button>
                        <button className="btn option__button" data-tooltip="+800 PLN">i7 3.2 GHz</button>
                    </div>
                </div>

                <div className="option">
                    <h3 className="option__label">Pamięć RAM</h3>

                    <div className="option__group">
                        <button className="btn btn-primary option__button">8GB RAM</button>
                        <button className="btn option__button">16GB RAM</button>
                    </div>
                </div>

                <div className="option">
                    <h3 className="option__label">Dysk twardy</h3>

                    <div className="option__group">
                        <button className="btn btn-primary option__button">128GB SSD</button>
                        <button className="btn option__button">256GB SSD</button>
                        <button className="btn option__button">512GB SSD</button>
                    </div>
                </div>

            </div>

            <div className="price float-right">
                <p className="price__label">Cena: </p>
                <p className="price__value">3999 PLN</p>
            </div>

            <div className="clearfix"></div>

            <div className="order">
                <button className="btn btn-lg btn-success float-right">Złóż zamówienie</button>
            </div>

        </div>

    )
};

export default product;