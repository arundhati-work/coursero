import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import DashboardCourse from "../components/DashboardCourse/DashboardCourse";
import Footer from "../components/Footer/Footer";
import { fetchData } from "../slices/actions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


    return (
      <div>
        <Header comp="dashboard" />
        <p>Hi Natasha!</p>
        <h1>Continue Learning</h1>
        {courses.length? (
          courses.map((course) => {
            return (course.enrolled)? <DashboardCourse key={course.id} id={course.id} /> : null
            // return <div>{course.name}</div>
})
        ) : (
          <div>No courses available</div>
        )}
        <Footer />
      </div>
    );
  
  
}
