import React, { Component } from 'react';

class Counter extends Component {
    state = {
        // count: 0
            // count: this.props.value we changed to value becomes it more clean code.
            value: this.props.value
        // imageUrl: 'https://picsum.photos/200'
        // tags: ['tag1', 'tag2', 'tag3']
    }; // state includes any data that this component needs
    
    // styles = { // this is how you apply styles. but you can also use inline styles
    //     fontSize: 30,
    //     fontWeight: "bold"
    // you can use inline styles just by calling style in the span but use two curly braces, <span style= {{ fontSize: 30}}>
    // }
     // use a helper method to create conditional rendering

    //  renderTags () { // you can have your if and else statements. 
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    //  }

    // constructor() {
    //     super(); // this is not undefined at this point. We added a constructor using the super keyword to have access to the parent class.
    //     this.handleIncrement = this.handleIncrement.bind(this); // we can set the value of this. Bind method will return a new instance of the handle increment function and this is always referencing the current counter object.
    //     // this method returns a new function and we can get that function and reset handleIncrement.
    // }


    // handleIncrement() {
    //     console.log('Increment Clicked', this.state.count); // we need to increment the value of the count property. but we are going to get undefined, this is undefined, we don't have access to the state property.
        //in this event handler we don't have access to this. obj.method(), this if a function is called as part of a method in an object, this always returns a reference to that object.
        // function (); stand alone function if called without an objet reference, by default this returns a reference to the window object, if strict mode enabled this will return undefined. So we don't have access to this.
        // to solve this problem we use the bind method. In this event handler we don't have access to this. To bind event handlers. This is undefined in this method.
    // }

    // handleIncrement = product => { // inherits the keyword don't need bind method. Cleaner.
        handleIncrement = () =>  {  
    // this.state.count++; update the value of the count property, this is not going to work, it is being implement but it's not updating the view.
        // console.log(product);
        // this.props.value = 0;
        this.setState({ value: this.state.value + 1}); // so this method is telling react that we are updating the state, then it will figure out what part of the state is changed and based on that it will bring the DOM in sync with the virtual DOM.
    // we getting the current count incremented.
    // pass an object and the properties of this object will be merged with what we have on the state object or it will override these properties if they already exist. 
    };

    //Under the hood: when we press the increment button: we are calling this.setState method is telling react, the state of this component will change.
    // React will then schedule a call to the render method below. This is an asynchronous call. This method will return a new React element below. This element has two children
    // a span and a button below. Our virtual dom has the new tree in the virtual DOM and compare with the old DOM. To figure out what elements have been modified. It will see that the span is modified
    // because the count property has been added to the span. With this new information they will update the real browser DOM so it matches with what we have in the virtual DOM. Nowhere else in the DOM is updated only that span element.
    
    // Passing Event Arguments
    // Our handle increment does not take any parameters. but in real world applications we need to pass arguments with our events.  
    // For example, in the render method, we could be dealing with a list of products, when we click the handleIncrement button, we want to pass an idea of the product, but how to do this?
    // OnClick, you need to pass a function reference, we cannot call and pass an argument like (1) we need to pass a function reference. 
    // We can temporarily use another method as the one below using arrow function syntax.

    // DoHandleIncrement = () => {
    //     this.handleIncrement({ id: 1});  we no longer need this helper because of the inline function substituting this other solution which is messier.
    // };
    // now we can pass an argument with a product id of 1, now we can modify handleIncrement method, by adding a parameter, product, log in the console.
    // in the browser we can see product object which is the argument to handleIncrement. This is a simple solution but this is a messy solution.
    // a better solution is to write an inline function here. In the onClick instead of referencing to doHandleIncrement, we can pass an arrow function from doHandleIncrement. 
    // in between curly braces. When rendering a list of products in shopping cart, we have access to a product object though the map method, so instead of coding object ({ id:1}) we will pass a reference (product) that we are currenly rendering.
    // with this we no longer need doHandleIncrement helper method.
    // so whenever you want to pass an argument to your event handler, just pass an arrow function and in the body if that function called the event handler and pass an argument.
 


    render() { 
        // let classes = this.getBadgeClasses(); //depending on the value of the count property we want to add badge-warning or badge-primary to the classes string.
        // if this.state.count equals 0 we are going to append warning otherwise primary.
        // console.log('props', this.props);
        // every react component have a property called props, includes all the attributes in counters component. These attributes will be the properties of that props object and key will not be part of that. 
        // console.log(this.props);
        
        return ( //use fragment to remove div from the console.
        // in betweem the curly braces we can write any valid JS expression, something that produces a value.
        // for image, you want to source the value of the attribute dynamically.
        <React.Fragment>
            {/* {this.props.children}  */}
            {/* <h4>{this.props.id}</h4> */}
            {/* <img src={this.state.imageURL} alt=""/>  */}
            {/* <span style={this.styles} className ="badge badge-warning m-2">{this.formatCount()}</span>  */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}
            {/* <button onClick={this.DoHandleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}
            {/* <button onClick={ () => 
        this.handleIncrement({ id: 1})} 
            className="btn btn-secondary btn-sm"
            >
                Increment
            </button> */}
            <button onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
            {/* onClick, we are not calling this method we are just passing a reference to it.}
            {/* <ul> 
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} 
            </ul> */}
            {/* {this.renderTags()} 
            {this.state.tags.length === 0 && "Please add a new tag"} */}
            </React.Fragment>
            // we can write a condition in the render method, we could render it here, this is rendered only if the array is empty. first value is a boolean and second value is a string. You can apply the logical operator && with none boolean values.

            //How to render a list of items.
        ); // we can use the map method to map each element into a react element, we can render a list of elements. We get each tag and map it to a list item, we are getting a string and maping it with JSX expression. Then you want to render the tag dynamically so we add curly braces and render the tag.
    } // then it has to uniquely identify each element in this list. by using a key. Each item on a given list, should have a key that is unque only in that list.
    // used refactor menu control/shift/R "extract to method in class" type the name of the method, get a name getBadgeClasses, always use descriptive name that shows the intention of the code.
    getBadgeClasses() { 
        let classes = "badge m-2 badge-"; // we are using let because we cannot modify a const.
        classes += this.state.value === 0 ? "warning" : "primary"; //depending on the value of the count property we want to add badge-warning or badge-primary to the classes string.
        return classes;
    }

// // we want to check the value of the count property
    formatCount() {
        const { value } = this.state; // improve code repetition with object destructuring.
        // so we picking count property of this object and storing in a separate const called count.
        return value === 0 ? 'Zero' : value;
        // return this if it equals zero return label zero otherwise this.state.count.
    }
}
 


export default Counter;