import * as actionTypes from './ActionType';
import axios from 'axios';

export const studentListStart = () => {
    return {
        type: actionTypes.STUDENT_LIST_START
    }
}

export const studentListSuccess = (FirstResponse,SecondResponse) => {
    return {
        type: actionTypes.STUDENT_LIST_SUCCESS,
        ClassData: FirstResponse,
        StudentData:SecondResponse
    }
}

export const studentListFail = (error) => {
    return {
        type: actionTypes.STUDENT_LIST_FAIL,
        response: error
    }
}


export const StudentList = () => {

   /*  axios.all([
        axios.get("https://mtml-api.hestawork.com/api/userClass/class-details"),
        axios.post('https://mtml-api.hestawork.com/api/user/filter-students', {
            page: "1",
            limit: "10"
        })
    ])
        .then(axios.spread((user1, user2) => {
            dispatch(addStudentSuccess(response.data));
            return resolve(response.data);
        
        })); */

      return dispatch => {
         dispatch(studentListStart());
         return new Promise((resolve, reject) => {
            axios.all([
                axios.get("https://mtml-api.hestawork.com/api/userClass/class-details"),
                axios.post('https://mtml-api.hestawork.com/api/user/filter-students', {
                    page: "1",
                    limit: "10"
                })
            ]).then(axios.spread((FirstResponse, SecondResponse) => {
                dispatch(studentListSuccess(FirstResponse.data.data,SecondResponse.data.data));
                //return resolve(FirstResponse.data.data);
            })).catch(axios.spread((FirstError, SecondError) => {
                dispatch(studentListFail(FirstError,SecondError));
                // return reject(error.data);
            }))     
         })


     }
}