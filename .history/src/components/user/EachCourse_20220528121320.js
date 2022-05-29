import course from "../../data/db"

const EachCourse = () => {
    return (
        <>
            {
                course.map((data) => (
                    <div className="container" key={data.id}>
                        <h1 className="text-4xl text-center">
                            Introduction to {
                                course.name
                            }
                        </h1>
                    </div>
                ))            
            }
        </>
    );
}
 
export default EachCourse;