import bootstrap from 'bootstrap';
import Button from 'bootstrap';
import PropTypes from "prop-types";


    export default function Profile(props) {
console.log(props);
const Fonction = () => props.handleFunction(props.fullName);
    return (
        <>
            {props.children}
            <button onClick={Fonction}>Submit</button>
        </>
    );
}
Profile.defaultProps = {
    fullName:"Full name",
    bio:"default biographie" ,
    profession:" defaultprofession" 
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
  }

// The profile component gets data (fullName, bio, profession) as props, and gets image as children props, 
// and the function "handleName" functions as a prop that sends an alert message with the name of the profile user.
// Define the default props for Profile component. OK
// Use PropsType to check props.
// Use inline style.
