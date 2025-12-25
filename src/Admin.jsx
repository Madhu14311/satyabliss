// import React, { useEffect, useState } from "react"; 
// import "./AdminDashboard.css"; 

// export default function AdminDashboard() { 
//   const [attendanceRecords, setAttendanceRecords] = useState([]); 
//   const [leaveRecords, setLeaveRecords] = useState([]); 

//   useEffect(() => { 
//     loadAllData(); 
//   }, []); 

//   const loadAllData = () => { 
//     // ✅ ATTENDANCE (from shared storage) 
//     const allAttendance = JSON.parse(localStorage.getItem("all_attendance")) || {}; 
//     let attendanceList = []; 

//     Object.entries(allAttendance).forEach(
//       ([name, records]) => { 
//         records.forEach((r) => { 
//           attendanceList.push({ 
//             name, 
//             date: r.date, 
//             checkIn: r.checkIn, 
//             checkOut: r.checkOut, 
//             hours: r.hours, 
//           }); 
//         }); 
//       } 
//     ); 

//     setAttendanceRecords(attendanceList); 

//     // ✅ LEAVES (global) 
//     const allLeaves = JSON.parse(localStorage.getItem("leave_records")) || []; 
//     setLeaveRecords(allLeaves); 
//   }; 

//   const approveLeave = (index) => { 
//     const updated = [...leaveRecords]; 
//     updated[index].status = "Approved"; 
//     // updated[index].status = "Rejected"
//     setLeaveRecords(updated); 

//     localStorage.setItem(
//       "leave_records", 
//       JSON.stringify(updated) 
//     ); 
//   }; 
//   const rejectLeave = (index) => {
//     const updated = [...leaveRecords];
//     updated [index].status = "Rejected";
//     setLeaveRecords(updated);
//     localStorage.setItem(
//       "leave_records",
//       JSON.stringify(updated)
//     );
    
//   }

//   return ( 
//     <div className="admin-container"> 
//       <h1>Admin Dashboard</h1> 

//       {/* ATTENDANCE */} 
//       <div className="card"> 
//         <h2>All Attendance Records</h2> 
//         <table className="table"> 
//           <thead> 
//             <tr> 
//               <th>Name</th> 
//               <th>Date</th> 
//               <th>Check In</th> 
//               <th>Check Out</th> 
//               <th>Hours</th> 
//             </tr> 
//           </thead> 
//           <tbody> 
//             {attendanceRecords.length === 0 ? ( 
//               <tr> 
//                 <td colSpan="5">No attendance found</td> 
//               </tr> 
//             ) : ( 
//               attendanceRecords.map((r, i) => ( 
//                 <tr key={i}> 
//                   <td>{r.name}</td> 
//                   <td>{r.date}</td> 
//                   <td>{r.checkIn}</td> 
//                   <td>{r.checkOut}</td> 
//                   <td>{r.hours}</td> 
//                 </tr> 
//               )) 
//             )} 
//           </tbody> 
//         </table> 
//       </div> 

//       {/* LEAVES */} 
//       <div className="card"> 
//         <h2>Leave Applications</h2> 
//         <table className="table"> 
//           <thead> 
//             <tr> 
//               <th>Name</th> 
//               <th>Date</th> 
//               <th>Reason</th> 
//               <th>Status</th> 
//               <th>Action</th> 
//             </tr> 
//           </thead> 
//           <tbody> 
//             {leaveRecords.length === 0 ? ( 
//               <tr> 
//                 <td colSpan="5">No leave requests</td> 
//               </tr> 
//             ) : ( 
//               leaveRecords.map((l, i) => ( 
//                 <tr key={i}> 
//                   <td>{l.name}</td> 
//                   <td>{l.date}</td> 
//                   <td>{l.reason}</td> 
//                   <td>{l.status}</td> 
//                   <td> 
                  
//                    {l.status === "Pending" && ( 
//                    <>
//                    <button onClick={() => approveLeave(i)}>Approve</button>
//                   <button onClick={() => rejectLeave(i)}>Reject</button>
//                   </>
//                   )} 
//                 </td>

                
                
//                 </tr> 
//               )) 
//             )} 
//           </tbody> 
//         </table> 
//       </div> 
//     </div> 
//   ); 
// }
import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [leaveRecords, setLeaveRecords] = useState([]);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = () => {
    /* ================= ATTENDANCE ================= */

    const allAttendance = JSON.parse(
      localStorage.getItem("all_attendance") || "{}"
    );

    let attendanceList = [];

    if (typeof allAttendance === "object" && allAttendance !== null) {
      Object.entries(allAttendance).forEach(([name, records]) => {
        if (!Array.isArray(records)) return;

        records.forEach((r) => {
          if (!r || !r.date) return;

          attendanceList.push({
            name: name || "Unknown",
            date: r.date,
            checkIn: r.checkIn || "-",
            checkOut: r.checkOut || "-",
            hours: r.hours || "-",
          });
        });
      });
    }

    setAttendanceRecords(attendanceList);



    const allLeaves = JSON.parse(
      localStorage.getItem("leave_records") || "[]"
    );

    setLeaveRecords(Array.isArray(allLeaves) ? allLeaves : []);
  };



  const groupedAttendance = attendanceRecords.reduce((acc, record) => {
    if (!record?.date) return acc;
    if (!acc[record.date]) acc[record.date] = [];
    acc[record.date].push(record);
    return acc;
  }, {});

  /* ================= DAY NAME ================= */

  const getDayName = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("en-IN", { weekday: "long" });
  };



  const approveLeave = (index) => {
    const updated = [...leaveRecords];
    updated[index] = { ...updated[index], status: "Approved" };
    setLeaveRecords(updated);
    localStorage.setItem("leave_records", JSON.stringify(updated));
  };

  const rejectLeave = (index) => {
    const updated = [...leaveRecords];
    updated[index] = { ...updated[index], status: "Rejected" };
    setLeaveRecords(updated);
    localStorage.setItem("leave_records", JSON.stringify(updated));
  };

 

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* ===== ATTENDANCE ===== */}
      <div className="card">
        <h2>Attendance Records (Day Wise)</h2>

        {Object.keys(groupedAttendance).length === 0 ? (
          <p>No attendance found</p>
        ) : (
          Object.entries(groupedAttendance).map(([date, records]) => (
            <div key={date} className="day-table">
              <h3>
                {getDayName(date)} — {date}
              </h3>

              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r, i) => (
                    <tr key={i}>
                      <td>{r.name}</td>
                      <td>{r.checkIn}</td>
                      <td>{r.checkOut}</td>
                      <td>{r.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>

      {/* ===== LEAVES ===== */}
      <div className="card">
        <h2>Leave Applications</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaveRecords.length === 0 ? (
              <tr>
                <td colSpan="5">No leave requests</td>
              </tr>
            ) : (
              leaveRecords.map((l, i) => (
                <tr key={i}>
                  <td>{l.name || "-"}</td>
                  <td>{l.date || "-"}</td>
                  <td>{l.reason || "-"}</td>
                  <td>{l.status || "Pending"}</td>
                  <td>
                    {l.status === "Pending" && (
                      <>
                        <button onClick={() => approveLeave(i)}>
                          Approve
                        </button>
                        <button onClick={() => rejectLeave(i)}>
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
