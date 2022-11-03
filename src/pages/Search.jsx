import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import SearchList from "../components/features/SearchList"
import { getSearch } from "../redux/modules/searchSlice"
import { VelInput } from "../components/elements/Input"
import { Button, VelButton } from "../components/elements/Button"
import Header from "../components/Layout/Header"

const Search = () => {
  const posts = useSelector((store) => store.search.search)
  const dispatch = useDispatch()
  const [search, setSearch, searchHandle] = useInput()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearch(search.word))
  }

  return (
    <>
      <Header />
      <Flex>
        <Flex>
          <Searchs>
            <svg width="17" height="17" viewBox="0 0 17 17">
              <path
                fill-rule="evenodd"
                d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
                clip-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
            <Input
              name="word"
              value={search.word}
              onChange={searchHandle}
              placeholder="검색어를 입력해주세요."
            ></Input>
          </Searchs>
          <Button
            width="140px !important"
            margin="80px 0 0 0"
            height="66px"
            _onClick={onSubmit}
          >
            검색
          </Button>
        </Flex>
      </Flex>
      <SearchList />
    </>
  )
}

export default Search

const Flex = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`

const Searchs = styled.div`
  display: flex;
  border: 1px solid #adb5bd;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;
  cursor: text;
  height: 4rem;
  padding: 0px 1.5rem;
  margin-top: 80px;
`

const Input = styled.input`
  display: flex;
  border: 0;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.125s ease-in 0s;

  cursor: text;
  height: 4rem;
  width: 550px;
  padding: 0px 1.5rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: #495057;
  :focus {
    border: 0;
    border-color: white;
  }
`
