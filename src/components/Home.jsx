import { NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <ul>
            <li><NavLink to={'/merge'}>merge Array Items</NavLink></li>
            <li><NavLink to={'/login'}>Login form</NavLink></li>
            <li><NavLink to={'/ccode'}>Country code</NavLink></li>
            <li><NavLink to={'/calender'}>Calender</NavLink></li>

        </ul>
     );
}
 
export default Home;