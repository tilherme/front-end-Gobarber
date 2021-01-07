import styled,{ css} from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isField: boolean;
}

export const Container = styled.div<ContainerProps>`
    
    background:#232129;
      
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #666260;
        display: flex;
        align-items: center;
     & + div {
        margin-top: 8px;
    }
    ${props => props.isFocused && css `
    color: #FF9000;
    border-color: #FF9000;
    ` }
    ${props => props.isField && css `
    color: #FF9000;
    ` }
    input{
        flex:1;
        background:transparent;
        border:0;
        color:#F4ede8;

        &::placeholder{
            color: #666260;
        }
 
    }
    svg { 
        margin-right:16px;
    }
`