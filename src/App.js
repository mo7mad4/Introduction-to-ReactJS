import "./App.css";
import Form from "./pages/Form";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Post from './pages/Post'
import { Link, Navigate, Route, Routes, useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { posts } from "./mock/posts";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import { TodoDetalis } from "./pages/TodoDetalis";
import Info from "./pages/Info";
import ProtectedRoute from "./components/Header/ProtectedRoute";


function App() {
  const routers = useRoutes([
    { index: "ture", element: <Navigate to="/login" /> },
    { path: "/login", element: <Login /> },
    {
      path: "/dashboard", element: <ProtectedRoute />,
      children: [
        // { index: "ture", element: <HomePage /> },
        { path: "/dashboard/", element: <HomePage /> },
        { path: "/dashboard/info", element: <Info /> },

      ]
    },
    { path: "/about", element: <AboutPage /> },
    { path: "/form", element: <Form /> },
    { path: "/todos", element: <Todos /> },
    { path: "/todos/:id", element: <TodoDetalis /> },
    {
      path: "/Posts",
      element:
        <ul>
          {posts.map((item) => (
            <li>
              <Link to={`/posts/${item.id}`} >Post {item.id}</Link>
            </li>
          ))}
        </ul>
    },
    { path: "/posts/:id", element: <Post /> },
    { path: "*", element: <h1>Page not found</h1> }
  ])
  return (
    <div className="App">
      {/* <Container>
        <Form />
      </Container> */}
      {/* <Container> */}
      <Header myPage="home" />
      {routers}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dashboard" element={<Login />}>
          <Route path="/dashboard/info" element={<ProtectedRoute />} />
        </Route>
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes> */}
      <Footer />

      {/* </Container> */}
      {/*  */}
    </div>
  );
}

export default App;
