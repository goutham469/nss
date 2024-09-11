import React, { useState } from 'react'

function UpdateWebsite() {
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

  return (
    <div>
      <center><h3>Update Website</h3></center>
      <div style={{ margin: "100px", padding: "20px", backgroundColor: "#454545", borderRadius: "20px", width: "fit-content" }}>
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
          <input
            type='text'
            value={formData.year}
            style={{ padding: "3px" }}
            onChange={(event) => setFormData(prevData => ({ ...prevData, year: event.target.value }))}
          />
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
          <button onClick={(event) => handleAddRollNo(event)}>Add Student</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateWebsite;
