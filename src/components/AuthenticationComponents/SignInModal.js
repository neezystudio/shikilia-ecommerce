import React, { useState } from 'react'
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

function SignInModal({signInModal}) {
    const classes = useStyles();

    const [modalState, setModalState] = useState(signInModal);
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
                    <Wrapper display="flex" position="end">
                        <Button color="Default" onClick={() => setModalState(false)}>
                           <CloseIcon/> 
                        </Button>
                    </Wrapper>
                    <ColumnContainer height="540">
                            <ColumnLeft>
                                <Title>Hello, Welcome Back!</Title>
                                <Form>
                                    <TextField
                                        className={classes.root}
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='email'
                                        label='Email Address'
                                        name='email'
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            fullWidth
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange = {(e) => setPassword(e.target.value)}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(true)}
                                                    onMouseDown={() => setShowPassword(false)}
                                                    >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <Wrapper height="70">
                                        <ColumnContainer height="10" padding="modal">
                                            <ColumnLeft padding="modal">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={rememberMe}
                                                            onChange={() => setRememberMe(!rememberMe)}
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Remember Me"
                                                />
                                            </ColumnLeft>

                                            <ColumnRight padding="modal">
                                                <Wrapper>
                                                    <TargetLink color="primary" hoverColor="Default" transformation={false}>Forgot Password?</TargetLink>
                                                </Wrapper>
                                            </ColumnRight>
                                        </ColumnContainer> 
                                    </Wrapper>

                                    <Wrapper marginTop="2">
                                        <Button 
                                            display="flex" 
                                            position="center" 
                                            color="white" 
                                            hoverColor="white"
                                            background="Default"
                                            height="62"
                                            marginTop="1"
                                            borderRadius="20"
                                        >
                                            Sign In
                                        </Button>
                                    </Wrapper>
                                </Form>

                                <ColumnContainer padding="modal" columnSize="rightBigger">
                                    <ColumnLeft padding="modal">
                                        <Placeholder marginTop="1" color="Default">Sign In with:</Placeholder>
                                        <Wrapper display="flex" position="start">
                                            
                                            <TargetLink transformation={true}>
                                                <Image 
                                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1623760959/Shikilia/Google__G__Logo.svg_wcclkk.png" 
                                                    alt=""
                                                    width ="20"
                                                    height="20"
                                                />
                                            </TargetLink>
                                            <TargetLink transformation={true} marginLeft="1">
                                                <Image 
                                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1623760958/Shikilia/Apple_dhrn5w.png" 
                                                    alt=""
                                                    width ="20"
                                                    height="20"
                                                />
                                            </TargetLink>
                                            
                                        </Wrapper>
                                    </ColumnLeft>
                                    <ColumnRight padding="modal">
                                        <Wrapper display="flex" position="start" marginTop="0.5">
                                            <TargetLink color="primary" hoverColor="Default" transformation={false}>Don't have an account? Create one</TargetLink>
                                        </Wrapper>
                                    </ColumnRight>
                                </ColumnContainer>
                                
                            </ColumnLeft>
                            <ColumnRight>
                                <Wrapper display="flex" position="center" height="101" marginTop="1">
                                    <Image 
                                        src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" 
                                        alt="Shopping" 
                                        width="200"
                                        height="80"
                                    />
                                </Wrapper>
                                <Title textAlign="center">Sign Up to Shop at Shikilia</Title>
                                <Wrapper display="flex" position="center" marginTop="3">
                                    <Image 
                                        src="https://res.cloudinary.com/emacon-production/image/upload/v1623754489/Shikilia/undraw_shopping_app_flsj_ovxqmv.svg" 
                                        alt="Shopping" 
                                        width="50"
                                        height="50"
                                    />
                                </Wrapper>
                            </ColumnRight>
                        </ColumnContainer>
                </div>
            </Fade>
        </Modal>
    )
}

export default SignInModal
