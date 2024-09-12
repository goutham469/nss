import React, { useEffect, useState } from 'react'
import './UpdateWebsite.css'
import { MdDelete } from "react-icons/md";


function RoolsList()
{
  let [rools,setRools] = useState([])
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/all-roolsList`)
    .then(data=>data.json())
    .then(data=>{
      setRools(data)
    })
    .catch(err=>{alert("no internet connection !")})
  },[])

  function deleteRoolNo(rollNo)
  {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/delete-rollNo`,
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({rollNo:rollNo})
      }
    )
    .then(data=>data.json())
    .then(data=>{
      console.log(data)
      if(data.acknowledged)
      {
        alert(`${data.deletedCount} rools deleted`)
      }
      else{
        alert("could not perform action !")
      }
    })
    .catch(err=>{alert("no internet connection !")})
  }
  return <div>
    <center><b>All rools list</b></center>
    <table  className='rools-list-table'>
      <thead>
        <th className='rools-list-td'>s.no</th>
        <th className='rools-list-td'>rool no</th>
        <th className='rools-list-td'>domain</th>
        <th className='rools-list-td'>year</th>
        <th className='rools-list-td'>actions</th>
      </thead>
      <tbody>
        {
          rools.map((data,idx)=><tr>
            <td className='rools-list-td'>{idx+1}</td>
            <td className='rools-list-td'>{data.rollNo}</td>
            <td className='rools-list-td'>{data.domain}</td>
            <td className='rools-list-td'>{data.year}</td>
            <td className='rools-list-td'>
              <center>
                <MdDelete size={25} color='red' onClick={()=>deleteRoolNo(data.rollNo)}/>
              </center>
            </td>
          </tr>)
        }
      </tbody>
    </table>
  </div>
}

function AddRoolNo()
{
    const [formData, setFormData] = useState({ rollNo: "", domain: "", year: "" });

    function validate() {
      if (!formData) return false;

      if (!formData.rollNo) {
        alert("Roll number is required");
        return false;
      }

      if (!formData.domain) {
        alert("Domain is required");
        return false;
      }

      if (!formData.year) {
        alert("Year is required");
        return false;
      }

      const yearFormat = /^\d{4}-\d{4}$/;
      if (!yearFormat.test(formData.year)) {
        alert("Year format should be yyyy-yyyy");
        return false;
      }

      return true;
    }

      async function handleAddRollNo(event) {
        event.preventDefault();
        if (validate()) {
          try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/add-rollNo`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({
                rollNo: formData.rollNo,
                domain: formData.domain,
                year: formData.year
              })
            });
            
            const data = await response.json();
            
            if (data.messsage === "inserted") {
              alert("Roll number added");
            } else {
              alert("Roll number already exists.");
            }
          
            setFormData({ rollNo: "", domain: "", year: "" });
          } catch (err) {
            console.error(err);
          }
          
        }
      }
  return <div style={{ margin: "100px", padding: "20px", backgroundColor: "#454545", borderRadius: "20px", width: "fit-content" }}>
            <b>Add volunteer's roll number</b>
            <br />
            <br />
            <form>
              <label>Roll number [all-lowercase]</label><br />
              <label style={{ color: "yellow" }}>{formData.rollNo ? formData.rollNo : "not entered"}</label>
              <br />
              <input
                type='text'
                value={formData.rollNo}
                style={{ padding: "3px" }}
                onChange={(event) => setFormData(prevData => ({ ...prevData, rollNo: event.target.value }))}
              />
              <br />
              <br />
              <label>Academic Year [yyyy-yyyy]</label><br />
              <label style={{ color: "yellow" }}>{formData.year ? formData.year : "not entered"}</label>
              <br />
              <select
              value={formData.year}
              style={{ padding: "3px" }}
              onChange={(event) => setFormData(prevData => ({ ...prevData, year: event.target.value }))}
              >
                <option value="2022-2026">2022-2026(R)</option>
                <option value="2023-2026">2023-2026(LE)</option>
                <option value="2023-2027">2023-2027(R)</option>
                <option value="2024-2027">2024-2027(LE)</option>
              </select>
              <br />
              <br />
              <label>Domain: <span style={{ color: "yellow" }}>{formData.domain ? formData.domain : 'Not chosen'}</span></label>
              <br />
              <select
                value={formData.domain}
                style={{ padding: "3px" }}
                onChange={(event) => setFormData(prevData => ({ ...prevData, domain: event.target.value }))}
              >
                <option value="">Select a domain</option>
                <option value="Design">Design</option>
                <option value="Documentation">Documentation</option>
                <option value="PR">PR</option>
                <option value="Outreach">Outreach</option>
                <option value="Creative">Creative</option>
                <option value="Treasury">Treasury</option>
                <option value="Logistics">Logistics</option>
              </select>
              <br />
              <br />
              <button onClick={(event) => handleAddRollNo(event)} className='addroolno-button'>Add Student</button>
            </form>
          </div>
}

function UpdateWebsite() {
  
  return (
    <div>
      <center><h3>Update Website</h3></center>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        <AddRoolNo/>
        <RoolsList/>
      </div>
    </div>
  )
}

export default UpdateWebsite;
