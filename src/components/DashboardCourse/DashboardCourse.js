import React, {useState} from 'react';
import './DashboardCourse.css';
import liked from '../../assets/heart-filled.png';
import unliked from '../../assets/heart-empty.png';

export default function DashboardCourse(props) {
    const [courseLiked, setCourseLiked] = useState(props.details.students[0].liked);
    const instructor = props.details.instructor;
    const courseName = props.details.name;
    const thumbnail = props.details.thumbnail;
    const progress = props.details.students[0].progress;
    const dueDate = props.details.students[0].dueDate;
  return (
    <div id="dashboard-course-component">
        <div className='thumbnail-div'>
            <img src={thumbnail} alt={courseName}/>
        </div>
        <div className='details-div'>
            <div className='space-between small-text'>
                <p>{instructor}</p>
                <p>Due by {dueDate}</p>
            </div>
            <div className='space-between'>
                <p className='medium-text'>{courseName}</p>
                <img src={courseLiked? liked: unliked} alt={courseLiked? 'dislike':'like'} onClick={()=>setCourseLiked(!courseLiked)}/>
            </div>
        </div>
    </div>
  )
}
