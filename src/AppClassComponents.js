import "./App.css";
import Form from "./pages/Form";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Post from './pages/Post'
import { Link, Navigate, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { posts } from "./mock/posts";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import { TodoDetalis } from "./pages/TodoDetalis";
import Info from "./pages/Info";
import ProtectedRoute from "./components/Header/ProtectedRoute";
import React from "react";
import Anthor from "./pages/AnthorComponentsClass";
import Ref from "./pages/Ref";

// const isAuthorized = true;

class App extends React.Component {

  // this code in ``functional`` beased Components

  // const routers = useRoutes([
  //   { index: true, element: <Navigate to="/login" /> }, //index the first page enter user
  //   {
  //     path: "/login",
  //     element:
  //       <>
  //         {isAuthorized ? <Navigate to="/dashboard" /> : <Login /> }

  //       </>
  //   }, // path login page  
  //   {
  //     path: "/dashboard",
  //     element: <ProtectedRoute isAuthorized={isAuthorized} />,
  //     children: [
  //       // { index: "ture", element: <HomePage /> },
  //       { index: true, element: <HomePage /> },
  //       { path: "/dashboard/info", element: <Info /> },

  //     ]
  //   },
  //   { path: "/about", element: <AboutPage /> },
  //   { path: "/form", element: <Form /> },
  //   { path: "/todos", element: <Todos /> },
  //   { path: "/todos/:id", element: <TodoDetalis /> },
  //   {
  //     path: "/Posts",
  //     element:
  //       <ul>
  //         {posts.map((item) => (
  //           <li>
  //             <Link to={`/posts/${item.id}`} >Post {item.id}</Link>
  //           </li>
  //         ))}
  //       </ul>
  //   },
  //   { path: "/posts/:id", element: <Post /> },
  //   { path: "*", element: <h1>Page not found</h1> }
  // ])

  state = {
    isAuthorized: false,
  }
  login = () => this.setState({ isAuthorized: true })
  logout = () => {
    localStorage.clear();
    this.setState({ isAuthorized: false })
  }

  //ولا لا Token  عشان افحص اذا في عندي 
  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) this.setState({ isAuthorized: true });
  }
  render() {
    return (
      <div className="App">
        {/* <Container>
        <Form />
      </Container> */}
        {/* <Container> */}
        {/* {routers} */}
        <Routes>
          <Route index element={<Navigate to="/login" />} />

          <Route path="/login"
            element={
              <>
                {this.state.isAuthorized ? <Navigate to="/dashboard" /> : <Login login={this.login} />}
              </>
            }
          />

          <Route path="/dashboard" element={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout} />}>
            <Route index element={<HomePage />} />
            <Route path="info" element={<Info />} />
            <Route path="anthor" element={<Anthor />} />
            <Route path="ref" element={<Ref />} />

          </Route>


          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoDetalis />} />
          <Route path="/Posts"
            element={
              <ul>
                {posts.map((item) => (
                  <li key={item}>
                    <Link to={`/posts/${item.id}`} >Post {item.id}</Link>
                  </li>
                ))}
              </ul>
            } />

          <Route path="/posts/:id" element={<Post />} />
          <Route path="/info" element={<Info />} />
          {/* <Route path="/info" element={<Ref />} /> */}
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Routes>
        <Footer />

        {/* </Container> */}
        {/*  */}
      </div>
    );
  }

}
export default App;
