import styled from 'styled-components';
//todas a variáveis de css usadas aqui, estão definidas em src/index.css
export const NavStyle = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:100;
    width:100%;    
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:100px;

    padding-left:5%;
    padding-right:5%;

    margin-bottom:1em;
    background:var(--black);
    border-bottom: 3px solid var(--primary);


    img{
        max-width:168px;

    }
    p:first-child{
        color:blue;
    }
    p{
        ::selection{
            background:#222;
            color:#fff;
        }
        color:#222;
    }
    
    
    @media(max-width:900px){
        justify-content:center !important;


        img{
            max-width:168px;
        }

    }
`;
export const StyledButton = styled.div`

    color: #fff;

    border: 1px solid #fff;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;   
    background-color:transparent;
    
    a{
        text-decoration:none;
    }

    transition:.7s;

    &:hover{
        background:var(--primary);
        border-color:var(--black);
        color:var(--black);; 
    }   

    @media(max-width:900px){
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;

        &:hover{
            background:var(--black);
            color:var(--primary);
        }

    }
 
`;
