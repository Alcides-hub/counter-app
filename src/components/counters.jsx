import React, { Component } from 'react';
import Counter from "./counter";

class  Counters extends Component {
    state = {  
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 3},
            {id: 3, value: 2},
            {id: 4, value: 1}
        ]
    };


    //you want to add multiple counter components, this is going to be the container with all our counters because we want to return a single element from the render method. so you need to import the counter component.
    // instead of hard coding each counter in the render method, we can add an array of counter objects to our state property and render them using the map method. Each counter and map it to a counter component and we set key property to counter.id
    // each counter will have it's own state. Value is not applied to this counter component. How to fix it?
    // passing data to our components: we can add more attributes to our map method.  
    // we add a couple of attributes in the render method. 
    // in the browser, we can see 4 messages we have 4 counter components, props object with 2 properties, value which we set to 4, we can read this value and initialize each counter component. So in the counter component, check. 
    // we are going to set the state for this, we are going to set it to : this.props.value. now in the browser you can see counter component is initialized. So now you are passing data to your components.
    // Sum: attributes are passed to our component using a single JS object called props. We have a special prop called children and we use that when we went to pass something between the opening and closing tag of an element.
    // Sometimes we want to add content in between an opening and closing tag of an element. 
    // In a Real world example, instead of the counter component you have a dialog box component, you want to allow the consumer of that component to pass content to be rendered on the dialog box. how to do this?
    // In the counter component, you add the content using h4 element, in the browser you can see the children H4, you can render this in the return method, {this.props.children}, you can also do this dynamic. <h4>Counter #{counter.id}</h4> but you can also
    // we dont really have to use the children we could simply pass the id as another attribute in the counter component, and in the counter component, we could render simply render an h4 that includes this.props.id. It's the same thing as the previous solution.
    // but in real world examples, you want to pass complex elements to a child component such as dialog box, we are going to use the children props in thos cases. 
    // passing children: 
    // difference between props and state. In our count component, we are using props to initialize the state, props includes data that we give to a component whereas state includes data that is local or private to that component it's internal to that component.
    // all the attributes shown on the counter component below, these attributes are part of the props, they input to the component, we cannot access this state of this component, the state is local and internal to that component.
    // similarly, this counters component has it's own local state, which is completely invisible to other components. sometimes a component may not have a state it may get all data that it needs via props. Props is read-only we cannot change the input to this component inside of this component.
    // if we type the code for trying to change the props, we type for example: this.props.value = 0 in the handleIncrement of counter component, we cannot get the value if we click the increment button, cannot change the properties. 
    // if we need to modify that input during the lifecycle of that component, then we need to get that input and put it in the state, our counter component has it's own local state so we can modify this value in our handleIncrement button.
    // we have done this by adding the value to the state and modifying it in incrementHandle. 


    render() { 
        return (
            <div> 
                {/* <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
                {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.value} id={counter.id}> 
                {/* <h4>Counter #{counter.id}</h4> */}
                </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;