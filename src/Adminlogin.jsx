// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Adminlogin.css";


// export default function Login() {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("user");
//   const [emailOrId, setEmailOrId] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // ================= USER LOGIN (from employees)
//     if (role === "user") {
//       const employees = JSON.parse(localStorage.getItem("employees")) || [];

//       const found = employees.find(
//         (emp) => emp.id === emailOrId && emp.password === password
//       );

//       if (found) {
//         localStorage.setItem("userLoggedIn", "true");
//         localStorage.removeItem("adminLoggedIn");

//         alert("✅ User Login Successful");
//         navigate("/attendance");
//         return;
//       } else {
//         alert("❌ Invalid Employee ID or Password");
//         return;
//       }
//     }

//     // ================= ADMIN LOGIN (fixed credentials)
//     if (role === "admin") {
//       if (emailOrId === "admin@gmail.com" && password === "admin123") {
//         localStorage.setItem("adminLoggedIn", "true");
//         localStorage.removeItem("userLoggedIn");

//         alert("✅ Admin Login Successful");
//         navigate("/mail"); // Mail.jsx
//         return;
//       } else {
//         alert("❌ Invalid Admin Credentials");
//         return;
//       }
//     }
//   };
  

//   return (
    
//     <div className="login-container">
//          <div className="image-panel">
//         <img src="https://hrms.nuhvin.com/Login.png" alt="Login Illustration" />
//       </div>
     

//       <form className="login-form" onSubmit={handleLogin}>
//            <h2 className="login-title">HRMS Login</h2>
//         {/* Role */}
//         <label>Login As</label>
//         <select
//           className="role-select"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="user">Employee</option>
//           <option value="admin">Admin</option>
//         </select>

//         {/* Email / Employee ID */}
//         <input
//           type="text"
//           placeholder={
//             role === "admin" ? "Admin Email" : "Employee ID"
//           }
//           value={emailOrId}
//           onChange={(e) => setEmailOrId(e.target.value)}
//           required
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="login-btn">
//           Login as {role === "admin" ? "Admin" : "Employee"}
//         </button>
//       </form>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Adminlogin.css";
// import logo1 from "./assets/logo3.jpg";
// import image from "./assets/image.png"

// export default function Login() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);

//   const [role, setRole] = useState("user");
//   const [emailOrId, setEmailOrId] = useState("");
//   const [password, setPassword] = useState("");

