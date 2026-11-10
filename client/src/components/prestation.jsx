export default function Prestation({ title, className, img, onHover, onLeave }) {
    return (
        <div
            className={className}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}
