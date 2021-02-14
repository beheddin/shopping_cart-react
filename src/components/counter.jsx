import React, { Component } from 'react'; //2 React: object, { Component }: class, 'react':module

//3 create a class "Counter"
class Counter extends Component {

    render() {       
        return (
            //React.createElement('div')
            /*4 these JSX expression that we want to return (<span>..</span> <button..>Increment</button> etc), get compiled to a call to "React.createElement('div')".
            the argument of this method, is the type of the element that we want to create. but we have 4 elements (a <span> and three <button>)
            so the JS compiler "Babel" doesn't know how to compile these JSX expressions, into a call to "React.createElement()"
            the solution is to wrap these JSX expressions with a <div> tag. (5)
            now "Babel" compiles the "div" into a "react element", with the "React.createElement('div')" instruction.
            inside the "react element", we 'll have our 4 elements: <span>, and the three <button>*/
        
        //5 wrap these JSX expressions (<span>, <button>, etc) with a <div> tag. (we can also replace <div> by <React.Fragment>, which's a child of the 'React' object)
        <div className="counter-object">     
            <span /*6 add a span area*/        
                className = {this.getBadgeClasses()} //13 call the "formatCount" method
                >
                {this.formatCount() /*12 call the "formatCount" method*/}
            </span>
            
            <button /*7 add an increment button*/
                className = "btn btn-success btn-sm m-2" //7 apply a Bootstrap class to this button
                onClick = { () => this.props.onIncrement(this.props.counter) } 
                /*26 the value of the "onClick" event, is an arrow fct ({() =>..}).
                in the body of this fct we're gonna call our event (onIncrement), via "props": this.props.onIncrement(). 
                as an argument, we need to pass either the counter id, or a reference to this "counter" object.
                we're gonna pass a reference to this "counter" object, because this 'll make the implementaion of our "event handler" simpler: onIncrement(this.props.counter)
                we pass the counter object and let the "event handler" take care of incrementing the value of this "counter".*/
                > 
                +
            </button>

            <button /*8 add an decrement button*/
                className = "btn btn-warning btn-sm" //8 apply a Bootstrap class to this button    
                onClick = { () => this.props.onDecrement(this.props.counter) } //26
                > 
                -
            </button>

            <button /*9 add an delete button*/
                className = "btn btn-danger btn-sm m-2" //9 apply a Bootstrap class to this button
                /*19.14  we pass an "arrow fct", and we call "onDelete(this.props.id) via "props"*/
                onClick = { () => this.props.onDelete(this.props.counter.id) } //26
                >
                Delete
            </button>
        </div>
        );
    }

    //10 add a method to this class, that checks the value of the "count" properly
    formatCount() {
        //return this.props.counter === 0 ? 'Zero' : this.props.counter; //10.1

        /*10.2 we've a repetition of "this.state.counter". so we can use "object destructuring":
        so we can destructure the "this.props.counter" object and pick only the 'value' property, and store it in a constant*/
        const { value } = this.props.counter;

        return value === 0 ? 'Zero' : value; //10.3return only the "value" property. we can replace the string 'Zero' by a JSX expression (f.e. <h1>Zero</h1>)
    }

    //11
    getBadgeClasses() { // we're going use Bootstrap classes
        let classes = "badge m-2 badge-"; //store the "badge m-2 badge-" string in a variable called "classes"
        classes += this.props.counter.value === 0 ? "secondary" : "primary"; // concatenate the "secondary" or the "primary" string to the "classes" variable, depending on the value of the "value" property
        return classes;
    }
}
 
export default Counter; //3