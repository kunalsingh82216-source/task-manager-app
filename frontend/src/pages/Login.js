import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";


function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData); 

    setLoading(true);

    try {
      const { data } = await API.post("/auth/login", formData);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      // Fallback message agar error object structure badal jaye
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to manage your tasks</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email} // Controlled Component Fix
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password} // Controlled Component Fix
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="link">
          <Link to="/register">
            Don't have an account? <span>Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;