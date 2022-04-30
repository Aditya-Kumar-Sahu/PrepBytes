// function Banner() {
//     return(<h2>Here is the banner</h2>)
// }

// export default Banner


import { Component } from "react";

class Banner extends Component{

    state={
        bannerHeading: this.props.bannerHeading
    }

    static getDerivedStateFromProps(props, state){
        if (props.bannerHeading === "Banner has changed")
            return({bannerHeading: "This is the banner"})
        return null
    }

    render(){
        return(
            <>
                <h2>{this.state.bannerHeading}</h2>
            </>
        )
    }

    componentWillUnmount() {
        console.log("8. componentWillUnmount method is called")
    }
}

export default Banner