import { FaShoppingCart } from 'react-icons/fa'; //32 use "react-icons"


/* Stateless Functionnal Component:
in cases where we've only have a component with a single method (render method), and any "event handler" or any helper method to calculate values.
instead of using a "class", to define this component, we can use a "function", that returns a React element. this fct is called "Stateless Functionnal Component".
it has no "state" property, because it's a simple stateless component. so we get all the data via props.*/

//navigation bar on the top, to display the total number of counters, that have a value greater than 0
//33 define a constant called "NavBar", and set it to an arrow fct
const NavBar = (props) /*33.2 add "props" as a parameter*/ => { 
    //33.1 in the body of this fct, we return a React element
    return ( 
        <nav className="navbar navbar-light"> 
            <form className="form-inline">
                    <FaShoppingCart className="shopping-cart-icon" size="2em" color="#17A2B8" /*32 react-icon*/ />
                    <span className="badge badge-pill badge-info m-2">
                    {props.totalCounters}
                    </span>
            </form>
            <a type="button" className="btn btn-outline-info" href="https://github.com/BahaeddinBehi">my GitHub</a>
        </nav>
    );
};
 
export default NavBar; //33