import React, { useState } from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { productCategoryMenus,productCategorys, topMenuData } from '../../data/NavigationData'
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {Container, TargetLink, Wrapper, Placeholder, CartIcon, NumberIndicaterBackground, NumberIndicater, ColumnContainer, ColumnLeft, ColumnRight, Card, Image, Button, Form} from '../Common-Components/CommonComponents'
import SignInModal from '../AuthenticationComponents/SignInModal';
import SignUpModal from '../AuthenticationComponents/SignUpModal';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            color: "white",
            borderColor: "white !important"
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',

        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',

            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'yellow',
            },
        },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const SelectCategory = styled.select`
  width: 6.5rem;
  height: 2.5rem;
`;
const SearchBar = styled.input`
    width: 378px;
    height: 2.5rem;
`;

function Navigation() {
    const classes = useStyles();
    const [age, setAge] = useState();
    const [signInModal, setSignInModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <Wrapper>
            <Wrapper backgroundColor="Default" height = "169" width="primary">
                {/* Section One */}
                <Container margin = "0-5-0-0">
                    <Wrapper display = "flex" position = "end" right = "15" paddingTop = "0.5">
                        {topMenuData.map((menuData) => (
                            <TargetLink 
                                display = "flex" 
                                color = "white" 
                                borderLeft = {menuData.border} 
                                key={menuData.id} hoverColor="white" 
                                transformation={false}
                                marginRight="1"
                                onClick={() => setSignInModal(true)}
                            >
                                <Container marginLeft = "1" marginRight = "0.5">
                                    {
                                        menuData.icon === 'FavoriteIcon' ?
                                        <FavoriteIcon/> : <></> &&
                                        menuData.icon === 'CheckIcon' ?
                                        <CheckIcon/> : <></> &&
                                        menuData.icon === 'PersonIcon' ?
                                        <PersonIcon/> : <></>
                                    }
                                </Container>
                            

                                {menuData.title}
                                
                                <SignInModal signInModal={signInModal} />
                                <SignUpModal signUpModal={signUpModal} />
                            </TargetLink>
                        ))}
                    </Wrapper>
                </Container>

                {/* Section Two */}
                <Wrapper marginTop = "1" display = "flex">
                    
                    <Container margin = "0-5-0-5">
                        <Image 
                            src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" 
                            alt="logo"
                            height="10"
                        />
                    </Container> 
                    
                    <Container margin = "0-5-0-5" marginTop="0.5">
                        <Form display="flex" flexDirection="row">
                            <Wrapper display="flex">
                                <SelectCategory id="productCategory" name="">
                                    {productCategorys.map(productCategory => (
                                        <option key={productCategory.id} value={productCategory.value}>
                                            {productCategory.placeHolder}
                                        </option>
                                    ))}
                                </SelectCategory>
                                <Wrapper display="flex">
                                    <SearchBar type="text" placeholder="SearchHere..." id="fname" name="fname"/>
                                    <Button background="primary" width="47" height="41">
                                        <SearchIcon/>
                                    </Button>
                                </Wrapper>
                            </Wrapper>
                        </Form>
                    </Container>
                    
                    <Container margin = "0-5-0-5">
                        <TargetLink>
                            <Wrapper display = "flex">
                                <CartIcon color = "white"/>
                                <NumberIndicaterBackground>
                                    <NumberIndicater>2</NumberIndicater>
                                </NumberIndicaterBackground>
                                <Placeholder marginTop = "2" marginLeft = "1">
                                    My Cart - Kshs 1,000,000.00
                                </Placeholder>
                            </Wrapper>
                            
                        </TargetLink>
                    </Container>
                </Wrapper>
            </Wrapper>

            {/* Product Categories */}
            <Wrapper backgroundColor="primary" height="50" display="flex">
                <Container display="flex" margin="0-5-0-5">
                    {productCategoryMenus.map(productCategoryMenu => (
                        <TargetLink color = "white" borderRight={productCategoryMenu.border}  marginTop="1" padding="1" key={productCategoryMenu.id}> 
                            <Placeholder>{productCategoryMenu.placeHolder}</Placeholder>
                        </TargetLink>
                    )) }
                </Container>
                
                <Container margin="0.5-5-1-5">
                    <TargetLink>
                        <Placeholder color="yellow" marginRight="5" display="flex">
                            TODAY'S OFFER
                        </Placeholder>
                    </TargetLink>
                </Container>
                
            </Wrapper>
        </Wrapper>
        
    )
}

export default Navigation
