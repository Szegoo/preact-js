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
            <style>{`
                .card {
                    box-shadow: 1px 1px 10px #111;
                    width: fit-content;
                    position: relative; }
                    .card > img {
                        max-width: 180px;
                        padding: 1em; }
                    .card > .description {
                        background-color: whitesmoke;
                        padding: .1em 1em; }
                    .card .card__modal {
                        background-color: white;
                        transition: all .5s linear;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        display: flex;
                        opacity: 0;
                        justify-content: center;
                        align-items: center; }
                        .card .card__modal > a {
                        font-size: .5rem;
                        opacity: 0;
                        transition: font-size .5s ease-in; }
                    .card:hover .card__modal {
                        opacity: 1;
                        background-color: rgba(0, 0, 0, 0.486); }
                        .card:hover .card__modal > a {
                        opacity: 1;
                        content: "Buy";
                        color: white;
                        font-size: 1.2rem;
                        padding: .1em .5em;
                        border: 2px solid white;
                        background-color: rgba(17, 17, 17, 0.452);
                        cursor: pointer; }
            `}</style>
        </div>
    )
}