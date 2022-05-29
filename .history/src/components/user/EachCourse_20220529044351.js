import course from "../../data/db"
import { useAuth } from "../contexts/AuthContext";

const EachCourse = () => {
    const selectedCourse = localStorage.getItem('Course');
    let courseInfo = course.find(data => data.name.toUpperCase() === selectedCourse.toUpperCase() );
    console.log(selectedCourse);
    console.log(courseInfo);
    return (
        <>           
                <div className="container">
                    <h1 className="text-4xl text-center mt-4">
                        Introduction to {
                            courseInfo.name
                        } 
                    </h1>
                    <p className="text-center mt-4">
                        {
                            courseInfo.details.intro
                        }
                    </p>
                    <p>
                        {
                            courseInfo.details.branches.map(data => {
                                return data
                            })
                        }
                    </p>
                </div> 
        </>
    );
}
 
export default EachCourse;