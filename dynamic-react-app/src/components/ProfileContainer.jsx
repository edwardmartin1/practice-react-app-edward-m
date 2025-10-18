import ProfileCard from "./ProfileCard"

const ProfileContainer = (props) =>
{
    return (
        <main>
            <ul>
                {props.profiles.map((individualProfile) =>
                (                    
                    <ProfileCard key={individualProfile.id} profileObject={individualProfile} />                     
                ))}
            </ul>
        </main>
    );
}

export default ProfileContainer;

