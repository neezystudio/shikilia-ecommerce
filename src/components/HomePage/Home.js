import React, { useState, useEffect, useRef} from 'react'
import CategoryIcon from '@material-ui/icons/Category'; //Category
import LocalMallIcon from '@material-ui/icons/LocalMall'; // Clothing
import DevicesIcon from '@material-ui/icons/Devices'; //Electronic
import WatchIcon from '@material-ui/icons/Watch'; //Watch
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Card, ColumnContainer, ColumnLeft, ColumnRight, Title, Placeholder, TargetLink, Wrapper, Image } from '../Common-Components/CommonComponents';
import { productCategorysData } from '../../data/ProductCategoryData';
import { ProductSliderData } from '../../data/ProductSliderData';
import { Place } from '@material-ui/icons';

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
            <ColumnContainer height="540" columnSize="rightBigger">
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
                        <Card>
                            <Wrapper>
                                {ProductSliderData.map((ProductSlide, index) => (
                                    <Wrapper key={index}>
                                        {index === sliderCurrent && (
                                            <ColumnContainer slider={true} position="absolute">
                                                <ColumnLeft reverse={false}>
                                                    <Wrapper>
                                                        <Title color="black">{ProductSlide.title}</Title>
                                                        <Placeholder color="black">{ProductSlide.description}</Placeholder>
                                                        <Placeholder color="black">{ProductSlide.price}</Placeholder>
                                                    </Wrapper>
                                                </ColumnLeft>
                                                <ColumnRight reverse={false}>
                                                    <Wrapper backgroundColor="yellow" width="294" height="294" borderRadius="50">
                                                        <Image src={ProductSlide.image} alt="product" width="360" height="555" dropShadow={true} position="absolute"/>
                                                    </Wrapper>
                                                </ColumnRight>
                                            </ColumnContainer>
                                        )}
                                    </Wrapper>
                                ))}

                                
                            </Wrapper>
                            
                        </Card>
                    </Wrapper>
                </ColumnRight>
            </ColumnContainer>
        </Wrapper>
    )
}

export default Home
