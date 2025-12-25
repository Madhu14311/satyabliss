import React, { useEffect, useState } from "react";
import "./Payroll.css";


const DAILY_WAGE = 166;

export default function AdminPayroll() {
  const [attendanceData, setAttendanceData] = useState({});
  const [payrollRows, setPayrollRows] = useState({});
  const [editingRow, setEditingRow] = useState(null);

  useEffect(() => {
    const allAttendance =
      JSON.parse(localStorage.getItem("all_attendance")) || {
        "Madhu Seetalam": [
          { date: "2025-12-18", checkIn: "09:00", checkOut: "13:00", hours: "4" },
          { date: "2025-12-18", checkIn: "14:00", checkOut: "18:00", hours: "4" },
          { date: "2025-12-19", checkIn: "09:30", checkOut: "18:30", hours: "9" }
        ]
      };

    setAttendanceData(allAttendance);

    const payrollInit = {};

    Object.entries(allAttendance).forEach(([employeeName, records]) => {
      const uniqueDays = getUniqueWorkingDays(records);

      payrollInit[employeeName] = [
        {
          period: "Monthly",
          type: "Daily Wages",
          salary: (uniqueDays * DAILY_WAGE).toFixed(2)
        }
      ];
    });

    setPayrollRows(payrollInit);
  }, []);

  // ✅ Get completed records
  const getCompletedRecords = (records = []) =>
    records.filter(r => r.hours !== "--");

  // ✅ COUNT UNIQUE DATES ONLY
  const getUniqueWorkingDays = (records = []) => {
    const uniqueDates = new Set(
      records
        .filter(r => r.hours !== "--")
        .map(r => r.date)
    );
    return uniqueDates.size;
  };

  return (
    <div className="attendance-container">
      <h1>All Employees Payroll (Daily Wages)</h1>

      {Object.entries(attendanceData).map(([employeeName, records], index) => {
        const completed = getCompletedRecords(records);
        const totalDays = getUniqueWorkingDays(records);
        const totalSalary = totalDays * DAILY_WAGE;

        return (
          <div className="card" key={index}>
            <h2>Employee: {employeeName}</h2>

            {/* Attendance */}
            <h3>Attendance</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Hours (Reference)</th>
                </tr>
              </thead>
              <tbody>
                {completed.length === 0 ? (
                  <tr>
                    <td colSpan="4">No records</td>
                  </tr>
                ) : (
                  completed.map((r, i) => (
                    <tr key={i}>
                      <td>{r.date}</td>
                      <td>{r.checkIn}</td>
                      <td>{r.checkOut}</td>
                      <td>{r.hours}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Salary Summary */}
            <h3>Salary Summary</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td><strong>Total Working Days</strong></td>
                  <td>{totalDays}</td>
                </tr>
                <tr>
                  <td><strong>Daily Wage</strong></td>
                  <td>₹{DAILY_WAGE}</td>
                </tr>
                <tr>
                  <td><strong>Total Salary</strong></td>
                  <td><strong>₹{totalSalary.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>

            {/* Payroll Details */}
            <h3>Payroll Details</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Pay Period</th>
                  <th>Salary Type</th>
                  <th>Salary (₹)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {payrollRows[employeeName]?.map((row, i) => {
                  const rowId = `${employeeName}-${i}`;
                  const isEditing = editingRow === rowId;

                  return (
                    <tr key={i}>
                      <td>{employeeName}</td>

                      <td>
                        {isEditing ? (
                          <input
                            value={row.period}
                            onChange={(e) => {
                              const updated = [...payrollRows[employeeName]];
                              updated[i].period = e.target.value;
                              setPayrollRows({
                                ...payrollRows,
                                [employeeName]: updated
                              });
                            }}
                          />
                        ) : (
                          row.period
                        )}
                      </td>

                      <td>Daily Wages</td>

                      <td>
                        {isEditing ? (
                          <input
                            type="number"
                            value={row.salary}
                            onChange={(e) => {
                              const updated = [...payrollRows[employeeName]];
                              updated[i].salary = e.target.value;
                              setPayrollRows({
                                ...payrollRows,
                                [employeeName]: updated
                              });
                            }}
                          />
                        ) : (
                          `₹${row.salary}`
                        )}
                      </td>

                      <td>
                        {isEditing ? (
                          <button onClick={() => setEditingRow(null)}>
                            Save
                          </button>
                        ) : (
                          <button onClick={() => setEditingRow(rowId)}>
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
