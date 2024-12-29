import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import ChatBot from "./components/ChatBot/ChatBot";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageRecognition from "./components/ImageRecognition/ImageRecognition";
import Notfound from "./components/Not found/Not Found";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      { path: "ImageRecognition", element: <ImageRecognition /> },
      { path: "SearchBar", element: <SearchBar /> },
      { path: "chatbot", element: <ChatBot /> },
      {path:"*", element:<Notfound/>} 
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;  
}


export default App;
