import React from 'react';
import './DashboardCourse.css';
import liked from '../../assets/heart-filled.png';
import unliked from '../../assets/heart-empty.png';
import complete from '../../assets/complete.png';
import incomplete from '../../assets/incomplete.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeAction, markCompleteAction} from '../../slices/actions';

export default function DashboardCourse(props) {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);
    const course = courses.find((c) => c.id === props.id) || {};
    
    const toggleLikeCourse = () => {
        const newLikeState = !course.liked;
        const likes = newLikeState ? course.likes + 1 : course.likes - 1;
        dispatch(toggleLikeAction(course.id, newLikeState, likes));
    }

    const handleMarkComplete = () => {
        dispatch(markCompleteAction(course.id));
    }

  return (
    <div id="dashboard-course-component">
        <div className='thumbnail-div'>
            <img src={course.thumbnail} alt={course.name}/>
        </div>
        <div className='details-div'>
            <div className='space-between small-text'>
                <p>{course.instructor}</p>
                <p>Due by {course.dueDate}</p>
            </div>
            <div className='space-between'>
                <p className='medium-text'>{course.name}</p>
                <img src={course.liked? liked: unliked} alt={course.liked? 'dislike':'like'} onClick={toggleLikeCourse}/>
                <img src={course.complete? complete: incomplete} alt={course.complete? 'Mark as Complete':'Course Complete'}  onClick={handleMarkComplete}/>
            </div>
            <div className='space-between'>
                <ProgressBar progress={course.progress}/>
                <p>{course.progress}%</p>
            </div>
        </div>
    </div>
  )
}
