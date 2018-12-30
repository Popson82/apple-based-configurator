import React from 'react'

const CompareText = (props) => {
    let compareText = ''
    if (props.itemsChosen === 0) {
        compareText = <p className="comparePara">Wybierz dwa modele i zobacz bardziej szczegółowe porównanie</p>
        // return <p>{compareText}</p>
    } else if (props.itemsChosen === 1) {
        compareText = <p className="comparePara">Wybierz kolejny model do porównania</p>
        // return <p>{compareText}</p>
    } else if (props.itemsChosen === 2 && props.renderComparedProducts === false) {
        compareText = <button className="btnPrimary" onClick={props.handleProductsCompare}>Porównaj modele</button>
    } else if (props.itemsChosen === 2 && props.renderComparedProducts === true) {
        compareText = <button className="btnPrimary" onClick={props.handleProductsCompare}>Wybierz inne modele Maców do porównania</button>
    }
    return (
        <>
            <h1>Porównaj modele Maców</h1>
            {compareText}
        </>
    )
};

export default CompareText;