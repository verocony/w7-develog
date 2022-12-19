# Welcome to REACT! Clone Coding _ develog |  😎
![]()

▶️[Go to Project](https://hanghae-7-w-clone.vercel.app//)

## 👉 페이지 소개
실제 서비스 중 하나를 선택해서, 해당 서비스를 CRUD 과정을 포함하여 직접 구현
- Sign up/in/out (Response Header로 Token 전달받아서 쿠키에 저장 및 삭제)
- List (props를 이용해서 컴포넌트 재사용하면서 map()으로 리스트 구성, 카테고리 분류-트렌드(좋아요순), 최신(시간순))
- Detail (새 글 작성/수정/삭제와 댓글 작성/수정/삭제/조회로 CRUD 구성)
- Search (검색창을 통해 원하는 조건을 만족하는 데이터를 받아와서 브라우저에 렌더링)
- MyPage (본인이 쓴 글과 프로필만 모아서 보는 개인화된 페이지, userId로 사용자 특정하여 url 설정)
<br>

## 👉 기술 스택
> CSS (Styled Component) / REACT(JS, JSX) / Redux(@Toolkit) / vercel <br>

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

![]()
<details>
<summary> Project Tree </summary>
<div markdown="1">

![] (
  ```
Hanghae-7W-Clone
├─ README.md
├─ src
│  ├─ components
│  │  ├─ assets
│  │  │  ├─ detailHeaderLogo.png
│  │  │  ├─ fonts
│  │  │  │  ├─ FiraMono-Bold.woff
│  │  │  │  ├─ FiraMono-Medium.woff
│  │  │  │  ├─ FiraMono-Regular.woff
│  │  │  │  ├─ fonts.js
│  │  │  │  ├─ NotoSans-Black.woff
│  │  │  │  ├─ NotoSans-Bold.woff
│  │  │  │  ├─ NotoSans-Medium.woff
│  │  │  │  └─ NotoSans-Regular.woff
│  │  │  └─ GlobalStyle.jsx
│  │  ├─ detail
│  │  │  ├─ CommentCard.jsx
│  │  │  ├─ CommentContainer.jsx
│  │  │  ├─ CommentForm.jsx
│  │  │  ├─ CommentList.jsx
│  │  │  └─ DetailContainer.jsx
│  │  ├─ elements
│  │  │  ├─ Box.jsx
│  │  │  ├─ Button.jsx
│  │  │  ├─ Grid.js
│  │  │  ├─ Input.jsx
│  │  │  └─ Text.jsx
│  │  ├─ features
│  │  │  ├─ Content.jsx
│  │  │  ├─ LikeList.jsx
│  │  │  ├─ List.css
│  │  │  ├─ Post.jsx
│  │  │  ├─ PostItem.jsx
│  │  │  ├─ PostList.jsx
│  │  │  ├─ SearchList.jsx
│  │  │  └─ TimeList.jsx
│  │  ├─ Layout
│  │  │  ├─ Footer.css
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Grid.jsx
│  │  │  ├─ Header.css
│  │  │  ├─ Header.jsx
│  │  │  ├─ MyPageHeader.css
│  │  │  └─ MyPageHeader.jsx
│  │  ├─ modal
│  │  │  ├─ Login.jsx
│  │  │  ├─ Modal.js
│  │  │  ├─ Portal.js
│  │  │  ├─ Potal.js
│  │  │  └─ Signup.jsx
│  │  └─ update
│  │     ├─ UpdateContent.jsx
│  │     └─ UpdateForm.jsx
│  ├─ hooks
│  │  ├─ useConfirm.jsx
│  │  └─ useInput.jsx
│  ├─ index.js
│  ├─ index.scss
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ DetailPage.jsx
│  │  ├─ Editor.jsx
│  │  ├─ Home.jsx
│  │  ├─ MyPage.css
│  │  ├─ MyPage.jsx
│  │  ├─ Search.jsx
│  │  ├─ UpdatePage.jsx
│  │  └─ Write.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configureStore.js
│  │  └─ modules
│  │     ├─ cmtSlice.js
│  │     ├─ imageSlice.js
│  │     ├─ listSlice.js
│  │     ├─ mypageSlice.js
│  │     ├─ postSilice2.js
│  │     ├─ postSlice.js
│  │     ├─ postSlice2.js
│  │     ├─ searchSlice.js
│  │     └─ userSlice.js
│  ├─ reportWebVitals.js
│  ├─ router
│  │  ├─ App.css
│  │  ├─ App.js
│  │  ├─ routes
│  │  │  └─ routes.js
│  │  └─ routes.js
│  ├─ serviceWorker.js
│  ├─ setupTests.js
│  └─ shared
│     ├─ Apis.js
│     └─ Cookie.js
└─ yarn.lock

```
)
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

### 6. Env (Enviroment Variable)
- 개발 모드와 배포모드를 나눠 개발모드일때만 redux devtool이 보이도록 구현하고 api의 url을 환경변수로 지정하였습니다.

### 7. Custom Hook
- useState에 onChange핸들러를 추가한 useInput훅을 만들었습니다.
- Global Styled-component를 이용하여 컴포넌트의 재사용성을 높인 버튼 컴포넌트 활용

### 8. Redux toolkit 활용 (thunkAPI)
- 기존 보다 코드량을 줄이고 미들웨어 개념을 통해 리듀서를 비동기 처리하는방법을 알게되었습니다. Axios를 통해 미들웨어를 활용한 비동기 처리과정에서 기초적인 Async-await 구문에서 더 나아가서 인스턴스화 시켜서 코드를 간소화 시키고 가독성을 높였습니다.

### 9. json-server - Mock server 배포
- Back-end의 API작업이 완료되지 않았을때의 상황을 가정하여 json-server를 이용하여 간단한 nosql Mock 서버 구성, 서버로 들어가는 DB들이 JSON 형식으로 제대로 들어가고 있는지 미리 확인하므로써 전달 형태를 미리 일치시키는 작업과 함께, 직렬화되지 않은 데이터들을 json.stringify를 통해 object를 string type으로 변경시켜서 전달하므로써 API 명세서를 정확하게 구현하고자 했습니다.

### 10. Redux devtool 비활성화 처리

<br>

## 👉 디자인 & css
### Styled Components : 만능 버튼
- **조건부 Styled Components `props` 사용하기 :** <br>
Todo 컴포넌트의 <Todobox />`border, color 요소를 isdone의 value에 따라 다르게 적용되도록 props 활용
- **`props.children` 을 활용한 만능 버튼 컴포넌트 구성** <br>
모든 프로젝트에 적용 가능한 혹은 스타일만 수정하여 활용가능할 정도로 구현하지는 않았으나,<br>
프로젝트 볼륨에 맞춘 color / size 속성을 활용할 수 있는 컴포넌트로 구성

### Portal로 Modal 구현
- App.js 바로 하위에 Modal 컴포넌트를 만들어서 전역상태(Boolean)를 통해 show/hide하는 모달을 생성했습니다.
- 사용자의 입장에서 계속되는 페이지 렌더링을 줄이기 위해 모달 내에서 회원가입과 로그인 정보들을 입력할 수 있는 창을 모달로 구현했습니다.
- 모달에 커스텀 훅을 사용해서 실제 서비스와 가장 유사하기 구현하려고 했습니다.

<!-- ### Mobile responsive web -->
<!-- ![](https://velog.velcdn.com/images/joyfive/post/5c91d69b-2ce0-4dbb-b3bd-7494035b2688/image.gif) -->


<br>

## 👉 배운점 & 아쉬운점
### 배운점👍
<기쁨 @joyfive>
- ** ** <br>
 

- ** ** <br>   

- ** ** <br>
  <br>

<br>

<지윤 @verocony>
- **서버와의 소통** 
Axios를 통해 백엔드와 소통하는 방식에 대해 이해할 수 있었고, 개발자 도구의 Application 탭이나 Network탭을 통하여 에러와 백엔드에서 보내주는 정보들을 파악할 수 있게 되었다.<br>

- **기본적인 CRUD** 
게시글 작성, 수정, 삭제와 댓글 작성, 삭제 기능을 구현해보았는데 그 과정에서 서버로부터 받은 정보를 렌더링하는 것을 잘 이해하게 된 것 같고, 이 경험을 바탕으로 다음 프로젝트에서는 더 복잡한 기능들을 해볼 수 있을 것 같아 뿌듯하다.
<br>
 

- ** ** <br>

<민지 @minzzjo>
- **CRUD 기능 구현 make-up** 
리덕스 툴킷을 활용하여 Axios를 통한 GET/POST/DELETE/PUT 방식의 DB전송 과정을 직접 적용해 보고 실현할 수 있게 되었다.<br>

- **협업의 시너지**
지난 몇 주간 개인과제를 계속해서 진행해 오면서, 혼자서 모든 과정을 계획하고 해결하는 과정에서 많은 어려움을 겪었고, 함께 손발을 맞춰서 최종 결과물을 내는 데 있어서 버거움이 있었다. 이번 주차에서는 그동안 개선해야 한다고 생각했던 협업과 소통의 중요성을 계속 상기시키면서 팀의 일원으로서 모두가 노력한 결과물을 만들어 내기 위해 더 힘을 내서 열심히 하려고 애썼다. 혼자 보다는 같이 무언가를 해 낸다는 것이 얼마나 중요한지를 정말 많이 느낄 수 있었다.<br>


### 아쉬운점👀
<기쁨 @joyfive>
- ** **<br>

ㄴ 
<br>

<지윤 @verocony>
- **시간관리 미흡** 
아직 API를 보는 법이나 서버와의 소통에 대해 익숙하지 않은 상태로 프로젝트를 진행하다보니 한 부분에서 막히면 어디가 잘못됐는지 몰라 수정하는데까지 시간이 너무 오래 걸렸고 조금 더 개념을 확실히 공부하고 프로젝트를 진행했다면하는 아쉬움이 남는다. 또 클론코딩이라 디자인적 부분에도 시간을 많이 들였는데 시간이 조금 더 있었다면 처음 계획했던 댓글 수정이나 대댓글 기능도 구현할 수 있었을 것 같아 아쉽다.
<br>

- **CSS의 컴포넌트화** 
 Styled-components를 쓰면서 만능 버튼이나 GlobalStyle처럼 컴포넌트로 전부 빼두고 최대한 활용해보자!하는 생각이었는데 마감이 다가오면서 급하게 CSS 작업을 해 컴포넌트를 더 효율적으로 활용하지 못했던 부분이 아쉽다.
<br>
 


- ** ** <br>

<민지 @minzzjo>
- **기본적인 CRUD구현과 더불어 추가 기능 구현** 
GET 방식으로 데이터를 불러와서 렌더링 하는 과정이 많았어서, 다른 부분을 해 내지 못한게 아쉽다. 조금 더 실전 프로젝트를 위해 미리 익히고 가야 할 기능들을 완전히 내 것으로 만들어보고 시행착오를 더 많이 겪지 못해 아쉽다.<br>
 

- **서버 연결 및 배포 과정에서의 돌발상황 대처 미흡** 
지난 주차를 겪으며, 제출 당일에는 어떤 기능구현과 퍼블리싱을 하지 않고 오롯이 배포에만 집중해야 최대한 오류들을 다 보완한 결과물을 낼 수 있다는 걸 느꼈지만, 기능구현을 꼭 완성해 보고 싶다는 욕심이 커서 큰 스코프가 아니었음에도 구현 과정이 오래 걸렸고 그로 인해 디버깅 및 배포 과정이 많이 미뤄져서 아쉽다. 모든 일은 정해진 기한이 있고, 주어진 시간 안에 해결해 내는 것이 중요하기 때문에 시간관리를 잘 하면서 선택과 집중을 적절하게 하면서 진행해 나가야 할 것 같다.<br>

<br>

## 진도체크
### 이전 목표 : *Success!*<br> 
1. ~~기본 CRUD 구현 make-up~~<br>
2. ~~마지막 제출 전에 CSS완성 후 최종 기능구현 테스트 및 배포~~<br>


Copyright 2022. hang-hae99 9th W7 team C1. all rights reserved.

<!-- ## 항해 99 클론코딩 : 프론트엔드 --! >
