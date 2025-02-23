import styled from "styled-components"


type ButtonPropsType = {
    name: string,
    onClick: ()=>void
    className?: string,
    disabled?: boolean
}

export const Button = (props:ButtonPropsType) => {
    const{name, onClick,className,disabled} = props;
    return (
       <ButtonCounter className={className} onClick={onClick} disabled={disabled}>{name}</ButtonCounter>
    );
};

const ButtonCounter = styled.button`
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        width: 60px;
        height: 25px;
        border: none;
        background-color: rgba(28, 211, 232, 0.89)
    
  `