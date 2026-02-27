import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";
import React from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  const handleDeleteWorkout = (id) => {
    setWorkouts((prev) => prev.filter((workout) => workout._id !== id));
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:2000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="Home">
      {/* LEFT COLUMN → WORKOUT LIST */}
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              onDelete={handleDeleteWorkout}
            />
          ))}
      </div>

      {/* RIGHT COLUMN → FORM */}
      <div className="form-container">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
