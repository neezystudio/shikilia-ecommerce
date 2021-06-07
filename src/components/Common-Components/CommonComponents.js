import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Wrapper = styled.section`
    background: ${({backgroundColor}) => (
        backgroundColor === "grey" ? "#404040" : 'transparent'&&
        backgroundColor === "black" ? "black" : 'transparent'
    )};

    height: ${({height}) => (
        height === "169" ? "155px" : "100%" &&
        height === "50" ? "50px" : "100%"
    )};

    width: ${({width}) => (
        width === "primary" ? "100%" : "100%"
    )};

    display: ${({display}) => (display === "flex" ? "flex" : "block")};

    justify-content: ${({position}) => (
        position === "end" ? "flex-end" : "center"
    )};

    margin-right: ${({right}) => (
        right === "15" ? "15rem" : "0rem"
    )};

    padding-top: ${({paddingTop}) => (
        paddingTop === "0.5" ? "0.5rem" : "0rem"
    )};

    margin-top: ${({marginTop}) => (
        marginTop === "1" ? "1rem" : "0rem" &&
        marginTop === "-1" ? "-3rem" : "0rem"
    )};
`;

export const Container = styled.div`
    margin-left: ${({marginLeft}) => (
        marginLeft === "1" ? "1rem" : "0rem"
    )};
    margin-right: ${({marginRight}) => (
        marginRight === "0.5" ? "0.5rem" : "0rem",
        marginRight === "1" ?  "1rem" : "0rem",
        marginRight === "5" ? "5rem" : "0rem",
        marginRight === "10" ? "clamp(10rem, 8vw, 15rem)" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === '0.5' ? "0.5rem" : "0rem"
    )};

`;

export const TargetLink = styled.div`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    color: ${({color}) => (
        color === "white" ? "white" : "black" &&
        color === "yellow" ? "#D8A903" : "white"
    )};
    border-left: ${({borderLeft}) => borderLeft ? "1px solid #FFFFFF" : "none"};
    border-right: ${({borderRight}) => borderRight ? "1px solid #FFFFFF" : "none"};
    text-decoration: none;
    height: 1.5rem;
    padding: ${({padding}) => (
        padding === "1" ? "0px 20px 0px 20px" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "1" ? "1rem" : "0rem"
    )};
`;

export const Placeholder = styled.p`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
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

export const CartIcon = styled(ShoppingCartIcon)`
    color: ${({color}) => (
        color === "white" ? "white" : "black"
    )};
    margin-top: 1rem;
`;

export const NumberIndicaterBackground = styled.div`
    display: flex;    
    background: green;
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    padding: 3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width: 768px){
        grid-template-columns: 1rf;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
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
    background: white;
    width: ${({width}) => (
        width === "336" ? "336px" : "100%"
    )};
    height: ${({height}) => (
        height === "526" ? "526px" : "100%"
    )};
`;