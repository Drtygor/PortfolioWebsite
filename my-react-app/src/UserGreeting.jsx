function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const guestMessage = <h2 className="guest-message">Welcome Guest</h2>;

  return props.isLoggedIn ? welcomeMessage : guestMessage;
}

export default UserGreeting;
