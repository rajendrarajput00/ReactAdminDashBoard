import React from 'react'
import CommonCard from '../../components/Common/CommonCard'
import ExteraInfo from './common/ExteraInfo'
import StudentTable from './common/StudentTable'
import DataTable from '../../components/Common/DataTable'
export default function StudentManagment() {
   
    return (
        <div>
            <CommonCard data='Student Managment'></CommonCard>
            <ExteraInfo></ExteraInfo>
            <StudentTable></StudentTable>
            <DataTable></DataTable>
        </div>
    )
}
