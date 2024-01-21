import React from 'react';
import './DashboardCourse.css';
import liked from '../../assets/heart-filled.png';
import unliked from '../../assets/heart-empty.png';
import complete from '../../assets/complete.png';
import incomplete from '../../assets/incomplete.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeAction, markCompleteAction} from '../../slices/actions';
import { NavLink } from 'react-router-dom';

export default function DashboardCourse(props) {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);
    const course = courses.find((c) => c.id === props.id) || {};
    const link = '/course/'+course.id;
    
    const toggleLikeCourse = () => {
        const newLikeState = !course.liked;
        const likes = newLikeState ? course.likes + 1 : course.likes - 1;
        dispatch(toggleLikeAction(course.id, newLikeState, likes));
    }

    const handleMarkComplete = () => {
        dispatch(markCompleteAction(course.id));
    }

  return (
    <div id="dashboard-course-component" className='course-block'>
        <div className='thumbnail-div'>
            <img src={course.thumbnail} alt={course.name}/>
        </div>
        <div className='details-div'>
            <div className='space-between small-text'>
                <p>{course.instructor}</p>
                <p>Due by {course.dueDate}</p>
            </div>
            <div className='space-between'>
                < p className='medium-text'><NavLink to={link}>{course.name}</NavLink></p>
                <div className='reactive'>
                <img src={course.liked? liked: unliked} alt={course.liked? 'dislike':'like'} onClick={toggleLikeCourse}/>
                <img src={course.complete? complete: incomplete} alt={course.complete? 'Mark as Complete':'Course Complete'}  onClick={handleMarkComplete}/>
                </div>
            </div>
            <div className='space-between'>
                <ProgressBar progress={course.progress}/>
                <p>{course.progress}%</p>
            </div>
        </div>
    </div>
  )
}
