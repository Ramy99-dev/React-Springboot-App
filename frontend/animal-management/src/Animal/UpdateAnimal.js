import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation , useNavigate } from "react-router-dom";
const UpdateAnimalForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [race, setRace] = useState([]);
    const [animal,setAnimal] = useState(null);
    const [currentRace , setCurrentRace]=useState({})
    let id, name , age ,animalRace;


    useEffect(() => {
        name = location.state.animal.name;
        age = location.state.animal.age;
        id = location.state.animal.id;
        animalRace = location.state.animal.race;
  
        let newAnimal = {id,name,age,animalRace};
        setCurrentRace(location.state.animal.race)
        setAnimal(newAnimal);
        console.log(animal)
        console.log(name)
        axios.get("http://localhost:8082/animal-management/api/race")
            .then((result) => {
                setRace(result.data); 
                console.log(race);
            }).catch(err => console.log(err))
    }, [])


    
    return (
        <div>
           
          {(animal && race?.length>0) && <div className="container">
            <form>
            <div className="form-group">
                    <label >ID</label>
                    <input disabled value={animal?.id} onChange={(e)=>{
                           id=e.target.value;
                    }} type="text" className="form-control" placeholder="Enter email" />
                   
                </div>
                <div className="form-group">
                    <label >Nom</label>
                    <input value={animal?.name} onChange={(e)=>{
                           let newAnimal = {...animal};
                           newAnimal.name=e.target.value;
                           setAnimal(newAnimal);

                    }} type="text" className="form-control" placeholder="Enter email" />
                    
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input value={animal?.age} onChange={(e)=>{
                        let newAnimal = {...animal};
                        newAnimal.age=e.target.value;
                        setAnimal(newAnimal);
                 
                    }} type="number" className="form-control" placeholder="Enter email" />
                    
                </div>
                <div className="form-group">
                <label >Race : </label>
                <select onClick={(e)=>{
                     let newAnimal = {...animal};
                     newAnimal.animalRace=e.target.value;
                     setAnimal(newAnimal);
                    
                }} className="custom-select custom-select-lg mb-3">
                    <option value={JSON.stringify(animal?.animalRace?.raceName)}>{animal.animalRace.raceName}</option>
                    {race.map(r=>{
                        console.log(currentRace)
                        console.log(r)
                        console.log("test",currentRace?.raceName == r.raceName)
                        if(currentRace?.raceName != r.raceName)
                        {

                            //console.log("Race Name ", animal.animalRace.raceName)
                            return <option value={JSON.stringify(r) }>{r.raceName}</option>
                        }
                       
                    })}
                </select>
                </div>

                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                   

                   axios.put("http://localhost:8082/animal-management/api/animal",
                   {
                       "id":animal.id,
                       "name":animal.name,
                       "age":animal.age,
                       "race":animal.animalRace
                   })
                   .then((result)=>{
                       console.log(result)
                       navigate('/animals')
                   })
                   .catch((err)=>{
                       console.log(err)
                   })
                   
                }} className="btn btn-primary">Submit</button>
            </form>
          </div>    }
           
          </div>
    );
}

export default UpdateAnimalForm;