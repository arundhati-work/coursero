import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetails() {
    const {id} = useParams();
  return (
    <div>CourseDetails</div>
  )
}
