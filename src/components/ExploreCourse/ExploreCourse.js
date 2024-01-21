import React from 'react';
import liked from '../../assets/heart-filled.png';
import { NavLink } from 'react-router-dom';
import './ExploreCourse.css';

export default function ExploreCourse(props) {
    const instructor = props.details.instructor;
    const courseName = props.details.name;
    const thumbnail = props.details.thumbnail;
    const likes = props.details.likes;
    const link = '/course/'+props.details.id;

  return (
    
    <div id="explore-course-component"  className='course-block'>
        <div className='thumbnail-div'>
            <img src={thumbnail} alt={courseName}/>
        </div>
        <div className='details-div'>
            <div className='small-text'>
                <p className='small-text'>{instructor}</p>
                <p className='medium-text'><NavLink to={link}>{courseName}</NavLink></p>
            </div>
            <div>
                <img src={liked} alt='likes' />
                <p className='likes-text'>{likes}</p>
            </div>
        </div>
    </div>
  )
}
