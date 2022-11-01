import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Grid, Text, Image, Button } from "../components/elements";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as imageActions } from "../redux/modules/imageSlice";
import {  useNavigate } from "react-router-dom";
// import { history } from "../redux/configureStore";

const UpdateFile = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();
  const navigate = useNavigate();

  //파일 선택
  const selectFile = (e) => {
    //선택된 파일
    const file = fileInput.current.files[0];

    //FileReader 객체 생성
    const reader = new FileReader();
    reader.readAsDataURL(file);

    //파일 로드 완료시
    reader.onloadend = (e) => {
      const preview = reader.result;

      //리덕스 preview 저장
      dispatch(imageActions.setPreview(preview, file));
      navigate(`/UpdatePage`);
    };


    //onClick 함수 여기에 쓰기 (preview 설정하고..!)
  };
  return (
    <>
      <Grid justify="center" flex margin="24px 0">
        <Label htmlFor="file">컴퓨터에서 선택</Label>
        <ButtonOrigin>사진 그대로 사용하기</ButtonOrigin>

        <File
          type="file"
          id="file"
          accept="image/*"
          onChange={selectFile}
          ref={fileInput}
          // disabled={is_uploading}
        ></File>
      </Grid>
    </>
  );
};

const Label = styled.label`
  padding: 5px 9px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #0095f6;
  color: #fff;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
`;

const ButtonOrigin = styled.button`
  all: unset;
  padding: 5px 9px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #0095f6;
  color: #fff;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
`;

const File = styled.input`
  position: absolute;
  width: 0px;
  height: 0px;
  overflow: hidden;
  z-index: 1;
`;

export default UpdateFile;
