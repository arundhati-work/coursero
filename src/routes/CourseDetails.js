import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import location from "../assets/location.png";
import { toggleEnrollAction } from "../slices/actions";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer/Footer";
import "../styles/CourseDetails.css";

export default function CourseDetails() {
  const [toggleSyllabus, setToggleSyllabus] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.course);

  const course = courses.find((c) => c.id === id) || {};

  const handleToggleEnroll = () => {
    const newEnrollState = !course.enrolled;
    dispatch(toggleEnrollAction(course.id, newEnrollState));
  };

  return (
    <div id="course-details-component">
      <Header comp="courseDetails" />
      <div>
        <div className="black-box">
          <div className="title">
            <div className="thumbnail">
              <img src={course.thumbnail} alt={course.name} />
            </div>
            <div className="name-instructor">
              <p className="course-name">{course.name}</p>
              <p className="instructor">Prof. {course.instructor}</p>
            </div>
          </div>
          <div className="black-box-more-details">
            <span>
              <img src={location} alt="location" /> <b>Online</b>
            </span>
            <span>
              Enrollment Status: <b>{course.enrollmentStatus}</b>
            </span>
            <span>
              Duration: <b>{course.duration}</b>
            </span>
            <span>
              Schedule: <b>{course.schedule}</b>
            </span>
          </div>
          <div className="active-section">
            <button onClick={handleToggleEnroll}>{course.enrolled? 'UNENROLL': 'ENROLL'}</button>
          </div>
        </div>

        <div className="descriptions">
          <div className="course-description">
            <h1>Course Description</h1>
            <p>{course.description}</p>
          </div>
          <div className="course-prereqs">
            <h1>Pre-requisites</h1>
            {course.prerequisites ? (
              <ol>
                {course.prerequisites.map((prereq, i) => (
                  <li key={i}>{prereq}</li>
                ))}
              </ol>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="syllabus-open" onClick={()=>setToggleSyllabus(!toggleSyllabus)}>
          <h1>Syllabus &#11022;</h1>
        </div>
        <div className="syllabus-content">
          {
            course.syllabus && toggleSyllabus? (
              <div>
                {
                  course.syllabus.map((data) => {
                    return (
                      <div key={data.week}>
                        <p>Week {data.week}</p>
                        <p>{data.topic}</p>
                        <p>{data.content}</p>
                      </div>
                    )
                  })
                }
              </div>
            ): (
              <div></div>
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
