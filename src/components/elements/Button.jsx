// import React from "react";
// import styled from "styled-components";

// export default function (props) {
//     const {label, styleClass, onClick, disabled} = props;
//     return (
//         <button className={styleClass} onClick={onClick} disabled={disabled}>{label}</button>
//     );
// }

// props로 받아오는 요소
// label => span 태그로 버튼 내부의 글
// styleClass => 적용될 className
// disabled => true/ false로 활성화/ 비활성화
// onClick => onClick 시 이벤트 대응

// import React from "react";
// import styled, { css } from "styled-components";
// import flex from "../lib/flex";

// const Button = (props) => {
//   return (
//     <StButton {...props} disabled={props.disabled}>
//       {props.children}
//     </StButton>
//   );
// };

// export default Button;

import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    width,
    padding,
    disable,
    bg,
    color,
    cursor,
    borderRadius,
    position,
    border,
  } = props;

  const styles = {
    margin,
    width,
    padding,
    color,
    bg,
    cursor,
    borderRadius,
    position,
    text,
    border,
  };

  return (
    <>
      <ElButton {...styles} onClick={_onClick} disabled={disable}>
        {text ? text : children}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  text: false,
  _onClick: () => {},
  children: null,
  margin: false,
  padding: "12px 0px",
  disable: false,
  color: "#fff",
  width: "100%",
  cursor: "pointer",
  bg: "#5ad7c0",
  borderRadius: "5px",
  position: false,
  border: false,
};

const ElButton = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  border: ${(props) => props.border};
`;

export default Button;
