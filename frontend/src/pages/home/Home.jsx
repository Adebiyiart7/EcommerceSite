// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar"
import { AppContext } from "../../App";
import Landing from "../../components/landing";

const Home = () => {
  const { mediaQueries } = useContext(AppContext);
  
  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
      <Landing mediaQueries={mediaQueries} />
    </div>
  )
}

export default Home