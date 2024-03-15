import Card from "./Card.jsx";
import Project from "./Project.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  const skills = [
    { id: 1, name: "JavaScript" },
    { id: 1, name: "React" },
    { id: 1, name: "Node" },
    { id: 1, name: "Express" },
    { id: 1, name: "Firebase" },
  ];
  const courses = [
    { id: 1, name: "OOD" },
    { id: 1, name: "Algo" },
    { id: 1, name: "Systems" },
    { id: 1, name: "NLP" },
    { id: 1, name: "Cyber" },
  ];

  return (
    <>
      <UserGreeting isLoggedIn={false} username="Drtygor" />
      <Card />
      <Project
        name="Dapper"
        date="September 2023 - Present"
        inProgress={true}
      />
      <Project
        name="Poqua"
        date="February 2024 - March 2024"
        inProgress={false}
      />
      <Project
        name="FireFly"
        date="January 2023 - May 2023"
        inProgress={false}
      />

      <List items={skills} category="Skills" />
      <List items={courses} category="Courses" />
    </>
  );
}

export default App;
