import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actions";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

export const courseStatusSlice = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    updateCourseList: (state, action) => {
      switch (action.payload.type) {
        case FETCH_DATA_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case FETCH_DATA_SUCCESS:
          return {
            ...state,
            courses: action.payload.data,
            loading: false,
          };
        case FETCH_DATA_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
          };
        default:
          return state;
      }
    },
    toggleEnroll: (state, action) => {
      const updatedCourses = state.courses.map((course) =>
        course.id === action.payload.id
          ? {
              ...course,
              enrolled: action.payload.enrolled,
            }
          : course
      );
      return {
        ...state,
        courses: updatedCourses,
      };
    },
    toggleLike: (state, action) => {
      const updatedCourses = state.courses.map((course) =>
        course.id === action.payload.id
          ? {
              ...course,
              liked: action.payload.liked,
              likes: action.payload.likes,
            }
          : course
      );
      return {
        ...state,
        courses: updatedCourses,
      };
    },
    markComplete: (state, action) => {
      const updatedCourses = state.courses.map((course) =>
        course.id === action.payload.id
          ? {
              ...course,
              complete: true,
              progress: 100
            }
          : course
      );
      return {
        ...state,
        courses: updatedCourses,
      };
    },
  },
});

export const { updateCourseList, toggleEnroll, toggleLike, markComplete } =
  courseStatusSlice.actions;
export default courseStatusSlice.reducer;
