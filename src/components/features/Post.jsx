import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addCmt } from "../../redux/modules/cmtSlice"
import { getList, deletePost, addPost } from "../../redux/modules/postSilice"
import styled from "styled-components"
import Box from "../elements/Box"
import Button from "../elements/Button"
import Input from "../elements/Input"
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineChatAlt2,
  HiOutlineChevronDown,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi"
import Comments from "./Comments"

const Post = ({ post, onDelete, id }) => {
  const dispatch = useDispatch()

  console.log(post)
  // const navigate = useNavigate()
  const [useIsDisplay, setUseIsDisplay] = useState("none")
  const [useToggle, setUseToggle] = useState("")

  //태그 국문 변환용 스테이트
  const [tag, setTag] = useState("")

  // 국문변환 스위치문
  // switch (post.tag) {
  //   case "daily":
  //     return setTag("일상")
  //   case "ques":
  //     return setTag("질문")

  //   case "share":
  //     return setTag("공유")

  //   case "notice":
  //     return setTag("공지")
  // }

  // const Tag = () => {
  //   if (post.tag === "daily") return setTag("일상")
  //   if (post.tag === "ques") return setTag("질문")
  //   if (post.tag === "share") return setTag("공유")
  //   if (post.tag === "notice") return setTag("공지")
  // }

  //댓글
  const initialState = {
    id: post.postId,
    comments: "",
  }
  const [cmt, setCmt] = useState(initialState)

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setCmt({ ...cmt, [name]: value })
  }

  const obj = {
    id: post.postId,
    comments: cmt.comments,
  }
  const onCmtHandler = (event) => {
    event.preventDefault()
    if (cmt.comments !== "") {
      dispatch(addCmt(obj))
    } else {
      alert("댓글 내용이 없습니다.")
    }
  }
  const commentToggle = () => {
    useIsDisplay === "none" ? setUseIsDisplay("block") : setUseIsDisplay("none")
  }

  const icoTurn = () => setUseToggle(!useToggle)
  const rotate = useToggle ? "rotate(180deg)" : "rotate(0)"

  return (
    <>
      <Box size="item">
        <Flex>
          <Handle>
            <HdLi>
              <Button size="small" color="reverse">
                <HiPencilAlt className="ico" />
              </Button>
            </HdLi>
            <HdLi>
              <Button size="small" color="reverse">
                <HiTrash
                  className="ico"
                  onClick={() => onDelete(post.postId)}
                />
              </Button>
            </HdLi>
          </Handle>
        </Flex>
        <TitleBox>
          <Title>{post.title}</Title>
          <Like>
            <Icon>
              <HiOutlineHeart className="ico" /> <HiHeart className="ico2" />
            </Icon>
            <LikeTxt>{post.postLikeCount}</LikeTxt>
          </Like>
        </TitleBox>
        <Tag>
          <Author>@ {post.accountName}</Author>
          <TagLi>
            <Button color="tag-b">{post.accountTeam}조</Button>
          </TagLi>
          <TagLi>
            <Button color="tag-b">
              {post.accountLeader === true ? "팀장" : "팀원"}
            </Button>
          </TagLi>
          <TagLi>
            <Button color="tag-red">{post.tag}</Button>
          </TagLi>
        </Tag>
        <Hr />
        <Img
          display={post.img !== null ? "block" : "none"}
          // onClick={() => {
          //   navigate(`/posts/${post.postId}`)
          // }}
          src={post.img}
        />
        <Body>
          <Content
          // onClick={() => {
          //   navigate(`/posts/${post.postId}`)
          // }}
          >
            {post.contents}
          </Content>
          <CommentHandle>
            <HiOutlineChatAlt2 className="ico" />
            <CmtFlex>
              <CmtTxt>
                댓글
                <HiOutlineChevronDown
                  className="ico"
                  style={{ transform: rotate }}
                  onClick={() => {
                    commentToggle()
                    icoTurn()
                  }}
                />
              </CmtTxt>
              <CmtRight>
                {post.createdAt === post.modifiedAt
                  ? `${post.modifiedAt}`
                  : `${post.modifiedAt} 수정됨`}
              </CmtRight>
            </CmtFlex>
          </CommentHandle>
          <Cmt isDisplay={useIsDisplay}>
            <CmtInput>
              <Input onChange={onChangeHandler} name="comments" />
              <Button color="reverse" size="short" onClick={onCmtHandler}>
                등록
              </Button>
            </CmtInput>
            {post.comments.map((comment) => {
              if (post.comments.length !== 0)
                return (
                  <Comments
                    key={Math.random()}
                    comments={post.comments.comments}
                    comment={comment}
                  />
                )
            })}
          </Cmt>
        </Body>
      </Box>
    </>
  )
}

export default Post

const CmtInput = styled.div`
  display: flex;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`
const Title = styled.h3`
  font-size: 1.2rem;
  line-height: 1;
`
const Like = styled.div`
  font-size: 0.9rem;
  margin-top: 16px;
  font-weight: 400;
  display: flex;
`

const Icon = styled.div`
  font-size: 1.5rem;
  line-height: 0;
  color: #fd5c63;
  .ico2 {
    display: none;
  }
  &:hover {
    .ico {
      display: none;
    }
    .ico2 {
      display: block;
    }
  }
`

const LikeTxt = styled.div`
  margin-left: 10px;
  margin-top: 3px;
`

const Tag = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  list-style: none;
  margin: 0 10px;
  padding: 0;
`

const Author = styled.li`
  font-weight: 400;
  font-size: 14px;
  margin-right: 5px;
  line-height: 1.4;
`
const TagLi = styled.li`
  font-size: 12px;
  margin-right: 5px;
`

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 10px 0;
  border-radius: 10px;
  display: ${(props) => props.display};
`

const Hr = styled.hr`
  margin-top: 20px;
  border-bottom: 0;
  border-top: 1px solid #fd5c63;
`

const Body = styled.div`
  margin: 10px 0;
`

const Content = styled.div`
  font-size: 13px;
  font-weight: 400;
`

const CommentHandle = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-top: 10px;
  line-height: 1.6;
  color: #434343;

  .ico2 {
  }
  /* .ico2 {
    display: none;
  }
  &:hover {
  .ico {
    display: none;
  }
  .ico2 {
    display: block;
  }
  }*/
`
const CmtFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
`

const CmtTxt = styled.div`
  margin-left: 5px;
  margin-top: 2px;
  font-size: 0.8rem;
  font-weight: 600;

  .ico {
    transform: ${(props) => props.transform};
  }
`
const CmtRight = styled.div`
  margin-left: 5px;
  margin-top: 2px;
  font-size: 0.8rem;
  font-weight: 400;
  color: #aaa;
`

const Cmt = styled.div`
  display: ${(props) => props.isDisplay};
`

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 0;
  height: 36px;
  width: 100%;
  margin: 0 auto;
  ul {
    padding: 0;
  }
`

const Handle = styled.ul`
  list-style: none;
  display: flex;
`

const HdLi = styled.li`
  list-style: none;
`
