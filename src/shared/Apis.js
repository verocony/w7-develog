import axios from "axios"
import { Cookies } from "react-cookie"

const cookies = new Cookies()

const noToken = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL,
  headers: {
    // "content-type": "application/json;charset=UTF-8",
    // accept: "application/json",
  },
  withCredentials: true,
})

const token = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL,
  headers: {
    accept: "application/json",
    Access_Token: `${cookies.get("Access_Token")}`,
  },
  withCredentials: true,
})

const file = axios.create({
  // 추후에 로컬에서 서버 주소로 변경해야 함
  baseURL: process.env.REACT_APP_URL,
  headers: {
    enctype: "multipart/form-data",
    // "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Access_Token: `${cookies.get("Access_Token")}`,
  },
  withCredentials: true,
})

// 예시
export const Apis = {
  //로그인
  loginAX: (loginInfo) => noToken.post(`/team01/member/login`, loginInfo),
  //회원가입
  signupAX: (signupInfo) => noToken.post(`/team01/member/signup`, signupInfo),
  //이메일중복확인
  usernameAX: (userid) => noToken.post(`/team01/member/idCheck`, userid),

  //게시글 작성
  postFileAX: (payload) => file.post(`/team01/post`, payload),
  //게시글 수정
  putPostAX: (postId, postInfo) =>
    token.put(`/team/01/post/${postId}`, postInfo),
  //게시글 삭제
  deletePostAX: (postId) => token.delete(`/team/01/post/${postId}`),
  //게시글 좋아요
  likePostAX: (postId) => token.get(`/team01/likes/${postId}`),
  //게시글 전체 조회(좋아요순)
  getLikePostAX: () => noToken.get(`/team01/getAllPostByLike`),
  //게시글 전체 조회(최신순)
  getTimePostAX: () => noToken.get(`/team01/getAllPostByTime`),
  // 게시글 상세 조회
  getDetailAX: (postId) => noToken.get(`/team01/getPost/${postId}`),

  //댓글 작성
  postCmtAX: (commentId) => token.post(`/team01/comment/${commentId}`),
  //댓글 삭제
  deleteCmtAX: (commentId) => token.post(`/team01/comment/${commentId}`),

  //검색
  getSearchAX: (keyword) => noToken.get(`/team01/search/?content=${keyword}`),
}
export default Apis
