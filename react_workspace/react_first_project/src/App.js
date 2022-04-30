// import { Component } from "react"
// // import HeadingClass from "./components/headingClass"

// // function handleClick(){
// //     console.log("Button is Clicked")
// // }

// // function handleInputChange(){
// //     console.log("Someone is typing")
// // }

// // function onMouseEnter(){
// //     console.log("Mouse has entered")
// // }

// // function HandleFocus(){
// //     console.log("Input in Focus")
// // }

// class App extends Component{
//     // handleClick(){
//     //     console.log("Button is Clicked")
//     // }
    
//     // handleInputChange(){
//     //     console.log("Someone is typing")
//     // }
    
//     // onMouseEnter(){
//     //     console.log("Mouse has entered")
//     // }
    
//     // HandleFocus(){
//     //     console.log("Input in Focus")
//     // }

//     // constructor(){
//     //     super();    //links to parent class's constructor
//     //     this.handleClick = this.handleClick.bind(this)  //arrow function not needed if constructor have this line
//     // }

//     state = {
//         counter: 1,
//         heading: "Welcome to React"
//     }

//     handleClick = () => {       //to avoid 'this not defined' error. Arrow function is most preferable
//         let localcounter = this.state.counter
//         this.setState({
//             counter: localcounter+1,
//             heading: "Learning states in React"
//         })
//     }

//     render(){
//         return(
//             <>
//             {/* <HeadingClass />
//             <button onClick={this.handleClick} id="button-1">Primary Button</button>
//             <button onClick={this.handleClick} id="button-2">Secondary Button</button>
//             <input onChange={this.handleInputChange} onMouseEnter={this.onMouseEnter} onFocus={this.HandleFocus}/> */}

//             <h1>{this.state.heading}</h1>
//             <button onClick={this.handleClick}>Add</button>
//             {/* instead of using arrow function <button onClick={this.handleClick.bind(this)}>Add</button> */}
//             {/* instead of using arrow function <button onClick={(event)=>this.handleClick(event)}>Add</button> */}
//             <p>{this.state.counter}</p>
//             </>
//         )
//     }
// }

// export default App





// import { Component } from "react";
// import Courses from "./components/courses";
// import Heading from "./components/heading";
// import CourseJson from "./courses.json";

// class App extends Component{

//     state={
//         heading: "Welcome to interesting world of React",
//         courseList: CourseJson,
//     }

//     render(){
//         return(
//             <>
//             <Heading heading={this.state.heading}/>
//             <Courses courseList={this.state.courseList}/>
//             </>
//         )
//     }
// }

// export default App




import React, { Component } from "react";
import Banner from "./components/banner";

class App extends Component{

    constructor(){
        super();
        console.log("1. constructor method is called")
        this.state={
            heading: "Welcome to React",
            isBannerVisible: true,
            bannerHeading: "Banner",
        }
    }

    handleClick = () => {
        this.setState({
            heading: "Hope you are learning React",
            // isBannerVisible: false,
            bannerHeading: "Banner has changed"
        })
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedFromProps", props, state)
        console.log("2. getDerivedFromProps method is called")
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("5. shouldComponentUpdate method is called")
        return true
    }

    render(){
        console.log("3. render method is called")
        return(
            <> 
               <h1>{this.state.heading}</h1>
               <button onClick={this.handleClick}>Click Me</button>
               {this.state.isBannerVisible?<Banner bannerHeading={this.state.bannerHeading} />: null}
            </>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("7. getSnapshotBeforeUpdate method is called")

        let heading=prevState.heading
        console.log("getSnapshotBeforeUpdate heading stored", heading)
        return heading
    }

    componentDidMount(){
        // data feching from backend (important)
        console.log("4. componentDidMount method is called")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevState, snapshot)
        console.log("6. componentDidUpdate method is called")
    }
}

export default App;