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
                    <h1 className="text-4xl text-center mt-6">
                        Introduction to {
                            courseInfo.name
                        } 
                    </h1>
                    <p className="text-center mt-4">
                        {
                            courseInfo.details.intro
                        }
                    </p>
                    <h2 className="text-2xl text-center mt-2">
                        Branches
                    </h2>
                        {
                            courseInfo.details.branches.map(data => {
                                return <p className="text-center mt-2" key={data}>
                                    {
                                        data
                                    }
                                </p>
                            })
                        }
                </div> 
        </>
    );
}
 
export default EachCourse;