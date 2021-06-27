import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Toastify from './Toastify';
const useStyles = makeStyles({

    buttonFirst: {
        background: 'linear-gradient(90deg, rgba(210,154,108,1) 6%, rgba(194,107,75,1) 56%, rgba(194,107,75,1) 100%)'
    },
    buttonSecond: {
        background: '#fff',
        color: 'red'
    }

});

function StudentInfoModal(props) {
    const classes = useStyles();
    const [show, setShow] = useState(props.stuInfoModal);
    
    const [formData, setFormData] = useState({
        accountFormDetails: {
            //formIsComplete: true,
            first_name: {
                currentValue: '',
            },
            last_name: {
                currentValue: '',
            },
            campus: {
                currentValue: '',
            },
            user_id: {
                currentValue: '60b4e537d27e27001112a192',
            },
            student_id: {
                currentValue: '',
            },
            dob: {
                currentValue: '',
            },
            gender: {
                currentValue: '',
            },
            email: {
                currentValue: '',
            },
            mobile_number: {
                currentValue: '',
            },
            class_name: {
                currentValue: '',
            },
            section: {
                currentValue: '',
            },
        }

    })

    const SubmitFormData =()=>{
       let responseData =  props.addStudent(formData)
        if(responseData){
           Toastify(props.data.StudentReducers.response.message)
       } 
        props.closeStudentInfoModal()
    }


    const handleFieldChange = ({ field, currentValue }) => {
        
        setFormData(prevState => ({
            ...prevState,
            accountFormDetails: {
                ...prevState.accountFormDetails,
                [field]: {
                    ...prevState.accountFormDetails[field],
                    currentValue: currentValue,
                }
            }
        }));

    };

    if(props.data.StudentReducers.response){
        Toastify(props.data.StudentReducers.response.message)
    }  
    let { class_name } = formData.accountFormDetails;
    return (
        <div>
        
            <Modal
                show={show}
                onHide={() => props.closeStudentInfoModal()}
                animation={false}

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="first_name"
                                placeholder="First Name"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'first_name',
                                        currentValue: event.target.value
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="last_name"
                                placeholder="Last Name"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'last_name',
                                        currentValue: event.target.value
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Campus</Form.Label>
                            <Form.Control as="select"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'campus',
                                        currentValue: event.target.value
                                    })
                                }}
                            >
                                <option>Select</option>
                                {props.studentInfo.campus && props.studentInfo.campus.map((campusData, ckey) => {
                                    return (
                                        <option id={campusData._id} key={ckey}>{campusData.campus_name}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Student Id</Form.Label>
                            <Form.Control
                                type="student_id"
                                placeholder="Student Id"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'student_id',
                                        currentValue: event.target.value
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Date Of Birth Id</Form.Label>
                            <Form.Control
                                type="dob"
                                placeholder="dd-mm-yyyy"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'dob',
                                        currentValue: event.target.value
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'gender',
                                        currentValue: event.target.value
                                    })
                                }}
                            >
                                <option value=''>Select</option>
                                <option value='MALE'>MALE</option>
                                <option value='FEMALE'>FEMALE</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email address"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'email',
                                        currentValue: event.target.value
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control
                                type="mobile_number"
                                placeholder="mobile no"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'mobile_number',
                                        currentValue: event.target.value
                                    })
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Class</Form.Label>
                            <Form.Control as="select"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'class_name',
                                        currentValue: event.target.value
                                    })
                                }}
                            >
                                <option value=''>Select...</option>
                                {props.studentInfo.classes && props.studentInfo.classes.map((classesData, ckey) => {
                                    return (
                                        <option id={classesData._id} key={ckey}>{classesData.class_name}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Section</Form.Label>
                            <Form.Control as="select"
                                onChange={event => {
                                    handleFieldChange({
                                        field: 'section',
                                        currentValue: event.target.value
                                    })
                                }}
                            >
                                <option value=''>Select...</option>
                                {props.studentInfo.classes &&  props.studentInfo.classes.filter((data, key) => {
                                    return data.class_name == class_name.currentValue
                                }
                                ).map((sData,skey)=>{
                                    if(sData){
                                        return  sData.section.map((data,key)=>{
                                            return (
                                                <option id={data._id} key={key}>{data.section}</option>
                                            )
                                        })
                                    }
                                })
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={classes.buttonFirst} onClick={() => SubmitFormData()}>
                        Save
                    </Button>
                    <Button className={classes.buttonSecond} variant="secondary" onClick={() => props.closeStudentInfoModal()}>
                        Cancel
                    </Button>
              

                </Modal.Footer>
            </Modal>
        </div>
    )
}


const mapStateToProps = state => {
     return {
       data:state
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        addStudent: (data) => dispatch(actions.AddStudent(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfoModal);
