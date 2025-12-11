import { useState } from "react"
import axios from "axios"

function DriverAssign()
{
    const[form,setform]=useState(
        {
            name:"",
            email:"",
            cabtype:"cab"
        }
    )
    const change = (e) =>
    {
      setform({...form,[e.target.name]:e.target.value})
    }
    const submit =async (e) =>
    {
        e.preventDefault();
        if (!form.cabtype) {
            alert("Please select a cab type");
            return;
        }
        try
        {
        const result=await axios.post("http://localhost:8081/api/admin/assign", form)
        console.log(result)
        console.log(result.data)
        alert(result.data)
        }
    catch(err)
    {
        console.log(err)
        alert(err.response.data);
    }
}
    return (
        <>
        <h1>Wellcome Registration Page</h1>
        <p>name:{form.name}</p>
        <p>email:{form.email}</p>
        <form onSubmit={submit}>
            <label>name</label>
            <input onChange={change} type="text" name="name" placeholder="enter name"/><br></br>
            <label>email</label>
            <input onChange={change} type="email" name="email" placeholder="enter email"/><br></br>
            <label>cabtype:</label><br/>
           <select name="cabtype" value={form.cabtype} onChange={change} required>
                <option value="">-- Select Cab Type --</option>
                <option value="Cab">Cab</option>
                <option value="Van">Van</option>
            </select>

            <button type="submit">assign</button>
            
        </form>
        </>

    )
}
export default DriverAssign