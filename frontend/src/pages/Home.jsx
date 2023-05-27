import React, { Fragment, useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import Workoutform from "../components/Workoutform";
import Axios from "axios";

const Home = () => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/read")
      .then((res) => {
        setWorkout(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <div className="grid grid-cols-2 bg-slate-300  h-screen">
        <div className=" col-span-1 bg-slate-500 p-4 space-y-2 overflow-y-auto">
          <WorkoutCard workout={workout} />
        </div>
        <div className="col-span-1 p-8 border-2 rounded-xl border-blue-950 m-8  my-auto">
          <Workoutform />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
