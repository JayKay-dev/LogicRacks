import React, { useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([]);

    fetch('')
        .then()
        .then()

    return (
        <>
            <h1>Posts</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Detail</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            Posts.map(item => {
                                return (
                                    <>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.detail}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Posts