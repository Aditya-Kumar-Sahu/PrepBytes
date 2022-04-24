import './../styles/heading.css'

function Heading() {

    let isUserRegistered = true

    let headingClass

    if (isUserRegistered)
        headingClass="main-heading"
    else 
        headingClass="main-heading-2"    


    return(
        <>
            <h1 className={headingClass}>Welcome to React</h1>
            <p className="para-style">React is very interesting. You'll love it</p>
            <button>Click Me</button>
            <div>
                <h2>Hope you are fine</h2>
            </div>
        </>        
    )
}

export default Heading