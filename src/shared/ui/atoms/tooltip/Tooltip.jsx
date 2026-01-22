import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -6px);
  }
`;

const TooltipText = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;

  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  pointer-events: none;
`;

const Tooltip = ({ text, children }) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipWrapper>
  );
};

export default Tooltip;
