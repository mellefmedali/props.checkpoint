
export default function Profile(props) {
    // const handelName = () => alert(`the name of the user is ${props.fullName}`);
    let name = props.fullName;
    let bio = props.bio;
    let profession = props.profession;


    // handelName()
    return (
        <>
            <span>the full Name : </span>{name}<br />
            {bio}<br />
            {profession}<br />
            {props.children}
        </>
    );
}
