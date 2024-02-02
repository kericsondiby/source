import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
    const [id, setId] = useState()

    useEffect(() => {
        let url = window.location
        console.log("Url: ", url.pathname.split("/")[2]);
        setId(url.pathname.split("/")[2])

    }, [])
    return (
        <><div className='container'>
            <div>Details : {id}</div>

            
                <Link to={"/"} className='btn btn-success' >Acceuil</Link>
            </div>
        </>

    )
}

export default Details