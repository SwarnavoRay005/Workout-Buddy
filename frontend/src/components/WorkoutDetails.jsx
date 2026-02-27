import React, { useState } from "react";

const WorkoutDetails = ({ workout, onDelete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  // Format date as "12th Jan, 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();

    // Add st, nd, rd, th
    const getSuffix = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const suffix = getSuffix(day);
    const month = date.toLocaleString("en-US", { month: "short" }); // Jan, Feb, etc.
    const year = date.getFullYear();

    return `${day}${suffix} ${month}, ${year}`;
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout?"
    );
    if (!confirmDelete) return;

    // Smooth fade animation
    setFadeOut(true);

    setTimeout(async () => {
      const response = await fetch(
        `http://localhost:2000/api/workouts/${workout._id}`,
        { method: "DELETE" }
      );

      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
        return;
      }

      onDelete(workout._id); // Update UI in parent
    }, 250);
  };

  return (
    <div
      className="workout-details"
      style={{
        position: "relative",
        padding: "20px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        marginBottom: "20px",
        transition: "0.3s ease",
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(0.95)" : "scale(1)",
      }}
    >
      {/* Floating circular delete button */}
      <button
        className="deleteButton"
        onClick={handleDelete}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "#ff4d4d",
          border: "none",
          color: "white",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
          transition: "0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.background = "#e60000")}
        onMouseOut={(e) => (e.target.style.background = "#ff4d4d")}
        title="Delete workout"
      >
        🗑
      </button>

      <h4 style={{ marginTop: "5px", marginBottom: "10px" }}>
        {workout.title}
      </h4>

      <p>
        <strong>Load:</strong> {workout.load} kg
      </p>

      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>

      <p style={{ fontSize: "13px", color: "#666" }}>
        {formatDate(workout.createdAt)}
      </p>
    </div>
  );
};

export default WorkoutDetails;
