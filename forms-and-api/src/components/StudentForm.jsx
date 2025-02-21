import React, { useState } from 'react';

function StudentForm() {
    //const [result, setResult] = useState(null);
    const [student, setStudent] = useState({ title: '', id: '', feedback: '' });
    const [studentDB, setStudentDB] = useState([]);

    const handleStudent = (event) => {
        setStudent(prevStudent => ({ ...prevStudent, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setStudentDB(prevStudentDB => [...prevStudentDB, student]);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: student.title, userId: student.id, body: student.feedback })
        })
            .then(response => { return response.json() })
            .then(
                data => {
                    console.log(data);
                    //setResult(data);
                }
            )

        setStudent({ title: '', id: '', feedback: '' })
    }

    return (
        <>
            <div className='p-4'>
                <h1>Student Feedback Form</h1>
                <form onSubmit={handleSubmit} className=''>

                    <input type="text" name="title" value={student.title} onChange={handleStudent} required placeholder='Please enter title' className='m-2' />
                    <br />

                    <input type="number" name="id" value={student.id} onChange={handleStudent} required placeholder='Please enter user ID' className='m-2' />
                    <br />

                    <textarea name="feedback" value={student.feedback} onChange={handleStudent} placeholder='Please enter your feedback' className='m-2' style={{ width: 400, height: 100 }} />
                    <br />

                    <input type="submit" value="Submit" className='m-2 btn btn-dark' />
                </form>
                <br />
                <h2 className='mb-4'>Feedback Database</h2>
                <table border="1" className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>UserID</td>
                            <td>Feedback</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentDB.map((stu, index) => (
                                <tr key={index}>
                                    <td>{stu.title}</td>
                                    <td>{stu.id}</td>
                                    <td>{stu.feedback}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default StudentForm