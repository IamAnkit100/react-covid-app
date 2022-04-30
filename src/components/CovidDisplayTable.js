import React from 'react'

export default function CovidDisplayTable(props) {
    return (
        <>
            <div className="container my-4">
                <table className="table table-striped table-responsive{-sm|-md|-lg|-xl}">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">State</th>
                            <th scope="col">recovered</th>
                            <th scope="col">active</th>
                            <th scope="col">confirmed</th>
                            <th scope="col">deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((data,index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{data.state}</td>
                                        <td style={{color :"green"}}>{data.recovered}</td>
                                        <td>{data.active}</td> 
                                        <td>{data.confirmed}</td>
                                        <td style={{color :"red"}}>{data.deaths}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
