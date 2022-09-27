import { propTypes } from "react-bootstrap/esm/Image";
import Inputs from "./Inputs";
import bootstrap from 'bootstrap'


function Child({localVariable}) {
    return <button onClick={localVariable}>Show Full Name</button>
}

export default function Profile(props) {

    const data = [
        { label: "FullName", type: "text", name:"nom" },
        { label: "Bio", type: "text", name:"biographie" },
        { label: "Profession", type: "text", name:"travail" },
        // { label: "Image Url", type: "url" },
        // { label: "document", type: "file" }
    ]
    console.log()
    function handelName(param) {
            alert(`the name of the user is ${param}`)
    }
    return (
        <>
            {data.map(object => <Inputs {...object} />)}
            {props.children}
            <Child localVariable={handelName}/>
        </>
    );
}




// The profile component gets data (fullName, bio, profession) as props, and gets image as children props, 
// and the function "handleName" functions as a prop that sends an alert message with the name of the profile user.
// Define the default props for Profile component. 
// Use PropsType to check props.  
// Use inline style.
