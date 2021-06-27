import * as actionTypes from '../actions/ActionType';



const initialState = {
    loading: false,
    ClassError: null,
    StuError: null,
    ClassData: '',
    StudentData: '',
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const studentListStart = (state, action) => {

    return updateObject(state, { loading: true, error: null });
}

const studentListSuccess = (state, action) => {
    return updateObject(state, {
        ClassData: action.ClassData,
        StudentData: action.StudentData,
        loading: false,
        error: null
    });
}

const studentListFail = (state, action) => {
    return updateObject(state, { loading: false, ClassError: action.StudentData, StuError: action.ClassData });
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STUDENT_LIST_START:
            return studentListStart(state, action);
        case actionTypes.STUDENT_LIST_SUCCESS:
            return studentListSuccess(state, action);
        case actionTypes.STUDENT_LIST_FAIL:
            return studentListFail(state, action);
        default:
            return state;
    }
}

export default reducer;