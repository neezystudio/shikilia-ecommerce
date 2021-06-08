import React from 'react'
import CategoryIcon from '@material-ui/icons/Category'; //Category
import LocalMallIcon from '@material-ui/icons/LocalMall'; // Clothing
import DevicesIcon from '@material-ui/icons/Devices'; //Electronic
import WatchIcon from '@material-ui/icons/Watch'; //Watch
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Card, ColumnContainer, ColumnLeft, ColumnRight, Container, Placeholder, TargetLink, Wrapper } from '../Common-Components/CommonComponents';
import { productCategorysData } from '../../data/ProductCategoryData';

function Home() {
    return (
        <Wrapper>
            <ColumnContainer>
                <ColumnLeft reverse={false}>
                    <Wrapper>
                        <Card width="336" height="510">
                            {productCategorysData.map(productCategoryData => (
                                <TargetLink 
                                    key={productCategoryData.id} 
                                    display="flex" 
                                    border={productCategoryData.border} 
                                    background={productCategoryData.background} 
                                    color={productCategoryData.color} 
                                    height="51px" 
                                    width="336px"
                                >
                                    <Wrapper display="flex" marginTop="0.5" marginLeft="1">
                                        {
                                            productCategoryData.icon === "CategoryIcon" ? <CategoryIcon/> : <></> &&
                                            productCategoryData.icon === "LocalMallIcon" ? <LocalMallIcon/> : <></> &&
                                            productCategoryData.icon === "DevicesIcon" ? <DevicesIcon/> : <></> &&
                                            productCategoryData.icon === "WatchIcon" ? <WatchIcon/> : <></>
                                        }
                                        <Placeholder color={productCategoryData.color} marginLeft="1">{productCategoryData.placeHolder}</Placeholder>
                                        <Wrapper display="flex" position="end" marginRight="1">
                                            {productCategoryData.forwardArrow ? <ArrowForwardIosIcon/> : <></>}  
                                        </Wrapper>
                                    </Wrapper>
                                    
                                </TargetLink>
                            ))}
                        </Card>
                    </Wrapper>
                    
                </ColumnLeft>
                <ColumnRight reverse={false}>
                    <Wrapper>
                        <Card>Hello</Card>
                    </Wrapper>
                </ColumnRight>
            </ColumnContainer>
        </Wrapper>
    )
}

export default Home
