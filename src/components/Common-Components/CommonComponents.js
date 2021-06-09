import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Wrapper = styled.section`
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent'&&
        backgroundColor === "primary" ? "#5e72e4" : 'black' &&
        backgroundColor === "yellow" ? "#E7BB7B" : "transparent"
    )};

    height: ${({height}) => (
        height === "169" ? "125px" : "100%" &&
        height === "50" ? "50px" : "100%" &&
        height === "294" ? "294px" : "100%" &&
        height === "185" ? "185px" : "100%" &&
        height === "39" ? "39px" : "100%"
    )};

    width: ${({width}) => (
        width === "primary" ? "100%" : "100%" &&
        width === "294" ? "294px" : "100%" &&
        width === "282" ? "282px" : "100%" &&
        width === "80" ? "80px" : "100%"
    )};

    display: ${({display}) => (
        display === "flex" ? "flex" : "" &&
        display === "grid" ? "grid" : ""
    )};
    flex-direction: ${({flexDirection}) => (
        flexDirection === "row" ? "row" : ""
    )};

    justify-content: ${({position}) => (
        position === "end" ? "flex-end" : "center"
    )};

    position: ${({position}) => (
        position === "absolute" ? "absolute" : ""
    )};

    margin-right: ${({right, marginRight}) => (
        right === "15" ? "15rem" : "0rem" &&
        marginRight === "1" ? "1rem" : "0rem"
    )};

    padding-top: ${({paddingTop}) => (
        paddingTop === "0.5" ? "0.5rem" : "0rem"
    )};

    margin-top: ${({marginTop}) => (
        marginTop === "1" ? "1rem" : "0rem" &&
        marginTop === "-1" ? "-3rem" : "0rem" &&
        marginTop === "0.5" ? "0.7rem" : "0rem"
    )};

    margin-left: ${({marginLeft}) => (
        marginLeft === "1" ? "1rem" : "0rem"
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "50" ? "150px" : "0px" &&
        borderRadius === "25" ? "25px" : "0px"
    )};
    top: ${({top}) => (
        top === "10" ? "10px" : "0px"
    )};
    left: ${({left}) => (
        left === "10" ? "10px" : "0px"
    )};
`;

export const Container = styled.div`
    display: ${({display}) => (
        display === "flex" ? "flex" : "" &&
        display === "grid" ? "grid" : ""
    )};
    margin: ${({margin}) => (
        margin === "0-5-0-5" ? "0rem 5rem 0rem 5rem" : "0rem 0rem 0rem 0rem" &&
        margin === "0.5-5-1-5" ? "0.5rem 5rem 0rem 5rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "0-5-0-0" ? "0rem 5rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
    margin-left: ${({marginLeft}) => (
        marginLeft === "1" ? "1rem" : ""
    )};
    margin-right: ${({marginRight}) => (
        marginRight === "0.5" ? "0.5rem" : "" &&
        marginRight === "1" ?  "1rem" : "" &&
        marginRight === "5" ? "5rem" : "" &&
        marginRight === "10" ? "5rem" : ""
    )};
    margin-top: ${({marginTop}) => (
        marginTop === '0.5' ? "0.5rem" : "0rem"
    )};

`;

export const TargetLink = styled.div`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({position}) => (
        position === "center" ? "center" : ""
    )};
    background: ${({background}) => (
        background === "green" ? "green" : "transparent"
    )};
    color: ${({color}) => (
        color === "white" ? "white" : "black" &&
        color === "yellow" ? "#fb6340" : "white" &&
        color === "black" ? "black" : "white"
    )};
    border-left: ${({borderLeft}) => borderLeft ? "1px solid #FFFFFF" : "none"};
    border-right: ${({borderRight}) => borderRight ? "1px solid #FFFFFF" : "none"};
    border: ${({border}) => (
        border ? "1px solid #DADADA" : ""
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "20" ? "30px" : ""
    )};
    text-decoration: none;
    width: ${({width}) => (
        width === "190" ? "190px" : ""
    )};
    height: ${({height}) => (
        height === "51px" ? "51px" : "1.5rem" &&
        height === "62" ? "55px" : "1.5rem"
    )};
    padding: ${({padding}) => (
        padding === "1" ? "0px 20px 0px 20px" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "1" ? "0.5rem" : "0rem"
    )};
`;
export const Form = styled.form``;

