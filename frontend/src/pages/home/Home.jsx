// NODE_MODULES
import { useContext } from "react";

// LOCAL IMPORTS
import { AppContext } from "../../App";
import Landing from "../../components/landing";

const Home = () => {
  const { mediaQueries } = useContext(AppContext);
  
  return (
    <div>
      <Landing mediaQueries={mediaQueries} />
    </div>
  )
}

export default Home