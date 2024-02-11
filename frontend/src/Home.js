import { useState } from "react";

const Home = () => {
    const [students, setStudents] = useState([
        {
            id: "12",
            name: "Emon"
        },
        {
            id: "13",
            name: "tousif"
        }
    ]);

    return (
        <div className="home">
            <h2>Home Page</h2>
            {students.map((student) => (
                <div className="info-preview" key={student.id}>
                    <h1>{student.id}</h1>
                    <p>{student.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;