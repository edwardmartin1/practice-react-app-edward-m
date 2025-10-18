

const ProfileCard = (props) =>
{
    return (
        <li>
            {props.profileObject.id} {" - "} {props.profileObject.name} {" - "} {props.profileObject.age} {" - "} {props.profileObject.bio}
        </li>
    );
}

export default ProfileCard;

/*
key={props.profileObject.id}
*/