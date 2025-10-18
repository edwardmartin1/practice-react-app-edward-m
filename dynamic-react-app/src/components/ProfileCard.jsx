const ProfileCard = (props) =>
{
    return (
        <div>
            <li>
                <article class="card">
                    <p>Name: {props.profileObject.name}</p> 
                    <p>Age: {props.profileObject.age}</p> 
                    <p>Bio: {props.profileObject.bio}</p>
                </article>    
            </li>
        </div>
    );
}

export default ProfileCard;

