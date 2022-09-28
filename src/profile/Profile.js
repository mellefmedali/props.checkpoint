import bootstrap from 'bootstrap';
import Button from 'bootstrap';


    export default function Profile(props) {
console.log(props);
const Fonction = (e) => props.handleFunction(e);
    return (
        <>
            {props.children}
            <button onClick={Fonction(props.fullName)}>Submit</button>
        </>
    );
}
Profile.defaultProps = {
    fullName:"default name",
    bio:"default biographie" ,
    profession:" defaultprofession" 
}

// The profile component gets data (fullName, bio, profession) as props, and gets image as children props, 
// and the function "handleName" functions as a prop that sends an alert message with the name of the profile user.
// Define the default props for Profile component. 
// Use PropsType to check props.  
// Use inline style.
