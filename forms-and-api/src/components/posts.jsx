import React, { useEffect, useState } from 'react'

function posts() {
    return (
        <>
            <div className="row">
                <div className="col-md-6" style='height: 600px;'>
                    <h1>Posts</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Options</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((item) => {
                                    let a = item.id;

                                    return (
                                        <>
                                            <tr key={a}>
                                                <td>{a}</td>
                                                <td>item.title</td>
                                                <td><input type="button" value="View" onClick={() => viewDetails(a)} /></td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default posts