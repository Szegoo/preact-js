export default ({ src }) => {
    return (
        <div>
            <h1 id="hero-text">Everything is possible.</h1>
            <style>
                {`
                #hero-text {
                    margin-top: 0;
                    text-align: center;
                    font-size: 2.5em;
                    background: url(${src || "./images/hero-image.jpg"});
                    color: white;
                    padding-top: 1.5em;
                    padding-bottom: 2.5em;
                    background-attachment: fixed;
                }
            `}
            </style>
        </div>
    )
}