

function CourseItem (props){
    return(
        <>
        <h3>{props.courseDetails.heading}</h3>
        <p>{props.courseDetails.description}</p>
        </>
    )
}

export default CourseItem