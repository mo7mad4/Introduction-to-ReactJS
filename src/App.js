import "./App.css";
import Form from "./pages/Form";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Post from './pages/Post'
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { posts } from "./mock/posts";
import Todos from "./pages/Todos";
import  {TodoDetalis}  from "./pages/TodoDetalis";


function App() {
  // const routers = useRoutes([
  //   { path: "/", element: <HomePage /> },
  //   { path: "/about", element: <AboutPage /> },
  //   { path: "/form", element: <Form /> },
  //   {
  //     path: "/Posts",
  //     element:
  //       <ul>
  //       {posts.map((item) => (
  //         <li>
  //           <Link to={`/posts/${item.id}`} >Post {item.id}</Link>
  //         </li>
  //       ))}
  //     </ul>
  //   },
  //   { path: "/posts/:id", element: <Post /> },
  //   { path: "*", element: <h1>Page not found</h1> }
  // ])
  return (
    <div className="App">
      {/* <Container>
        <Form />
      </Container> */}
      {/* <Container> */}
      <Header myPage="home" />
      {/* {routers} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoDetalis />} />
        <Route
          path="/Posts"
          element={
            <ul>
              {posts.map((item) => (
              <li key={item}>
                  <Link to={`/posts/${item.id}` } >Post {item.id}</Link>
              </li>
              ))}
            </ul>
          } />  
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
      <Footer />

      {/* </Container> */}
      {/*  */}
    </div>
  );
}

export default App;
