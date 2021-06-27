import * as actionTypes from '../actions/ActionType';



const initialState = {
    loading: false,
    error: null,
    response: ''
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const addStudentStart = (state, action) => {

    return updateObject(state, { loading: true, error: null });
}

const addStudentSuccess = (state, action) => {
    return updateObject(state, {
        response: action.response,
        loading: false,
        error: null
    });
}

const addStudentFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.response, response: action.response });
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_STUDENT_START:
            return addStudentStart(state, action);
        case actionTypes.ADD_STUDENT_SUCCESS:
            return addStudentSuccess(state, action);
        case actionTypes.ADD_STUDENT_FAIL:
            return addStudentFail(state, action);
        default:
            return state;
    }
}

export default reducer;