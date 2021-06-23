import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ColumnContainer, ColumnLeft, ColumnRight, Form, Image, Placeholder, TargetLink, Title, Wrapper } from '../Common-Components/CommonComponents';
import CloseIcon from '@material-ui/icons/Close';
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            color: "#172b4d",
            borderColor: "#172b4d !important",
            width: "100%"
        },
        '& label.Mui-focused': {
            color: '#5e72e4',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#172b4d',
        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: '#172b4d',
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: '#172b4d',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5e72e4',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#172b4d',
            },
            '&:hover fieldset': {
                borderColor: '#172b4d',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5e72e4',
            },
        },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#f4f5f7',
      boxShadow: theme.shadows[10],
      padding: theme.spacing(2, 4, 3),
    },
    textField: {
        width: '100%',
        '& > *': {
            color: "#172b4d",
            borderColor: "#172b4d !important",
            width: "100%"
        },
        '& label.Mui-focused': {
            color: '#5e72e4',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#172b4d',
        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: '#172b4d',
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: '#172b4d',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5e72e4',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#172b4d',
            },
            '&:hover fieldset': {
                borderColor: '#172b4d',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5e72e4',
            },
        },
      },
  }));

function SelectUserModal({selectUserModal}) {
    const classes = useStyles();

    const [modalState, setModalState] = useState(selectUserModal);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={modalState}
            onClose={() => setModalState(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={modalState}>
                <div className={classes.paper}>
                    <Row>
                        <Col md={6} sm={12}>
                            <Button display="flex" position="center" padding="1-1-1-1">
                                <Wrapper backgroundColor="primary" height="170" width="150">
                                    <Image 
                                        src="https://res.cloudinary.com/emacon-production/image/upload/v1624440182/Shikilia/user_tcohwy.svg" 
                                        alt=""
                                        padding="1-1-1-1"
                                    />
                                    <Placeholder color="Default" textAlign="center">Custormer</Placeholder>
                                </Wrapper>
                            </Button>
                            
                        </Col>
                        <Col md={6} sm={12}>
                            <Button display="flex" position="center" padding="1-1-1-1">
                                <Wrapper backgroundColor="primary" height="170" width="150">
                                    <Image 
                                        src="https://res.cloudinary.com/emacon-production/image/upload/v1624440182/Shikilia/user_tcohwy.svg" 
                                        alt=""
                                        padding="1-1-1-1"
                                    />
                                    <Placeholder color="Default" textAlign="center">Vendor</Placeholder>
                                </Wrapper>
                                
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Fade>
        </Modal>
    )
}

export default SelectUserModal
