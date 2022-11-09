// NODE_MODULES
import { createContext } from "react";
import { useSelector } from "react-redux";
import { useTheme, useMediaQuery } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// LOCAL IMPORTS
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Checkout from "./pages/checkout";

export const AppContext = createContext();

function App() {
  const theme = useTheme();
  const mediaQueries = {
    smallDown: useMediaQuery(theme.breakpoints.down(320)),
    mediumDown: useMediaQuery(theme.breakpoints.down(375)),
    largeDown: useMediaQuery(theme.breakpoints.down(425)),
    tabletDown: useMediaQuery(theme.breakpoints.down(768)),
    laptopDown: useMediaQuery(theme.breakpoints.down(1024)),
    laptopLargeDown: useMediaQuery(theme.breakpoints.down(1440)),

    smallUp: useMediaQuery(theme.breakpoints.up(320)),
    mediumUp: useMediaQuery(theme.breakpoints.up(375)),
    largeUp: useMediaQuery(theme.breakpoints.up(425)),
    tabletUp: useMediaQuery(theme.breakpoints.up(768)),
    laptopUp: useMediaQuery(theme.breakpoints.up(1024)),
    laptopLargeUp: useMediaQuery(theme.breakpoints.up(1440)),
  };

  const contextValue = {
    mediaQueries,
  };

  const { user } = useSelector((state) => state.auth);

  const PrivateElement = ({ element }) => {
    return user ? element : <Navigate to={"/login"} />;
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={<PrivateElement element={<Checkout />} />}
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
