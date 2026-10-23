import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Employee Details:", formData);
    alert("Employee details submitted!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Form</h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            name="designation"
            className="form-control"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="salary"
            className="form-control"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;