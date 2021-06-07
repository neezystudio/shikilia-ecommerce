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
        color === "white" ? "white" : "black"
    )};
    border-left: ${({borderLeft}) => borderLeft ? "1px solid #FFFFFF" : "none"};
    border-right: ${({borderRight}) => borderRight ? "1px solid #FFFFFF" : "none"};
    text-decoration: none;
    height: 1.5rem;
    margin-left: ${(marginLeft) => (
        marginLeft === "1" ? "10rem" : "0rem"
    )}
`;

export const Placeholder = styled.p`
    margin-right: ${({marginRight}) => (
        marginRight === "1" ?  "1rem" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "0.1" ? "0.1rem" : "0rem" &&
        marginTop === "2" ? "10rem" : "0rem"
    )}
    height: 5rem;
    color: ${({color}) => (
        color === "white" ? "white" : "black",
        color === "black" ? "black" : "white"
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