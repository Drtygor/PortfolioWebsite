import profilePic from "./assets/myself.jpg";

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title"> Kyle Sung</h2>
      <p className="card-text">
        I study Computer Science at Northeastern University
      </p>
    </div>
  );
}

export default Card;