//   // 🔹 NEW
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader-screen">
//         <div className="loader-circle"></div>
//         <p className="loader-text">Loading HRMS...</p>
//       </div>
//     );
//   }

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (role === "user") {
//       const employees = JSON.parse(localStorage.getItem("employees")) || [];

//       const found = employees.find(
//         (emp) => emp.id === emailOrId && emp.password === password
//       );

//       if (found) {
//         localStorage.setItem(
//           "loggedEmployee",
//           JSON.stringify({ id: found.id, name: found.name })
//         );

//         navigate("/attendance");
//         return;
//       } else {
//         alert("❌ Invalid Employee ID or Password");
//         return;
//       }
//     }

//     if (role === "admin") {
//       if (emailOrId === "admin@gmail.com" && password === "admin123") {
//         localStorage.setItem("adminLoggedIn", "true");
//         navigate("/mail");
//         return;
//       } else {
//         alert("❌ Invalid Admin Credentials");
//       }
//     }
//   };

//   return (
  
//     <div className="login-container">
//         <div className="brand-title">
          
//           <img src={image} alt=""/>
//         </div>

//     <div className="card">
//       <div className="image-panel">
//         <img src={logo1} alt="Login Illustration" />
//       </div>
//       </div>
  

//       <div className="form-panel">
//         <h2 className="login-title">HRMS Login</h2>

//         <form onSubmit={handleLogin}>
//           <label>Login As</label>

//           <select
//             className="role-select"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="user">Employee</option>
//             <option value="admin">Admin</option>
//           </select>

//           <input
//             type="text"
//             placeholder={role === "admin" ? "Admin Email" : "Employee ID"}
//             value={emailOrId}
//             onChange={(e) => setEmailOrId(e.target.value)}
//             required
//           />

        
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <span
//               className="eye-icon"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈🤦" : "👁️"}
//             </span>
//           </div>

//           <button type="submit" className="login-btn">
//             Login as {role === "admin" ? "Admin" : "Employee"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Adminlogin.css";
// import logo1 from "./assets/logo3.jpg";
// import image from "./assets/image.png"

// export default function Login() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [role, setRole] = useState("user");
//   const [emailOrId, setEmailOrId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader-screen">
//         <div className="loader-circle"></div>
//         <p className="loader-text">Loading HRMS...</p>
//       </div>
//     );
//   }

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (role === "user") {
//       const employees = JSON.parse(localStorage.getItem("employees")) || [];
//       const found = employees.find(
//         (emp) => emp.id === emailOrId && emp.password === password
//       );

//       if (found) {
//         localStorage.setItem(
//           "loggedEmployee",
//           JSON.stringify({ id: found.id, name: found.name })
//         );
//         navigate("/attendance");
//       } else {
//         alert("❌ Invalid Employee ID or Password");
//       }
//     }

//     if (role === "admin") {
//       if (emailOrId === "admin@gmail.com" && password === "admin123") {
//         localStorage.setItem("adminLoggedIn", "true");
//         navigate("/mail");
//       } else {
//         alert("❌ Invalid Admin Credentials");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="img">
//         <img src={image} alt="/"></img>
//       </div>
//       <div className="card">

       
//         <div className="image-panel">
//           <img src={logo1} alt="Login Illustration" />
//         </div>

     
//         <div className="form-panel">


//           <h1 className="brand-title">HRMS PORTAL</h1>

//           <h1 className="satya">Login</h1>

//           <form onSubmit={handleLogin}>
//             <label>Login As</label>
//             <select
//               className="role-select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="user">Employee</option>
//               <option value="admin">Admin</option>
//             </select>

//             <input
//               type="text"
//               placeholder={role === "admin" ? "Admin Email" : "Employee ID"}
//               value={emailOrId}
//               onChange={(e) => setEmailOrId(e.target.value)}
//               required
//             />

//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span
//                 className="eye-icon"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "🙈🤦" : "👁️"}
//               </span>
//             </div>

//             <button type="submit" className="login-btn">
//               Login as {role === "admin" ? "Admin" : "Employee"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Adminlogin.css";


// export default function Login() {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("user");
//   const [emailOrId, setEmailOrId] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // ================= USER LOGIN (from employees)
//     if (role === "user") {
//       const employees = JSON.parse(localStorage.getItem("employees")) || [];

//       const found = employees.find(
//         (emp) => emp.id === emailOrId && emp.password === password
//       );

//       if (found) {
//         localStorage.setItem("userLoggedIn", "true");
//         localStorage.removeItem("adminLoggedIn");

//         alert("✅ User Login Successful");
//         navigate("/attendance");
//         return;
//       } else {
//         alert("❌ Invalid Employee ID or Password");
//         return;
//       }
//     }

//     // ================= ADMIN LOGIN (fixed credentials)
//     if (role === "admin") {
//       if (emailOrId === "admin@gmail.com" && password === "admin123") {
//         localStorage.setItem("adminLoggedIn", "true");
//         localStorage.removeItem("userLoggedIn");

//         alert("✅ Admin Login Successful");
//         navigate("/mail"); // Mail.jsx
//         return;
//       } else {
//         alert("❌ Invalid Admin Credentials");
//         return;
//       }
//     }
//   };
  

//   return (
    
//     <div className="login-container">
//          <div className="image-panel">
//         <img src="https://hrms.nuhvin.com/Login.png" alt="Login Illustration" />
//       </div>
     

//       <form className="login-form" onSubmit={handleLogin}>
//            <h2 className="login-title">HRMS Login</h2>
//         {/* Role */}
//         <label>Login As</label>
//         <select
//           className="role-select"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="user">Employee</option>
//           <option value="admin">Admin</option>
//         </select>

//         {/* Email / Employee ID */}
//         <input
//           type="text"
//           placeholder={
//             role === "admin" ? "Admin Email" : "Employee ID"
//           }
//           value={emailOrId}
//           onChange={(e) => setEmailOrId(e.target.value)}
//           required
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="login-btn">
//           Login as {role === "admin" ? "Admin" : "Employee"}
//         </button>
//       </form>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Adminlogin.css";
// import logo1 from "./assets/logo3.jpg";
// import image from "./assets/image.png";

// export default function Login() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [role, setRole] = useState("user");
//   const [emailOrId, setEmailOrId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ role, emailOrId, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data);
//         return;
//       }

//       if (role === "admin") {
//         localStorage.setItem("adminLoggedIn", "true");
//         navigate("/mail");
//         return;
//       }

//       localStorage.setItem(
//         "loggedEmployee",
//         JSON.stringify({
//           id: data.id,
//           name: data.name,
//         })
//       );

//       navigate("/attendance");
//     } catch (error) {
//       console.error(error);
//       alert("❌ Backend not running");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loader-screen">
//         <div className="loader-circle"></div>
//         <p className="loader-text">Loading HRMS...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="login-container">
//       <div className="brand-title">
//         <img src={image} alt="HRMS Logo" />
//       </div>

//       <div className="image-panel">
//         <img src={logo1} alt="Login Illustration" />
//       </div>

//       <div className="form-panel">
//         <h2 className="login-title">HRMS Login</h2>

//         <form onSubmit={handleLogin}>
//           <label>Login As</label>

//           <select
//             className="role-select"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="user">Employee</option>
//             <option value="admin">Admin</option>
//           </select>

//           <input
//             type="text"
//             placeholder={role === "admin" ? "Admin Email" : "Employee ID"}
//             value={emailOrId}
//             onChange={(e) => setEmailOrId(e.target.value)}
//             required
//           />

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <span
//               className="eye-icon"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>

//           <button type="submit" className="login-btn">
//             Login as {role === "admin" ? "Admin" : "Employee"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Adminlogin.css";
import logo1 from "./assets/logo3.jpg";
import image from "./assets/image.png"

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [role, setRole] = useState("user");
  const [emailOrId, setEmailOrId] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 NEW
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-circle"></div>
        <p className="loader-text">Loading HRMS...</p>
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "user") {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];

      const found = employees.find(
        (emp) => emp.id === emailOrId && emp.password === password
      );

      if (found) {
        localStorage.setItem(
          "loggedEmployee",
          JSON.stringify({ id: found.id, name: found.name })
        );

        navigate("/attendance");
        return;
      } else {
        alert("❌ Invalid Employee ID or Password");
        return;
      }
    }

    if (role === "admin") {
      if (emailOrId === "admin@gmail.com" && password === "admin123") {
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/mail");
        return;
      } else {
        alert("❌ Invalid Admin Credentials");
      }
    }
  };

  return (
  
    <div className="login-container">
        <div className="brand-title">
          <img src={image} alt=""/>
        </div>

    
      <div className="image-panel">
        <img src={logo1} alt="Login Illustration" />
      </div>
  

      <div className="form-panel">
        <h2 className="login-title">HRMS Login</h2>

        <form onSubmit={handleLogin}>
          <label>Login As</label>

          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Employee</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="text"
            placeholder={role === "admin" ? "Admin Email" : "Employee ID"}
            value={emailOrId}
            onChange={(e) => setEmailOrId(e.target.value)}
            required
          />

        
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈🤦" : "👁️"}
            </span>
          </div>

          <button type="submit" className="login-btn">
            Login as {role === "admin" ? "Admin" : "Employee"}
          </button>
        </form>
      </div>
    </div>
  );
}


