import axios from "axios"
import { Cookies } from "react-cookie"
import {useParams} from 'react-router-dom';
import { getCookie } from "./Cookie";

const cookies = new Cookies()
const postId = useParams.postId;

const noToken = axios.create({
  // baseURL: process.env.REACT_APP_URL,
  baseURL: "http:13.125.137.86",
  headers: {
    // "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: true,
})

const token = axios.create({
  // baseURL: process.env.REACT_APP_URL,
  baseURL: "http:13.125.137.86",
  headers: {
    // "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // Access_Token: `Bearer ${cookies.get("token")}`,
    Access_Token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMTIzIiwiZXhwIjoxNjY3MzA2OTUxLCJpYXQiOjE2NjczMDUxNTF9.zACVr8rx3qMCCfagzc_paxgDFEACsxhGpzxVoUOmrCU',
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
})

const file = axios.create({
  baseURL: "http:13.125.137.86",
  headers: {
    enctype: "multipart/form-data",
    // Access_Token: `Bearer ${cookies.get("token")}`,
    Access_Token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMTIzIiwiZXhwIjoxNjY3MzA2OTUxLCJpYXQiOjE2NjczMDUxNTF9.zACVr8rx3qMCCfagzc_paxgDFEACsxhGpzxVoUOmrCU',
  },
  withCredentials: true,
})

// 예시
export const Apis = {
  // 로그인
  loginAX: (loginInfo) => noToken.post(`/team01/member/login`, loginInfo),
  //회원가입
  // signupAX: (signupInfo) =>
  //   instance.nh.post(`/team01/member/signup`, signupInfo),
  //이메일중복확인
  usernameAX: (userid) => noToken.post(`/team01/member/idCheck`, userid),
  // 게시글 작성
  filePostAX: (payload) => file.post(`/team01/post`, payload),
  // //게시글 수정
  putPostAX: (postInfo) =>
    file.put(`/team/01/post/${postInfo.postId}`, postInfo),
  //게시글 삭제
  deletePostAX: (id) => token.delete(`/team/01/post/${id}`),
  //게시글 좋아요
  likePostAX: (id) => token.get(`/team01/likes/${id}`),
  //게시글 전체 조회
  getPostAX: () => token.get(`/team01/getPost`),
  //게시글 상세 조회
  getDetailAX: (postId) => token.get(`/team01/getPost/${postId}`),

  //댓글 작성
  postCmtAX: (id) => token.post(`/team01/comment/${id}`),
  //댓글 삭제
  deleteCmtAX: (id) => token.post(`/team01/comment/${id}`),
}

export default Apis

//대댓글 작성부터는 이후 추가해서 사용 필요

//   //마이페이지 계정 수정 페이지
//   putUserInfoAX: (userinfo) => instance.put("/my/update", userinfo),
//   //공통
//   //북마크
//   postBookmarkAX: (id) => instance.post(`/bookmark?cardId=${id}`),

//   //메인페이지
//   //실시간 별보기 좋은 캠핑장
//   getMainBoardAX: () => instance.get("/main/boardList"),

//   //별자리 페이지
//   //별자리 사진+내용
//   getStarPhotoAX: () => instance.get(`/star/photo`),
//   //안내사항 (월출,월일,별관측지수)
//   getNoticeAX: (lat, lon) =>
//     instance.get(`/star/info?latitude=${lat}&longitude=${lon}`),
//   //안내사항 (날씨관련)
//   getNoticeWeatherAX: (lat, lon, time) =>
//     instance.get(
//       `/star/info/time?latitude=${lat}&longitude=${lon}&time=${time}`
//     ),
//   //실시간 별보기 좋은 지역
//   getStarHotAX: () => instance.get("/star/hot"),

//   //지도페이지
//   //게시판 리스트 불러오기 cityName => cityName="서울시"/
//   getMapListAX: (cityName, offset) =>
//     instance.get(`/board/map/list?${cityName ? cityName : ""}offset=${offset}`),
//   //검색 자동 완성 키워드
//   getMapSearchAX: (keyword) =>
//     instance.get(`/board/keyword?cityName=${keyword}`),
//   getMapMarkerAX: (id) => instance.get(`/board/map/search?id=${id}`),

//   //디테일 페이지
//   getPostDetailAX: (id) => instance.get(`/detail?boardId=${id}`),
//   //게시글 삭제
//   getDeletePostAX: (id) => instance.delete(`/detail/delete?boardId=${id}`),
//   //게시글 작성
//   //게시글 수정
//   postAddPostAX: (content) => instance.post("/board", content),
//   putEditPostAX: (id, content) =>
//     instance.put(`/board/update?boardId=${id}`, content),
//   getCheckAddressAX: (keyword) =>
//     instance.get(`/address/check?address=${keyword}`),

//   //마이페이지
//   //회원탈퇴
//   deleteAccountAX: () => instance.get("/my/leave"),
//   //내가 쓴 글 리스트
//   getMyListAX: (offset) => instance.get(`/my/writeList?offset=${offset}`),
//   //북마크 리스트
//   getMyBookmarkAX: (offset) => instance.get(`/my/bookmark?offset=${offset}`),

//   //마이페이지 계정 수정 페이지
//   putUserInfoAX: (userinfo) => instance.put("/my/update", userinfo),

//   //좋아요
//   //메인커뮤니티 페이지
//   postLikeAX: (id) => instance.post(`/board/like?cardId=${id}`),
//   // getCardAX: (sort) => instance.get(`/community/list?sort=${sort}`),
//   getCardAX: (sort, cityName, offset) =>
//     instance.get(
//       `/community/list?sort=${sort}${cityName ? cityName : ""}&offset=${offset}`
//     ),
// }

// // reducer에서는 이렇게 쓴다!
// const getMyList = (offset) => {
//   apis
//     .getMyListAX(offset)
//     .then((response) => {
//       const data = response.data.data
//       setMyList((prev) => [...prev, data.dataList])
//       setMaxPage((prev) => ({ ...prev, myPost: data.maxPage }))
//       setDataSize((prev) => ({ ...prev, myPost: data.dataSize }))
//       setTimeout(500)
//     })
//     .catch((err) => {
//       alert(err)
//     })
// }

