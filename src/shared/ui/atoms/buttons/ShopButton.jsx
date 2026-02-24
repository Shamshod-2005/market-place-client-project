import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  padding: 6px 12px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const ShopButton = ({ text, icon, ...props }) => {
  return (
    <Btn {...props}>
      {text}
      {icon}
    </Btn>
  );
};

export default ShopButton;
