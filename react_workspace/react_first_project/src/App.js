import { Component } from "react"
import HeadingClass from "./components/headingClass"

// function handleClick(){
//     console.log("Button is Clicked")
// }

// function handleInputChange(){
//     console.log("Someone is typing")
// }

// function onMouseEnter(){
//     console.log("Mouse has entered")
// }

// function HandleFocus(){
//     console.log("Input in Focus")
// }

class App extends Component{
    handleClick(){
        console.log("Button is Clicked")
    }
    
    handleInputChange(){
        console.log("Someone is typing")
    }
    
    onMouseEnter(){
        console.log("Mouse has entered")
    }
    
    HandleFocus(){
        console.log("Input in Focus")
    }

    render(){
        return(
            <>
            <HeadingClass />
            <button onClick={this.handleClick} id="button-1">Primary Button</button>
            <button onClick={this.handleClick} id="button-2">Secondary Button</button>
            <input onChange={this.handleInputChange} onMouseEnter={this.onMouseEnter} onFocus={this.HandleFocus}/>
            </>
        )
    }
}

export default App