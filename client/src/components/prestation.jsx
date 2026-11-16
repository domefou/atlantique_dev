export default function Prestation({ title, className, img, onHover, onLeave, tabIndex }) {
    return (
        <div
            className={className}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            tabIndex={tabIndex}
        >
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}
