import React from "react"
import styled from "styled-components"
import "./Footer.css"

const Footer = () => {
  return (
    <BGColor>
      <span>© HangHae99 9th Week7 Team01 | develog</span>
    </BGColor>
  )
}

export default Footer

const BGColor = styled.div`
  /* background-color: #f8f9fa;
  color: #12b886; */

  background-color: #12b886;
  color: #f8f9fa;
  /* color: #212529; */

  width: 95%;
  max-width: 1440px;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 100px auto 0;

  font-size: medium;
  font-weight: 500;
  font-family: "Fira Mono", monospace;
`;