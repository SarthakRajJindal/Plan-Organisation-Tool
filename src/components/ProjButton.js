import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  && {
    color: black;
    background: #5aac44;
  }
`;

const ProjButton = ({ children, onClick }) => {
    return (
        <StyledButton variant="contained" onMouseDown={onClick}>
            {children}
        </StyledButton>
    );
};

export default ProjButton;
