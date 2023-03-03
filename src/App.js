import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/Functions/Home";

// const isAuthorized = true;

const App = (props) => {
  
  
  const routers = useRoutes([
    { index: true, element: <HomePage title={'Home Page'} /> },
    { path: "*", element: <h1>Page not found</h1> }
  ])

  return (
    <div className="App">
      <Header myPage="home"/>

      {routers}
      <Footer />
    </div>
  );
}

export default App;
