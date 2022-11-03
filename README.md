# Welcome to REACT! Clone Coding _ develog |  😎
![]()

▶️[Go to Project](https://w7-develog.netlify.app/)

## 👉 페이지 소개
실제 서비스 중 하나를 선택해서, 해당 서비스를 CRUD 과정을 포함하여 직접 구현
- Sign up/in/out (Response Header로 Token 전달받아서 쿠키에 저장 및 삭제)
- List (props를 이용해서 컴포넌트 재사용하면서 map()으로 리스트 구성, 카테고리 분류-트렌드(좋아요순), 최신(시간순))
- Detail (새 글 작성/수정/삭제와 댓글 작성/수정/삭제/조회로 CRUD 구성)
- Search (검색창을 통해 원하는 조건을 만족하는 데이터를 받아와서 브라우저에 렌더링)
- MyPage (본인이 쓴 글과 프로필만 모아서 보는 개인화된 페이지, userId로 사용자 특정하여 url 설정)
<br>

## 👉 기술 스택
> CSS (Styled Component) / REACT(JS, JSX) / Redux(@Toolkit) / vercel 
<br>

## 👉 컴포넌트 구성 및 WF
![]()
<details>
<summary>WireFrame</summary>
<div markdown="1">       
  
![](https://bit.ly/3FGuSRt)
![](https://bit.ly/3hbPTcw)
![](https://bit.ly/3ftr4se)
![](https://bit.ly/3UkQ4Rb)
![](https://bit.ly/3fwWKwM)
![](https://bit.ly/3UjBLfN)
![](https://bit.ly/3U7AMQ7)

</div>
</details>
<br>

## 👉 구현 기능
### 1. Sign-up / in / out (Create)
- Create : axios.post 로 서버에 onChange값을 넘겨주면서 cross-check로 프론트도 validation 한 이후, 서버로부터 Token 전달 받아서 로그인 상태 유지
- Validation : 정규표현식을 사용하여 자릿수, 대/소문자 혹은 특수문자등 서버와 공통적으로 결정한 방식으로 ID/PW 생성<br>
ㄴ 정규표현식 조건을 충족하지 않을 경우, input창 아래에 해당 조건을 만족하지 않는다는 event를 노출하여 사용자에게 알림

### 2. Posting List page (Read)
- Read : GET방식으로 서버에서 response 전달받은 내용으로 브라우저에 렌더링하여 구현. 카테고리를 나누어, 주어진 조건에 맞도록 filtering후 map으로
        브라우저에 컴포넌트 구현되도록 함. props를 통해 트렌드/최신 두 가지 카테고리의 리스트들은 Content.jsx를 재사용하여 각각의 리스트들을 나타나게 함.

### 3. Detail page (Read & Update) & Comments (CRUD)
- Read : Main page에서 List의 제목 혹은 사진을 클릭하면 개별 게시물 조회로 이동. POST 요청으로 onChange로 받은 값과, 이미지 파일은 form-data에 실어서
        enctype으로 서버에 전달함.
- Update : axios.patch로 todo.body 데이터 수정 (thunk, redux, useEffect, dispatch)
- Comment(CRUD) : 해당 게시물의 아이디값을 키값으로 갖는 기존 todoList처럼 crud 구현

### 4. Search (Read)
- Read : GET으로 전달받은 정보를 받아와서, 사용자가 검색창에 입력한 onChange value를 가지고, 원하는 검색결과를 필터링하여 브라우저에 렌더링

### 5. My-Page (Read)
- Read : userId로 개인의 포스팅 정보를 가져와서 본인만 접근할 수 있는 페이지에서 자신의 게시물을 관리, 개인 프로필 수정 및 관리 가능

### 6. Env ()
- 개발 모드와 배포모드를 나눠 개발모드일때만 redux devtool이 보이도록 구현하고 api의 url을 환경변수로 지정하였습니다.

### 7. Custom Hook
- useState에 onChange핸들러를 추가한 useInput훅을 만들었습니다.
- Global Styled-component를 이용하여 컴포넌트의 재사용성을 높인 버튼 컴포넌트 활용

### 8. Redux toolkit 활용 (thunkAPI)
- 기존 보다 코드량을 줄이고 미들웨어 개념을 통해 리듀서를 비동기 처리하는방법을 알게되었습니다.

### 9. json-server & Heroku - Mock server 배포
- Back-end의 API작업이 완료되지 않았을때의 상황을 가정하여 json-server를 이용하여 간단한 nosql Mock 서버 구성 및 Heroku로 서버 배포

### 10. Redux devtool 비활성화 처리

<br>

## 👉 디자인 & css
### Styled Components : 만능 버튼
- **조건부 Styled Components `props` 사용하기 :** <br>
Todo 컴포넌트의 <Todobox />`border, color 요소를 isdone의 value에 따라 다르게 적용되도록 props 활용
- **`props.children` 을 활용한 만능 버튼 컴포넌트 구성** <br>
모든 프로젝트에 적용 가능한 혹은 스타일만 수정하여 활용가능할 정도로 구현하지는 않았으나,<br>
프로젝트 볼륨에 맞춘 color / size 속성을 활용할 수 있는 컴포넌트로 구성

### 토글 UI 
- (isdiplay = state ? none : block)
- 정확히 표현하자면 토글 방식이라기보다는 `버튼 클릭 시 전환`되는 UI 구현
- 적용범위 : <TodoList> 페이지 - 해야할일/완료한일 <Detail> 페이지 - 댓글창(노출, 숨김)

### Mobile responsive web
<!-- ![](https://velog.velcdn.com/images/joyfive/post/5c91d69b-2ce0-4dbb-b3bd-7494035b2688/image.gif) -->


<br>

## 👉 배운점 & 아쉬운점
### 배운점👍
<!-- <기쁨 @joyfive>
- **Redux Toolkit, Thunk** <br>
리덕스 툴킷을 활용하여 기존 전역 상태관리 store와 json-server를 연결하여 통신하는 방법을 배웠습니다.

- **Custom Component 세분화** <br> 다양한 페이지, 컴포넌트에서 활용할 수 있는 UI 컴포넌트를 만들어서, 추후 스타일링 시 더욱 빠르고 효율적인 작업이 가능하리라 기대됩니다. 

- **UI 숨김처리를 활용한 토글방식** <br>
display: `none`, `block` 속성과 useState를 활용하여 버튼 클릭 시 상태값이 업데이트되어 css props가 변경되도록 토글 UI를 구현했습니다. <br>

<br>

<현홍 @minhyeonhong>
- **redux toolkit** <br>
기존 보다 코드량을 줄이고 미들웨어 개념을 통해 리듀서를 비동기 처리하는방법을 알게되었습니다.

- **json-server** <br>
Back-end의 API작업이 완료되지 않았을때 json-server를 이용하여 간단한 nosql서버를 구성하고
이를 axios를 이용하여 json-server로 데이터를 가져오거나 수정하는 것을 알게되었습니다.

### 아쉬운점👀
<기쁨 @joyfive>
- **욕심이 과했다😢**<br>
2명이 함께 진행하는 프로젝트이지만 challenge로 각자 독자적인 기능개발 후 <br> merge하여 스타일링 작업을 진행하기로 계획하였으나, 실제 프로젝트 진행 시 팀원과의 개발속도에 차이가 있어, <br> 저는 게시판 CRUD까지만 진행한 상태에서 댓글 CRUD 베리에이션 작업은 중간에 중단하고 <br>댓글 기능은 현홍님의 작업 소스로 그대로 사용하게 되었습니다. <br>
ㄴ 새로이 배운 내용이 많아 개념을 익히면서 3-4일 만에 작업을 완료하기에는 다소 빠듯한 일정이었던 것 같습니다. 팀 과제로 나누어 진행했다면 정상적인 속도이기는 하나, 앞으로 기능 구현 시간을 더 단축시키기 위해 CRUD 기본 개념을 반복적으로 연습하고자 합니다:)
<br>

<현홍 @minhyeonhong>
- **게시글-댓글 DB 종속처리** <br>
ㄴ투두 지웠을때 댓글 같이 안사라짐 <br>
ㄴtodoList에서 게시물을 삭제하면 해당 게시물에 있던 댓글들이 같이 삭제되지 않아 <br>
ㄴ삭제했던 글의 id값으로 글을 다시 등록하면 댓글이 자동으로 달려있음 <br>
ㄴ반복문을 돌려 댓글들을 지울수 있었겠지만 사이트의 퍼포먼스를 고려해 하지않음 <br>

- **memo 최적화 미사용** <br>
ㄴ시간 관계상 불필요한 렌더링을 막는 최적화 작업까지는 진행하지 못하고 엑스트라 리듀서로만 구현함<br>
ㄴaxios로 api통신후 받는 response값을 state에 반영 했다면 퍼포먼스가 더 나왔겠지만<br>
axios를 익히기 위해 state의 값이 변경될 때 마다 axios로 다시get하는 방식으로 처리 후 최적화 작업은 시간 관계상 진행하지 못함

<br>

## 진도체크
### 이전 목표 : *Success!*<br> 
1. ~~CRUD, useStae, Redux 활용 다지기~~<br>
2. ~~토글 UI 연습하기~~<br> -->


Copyright 2022. hang-hae99 9th W5 team C2. all rights reserved.

<!-- ## 항해 99 클론코딩 : 프론트엔드 --! >