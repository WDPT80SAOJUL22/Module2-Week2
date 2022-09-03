import { useState, useEffect } from 'react'
import axios from 'axios'

const ApartmentList = () => {
    const [loading, setLoading] = useState(true)
    const [apartaments, setApartaments] = useState([])

    useEffect(() => {
        console.log('use Effect - Initial rendering')
        axios.get('https://ironbnb-m3.herokuapp.com/apartments')
            .then(response => {
                setApartaments(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h3>List of Apartaments</h3>
            {loading && <p>Loading...</p>}
            {apartaments.map(apartament => {
                return (
                    <div key={apartament._id} className="card">
                        <img src={apartament.img} alt="apartment" />
                        <h3>{apartament.title}</h3>
                        <p>Price: {apartament.pricePerDay}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ApartmentList