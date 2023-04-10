import { useContext } from "react";
import BlogHome from "./blogHome";
import Jumbotron from "../components/jumbotron";
import { Context } from "../store/context";




const Home = () => {

    const { store, actions } = useContext(Context)

    return (
        
        <div>
                {store.favorite}
            <Jumbotron></Jumbotron>
            <BlogHome></BlogHome>
            
            
        </div>
        
    )
}

export default Home;