import course from "../../data/db"
import { useAuth } from "../contexts/AuthContext";

const EachCourse = () => {
    const {courses, setCourse } = useAuth();
    return (
        <>
            {
                //course.find(data => data.name )
                course.map((data) => (
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