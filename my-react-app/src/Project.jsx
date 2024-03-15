import PropTypes from "prop-types";

function Project(props) {
  return (
    <div className="project">
      <p>Name: {props.name}</p>
      <p>Date: {props.date}</p>
      <p>Progress: {props.inProgress ? "Yes" : "No"}</p>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  date: PropTypes.number,
  inProgress: PropTypes.bool,
};

Project.defaultProps = {
  name: "Unnamed",
  date: 0,
  inProgress: false,
};

export default Project;
