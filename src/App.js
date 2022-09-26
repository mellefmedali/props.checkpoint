import './App.css';
import bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from "./profile/Profile"
import InputForm from './InputForm';
import Formulaire from './Formulaire';

const data = [
  { label: "FullName", type: "text" },
  { label: "Bio", type: "text" },
  { label: "Profession", type: "text" },
  { label: "url", type: "url" },
  { label: "document", type: "file" }
]

function App(props) {
  return (
    <>
    {data.map(objet => (<InputForm {...objet}/>))}

    </>
  )
}

export default App;


// The profile component gets data (fullName, bio, profession) as props, and gets image as children props, and the function handleName functions as a prop that sends an alert message with the name of the profile user.
// Define the default props for Profile component. 
// Use PropsType to check props.  
// Use inline style.