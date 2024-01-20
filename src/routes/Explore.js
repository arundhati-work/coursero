import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ExploreCourse from '../components/ExploreCourse/ExploreCourse';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "../slices/actions";

export default function Explore() {
  const [text, setText] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    // Filter courses when the 'text' state changes
    setFilteredCourses(courses.filter(course =>
      course.name.toLowerCase().includes(text.toLowerCase()) || course.instructor.toLowerCase().includes(text.toLowerCase())
    ));
  }, [text, courses]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header comp='explore' />
      <h1>Explore Courses</h1>
      <input
        type='text'
        placeholder='Search courses by course name or instructor...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {filteredCourses.map((course) => (
        <ExploreCourse key={course.id} details={course} />
      ))}
      <Footer />
    </div>
  );
}
