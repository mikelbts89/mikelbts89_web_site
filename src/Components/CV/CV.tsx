import React, { useState } from 'react';
import { MobXExample } from './mobX';
import "./CV.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';



interface UserData {
    userStore: MobXExample
}



const CV: React.FC<UserData> = ({ userStore }) => {

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [age, setAge] = useState<number | string>("")

    return <div className='CV' >
        <Box sx={{ m: 5 }}>
            <h1>Temporarily using to try MobX</h1>
            <h1>All users u can see on about page</h1>
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 2, width: '18rem' },
            }}
            noValidate
            autoComplete="on"
        >
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => { setName(event.target.value) }} />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(event) => { setLastName(event.target.value) }} />
            <TextField id="outlined-basic" label="Age" variant="outlined" onChange={(event) => { setAge(event.target.value) }} />
            <br />
        </Box>
        <Button variant="contained" sx={{ width: "6rem", m: 2 }} onClick={() => { userStore.addUser(name, lastName, +age) }}><SaveIcon sx={{ mr: 1 }} />Save</Button>

    </div>;
}

export default CV;
