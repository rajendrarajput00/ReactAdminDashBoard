import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { SearchOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { LaunchOutlined } from '@material-ui/icons';
import { borderRadius } from '@material-ui/system';

const useStyles = makeStyles({

    mainInfo: {
        marginTop: '30px',
        fontSize: '25px',
        display: 'flex',
        gap: '15px',
        "& .MuiOutlinedInput-root": {
            borderRadius: '30px'
        },
        "& .MuiInputLabel-outlined ": {
            transform: `translate('13px', '13px') scale(1)`
        },

    },
    borderStyle: {
        border: '1px solid black'
    },
    iconColor: {
        color: 'blue'
    },
    iconSize: {
        paddingTop: '5px'
    },
    displayFlex: {
        display: 'flex',
        alignItems: 'center'
    },
    stFontSize: {
        fontSize: '15px'
    },
    FiltetIconStyle: {
        borderRadius: '3px'
    },
    buttonFirst: {
        background: 'linear-gradient(90deg, rgba(210,154,108,1) 6%, rgba(194,107,75,1) 56%, rgba(194,107,75,1) 100%)'
    },
    buttonSecond: {
        background: '#fff',
        color: 'blue'
    }
});

export default function StudentTable() {
    const classes = useStyles();
    return (
        <div className={classes.mainInfo}>
            <div style={{ flex: 2 }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">1-4 of 99</InputLabel>
                    <Select
                        native
                        //value={state.age}
                        //onChange={handleChange}
                        label="Age"
                        className={classes.buttonSecond}
                        margin="dense"
                        inputProps={{
                            name: "age",
                            id: "outlined-age-native-simple"
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Tenkk</option>
                        <option value={20}>Twentykk</option>
                        <option value={30}>Thirtylll</option>
                    </Select>
                </FormControl>
            </div>
            <div style={{ flex: 3 }} className={classes.displayFlex}>
                <FormControl /* className={clsx(classes.margin, classes.textField)} */ variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        margin="dense"
                        className={classes.buttonSecond}
                        ///value={values.weight}
                        // onChange={handleChange('weight')}
                        // endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        labelWidth={0}
                        startAdornment={<InputAdornment position="start"> <SearchOutlined className={classes.iconSize}></SearchOutlined></InputAdornment>}
                    />
                    {/*  <FormHelperText id="outlined-weight-helper-text">Weighkt</FormHelperText>*/}
                </FormControl>
            </div>
            <div style={{ flex: 5 }}></div>
            <div style={{ flex: 1 }} >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonFirst}
                    startIcon={<LaunchOutlined />}
                >
                    Export
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.buttonSecond}
                // startIcon={<LaunchOutlined />}
                >
                    + Add Student
                </Button>
            </div>
        </div>
    )
}
