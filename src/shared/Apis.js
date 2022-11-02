import axios from "axios"
import { Cookies } from "react-cookie"

// 인스턴스 3개 나누기 가능
const cookies = new Cookies()
const noToken = axios.create({
  baseURL: process.env.REACT_APP_URL,
  // headers: {
  //   accept: "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // },
  withCredentials: true,
})

const token = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    accept: "application/json",
    Access_Token: `Bearer ${cookies.get("token")}`,
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
})

const file = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    enctype: "multipart/form-data",

    Access_Token: `Bearer ${cookies.get("token")}`,
  },
  withCredentials: true,
})

export const Apis = {
  //로그인
  loginAX: (loginInfo) => noToken.post(`/team01/member/login`, loginInfo),
  //회원가입
  signupAX: (signupInfo) => noToken.post(`/team01/member/signup`, signupInfo),
  //이메일중복확인
  usernameAX: (userId) => noToken.post(`/team01/member/idCheck`, userId),
  //게시글 작성
  filePostAX: (payload) => file.post(`/team01/post`, payload),
  //게시글 수정
  putPostAX: (postId) => file.put(`/team/01/post/${postId}`, postId),
  //게시글 삭제
  deletePostAX: (postId) => token.delete(`/team/01/post/${postId}`),
  //게시글 좋아요
  likePostAX: (postId) => token.get(`/team01/likes/${postId}`),
  //게시글 전체 조회 - 좋아요순
  getPostLikeAX: () => noToken.get(`/team01/getAllPostByLike`),
  //게시글 전체 조회 - 시간순
  getPostTimeAX: () => noToken.get(`/team01/getAllPostByTime`),
  //게시글 상세 조회
  getDetailAX: (postId) => token.get(`/team01/getPost/${postId}`),

  //댓글 작성
  postCmtAX: (commentId) => token.post(`/team01/comment/${commentId}`),
  //댓글 삭제
  deleteCmtAX: (commentId) => token.post(`/team01/comment/${commentId}`),
  //마이페이지 조회
  getMyPageAX: (userId) => noToken.get(`/team01/getMyPage?id=${userId}`),
  //마이페이지 작성자 소개 수정
  putMyPageAX: (payload) => token.put(`team01/mypage/intro`, payload),
  //마이페이지 이미지 수정
  putMyImgAX: (payload) => token.put(`/team01/mypage/img`, payload),
}

export default Apis;

