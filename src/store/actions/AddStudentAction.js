import * as actionTypes from './ActionType';
import axios from 'axios';

export const addStudentStart = () => {
    return {
        type: actionTypes.ADD_STUDENT_START
    }
}

export const addStudentSuccess = (data) => {
    return {
        type: actionTypes.ADD_STUDENT_SUCCESS,
        response: data
    }
}

export const addStudentFail = (error) => {
    return {
        type: actionTypes.ADD_STUDENT_FAIL,
        response: error
    }
}


export const AddStudent = (data) => {

    return dispatch => {
        dispatch(addStudentStart());
        let url = 'https://mtml-api.hestawork.com/api/user/update-student';
        let { accountFormDetails: { first_name, last_name, campus, user_id, student_id, dob, gender, email, class_name, mobile_number, section } } = data;

        return new Promise((resolve, reject) => {
            axios.post(url, {
                    first_name: first_name.currentValue,
                    last_name: last_name.currentValue,
                    campus: campus.currentValue,
                    user_id: user_id.currentValue,
                    student_id: student_id.currentValue,
                    dob: dob.currentValue,
                    gender: gender.currentValue,
                    email: email.currentValue,
                    mobile_number: mobile_number.currentValue,
                    class_name: class_name.currentValue,
                    section: section.currentValue,

                }).then(response => {
                    dispatch(addStudentSuccess(response.data));
                    return resolve(response.data);
                })
                .catch(error => {
                    dispatch(addStudentFail(error.response.data));
                    return reject(error.data);
                })

        })


    }
}