import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import SearchList from "../components/features/SearchList"
import { getSearch } from "../redux/modules/searchSlice"
import { VelInput } from "../components/elements/Input"
import { Button, VelButton } from "../components/elements/Button"

const Search = () => {
  const posts = useSelector((store) => store.search.search)
  const dispatch = useDispatch()
  const [search, setSearch, searchHandle] = useInput()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearch(search.word))
  }

  return (
    <Flex>
      <VelInput
        name="word"
        value={search.word}
        onChange={searchHandle}
      ></VelInput>
      <Button
        width="140px !important"
        margin="5px 0 0 0"
        height="46px"
        _onClick={onSubmit}
      >
        검색
      </Button>
      <SearchList />
    </Flex>
  )
}

export default Search

const Flex = styled.div`
  display: flex;
`
