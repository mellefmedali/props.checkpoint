import bootstrap from 'bootstrap';
import Button from 'bootstrap';

export default function Profile(props) {
    const handleName = (e) => {
        return (
            alert(`this is an alert with ${e}`)
        )
    }
    return (
        <>
            {props.children}
            <button type="submit">Submit</button>
            {handleName(props.fullName)}
        </>
    );
}

// The profile component gets data (fullName, bio, profession) as props, and gets image as children props, 
// and the function "handleName" functions as a prop that sends an alert message with the name of the profile user.
// Define the default props for Profile component. 
// Use PropsType to check props.  
// Use inline style.
