import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Log ID', type: 'number', width: 100 },
    { field: 'applicationType', headerName: 'Application Type', width: 200 },
    { field: 'applicationId', headerName: 'Application ID', width: 200 },
    { field: 'actionType', headerName: 'Action', width: 200 },
    { field: 'actionDetail', headerName: 'Action Details', width: 200 },
    { field: 'creationTimestamp', headerName: 'Date: Time', type: 'date', width: 200 },

];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable({ setFilterData }) {
    const [rows, setRows] = React.useState([]);
    const getData = async () => {
        try {
            const res = await axios.get('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f');
            if (res.data) {
                let actionType = [];
                let applicationType = [];

                let rows = res.data.result.auditLog.map(item => {
                    if (item.actionType)
                        actionType.push(item.actionType);
                    if (item.applicationType)
                        applicationType.push(item.applicationType);
                    return {
                        id: item.logId,
                        applicationType: item.applicationType,
                        applicationId: item.applicationId,
                        actionType: item.actionType,
                        actionDetail: item.actionDetail,
                        creationTimestamp: item.creationTimestamp
                    }
                })
                setFilterData({ actionType, applicationType })
                setRows(rows);
            }
            // setData(res.data.result.auditLog);
            // console.log('the sdata is here there and everywhere', res.data.result.auditLog);

        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        getData();
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            // checkboxSelection
            />
        </div>
    );
}