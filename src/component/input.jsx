import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

export default function BasicTextFields({ applicationType, actionType, setSearchData }) {

    const [fieldData, setFieldData] = React.useState({});

    const setData = (e) => {

        setFieldData({
            ...fieldData,
            [e.target.name]: e.target.value
        })

    }

    const onClickSearch = () => {
        setSearchData(fieldData);
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '14ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Employee Name"
                id="outlined-size-small"
                defaultValue={fieldData?.employeeName}
                size="small"
                name='employeeName'
                onChange={setData}
            />
            <Autocomplete
                label="Action Type"
                disablePortal
                id="combo-box-demo"
                options={actionType}
                size="small"
                defaultValue={fieldData?.actionType}
                name='actionType'
                onChange={setData}
                renderInput={(params) => <TextField {...params} label="Action Type" />}
            />
            <Autocomplete
                disablePortal
                label="Application Type"
                id="combo-box-demo"
                options={applicationType}
                size="small"
                name='applicationType'
                onChange={setData}
                renderInput={(params) => <TextField {...params} label="Application Type" />}
            />
            <TextField
                label="From Date"
                id="outlined-size-small"
                defaultValue={fieldData?.fromDate}
                name='fromDate'
                size="small"
                onChange={setData}
            />
            <TextField
                label="To Type"
                id="outlined-size-small"
                defaultValue={fieldData?.toDate}
                size="small"
                name='toDate'
                onChange={setData}
            />
            <TextField
                label="Application ID"
                id="outlined-size-small"
                defaultValue={fieldData?.applicationId}
                size="small"
                name='applicationId'
                onChange={setData}
            />
            <Button variant="contained" onClick={onClickSearch}>Search</Button>

        </Box >
    );
}