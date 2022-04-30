// function Banner() {
//     return(<h2>Here is the banner</h2>)
// }

// export default Banner


import { Component } from "react";

class Banner extends Component{


    render(){
        return(
            <>
                <h2>Banner</h2>
            </>
        )
    }

    componentWillUnmount() {
        console.log("8. componentWillUnmount method is called")
    }
}

export default Banner