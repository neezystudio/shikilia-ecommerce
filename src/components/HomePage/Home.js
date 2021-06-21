import React, { useState, useEffect, useRef} from 'react'
import { Col, Row } from 'react-bootstrap'
import CategoryIcon from '@material-ui/icons/Category'; //Category
import LocalMallIcon from '@material-ui/icons/LocalMall'; // Clothing
import DevicesIcon from '@material-ui/icons/Devices'; //Electronic
import WatchIcon from '@material-ui/icons/Watch'; //Watch
import * as FaIcons from 'react-icons/fa';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Card, ColumnContainer, ColumnLeft, ColumnRight, Title, Placeholder, TargetLink, Wrapper, Image, Button, SliderButtons, NextArrow, PrevArrrow } from '../Common-Components/CommonComponents';
import { productCategorysData } from '../../data/ProductCategoryData';
import { ProductSliderData } from '../../data/ProductSliderData';
import ProductCard from '../Common-Components/ProductCard';
import { guaranteeData } from '../../data/RandomData';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import { productsData } from '../../data/ProductsData';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import HomeIcon from '@material-ui/icons/Home';


function Home() {
    const [sliderCurrent, setSliderCurrent] = useState(0);

    const productLength = ProductSliderData.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setSliderCurrent(slideCurrent => (slideCurrent === productLength - 1 ? 0 : slideCurrent + 1));
        }

        timeout.current = setTimeout(nextSlide, 6000);

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    }, [sliderCurrent, productLength]);

    const nextSlide = () =>{
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setSliderCurrent( sliderCurrent === productLength - 1 ? 0 : sliderCurrent + 1);
    };

    const prevSlide = () =>{
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setSliderCurrent( sliderCurrent === 0 ? productLength - 1 : sliderCurrent - 1 );
    };

    if (!Array.isArray(ProductSliderData) || ProductSliderData.length <= 0){
        return null;
    }

    return (
        <Wrapper>
            {/* Section 1 */}
            <ColumnContainer height="460" columnSize="rightBigger">
                <ColumnLeft reverse={false}>
                    <Wrapper>
                        <Card width="336">
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
                                            productCategoryData.icon === "WatchIcon" ? <WatchIcon/> : <></>&&
                                                            productCategoryData.icon === "LocalHospitalIcon" ? <LocalHospitalIcon /> : <></>&&
                                                                productCategoryData.icon === "ChildCareIcon" ? <ChildCareIcon/> : <></>&&
                                                                    productCategoryData.icon === "SportsFootballIcon" ? <SportsFootballIcon/> : <></>&&
                                            productCategoryData.icon === "HomeIcon" ? <HomeIcon /> : <></>
                                            
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
                        <Card>
                            <Wrapper>
                                {ProductSliderData.map((ProductSlide, index) => (
                                    <Wrapper key={index}>
                                        {index === sliderCurrent && (
                                            <ColumnContainer slider={true}>
                                                <ColumnLeft reverse={false}>
                                                    <Wrapper>
                                                        <Title color="Default">{ProductSlide.title}</Title>
                                                        <Placeholder color="black" fontSize="15" marginTop="2">{ProductSlide.description}</Placeholder>
                                                        <Placeholder color="black" fontSize="20" fontWeight="bold" marginTop="2">KSH {ProductSlide.price}</Placeholder>
                                                        <Button background="Default" display="flex" position="center" width="130" height="62" borderRadius="20" marginTop="1">
                                                            SHOP NOW
                                                        </Button>
                                                    </Wrapper>
                                                </ColumnLeft>
                                                <ColumnRight reverse={false}>
                                                    <Wrapper backgroundColor="primary" width="280" height="280" borderRadius="50">
                                                        <Image src={ProductSlide.image} alt="product" width="360" height="555" dropShadow={true} position="absolute" left="1020" top="110"/>
                                                    </Wrapper>
                                                </ColumnRight>
                                            </ColumnContainer>
                                        )}
                                    </Wrapper>
                                ))}
                                <SliderButtons bottom="210" right="130">
                                    <PrevArrrow width="50" height="50"/>
                                    <NextArrow width="50" height="50"/>
                                </SliderButtons>

                                <Wrapper display="flex" backgroundColor="Default" width="933" height="101" top="10" marginTop="-9">
                                    <Wrapper display="flex" flexDirection="column" position="center">
                                        {guaranteeData.map(guarantee => (
                                            <Placeholder key={guarantee.id} textAlign="center" marginTop="1">
                                                <strong>{guarantee.title}</strong> <br/>
                                                {guarantee.desc}
                                            </Placeholder>
                                        ))}
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                            
                        </Card>
                    </Wrapper>
                </ColumnRight>
            </ColumnContainer>

            {/* Section 2 */}
            <ColumnContainer columnSize="rightBigger">
                <ColumnLeft>
                <Wrapper>
                        <Card width="336" height="510">
                            <Wrapper display="flex">
                                <Placeholder color="Default" marginLeft="1" fontSize="20" marginTop="0.5">HOT DEALS</Placeholder>
                                <Wrapper position="end">
                                    <SliderButtons right="13" marginTop="1">
                                        <PrevArrrow width="35" height="35"/>
                                        <NextArrow width="35" height="35"/>
                                    </SliderButtons>
                                </Wrapper>
                            </Wrapper>
                        </Card>
                    </Wrapper>
                </ColumnLeft>
                <ColumnRight>
                    <Wrapper>
                        <Wrapper>
                            <Row>
                               {productsData.map(productData => (
                                   <Col md={4} key={productData.id} >
                                      <ProductCard  
                                            productImg={productData.productImg} 
                                            productTitle={productData.productTitle} 
                                            availableIn={productData.availableIn} 
                                            currentPrice={productData.currentPrice} 
                                            previousPrice={productData.previousPrice}
                                        /> 
                                   </Col>     
                                ))} 
                            </Row>
                            
                        </Wrapper>
                        
                        
                    </Wrapper>
                    {/* <Wrapper display="flex" flexDirection="row">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </Wrapper> */}
                    
                </ColumnRight>
            </ColumnContainer>
        </Wrapper>
    )
}

export default Home
