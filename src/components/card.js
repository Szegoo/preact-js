export default () => {
    const addToCart = () => {
        console.log('added to cart');
    }
    return (
        <div className="card">
            <img src="./images/orange.png" />
            <div className="description">
                <h3 className="card__title">Orange</h3>
                <p className="price">4.99$</p>
            </div>
            <div className="card__modal">
                <a onClick={addToCart}>Add to Cart</a>
            </div>
        </div>
    )
}