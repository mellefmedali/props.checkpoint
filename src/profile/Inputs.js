import { react } from "react";

export default function Inputs (props) {
const nom = props.name;
    return(
        <>
            <div>
                <label >{props.label} :</label>
                <br />
                <input type={props.type} placeholder={`please insert your ${props.label} here` } name = {nom}>{props.children}</input>
                <br />
            </div>
        </>
    )
}