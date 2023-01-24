import './App.css';
import img from './images/empty-cart.png' // import image 
import Test from './components/Test'; // import for component file name Test

function App() {
  const styles = {
    backgroundColor: "red",
    fontSize : 20
  }
  const user = {
    name: "Mohammed",
    age: 22,
    stady: "Software Develpoment",
    love: ["mom", "dad"],
    subjects: [
      { subject: "Graduation Research", mark: 90 },
      { subject: "Service Oriented Software Engineering (SOSE)", mark: 74 },
      { subject: "Software Testing and Quality Assurance", mark: 85 },
      { subject: "programming 1", mark: 40 },
      { subject: "programming 2", mark: 30 },
    ]
  }
  const passedSubject = (data) => {
    return data
      .filter((sub) => sub.mark >= 50)
      .map((item) => item.subject)
      .join(" , ");

  }
  const feildSubject = (data) => {
    return data
      .filter((sub) => sub.mark <= 50)
      .map((item) => item.subject)
      .join(" , ");

  }
  return (
    <div className="App" style={styles}>
      <p>Hey my name's {user.name}, i'm {user.age}, I stady {user.stady}, and I love {user.love.join(" and ")} </p>
      <h4>Subjects Passed are  {passedSubject(user.subjects)}</h4>
      <h4>Subjects are feild {feildSubject(user.subjects)}</h4>
      <h4>Subjects are feild {user.subjects.filter((sub) => sub.mark < 50)[0]?.subject}</h4> {/* علامة الاستفهام هون بتحكي اذا كان موجود كمل واذا مش موجود م ترجعو  */}
      <img src={img} alt="logo" /> {/* use import img */}
      <Test />  {/* use import component */}
      
    </div>
  );
}

export default App;
