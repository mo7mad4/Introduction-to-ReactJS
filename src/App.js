import "./App.css";
import Form from "./pages/Form";
import Container from './components/Container'
// import AboutPage from "./pages/About";
// import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Container>
        <Form />
      </Container>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
    </div>
  );
}

export default App;
