import { useState } from "react";

import ArrowDown from "/assets/icons/arrow-down.png";




function Accordion({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="accordion">
            <button className="accordion-header" onClick={() => setOpen(!open)}>
                {title}

                <img
                    src={open ? ArrowDown : ArrowDown}
                    alt="toggle accordion"
                    className={`accordion-icon ${open ? "open" : ""}`}
                />
            </button>

            <div className={`accordion-content ${open ? "open" : ""}`}>
                {children}
            </div>

        </div>

    );
}

export default Accordion;

