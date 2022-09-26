

export default function InputForm (props) {
    return(
        <>
        <div>
            <label >{props.label} :</label>
            <br/>
            <input type = {props.type} placeholder={`please insert your ${props.label} here`}></input>
            <br/>
        </div>
        </>
    )
}