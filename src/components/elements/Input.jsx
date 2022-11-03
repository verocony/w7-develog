import React from "react"
import styled, { withTheme } from "styled-components"
import { Text } from "./Text"

const Input = (props) => {
  const {
    _onChange,
    placeholder,
    type,
    value,

    label,
    width,
    disable,
    bg,
    _onKeyDown,
    _ref,
    _onFocus,

    border,
    height,
    margin,
  } = props

  const styles = {
    width,
    bg,
    height,
    margin,
    border,
  }

  return (
    <>
      {/* {label && <Text margin="0px">{label}</Text>} */}
      <ElInput
        {...styles}
        type={type}
        onChange={_onChange}
        placeholder={placeholder}
        value={value}
        disabled={disable}
        onKeyDown={_onKeyDown}
        ref={_ref}
        onFocus={_onFocus}
        border-radius
        minheight
      />
    </>
  )
}

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  width: "100%",
  _onChange: () => {},
  _onClick: () => {},
  disable: false,
  bg: "white",
  _onKeyDown: () => {},
  _ref: () => {},
  _onFocus: () => {},
  padding: "12px 4px",
  border: false,
  Radius: "5px",
  height: "40px",
  margin: false,
  minheight: "7.125rem",
}
const ElInput = styled.input`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.Radius};
  background-color: ${(props) => props.bg};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  min-height: ${(props) => props.minheight};
`

const VelInput = styled.input`
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 1rem;
  font-weight: 400;
  writing-mode: horizontal-tb !important;
  color: #212529;
  flex: 1 1 0%;
  padding: 0.8rem 1rem;
  background: white;
  border-right: none;
  outline: none;
  border: 0.25px solid #adb5bd;
  margin: 5px 0;
  width: 275px;
  :focus {
    border-color: #12b886;
  }
  ::placeholder {
    color: #adb5bd;
    font-size: 0.8rem;
  }
`
export { Input, ElInput, VelInput }

//
// ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
