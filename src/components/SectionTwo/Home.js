import React from 'react'
import CategoryIcon from '@material-ui/icons/Category'; //Category
import LocalMallIcon from '@material-ui/icons/LocalMall'; // Clothing
import DevicesIcon from '@material-ui/icons/Devices'; //Electronic
import WatchIcon from '@material-ui/icons/Watch'; //Watch
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home() {
    return (
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
    )
}

export default Home
