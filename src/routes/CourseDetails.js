import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import location from "../assets/location.png";
import { toggleEnrollAction } from "../slices/actions";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer/Footer";
import "../styles/CourseDetails.css";
import heart from "../assets/heart-filled.png";
import arrow from "../assets/arrow-down.png";

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
          <div className="content">
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
              <div className="blackbox-details">
                <img src={location} alt="location" /> <b>Online</b>
              </div>
              <div className="blackbox-details">
                Enrollment Status: <b>{course.enrollmentStatus}</b>
              </div>
              <div className="blackbox-details">
                Duration: <b>{course.duration}</b>
              </div>
              <div className="blackbox-details">
                Schedule: <b>{course.schedule}</b>
              </div>
            </div>
            <div className="active-section">
              <button onClick={handleToggleEnroll}>
                {course.enrolled ? "UNENROLL" : "ENROLL"}
              </button>
              <div className="likes-section">
                <img src={heart} alt="likes" />
                <p>{course.likes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="descriptions content">
          <div className="descrip course-description">
            <p className="headings">Course Description</p>
            <p>{course.description}</p>
          </div>
          <div className="descrip course-prereqs">
            <p className="headings">Pre-requisites</p>
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
        <div
          className="descrip syllabus-open content"
          onClick={() => setToggleSyllabus(!toggleSyllabus)}
        >
          <p className="headings">Syllabus <img src={arrow} alt="syllabus"/></p>
        </div>
        <div className="syllabus-content-div content">
          {course.syllabus && toggleSyllabus ? (
            <div>
              {course.syllabus.map((data) => {
                return (
                  <div key={data.week}>
                    <p className="syllabus-week">Week {data.week}</p>
                    <p className="syllabus-topic">{data.topic}</p>
                    <p className="syllabus-content">{data.content}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
