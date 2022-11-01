import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInput"
import SearchList from "../components/features/SearchList"
import { getSearch } from "../redux/modules/searchSlice"

const Search = () => {
  const posts = useSelector((store) => store.search.search)
  const dispatch = useDispatch()
  const [search, setSearch, searchHandle] = useInput()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearch(search.word))
  }

  return (
    <div>
      <input name="word" value={search.word} onChange={searchHandle}></input>
      <button onClick={onSubmit}>검색</button>
      <SearchList />
    </div>
  )
}

export default Search
