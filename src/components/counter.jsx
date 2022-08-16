import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
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

    handleIncrement = () => { // inherits the keyword don't need bind method. Cleaner.
        // this.state.count++; update the value of the count property, this is not going to work, it is being implement but it's not updating the view.
        this.setState({count: this.state.count + 1}); // so this method is telling react that we are updating the state, then it will figure out what part of the state is changed and based on that it will bring the DOM in sync with the virtual DOM.
    // we getting the current count incremented.
    // pass an object and the properties of this object will be merged with what we have on the state object or it will override these properties if they already exist. 
    };


    render() { 
        // let classes = this.getBadgeClasses(); //depending on the value of the count property we want to add badge-warning or badge-primary to the classes string.
        // if this.state.count equals 0 we are going to append warning otherwise primary.
        
        return ( //use fragment to remove div from the console.
        // in betweem the curly braces we can write any valid JS expression, something that produces a value.
        // for image, you want to source the value of the attribute dynamically.
        <React.Fragment> 
            {/* <img src={this.state.imageURL} alt=""/>  */}
            {/* <span style={this.styles} className ="badge badge-warning m-2">{this.formatCount()}</span>  */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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
        classes += this.state.count === 0 ? "warning" : "primary"; //depending on the value of the count property we want to add badge-warning or badge-primary to the classes string.
        return classes;
    }

// // we want to check the value of the count property
    formatCount() {
        const { count } = this.state; // improve code repetition with object destructuring.
        // so we picking count property of this object and storing in a separate const called count.
        return count === 0 ? 'Zero' : count;
        // return this if it equals zero return label zero otherwise this.state.count.
    }
}
 


export default Counter;