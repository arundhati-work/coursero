import axios from 'axios';
import { updateCourseList, toggleEnroll, toggleLike } from './courseStatusSlice';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => async (dispatch) => {
  dispatch(updateCourseList({ type: FETCH_DATA_REQUEST }));

  try {
    const response = await axios.get('http://localhost:3031/courses');
    
        dispatch(updateCourseList({
            type: FETCH_DATA_SUCCESS,
            data: response.data,
          }));

  } catch (error) {
    dispatch(updateCourseList({
      type: FETCH_DATA_FAILURE,
      error: error.message,
    }));
    console.error(error);
  }
};

export const toggleEnrollAction = (id, enrolledState) => async (dispatch) => {

  try {
    const response = await axios.patch(`http://localhost:3031/courses/${id}`,{
      "enrolled": enrolledState
    });
    dispatch(toggleEnroll({
      id:id,
      enrolled: enrolledState
    }))
    console.log('response from toggleEnrollAction:',response);
  } catch (error) {
    console.error(error);
  }
};

export const toggleLikeAction = (id, liked, likes) => async (dispatch) => {
  

  try {
    const response = await axios.patch(`http://localhost:3031/courses/${id}`,{
      "liked": liked,
      "likes": likes
    });
    dispatch(toggleLike({
      id:id,
      liked: liked,
      likes: likes
    }))
    console.log('response from toggleLikeAction:',response);
  } catch (error) {
    console.error(error);
  }
};


