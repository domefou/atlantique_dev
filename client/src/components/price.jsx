

export default function Price({ title, description, items }) {
    return (
        <div className="container__price">

            <div className="content__Header">
                <h4 className="price-title">{title}</h4>
                <p className="price-description">{description}</p>
            </div>

            <div className="content__Main">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>


        </div>
    );
}
