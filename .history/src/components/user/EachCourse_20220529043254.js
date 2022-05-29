import course from "../../data/db"
import { useAuth } from "../contexts/AuthContext";

const EachCourse = () => {
    const selectedCourse = localStorage.getItem('Course');
    let courseInfo = course.find(data => data.name.toUpperCase() === selectedCourse.toUpperCase() );
    console.log(selectedCourse);
    console.log(courseInfo);
    return (
        <>
            {
                
                courseInfo.map((data) => (
                    <div className="container" key={data.id}>
                        <h1 className="text-4xl text-center">
                            Introduction to {
                                data.name
                            }
                        </h1>
                    </div>
                ))            
            }
        </>
    );
}
 
export default EachCourse;