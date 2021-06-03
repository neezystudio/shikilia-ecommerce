import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Wrapper = styled.section`
    background: ${({backgroundColor}) => (
        backgroundColor === "black" ? "#404040" : 'transparent'
    )};

    height: ${({height}) => (
        height === "169" ? "169px" : "100%"
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
        marginTop === "1" ? "1rem" : "0rem" 
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
    text-decoration: none;
    height: 1.5rem;
`;

export const Placeholder = styled.p`
    margin-right: ${({marginRight}) => (
        marginRight === "1" ?  "1rem" : "0rem"
    )};
    margin-top: ${({marginTop}) => (
        marginTop === "1" ? "0.1rem" : "0rem"
    )}
    height: 5rem;
`;

export const CartIcon = styled(ShoppingCartIcon)`
    color: ${({color}) => (
        color === "white" ? "white" : "black"
    )};
`;

export const NumberIndicaterBackground = styled.div`
    display: flex;    
    background: green;
    justify-content: center;
    border-radius: 25px;
    color: white;
    margin-left: 0.5rem;
    margin-top: -2rem;
`;

export const NumberIndicater = styled.div``;