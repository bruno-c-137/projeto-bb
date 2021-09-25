import { useState } from "react";
import "./style.scss";
import { ReactComponent as Seta } from "../../assets/images/seta-faq.svg"

export default function Faq(props: any) {
    let [openFaq, setOpenFaq] = useState(false);
    return (
        <div>

            <div
                className={`Collapse ${openFaq ? "Collapse--active" : "Collapse--hide"}`}
            >
                <div

                    className="Collapse__header"
                    onClick={() => setOpenFaq(!openFaq)}
                >
                    <h5 className={props.className}>{props.title}</h5>
                    <div className={` ${openFaq ? "Collapse__header--icon-ativo" : "Collapse__header--icon"}`}>
                        <i className="icon-arrow-back">
                            <Seta className={props.className} />


                        </i>
                    </div>
                </div>
                <div className="Collapse__content pr-4">
                    <div className={props.className}>{props.children}</div>
                </div>
            </div>


        </div>
    );
}