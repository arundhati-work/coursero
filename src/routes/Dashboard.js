import React from "react";
import Header from "../components/Header/Header";
import DashboardCourse from "../components/DashboardCourse/DashboardCourse";
import Footer from "../components/Footer/Footer";

export default function Dashboard() {
  const courseModel = {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "https://picsum.photos/200", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        dueDate: "13 Jan",
        progress: 75,
        liked: true,
        complete: false
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
        dueDate: "16 Jan",
        progress: 24,
        liked: false,
        complete: false
      },
      // Additional enrolled students...
    ],
  };

  return (
    <div>
      <Header comp="dashboard" />
      <p>Hi Natasha!</p>
      <h1>Continue Learning</h1>
      <DashboardCourse details={courseModel}/>
      <DashboardCourse details={courseModel}/>
      <h1>Completed Courses</h1>
      <DashboardCourse details={courseModel}/>
      <DashboardCourse details={courseModel}/>
      <Footer/>
    </div>
  );
}
