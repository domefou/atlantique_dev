import { useState } from "react";

import Prestation from "./prestation.jsx"; // ton composant

import "../styles/components/module.scss";

import { data } from "../pages/data.js";


export default function Module() {
    const [hoverDescription, setHoverDescription] = useState("");

    const finalText =
        "Identifiez les différents type de site web :";



    return (
        <div className="module">

            <div className="container_init">
                <p
                    className="final-text"
                    key={hoverDescription || finalText}
                >
                    {hoverDescription || finalText}
                </p>
            </div>

            <div className="functions_wrapper">

                {data.map(
                    (item, index) => (
                        <Prestation
                            key={index}
                            className="prestation"
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            onHover={() =>
                                setHoverDescription(item.description)
                            }
                            onLeave={() =>
                                setHoverDescription("")
                            }
                        />
                    )
                )}


                <div className="special-card">
                    <a href="/estimation">
                        <p>Voir plus</p>
                    </a>
                </div>

            </div>

        </div>
    );
}
