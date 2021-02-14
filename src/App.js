import React, { Component } from 'react';
import NavBar from './components/navbar'; // 13 import the "NavBar" component
import Counters from './components/counters'; //14 import the "Counters" component
import './App.css';

//15 in the "App" component, we've the "state", as well as the methods that modify the "state" (handleIncrement, handleReset, handleDelete).
class App extends Component {

  //16 the state property
  state = { 
    counters: [  //17 define a "counters" array, which contains 4 "counter" objects
        {id: 1, value: 0},  /*18 "counter" objects:
        each object should have an "id" property, to uniquely identify each "counter".
        and it should also have a "value" property, that we use to set the initial value for each "counter"*/
        {id: 2, value: 0}, 
        {id: 3, value: 0}, 
        {id: 4, value: 0},
        {id: 5, value: 0},
        {id: 6, value: 0},
        {id: 7, value: 0}
    ]
  }; 


  //19 create an event handler for the incrementation, called "handleIncrement", which takes a "counter" parameter
  handleIncrement = (counter) => { 
      console.log(counter); //19.1 display the counter parameter in the console, just to verify
      
      /*19.2 we need to "update the state":
      we're not going to update the state directly. instead we should create a new "counters" array, and give it to the "setState" method, and have React update the state:*/

      const counters = [...this.state.counters];  /*19.3 create a constant and set it to an array, and use the spread operator "..." to clone "this.state.counters".
      so we get a new array (counters), by cloning this array ([...this.state.counters]).
      however, the objects in this new array are exactly the same objects that we've in the "counters" array, that we've in the "state" object.*/

      const index = counters.indexOf(counter)  //19.4 define a new constant to get the index of the "counter" object, that we received as a parameter.

      counters[index] = {...counter};  //19.5 set "counters[index]" to a new object, and use the "spread operator" (...), to clone the "counter" object that we received as a parameter in this method.

      counters[index].value++;  //19.6 increment the "value" property
  
      this.setState({ counters }); //19.7 finally, update the "state", by calling "this.setState()", and give it the new "counters" array
  }; 

  //20 implement an event handler for the decrementation, called "handleDecrement", which takes a "counter" parameter
  handleDecrement = (counter) => { 
      console.log(counter); //20.1 display the counter parameter in the console, just to verify
      
      /*20.2 we need to "update the state":
      we're not going to update the state directly. instead we should create a new "counters" array, and give it to the "setState" method, and have React "update" the state:*/

      const counters = [...this.state.counters];  /*20.3 create a constant and set it to an array, and use the spread operator "..." to clone "this.state.counters".
      so we get a new array (counters), by cloning this array ([...this.state.counters]).
      however, the objects in this new array are exactly the same objects that we've in the "counters" array, that we've in the "state" object.*/

      const index = counters.indexOf(counter)  //20.4 define a new constant to get the index of the "counter" object, that we received as a parameter.

      counters[index] = {...counter};  //20.5 set "counters[index]" to a new object, and use the "spread operator" (...), to clone the "counter" object that we received as a parameter in this method.

      if (counters[index].value > 0) { //20.6 we decrement the "value" property only if its value is strictlypositive
        counters[index].value--;
      }

      this.setState({ counters }); //20.7 finally, update the "state", by calling "this.setState()", and give it the new "counters" array
  }; 

  //21 implement an event handler for delete a "counter" object, called "handleDecrement", which takes a "counterId" parameter
  handleDelete = (counterId) => { 
      console.log("event handler called", counterId); //21.1 display the counterId parameter in the console, just to verify
      
      //21.2 so we define a constant called "counters", and use the "filter method" to get all the "counters", except the one with the given "id"
      const counters = this.state.counters.filter(c => c.id !== counterId); 
      this.setState({ counters }); 
  };   

  //22 implement an event handler for reseting all the "counter" objects values, called "handleReset", which takes no parameter
  handleReset = () => {  
      //22.1 just like in the "handleDelete" method, we want to create a new array of "counters", which we store in a constant called "counters", and then we call "this.setState({ counters })"
      const counters /*22.1*/ = this.state.counters.map( //22.2 get the existing "counters" (this.state.counters), and use the "map()" method
          c => { // to get each counter: map(c =>)
              c.value =0;  //and reset its value to 0: {c.value=0;}"
              return c;  // and then return it
          //22.3 with this we 'll get a new array of "counters" and store them in a const called "counters"
          }); 
          this.setState({ counters });  //22.4 call "this.setState" with the new array "counters"    
  }; 


  //23 the render method
  render() {
    return (
      <React.Fragment /*23.1 we're returning multiple root elements ("NavBar" and "main") from the "render" method, so we need to wrap them with "React.Fragment"*/>
        {/*23.2 finally we need to display the total number of counters in the navigation bar:
        in the "App" component, we're passing the "counters" array (counters = {this.state.counters}), to the "Counters" component.
        similarly, we can pass this array to the "NavBar" component*/}
        {/*23.3 we can either pass the "counters" array,*/}
        {/*23.4 or just the total number of counters (totalCounters).*/}
        {/*23.5 so the "NavBar" doesn't have to do the calculations. we can simply give it a number.*/}
        {/*23.6 we can also "filter" only the "counters" with value greater than 0. (23.16)*/}

        <NavBar //23.7 add the "NavBar" component
          //counters //23.3
          //totalCounters={this.state.counters.length} //23.4
          totalCounters={this.state.counters.filter( c => c.value > 0).length} //23.6 .length: get the total number of the "counters"
        />
        
        <main //24 add the "main" element
        className="container-fluid" /*24.1 set the class (fluid: the container spans the entire width of the viewport)*/> 
          
          {/*25 add the "Counters" element inside the "main" element.
          the "Counters" component is a controlled component, because it doesn't have any "state".
          it simply receives data (the counters array), and methods (onReset, onIncrement,onIncrement, onDelete) to modify the data, via "props".
          so it's entirely controlled by its parent ("App" component).*/}
          <Counters /*25.1 we raise events in the "Counters" component, such as "onReset", "onDelete", "onIncrement" and "handleDecrement"*/
            onReset = {this.handleReset} //pass a reference to the "handleReset" method
            onIncrement = {this.handleIncrement} //pass a reference to the "handleIncrement" method
            onDecrement = {this.handleDecrement} //pass a reference to the "handleDecrement" method
            onDelete = {this.handleDelete} //pass a reference to the "handleDelete" method
            //"onReset", "onDelete", "onIncrement" and "handleDecrement" are the 4 events raised by this component. they 're the properties of the "prop" object.
            counters = {this.state.counters} //25.2 pass the list of counters
            />
        </main>    
      </React.Fragment>
    );
  }
}

export default App;