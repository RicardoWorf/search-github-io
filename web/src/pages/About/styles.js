import styled from 'styled-components';

export const DivContainer = styled.div`
    width:100%;
    height:100%;
    margin:0 auto;
`;

export const Header = styled.header`
    width:100%;
    max-width:100%;
    text-align: center;
    font-size:15px;
    padding:10px;
    background:#ED464B;
    color:#f1f1f1;
`;

export const Section = styled.section`
    width:100%;
    padding:30px 50px; 
    
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:relative;
`;

export const FormDev = styled.form`
    width:100%;
    max-width:350px;
    height:100%;
    padding:20px;
    border:2px solid #000;

    display:flex;
    flex-direction:column;
    align-items:center;

    h1 {
        margin-bottom:20px;
    }

    input {
        width:100%;
        height:40px;
        margin-bottom:30px;
        background:none;
        border:none;
        border-bottom:2px solid #ED464B;
        padding:0 10px;
        font-size:17px;
    }

    button {
        width:100%;
        height:50px;
        border:none;
        border-radius:50px;
        background:#ED464B;
        color:#F1F1F1;
        margin:10px 0;
    }
`;

export const ListDevs = styled.ul`
    h1 {
        margin-bottom:20px;
        font-size:30px;
        text-align:center;
    }
    li {
        width:100%;
        max-width:650px;
        border:2px solid #000;
        padding:10px;
        display:flex;
        text-align: justify;
	    text-justify:distribute;
    }
`;

export const DivInfo = styled.div`
    padding:0 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    h3 {
        font-size:25px;
        color:#ED464B;
    }

    p {
        width:100%;

        font-size:16px;
        font-weight:bold;
        color:#303030;
        margin:10px 0;
    }
`;

export const Techs = styled.span`
    font-size:20px;
    color:#ED464B;
`;

export const Github = styled.span`
    color:#5350EA;
`;

export const DivGroupInfo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    a {
        display:flex;
        align-items:center;
        font-size:16px;
        color:#ED464B;
        cursor:pointer;
        font-weight:bold;
        text-decoration:none;
    }
`;

export const Footer = styled.footer`
    position:absolute;
    bottom:0;
    width:100%;
    padding:15px;
    text-align: center;
    font-size:8px;
    background:#ED464B;
    color:#303030;

    span {
        color:#f1f1f1;
    }
`;