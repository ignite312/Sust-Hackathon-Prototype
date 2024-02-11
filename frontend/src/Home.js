import { useEffect, useState } from "react";

const Home = () => {
    const [students, setStudents] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/students').then(res => {
            return res.json();
        }).then(data => {
            setStudents(data);
        });
    }, []);

    if(students){
        return (
            <div>
                <div className="homestudents">
                    {students.map((student) => (
                        <div className="students" key={student.id}>
                            <h2>Name: {student.name}</h2>
                            <h3>Age: {student.age}</h3>
                            <p>Grade: {student.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;