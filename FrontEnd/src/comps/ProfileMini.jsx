import "../App.css";

const ProfileMini = ({image, title}) => {
    return (
        <div className="profileMiniContainer">
            {image}
            <span>{title}</span>
        </div>
    )
}

export default ProfileMini;