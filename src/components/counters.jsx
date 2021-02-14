import React, { Component } from 'react'; //27
import Counter from './counter'; //27

//28 create a class "Counter"
class Counters extends Component {

    render() { 
        return ( 
            <div className="row"> {/*29 wrap the elements that we want to return with a <div> tag., because we want to return a single element from the render method*/}
                <div className="col-sm-2 text-center" /*bootstrap grid system: column size=2*/>
                    <button //30 we want to add a button to reset all the "counters"
                        className = "btn btn-outline-dark btn-sm m-2" //30.1 set a class
                        onClick = {this.props.onReset} //30.2 handle the click event. pass the "onReset" method, which is in this component's parent (App), via "props".
                    >
                    Reset
                    </button>
                </div>
                
                <div className = "col-sm" /*bootstrap grid system: column size=10*/>
                    {this.props.counters.map(counter => //31 pass the list of counters, via "props"
                        <Counter 
                            key = {counter.id} /*31.1 "id" and "key" values are the same.
                            but the difference is that the "key" attribute is used internally by React, so we won't be able to access it, in our "counter" component*/

                            counter = {counter} /*31.2 we can use an object (counter), to encapsulate related values ("value" and "id"):
                            instead of these 2 properties, we can simply pass the "counter" object itself: counter={counter}             
                            so this object "counter" includes everything we need to know about a "counter",
                            and also if in the future we want to add a new property to this "counter" object, we don't have to modify the code inside the <Counter> component.
                            our "counter" object is carrying all the data about a "counter"*/

                            onDelete = {this.props.onDelete} //31.3 pass the "onDelete" method, via "props"
                            onIncrement = {this.props.onIncrement} //31.4 pass the "onIncrement" method, via "props"
                            onDecrement = {this.props.onDecrement} //31.5 pass the "onDecrement" method, via "props"
                            //the "Counter" component raises the "onDelete", "onIncrement" and "onDecrement" events, up to its parent ("Counters" component). we're not handling these events in this component.
                            />
                        )}
                </div>                            
            </div>
        );
    }
}
 
export default Counters; //28