export const Button  = styled.button`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({position}) => (
        position === "center" ? "center" : ""
    )};
    background: ${({background}) => (
        background === "primary" ? "#5e72e4" : "green"
    )};
    color: ${({color}) => (
        color === "white" ? "white" : "black" &&
        color === "yellow" ? "#D8A903" : "white" &&
        color === "black" ? "black" : "white"
    )};
    border-left: ${({borderLeft}) => borderLeft ? "1px solid #FFFFFF" : "none"};
    border-right: ${({borderRight}) => borderRight ? "1px solid #FFFFFF" : "none"};
    border: ${({border}) => (
        border ? "1px solid #DADADA" : "none"
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "20" ? "30px" : ""
    )};
    text-decoration: none;
    width: ${({width}) => (
        width === "190" ? "190px" : "100%" &&
        width === "47" ? "47px" : "100%:"
    )};
    height: ${({height}) => (
        height === "51px" ? "51px" : "100%" &&
        height === "62" ? "55px" : "100%" &&
        height === "41" ? "41px" : "100%"
    )};
    padding: ${({padding}) => (
        padding === "1" ? "0px 20px 0px 20px" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "1" ? "1rem" : "0rem"
    )};
`;
export const Title = styled.h1`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    width: 100%;
    margin-right: ${({marginRight}) => (
        marginRight === "1" ?  "1rem" : "0rem" &&
        marginRight === "5" ?  "5rem" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "0.1" ? "0.1rem" : "0rem" &&
        marginTop === "2" ? "1rem" : "0rem"
    )};
    height: 5rem;
    color: ${({color}) => (
        color === "white" ? "white" : "black" &&
        color === "black" ? "black" : "white" &&
        color === "yellow" ? "#D8A903" : "white"
    )};
    margin-left: ${({marginLeft}) => (
        marginLeft === "1" ? "1rem" : "0rem" &&
        marginLeft === "2" ? "2rem" : "0rem"
    )};
`;
export const Placeholder = styled.p`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content:${({position}) => (
        position === "center" ? "center" : ""
    )};
    padding: ${({padding}) => (
        padding === "10-0-10-0" ? "10px 0px 10px 0px" : "0px 0px 0px 0px"
    )};
    text-align: ${({textAlign}) => (
        textAlign === "center" ? "center" : "" 
    )};
    width: 100%;
    margin-right: ${({marginRight}) => (
        marginRight === "1" ?  "1rem" : "0rem" &&
        marginRight === "5" ?  "5rem" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "0.1" ? "0.1rem" : "0rem" &&
        marginTop === "0.5" ? "0.4rem" : "0rem" &&
        marginTop === "2" ? "1rem" : "0rem" &&
        marginTop === "2.5" ? "2rem" : "0rem"
    )};
    color: ${({color}) => (
        color === "white" ? "white" : "black" &&
        color === "black" ? "black" : "white" &&
        color === "yellow" ? "#D8A903" : "white"
    )};
    margin-left: ${({marginLeft}) => (
        marginLeft === "1" ? "1rem" : "0rem" &&
        marginLeft === "2" ? "2rem" : "0rem"
    )};
    font-size: ${({fontSize}) => (
        fontSize === "20" ? "30px" : "" &&
        fontSize === "18" ? "55px" : ""
    )};
    font-weight: ${({fontWeight}) => (
        fontWeight === "800" ? "bold" : "" &&
        fontWeight === "bold" ? "bold" : ""
    )};
`;

export const CartIcon = styled(ShoppingCartIcon)`
    color: ${({color}) => (
        color === "white" ? "white" : "black"
    )};
    margin-top: 1rem;
`;

export const NumberIndicaterBackground = styled.div`
    display: flex;    
    background: #5e72e4;
    justify-content: center;
    border-radius: 25px;
    color: white;
    margin-left: -1rem;
    margin-top: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
`;

export const NumberIndicater = styled.div`
    font-size: 13px;
    text-align: center;
`;

export const ColumnContainer = styled.div`
    display: grid;
    grid-template-columns: ${({columnSize}) => (
        columnSize === "rightBigger" ? "0fr 1fr" : "1fr 0.3fr"
    )};
    grid-template-rows: ${({height}) => (
        height === "540" ? "540px" : "100%"
    )};
    padding: 3rem calc((100vw - 1400px) / 2);


    &::before {
        ${({slider}) => (
            slider ? `
                content: '';
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100vh;
                bottom: 0vh;
                left: 0;
                overflow: hidden;
                opacity: 0.4;
                background: transparent;    
            ` : ""
        )}
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1rf;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
`;

export const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    // display: flex;
    // justify-content: center;
    align-items: center;
    @media and screen (max-width: 768px){
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;
export const Card = styled.div`
    background: #F4F4F4;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.12);
    width: ${({width}) => (
        width === "336" ? "336px" : "100%" &&
        width === "282" ? "282px" : "100%"
    )};
    height: ${({height}) => (
        height === "510" ? "510px" : "100%" &&
        height === "368" ? "368px" : "100%"
    )};
    position: ${({position}) => (
        position === "absolute" ? "absolute" : ""
    )};
    margin-right: ${({marginRight}) => (
        marginRight === "2" ? "1rem" : "0rem"
    )};
`;

export const Image = styled.img`
    position: ${({position}) => (
        position === "absolute" ? "absolute" : ""
    )};
    width: ${({width}) => (
        width === "360" ? "360px !important" : "100%" &&
        width === "100" ? "100% !important" : ""
    )};
    height: ${({height}) => (
        height === "555" ? "555px !important" : "100%" &&
        height === "10" ? "50px !important" : "100%" 
    )};
    filter: ${({dropShadow}) => (
        dropShadow ? "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.27))" : "none"
    )};
    top: 175px;
    left: ${({left}) => (
        left === "1020" ? "1020px" : "0px"
    )};
`;