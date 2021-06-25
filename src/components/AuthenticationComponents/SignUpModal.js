import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ColumnContainer, ColumnLeft, ColumnRight, Form, Image, Placeholder, TargetLink, Title, Wrapper } from '../Common-Components/CommonComponents';
import CloseIcon from '@material-ui/icons/Close';
import { Checkbox, FilledInput, FormControl, FormControlLabel, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { signInWithGoogle } from './firebase/firebase.utils';
import { auth } from './firebase/firebase.utils';

 

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            color: "#172b4d",
            borderColor: "#172b4d !important",
            
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
  }));

function SignUpModal({signUpModal}) {
    const classes = useStyles();

    const [modalState, setModalState] = useState(signUpModal);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState()
    const [privacyPolicy, setPrivacyPolicy] = useState(false);

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
                    <ColumnContainer height="560" columnSize="signUpModal">
                            <ColumnLeft padding="modal">
                                <Title>Join Us!</Title>
                                <Form>
                                    <TextField
                                        className={classes.root}
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='name'
                                        label='Full Name'
                                        name='name'
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
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
                                    <TextField
                                        className={classes.root}
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='password'
                                        label='Password'
                                        name='password'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <TextField
                                        className={classes.root}
                                        margin='normal'
                                        required
                                        fullWidth
                                        id='confirmPassword'
                                        label='Confirm Password'
                                        name='confirmPassword'
                                        type='password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    <Wrapper height="50" marginTop="1">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={privacyPolicy}
                                                    onChange={() => setPrivacyPolicy(!privacyPolicy)}
                                                    color="primary"
                                                />
                                            }
                                            label="I Agree with the privacy policy"
                                        />
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
                                            Sign Up
                                        </Button>
                                    </Wrapper>
                                </Form>

                                <ColumnContainer padding="modal" columnSize="rightBigger">
                                    <ColumnLeft padding="modal">
                                        <Placeholder marginTop="1" color="Default">Sign Up with:</Placeholder>
                                        <Wrapper display="flex" position="start">
                                            
                                        <TargetLink transformation={true} onClick={signInWithGoogle}>
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
                                        <Wrapper display="flex" marginTop="0.5">
                                            <TargetLink color="primary" hoverColor="Default" transformation={false}>Already have an account? Sign In</TargetLink>
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

export default SignUpModal
