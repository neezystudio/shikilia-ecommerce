import React from 'react'
import { Card, Image, Placeholder, Wrapper } from './CommonComponents'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProductCard() {
    return (
        <Card width="282" height="368" marginRight="2">
            <Wrapper height="185">
                <Image 
                    src="https://res.cloudinary.com/emacon-production/image/upload/v1600949725/Karanga/pexels-leigh-patrick-298217_onbbmh.jpg" 
                    alt="product"
                    width="100"
                    height="100"
                />
                {/* <Wrapper 
                    display="flex" 
                    position= "absolute"
                    backgroundColor="yellow"
                    borderRadius="25"
                    width="80" 
                    height="39"
                    top="10"
                    left="10"
                >
                    <Placeholder textAlign="center" marginTop="0.5">10% OFF</Placeholder>
                </Wrapper> */}
            </Wrapper>

            <Wrapper>
                <Placeholder 
                    color="black"
                    fontWeight="bold"
                    fontSize="20"
                    marginLeft="1"
                >
                    Orange fruits
                </Placeholder>
                
                <Placeholder
                    color="black"
                    fontWeight="bold"
                    fontSize="18"
                    marginLeft="1"
                >
                    <CheckCircleIcon/> Available in - 1Kg
                </Placeholder>

                <Wrapper display="flex">
                    <Placeholder
                    color="black"
                    fontWeight="bold"
                    fontSize="18"
                    marginLeft="1"
                >
                    KSH 1,500.00
                </Placeholder>

                <Placeholder
                    color="black"
                    fontWeight="bold"
                    fontSize="18"
                    marginLeft="1"
                >
                    <del>KSH 3,000.00</del>
                </Placeholder>
                </Wrapper>
                
            </Wrapper>
        </Card>
    )
}

export default ProductCard
