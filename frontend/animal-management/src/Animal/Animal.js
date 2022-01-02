import axios from "axios";
import { useState, useEffect } from "react";
import { Link ,useNavigate  } from "react-router-dom";
import TopNav from "../TopNav";
import './animal.css';
const Animal = () => {
    let navigate = useNavigate();
    const [animals, setAnimals] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let [isAdmin , setIsAdmin] = useState(false)
    let [inputsearch , setInputSearch] = useState('')
    let searchOption = 'animal';
    let initialData=[];
    useEffect(() => {

        axios.get("http://localhost:8082/animal-management/api/animal")
            .then((result) => {
                setAnimals(result.data);
                initialData = result.data;
                console.log('INITIAL')
                console.log(initialData)
                console.log(result.data.user.roles.includes('ADMIN'))
                if(result.data.user.roles.includes('ADMIN'))
                {
                    setIsAdmin(true)
                }
                console.log(animals);
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (animals.length > 0) {
            setIsLoaded(true)
            console.log(animals)
        }
        else{
            setIsLoaded(false)
        }
        console.log(animals.length);
    }, [animals])

    



    return (
       
        <div className="animal-container">
        <TopNav/>
        
      
        <div class="data-table">

            <input type="text" placeholder="Search ... " onChange ={(e)=>{
                 if(e.target.value =="")
                 {
                     axios.get(`http://localhost:8082/animal-management/api/animal`)
                     .then((result)=>setAnimals(result.data))
                     .catch((err)=>setAnimals(initialData))
                 }
                   setInputSearch(e.target.value);

            }}/>
                <select className="search-options" onChange={(e)=>{
                     
                      searchOption = e.target.value;
                      
                }}>
                    <option value="animal">By Animal Name</option>
                    <option value="breed">By Breed Name</option>
                </select><button onClick={()=>{
                    console.log(inputsearch)
                    console.log(searchOption)
                   if(inputsearch !='')
                   {
                    if(searchOption == "breed")
                    {
                   
                        axios.get(`http://localhost:8082/animal-management/api/animal/findByRace/${inputsearch}`)
                        .then((result)=>{console.log(result.status)
                            setAnimals(result.data)})
                        .catch((err)=>setAnimals(initialData))
                    }
                    else
                    {
                        axios.get(`http://localhost:8082/animal-management/api/animal/findByName/${inputsearch}`)
                        .then((result)=>setAnimals(result.data))
                        .catch((err)=>setAnimals(initialData))
                    }
                   }
                    
                }}>Search</button><br/>
           {isAdmin &&   <div><Link to="/add-animal"><button className="btn btn-warning">Add Animal</button></Link></div>}
            {isLoaded == true ?
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Race</th>
                           { isAdmin &&  <th>Delete</th>}
                           { isAdmin &&  <th>Update</th>}
                        </tr>
                    </thead>
                    <tbody>
                      {animals.length>0 ?animals.map((animal,index)=>{
                          console.log()
                       return  <tr key={animal.id}>
                                  <th scope="row">{animal.id}</th>
                                  <td>{animal.name}</td>
                                  <td>{animal.age}</td>
                                  <td>{animal.race?.raceName}</td>
                                  {isAdmin && <td><button className="btn btn-danger" onClick={(e)=>{
                                      e.preventDefault();
                                      axios.delete(`http://localhost:8082/animal-management/api/animal/${animal.id}`)
                                      .then((result)=>{
                                    
                                          let animalsCopy = [...animals];
                                           animalsCopy.splice(index,1)
                                          setAnimals(animalsCopy)
                                      })
                                      .catch(err=>console.log(err))
                                  }}>Delete</button></td>}
                                  { isAdmin &&  <td><button className="btn btn-success" onClick={()=>{
                                   navigate('/update-animal',{state:{'animal':animal}})
                                }}>Update</button></td>}
                               </tr>
                     }): <p>No Data found</p>}
                        
                    </tbody>
                </table>
               
            :<div class="alert alert-warning" role="alert">
             No Data Found !
          </div>}


        </div>
        </div>
    );
}

export default Animal;