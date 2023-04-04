import { useContext } from "react";
import Blog from "./blog";
import Jumbotron from "../components/jumbotron";
import { Context } from "../store/context";




const Home = () => {

    const { store, actions } = useContext(Context)

    return (
        
        <div>
                {store.favorite}
            <Jumbotron></Jumbotron>
            <Blog></Blog>
            
            
        </div>
        
    )
}

export default Home;