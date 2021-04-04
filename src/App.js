import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Check, Delete } from '@material-ui/icons';
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from '@material-ui/core/colors';
import Form from './components/Form';
import InfoList from './features/InfoList/InfoList';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Dashboard from './components/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    },
    success: {
      main: green[700]
    },
  }
});


function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
    <ThemeProvider theme={theme}>
    <Button color="success" variant="contained" >Hello</Button>
    <FormControlLabel 
        label="Testing checkbox"
        control={ <Checkbox 
          checked={checked}
          onClick={(e) => {
            setChecked(e.target.checked)}}
          icon={<Delete />}
          checkedIcon={<Delete />}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
        
      />

    </ThemeProvider>
      

    
      
    </div>
  );
}

const buttonStyles = makeStyles({
  root: {
    borderRadius: 10,
    background: 'linear-gradient(45deg, #000, #999)',
    color: '#fff',
    padding: '0.5rem 1.5rem'
  }
});

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function App(){
  const notify = () => toast.dark("Wow so easy!");
  const btnStyles= buttonStyles();
  return (
    <Dashboard />
  );
}

export default App;
