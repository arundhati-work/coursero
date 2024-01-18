import React, {useState} from 'react';
import './DashboardCourse.css';
import liked from '../../assets/heart-filled.png';
import unliked from '../../assets/heart-empty.png';
import complete from '../../assets/complete.png';
import incomplete from '../../assets/incomplete.png';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function DashboardCourse(props) {
    const [courseLiked, setCourseLiked] = useState(props.details.students[0].liked);
    const [courseComplete, setCourseComplete] = useState(props.details.students[0].complete);
    const instructor = props.details.instructor;
    const courseName = props.details.name;
    const thumbnail = props.details.thumbnail;
    const [progress,setProgress] = useState(props.details.students[0].progress);
    const dueDate = props.details.students[0].dueDate;

    const handleComplete = () => {
        setProgress(100);
        setCourseComplete(true);
    }

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
                <img src={courseComplete? complete: incomplete} alt={courseComplete? 'Mark as Complete':'Course Complete'} onClick={handleComplete}/>
            </div>
            <div className='space-between'>
                <ProgressBar progress={progress}/>
                <p>{progress}%</p>
            </div>
        </div>
    </div>
  )
}
