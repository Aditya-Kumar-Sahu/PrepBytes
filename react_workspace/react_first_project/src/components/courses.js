import CourseItem from "./courseItem"

function Courses(props){
    console.log(props)
    return(
    <>
        {props.courseList.map(item => (
            <CourseItem key={item.id} courseDetails={item}/>
        ))}
    </>
    )
}

export default Courses