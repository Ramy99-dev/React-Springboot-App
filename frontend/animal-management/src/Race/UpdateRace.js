import axios from "axios";
import { useLocation , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const UpdateRaceForm = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [race, setRace] = useState({})
    let id, raceName, description;

    useEffect(() => {


        ({ id, raceName, description } = location.state.race);
        let newRace = { id, raceName, description };
        setRace(newRace);

    }, [])


    return (

        <div className="container">
            <form>
                <div className="form-group">
                    <label>ID</label>
                    <input value={race?.id} disabled type="text" className="form-control" placeholder="Enter email" />
                    <label >Nom</label>
                    <input value={race?.raceName} onChange={(e) => {
                        let newRace = { ...race };
                        newRace.raceName = e.target.value;
                        setRace(newRace)
                    }} type="text" className="form-control" placeholder="Enter email" />
                    
                </div>
                <div class="form-group">
                    <label >Description</label>
                    <textarea value={race?.description} onChange={(e) => {
                        let newRace = { ...race };
                        newRace.description = e.target.value;
                        setRace(newRace)
                    }} className="form-control" rows="3"></textarea>
                </div>


                <button type="submit" onClick={(e) => {
                    e.preventDefault();


                    axios.put("http://localhost:8082/animal-management/api/race",
                        {
                            "id":race.id,
                            "raceName": race.raceName,
                            "description": race.description,
                            
                        })
                        .then((result) => {
                            console.log(result)
                            navigate('/race')

                        })
                        .catch((err) => {
                            console.log(err)
                        })

                }} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UpdateRaceForm;