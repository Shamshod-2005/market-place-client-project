import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  padding: 6px 12px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 5px;
`;

const ShopButton = ({ text }) => {
  return <Btn>{text}</Btn>;
};

export default ShopButton;
