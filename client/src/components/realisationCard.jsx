

export default function RealisationCard({ bubble, img, alt, title, note, description, items }) {
    return (
        <div className="realisation-card">

            <div className="content__Header">
                <p className="bubble-card text-secondary">{bubble}</p>
                <div className="bg_img">
                    <img src={img} alt={alt} />
                </div>
            </div>

            <div className="content__Main">
                <div className="title__container">
                    <h3>{title}</h3>
                    <p className="text-secondary">Score {note}</p>
                </div>
                <p className="text-primary">{description}</p>

                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>


        </div>
    );
}