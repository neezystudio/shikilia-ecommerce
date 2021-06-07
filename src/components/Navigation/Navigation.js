import React, { useState } from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import { productCategoryMenus,productCategorys, topMenuData } from '../../data/NavigationData'
import CheckIcon from '@material-ui/icons/Check';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from 'react-bootstrap';
import {Container, TargetLink, Wrapper, Placeholder, CartIcon, NumberIndicaterBackground, NumberIndicater, ColumnContainer, ColumnLeft, ColumnRight, Card} from '../Common-Components/CommonComponents'


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

const AccountIcon = styled(PersonIcon)``;
const CheckoutIcon = styled(CheckIcon)``;
// const AccountIcon = styled(PersonIcon)``;
const CompanyLogo = styled.h1`
    font-family: Roboto Condensed;
    font-style: italic;
    font-weight: bold;
    font-size: 55px;
    line-height: 64px;

    color: #FFFFFF;
`;
const SelectCategory = styled.select`
  width: 6.5rem;
  height: 2.5rem;
`;
const SearchBar = styled.input`
    width: 25rem;
    height: 2.5rem;
`;
const SearchButton = styled(Link)`
    // background:  ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
    background: grey;
    white-space: nowarp;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.4s all;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    // padding: 16px 40px;
    // color: ${({ primary }) => ( primary ? '#fff' : '#000d1a')};
    color: #fff;
    // font-size: ${({ big }) => (big ? '20px' : '14px')};
    font-size: 20px;

    &:hover{
        transform: translateY(-2px);
    }
`;
const MyCartWrapper = styled.div``;

function Navigation() {
    const classes = useStyles();
    const [age, setAge] = useState();

    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <Wrapper backgroundColor="grey" height = "169" width="primary">
            {/* Section One */}
            <Container marginRight = "5">
                <Wrapper display = "flex" position = "end" right = "15" paddingTop = "0.5">
                    {topMenuData.map((menuData) => (
                        <TargetLink display = "flex" color = "white" borderLeft = {true} key={menuData.id}>
                            <Container marginLeft = "1" marginRight = "0.5">
                                {
                                    menuData.icon === 'PersonIcon' ?
                                    <AccountIcon/> :
                                    <CheckoutIcon/>
                                }
                            </Container>
                           
                           <Placeholder marginTop = "0.1" marginRight = "1">{menuData.title}</Placeholder>
                        </TargetLink>
                    ))}
                </Wrapper>
            </Container>

            {/* Section Two */}
            <Wrapper marginTop = "1" display = "flex">
                
                <Container marginRight = "10">
                   <CompanyLogo>SHIKILIA</CompanyLogo> 
                </Container>
                
                <Container marginRight = "10" marginTop="0.5">
                    <form>
                        <SelectCategory id="productCategory" name="">
                            {productCategorys.map(productCategory => (
                                <option key={productCategory.id} value={productCategory.value}>
                                    {productCategory.placeHolder}
                                </option>
                            ))}
                        </SelectCategory>
                        <SearchBar type="text" placeholder="SearchHere..." id="fname" name="fname"/>
                        <Button variant="success">
                            <SearchIcon/>
                        </Button>
                    </form>
                </Container>
                

                <Container marginRight = "10">
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

            {/* Product Categories */}
            <Wrapper backgroundColor="black" height="50" marginTop="-1" display="flex">
                <Wrapper display="flex">
                    {productCategoryMenus.map(productCategoryMenu => (
                        <TargetLink color = "white" borderRight={productCategoryMenu.border}  marginTop="1" padding="1" key={productCategoryMenu.id}> 
                            <Placeholder>{productCategoryMenu.placeHolder}</Placeholder>
                        </TargetLink>
                    )) }
                </Wrapper>
                
                <TargetLink>
                    <Placeholder color="yellow" marginRight="5" display="flex">
                        TODAY'S OFFER
                    </Placeholder>
                </TargetLink>
            </Wrapper>

            {/* Section Two */}
            <Wrapper>
                <ColumnContainer>
                    <ColumnLeft reverse={false}>
                        <Wrapper backgroundColor="black">
                            <Card width="336" height="526">Hello</Card>
                        </Wrapper>
                        
                    </ColumnLeft>
                    <ColumnRight reverse={false}>
                        <Wrapper backgroundColor="black">
                            <Card>Hello</Card>
                        </Wrapper>
                    </ColumnRight>
                </ColumnContainer>
            </Wrapper>
        </Wrapper>
    )
}

export default Navigation
