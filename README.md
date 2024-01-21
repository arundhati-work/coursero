# Coursero App

The design files for this web app can be found [here](https://www.figma.com/file/t1lMCaZfe2STZvK9xfvs6o/Alemeno?type=design&node-id=0%3A1&mode=design&t=snCJeFMiSpBttbb6-1).
A demo video of the project can be found [here](https://youtu.be/zEJ-_eQR0NA).

## Introduction

Welcome to the Course Management System - Coursero! This application is built using HTML, CSS, JavaScript, React, and Redux, along with libraries such as react-router-dom, redux toolkit, axios and JSONServer. The primary goal of this project is to provide a user-friendly interface for managing and displaying information about various courses, including course listings, details, and a student dashboard.

## Features

### 1. Course Explore Page

* Fetches a list of sample courses from a backend (React JSONServer library dummy API).
* Displays courses in a scrollable list with basic information like thumbnail, course name, instructor and number of likes.
* Enables searching for courses based on course name and instructor.
* Allows users to click on a course to view its details.

### 2. Course Details Screen

* Contains a detailed page with comprehensive information about a selected course.
* Displays thumbnail, course name, instructor, location, enrollment status, duration, schedule, likes, course description, pre-requisites and an expandable syllabus section.
* Allows user to enroll or unenroll from a course.

### 3. Student Dashboard

* Provides a user dashboard for students to view list of enrolled courses.
* Displays course name, instructor name, thumbnail, due date, and a progress bar for each course.
* Implements a feature allowing students to mark courses as completed.
* Implements a feature allowing students to like courses.
* Allows users to click on a course to view its details.

## Advanced Features

* Utilizes the Redux toolkit for effective state management.
* Ensures proper data fetching and display through React axios library.
* Responsive-design.

### 5. Instructions to run the Application

* Open VSCode
* Clone the repository in vscode using the command 'git clone https://github.com/arundhati-work/coursero.git'
* Change to the coursero directory with 'cd coursero'
* Run 'npm install'
* To start the dummy server, run the command: 'json-server --watch src/assets/db.json --port 3031'
* Open another terminal parallely and switch to the coursero directory with 'cd coursero'
* Run the command 'npm start'
* The application should start on ‘localhost:3000/coursero’ by default. If it doesn’t start automatically, paste the above url in a browser (preferably chrome)
