// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import Navbar from "../../components/navbar/Navbar"
import { AppContext } from "../../App";

const Home = () => {
  const { mediaQueries } = useContext(AppContext);
  
  return (
    <div>
      <Navbar mediaQueries={mediaQueries} />
    </div>
  )
}

export default Home