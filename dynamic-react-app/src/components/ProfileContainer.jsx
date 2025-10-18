import ProfileCard from "./ProfileCard"


const ProfileContainer = (props) =>
{
    return (
        <div>
            <ul>
                {props.profiles.map((individualProfile) =>
                (
                    
                        <ProfileCard key={individualProfile.id} profileObject={individualProfile} /> 
                    
                ))}
            </ul>
        </div>
    );
}

export default ProfileContainer;

