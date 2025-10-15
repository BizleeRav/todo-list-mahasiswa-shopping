import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    birthplace: "",
    birthdate: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        if (!value) error = "Username is required.";
        else if (value.length < 5)
          error = "Username must be at least 5 characters long.";
        break;
      case "email":
        if (!value) error = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Email is invalid.";
        break;
      case "password":
        if (!value) error = "Password is required.";
        else if (
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(value)
        )
          error =
            "Password must be at least 8 characters long and contain uppercase, lowercase, number, and one symbol.";
        break;
      case "repassword":
        if (!value) error = "Re-Password is required.";
        else if (value !== formData.password)
          error = "Passwords do not match.";
        break;
      case "birthplace":
        if (!value) error = "Birthplace is required.";
        break;
      case "birthdate":
        if (!value) error = "Birth date is required.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
      setSuccessMessage("Registration successful!");
    } else {
      setSubmittedData(null);
      setSuccessMessage("");
    }
  };

  const handleClear = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      repassword: "",
      birthplace: "",
      birthdate: "",
    });
    setErrors({});
    setSubmittedData(null);
    setSuccessMessage("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to the Registration Page</h2>

      <div className="card shadow">
        <div
          className="card-header text-white text-center"
          style={{ backgroundColor: "#0d6efd" }}
        >
          <h5>Registration</h5>
        </div>

        <div className="card-body row">
          {/* KIRI: FORM */}
          <div className="col-md-6 border-end">
            <h5 className="text-center mb-3">Registration Form</h5>
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
              </div>

              {/* Re-Password */}
              <div className="mb-3">
                <label className="form-label">Re-Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="repassword"
                    className={`form-control ${
                      errors.repassword ? "is-invalid" : ""
                    }`}
                    value={formData.repassword}
                    onChange={handleChange}
                  />
                  {errors.repassword && (
                    <div className="invalid-feedback">{errors.repassword}</div>
                  )}
                </div>
              </div>

              {/* Birthplace */}
              <div className="mb-3">
                <label className="form-label">Tempat Lahir</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  <input
                    type="text"
                    name="birthplace"
                    className={`form-control ${
                      errors.birthplace ? "is-invalid" : ""
                    }`}
                    value={formData.birthplace}
                    onChange={handleChange}
                  />
                  {errors.birthplace && (
                    <div className="invalid-feedback">{errors.birthplace}</div>
                  )}
                </div>
              </div>

              {/* Birthdate */}
              <div className="mb-3">
                <label className="form-label">Tanggal Lahir</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-calendar"></i>
                  </span>
                  <input
                    type="date"
                    name="birthdate"
                    className={`form-control ${
                      errors.birthdate ? "is-invalid" : ""
                    }`}
                    value={formData.birthdate}
                    onChange={handleChange}
                  />
                  {errors.birthdate && (
                    <div className="invalid-feedback">{errors.birthdate}</div>
                  )}
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>

              {successMessage && (
                <div className="alert alert-success mt-3 text-center">
                  {successMessage}
                </div>
              )}
            </form>
          </div>

          {/* KANAN: DATA */}
          <div className="col-md-6">
            <h5 className="text-center mb-3">Submitted Data:</h5>
            {submittedData ? (
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Username:</strong> {submittedData.username}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {submittedData.email}
                </li>
                <li className="list-group-item">
                  <strong>Password:</strong> {submittedData.password}
                </li>
                <li className="list-group-item">
                  <strong>Re-Password:</strong> {submittedData.repassword}
                </li>
                <li className="list-group-item">
                  <strong>Tempat Lahir:</strong> {submittedData.birthplace}
                </li>
                <li className="list-group-item">
                  <strong>Tanggal Lahir:</strong> {submittedData.birthdate}
                </li>
              </ul>
            ) : (
              <ul className="list-group">
                <li className="list-group-item text-muted">
                  Username: Not submitted yet
                </li>
                <li className="list-group-item text-muted">
                  Email: Not submitted yet
                </li>
                <li className="list-group-item text-muted">
                  Password: Not submitted yet
                </li>
                <li className="list-group-item text-muted">
                  Re-Password: Not submitted yet
                </li>
                <li className="list-group-item text-muted">
                  Tempat Lahir: Not submitted yet
                </li>
                <li className="list-group-item text-muted">
                  Tanggal Lahir: Not submitted yet
                </li>
              </ul>
            )}

            <button
              className="btn btn-danger w-100 mt-3"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
