import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const AnimalForm = () => {
    const navigate = useNavigate();
    const [race, setRace] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let name, age, animalRace;

    useEffect(() => {
        axios.get("http://localhost:8082/animal-management/api/race")
            .then((result) => {
                setRace(result.data);
                animalRace = result.data[0];
                //animalRace = ;
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (race.length > 0) {
            setIsLoaded(true)
            console.log(race)
        }
        console.log(race.length);
    }, [race])
    return (
        <div>
            {isLoaded == true ?
                <div className="add-container">
                    <form className="login-form">
                        <div className="form-group">
                            <label >Animal Name</label>
                            <input onChange={(e) => {
                                name = e.target.value;
                            }} type="text" className="form-control" />

                        </div>
                        <div className="form-group">
                            <label >Age</label>
                            <input onChange={(e) => {
                                age = e.target.value;
                            }} type="number" className="form-control" />

                        </div>
                        <div className="form-group mt-3">
                            <label className="mr-3" >Breed : </label>
                            <select className="form-control" onClick={(e) => {

                                console.log(e.target.value)
                                animalRace = JSON.parse(e.target.value);
                            }} className="custom-select custom-select-lg mb-3">
                                {race.map(r => {
                                    console.log(r);
                                    return <option value={JSON.stringify(r)}>{r.raceName}</option>
                                })}

                            </select>
                        </div>
                        <div className="button">

                        <button  type="submit" onClick={(e) => {
                            e.preventDefault();
                            console.log(name);
                            console.log(age);

                            if (animalRace == undefined) {
                                animalRace = race[0];
                            }
                            console.log(animalRace)
                            axios.post("http://localhost:8082/animal-management/api/animal",
                                {
                                    "name": name,
                                    "age": age,
                                    "race": animalRace
                                })
                                .then((result) => {
                                    console.log(result)
                                    navigate('/animals')
                                })
                                .catch((err) => {
                                    console.log(err)
                                })

                        }} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>


                : <div class="alert alert-warning" role="alert">
                    <Link to="/add-race">You need to add Breed</Link>
                </div>
            }</div>
    );
}

export default AnimalForm;