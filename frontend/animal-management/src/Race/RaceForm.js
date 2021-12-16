import axios from "axios";
import { useNavigate } from "react-router";
import TopNav from "../TopNav";
const RaceForm = () => {

    const navigate = useNavigate();
    let name, description;


    return (
       <div className="race-container">
           <TopNav/>
        <div className="race-form-container">
            <form className="race-form">
                <div className="form-group">
                    <label >Animal Breed</label>
                    <input onChange={(e) => {
                        name = e.target.value;
                    }} type="text" className="form-control"  />
                  
                </div>
                <div class="form-group">
                    <label >Description</label>
                    <textarea onChange={(e)=>{
                        description = e.target.value;
                    }} className="form-control"  rows="3"></textarea>
                </div>
               
                <div className="button">

                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                

                    axios.post("http://localhost:8082/animal-management/api/race",
                        {
                            "raceName": name,
                            "description": description,
                            
                        })
                        .then((result) => {
                            console.log(result)
                            navigate('/race')
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                }} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
       </div>
    );
}

export default RaceForm;