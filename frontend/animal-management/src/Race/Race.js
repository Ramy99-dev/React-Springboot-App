import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './race.css';
const Race = () => {
    let navigate = useNavigate();

    const [race, setRace] = useState([]);
    let [isAdmin , setIsAdmin] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:8082/animal-management/api/race")
            .then((result) => {
                setRace(result.data);
                if(result.data.user.roles.includes('ADMIN'))
                {
                    setIsAdmin(true)
                }
            }).catch(err => console.log(err))
    }, [])




    return (
        <div className="race-container">
        <div class="data-table">
           {isAdmin &&  <Link to="/add-race"><button className="btn btn-warning">Add Breed</button></Link>}
            {(race.length > 0) ?
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            {isAdmin && <th>Delete</th>}
                            {isAdmin && <th>Update</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {race?.map((r, index) => {
                            console.log()
                            return <tr key={r.id}>
                                <th scope="row">{r.id}</th>
                                <td>{r.raceName}</td>
                                <td>{r.description}</td>
                                {isAdmin && <td><button className="btn btn-danger" onClick={(e) => {
                                    e.preventDefault();
                                    axios.delete(`http://localhost:8082/animal-management/api/race/${r.id}`)
                                        .then((result) => {
                                            console.log(result)
                                            let raceCopy = [...race];
                                            raceCopy.splice(index, 1)
                                            setRace(raceCopy)
                                        })
                                        .catch(err => console.log(err))
                                }}>Delete</button></td>}
                                {isAdmin && <td><button className="btn btn-success" onClick={() => {
                                    navigate('/update-race', { state: { 'race': r } })
                                }}>Update</button></td>}


                            </tr>
                        })}

                    </tbody>
                </table> : <div class="alert alert-warning" role="alert">
                   No Data Found
                </div>}
                </div>



        </div>
    );
}

export default Race;