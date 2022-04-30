// import './../styles/heading.css'

// function Heading() {

//     let isUserRegistered = true

//     let headingClass

//     if (isUserRegistered)
//         headingClass="main-heading"
//     else 
//         headingClass="main-heading-2"    


//     return(
//         <>
//             <h1 className={headingClass}>Welcome to React</h1>
//             <p className="para-style">React is very interesting. You'll love it</p>
//             <button>Click Me</button>
//             <div>
//                 <h2>Hope you are fine</h2>
//             </div>
//         </>        
//     )
// }

// export default Heading




// function Heading(props){
//     console.log(props)
//     return(
//         <>
//             <h1>{props.heading}</h1>
//         </>
//     )
// }

// export default Heading



import { Component } from "react";

class Heading extends Component {

    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        return (
            <>
                <h1>{this.props.heading}</h1>
            </>
        )}
}

export default Heading