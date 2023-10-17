import { NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <ul>
            <li><NavLink to={'/merge'}>merge Array Items</NavLink></li>
            <li><NavLink to={'/login'}>Login form</NavLink></li>
        </ul>
     );
}
 
export default Home;