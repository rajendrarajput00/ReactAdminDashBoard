import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardContent, IconButton } from '@material-ui/core'
import { LaunchOutlined } from '@material-ui/icons';
import { BlockOutlined } from '@material-ui/icons';
import { DeleteOutlined } from '@material-ui/icons';
import StudentInfoModal from './StudentInfoModal';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
const useStyles = makeStyles({

    mainInfo: {
        marginTop: '30px',
        "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: '600',
            fontSize: '13px'
        },
        "& .MuiDataGrid-row": {
            marginTop: "30px",
            background: '#fff'
        },



    },

});


function DataTable(props) {
    const classes = useStyles();
    const [listOfData, SetListOfData] = useState();
    const [stuInfoModal, setStuInfoModal] = useState(false)
    const [studentInfo, setStudentInfo] = useState();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, flex: 1 },
        { field: 'first_name', headerName: 'First name', flex: 1.3 },
        { field: 'last_name', headerName: 'Last name', flex: 1.3 },
        { field: 'class_name', headerName: 'Class', flex: 1 },
        { field: 'section', headerName: 'Section', flex: 1.1 },
        {
            field: 'email',
            headerName: 'Email',
            type: 'text',
            flex: 0.9
        },
        { field: 'campus', headerName: 'Campus', flex: 1.2 },
        {
            field: 'action',
            headerName: 'Action',
            //description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1.3,
            renderCell: (params) => (
                <strong>
                    <IconButton onClick={() => openStudentInfoModal(params)}
                    ><LaunchOutlined style={{ color: '#285DAD' }}></LaunchOutlined></IconButton>
                    <IconButton><BlockOutlined style={{ color: '#F4A765' }}></BlockOutlined></IconButton>
                    <IconButton><DeleteOutlined style={{ color: '#F6859D' }}></DeleteOutlined></IconButton>

                </strong>
            ),


        },
    ];


    const openStudentInfoModal = (value) => {
        setStuInfoModal(true)
    }
    const closeStudentInfoModal = (value) => {

        setStuInfoModal(false)
    }


    useEffect(() => {
        if (props.ClassData) {
            setStudentInfo(props.ClassData);
        }
        if (props.StudentData) {
            props.StudentData.docs.map((data, key) => {
                data['id'] = key + 1;
                if (data.student) {
                    let { class_name, section } = data.student;
                    data['class_name'] = class_name;
                    data['section'] = section;
                }
            })
            SetListOfData(props.StudentData.docs)
        }

    }, [props.ClassData, props.StudentData])

    useEffect(() => {
        let a = props.StudentList();
    }, [])

   

    return (
        <>
            <div style={{ height: 450, width: '100%' }} className={classes.mainInfo}>
                {listOfData &&
                    <DataGrid id={Math.random()} rows={listOfData} columns={columns} pageSize={10} rowHeight={70} checkboxSelection={true} disableSelectionOnClick disableMultipleSelection={true} />
                }

            </div>
           {stuInfoModal && studentInfo &&
                <StudentInfoModal studentInfo={studentInfo} stuInfoModal={stuInfoModal} closeStudentInfoModal={() => closeStudentInfoModal()}></StudentInfoModal>
            }
        </>

    );
}

const mapStateToProps = state => {
    return {
        ClassData: state.StudentListReducers.ClassData,
        StudentData: state.StudentListReducers.StudentData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        StudentList: (data) => dispatch(actions.StudentList(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);