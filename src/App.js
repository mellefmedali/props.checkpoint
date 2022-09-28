import bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from "./profile/Profile"



function App() {
  const handleName = (e) =>alert(`this is an alert with ${e}`)
  return (
    <>
    <Profile fullName="Youssef" bio="biographie" profession="Nice Job" handleFunction={handleName}>
      <img src='./images/lac.jpg' alt='Image'/>
    </Profile>
    </>
  )
}

export default App;


// The profile component gets data (fullName, bio, profession) as props, and gets image as children props, and the function handleName functions as a prop that sends an alert message with the name of the profile user.
// Define the default props for Profile component. 
// Use PropsType to check props.  
// Use inline style.