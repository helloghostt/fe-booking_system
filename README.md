

## 폴더구조
    ├── src/
    │   ├── components/
    │   │   ├── accounts/ 계정 관련 컴포넌트 (로그인 폼, 회원가입 폼, 프로필)
    │   │   │   ├── LoginForm.js
    │   │   │   ├── SignupForm.js
    │   │   │   └── Profile.js
    │   │   ├── bookings/ 예약 관련 컴포넌트 (코트 목록, 예약 폼, 예약 내역)
    │   │   │   ├── CourtList.js
    │   │   │   ├── BookingForm.js
    │   │   │   └── BookingHistory.js
    │   │   ├── notices/ 공지사항 관련 컴포넌트 (공지사항 목록, 상세보기, 작성 폼)
    │   │   │   ├── NoticeList.js
    │   │   │   ├── NoticeDetail.js
    │   │   │   └── NoticeForm.js
    │   │   ├── common/ 공통 컴포넌트 
    │   │   │   ├── Header.js
    │   │   │   ├── Footer.js
    │   │   │   └── Navigation.js
    │   │   └── intro/ 소개 페이지 컴포넌트
    │   │       └── Intro.js
    │   ├── pages/ 각 페이지를 나타내는 컴포넌트 폴더
    │   │   ├── Home.js
    │   │   ├── Login.js
    │   │   ├── Signup.js
    │   │   ├── Booking.js
    │   │   ├── Notice.js
    │   │   └── Intro.js
    │   ├── api/
    │   │   ├── auth.js  인증 관련 API 호출 함수
    │   │   ├── bookings.js  예약 관련 API 호출 함수
    │   │   └── notices.js  공지사항 관련 API 호출 함수
    │   ├── styles/
    │   │   ├── global.css
    │   │   └── theme.js
    │   ├── App.js
    │   └── index.js
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    └── package.json

## 지도 API 연동:
Google Maps 지도 서비스 제공자의 API를 사용할 수 있습니다.
선택한 지도 서비스의 문서를 참조하여 API 키를 발급받고, 프로젝트에 필요한 라이브러리를 설치합니다.
Intro 컴포넌트에서 지도를 렌더링할 부분을 선택하고, 해당 위치에 지도를 표시하는 코드를 추가합니다.
매장의 위치 좌표를 지정하고, 마커를 추가하여 매장의 위치를 표시합니다.

## 연락처 이메일 연동:
연락처 정보를 표시할 때, 이메일 주소를 클릭하면 메일 작성 화면으로 연결되도록 할 수 있습니다.
이메일 주소를 mailto: 링크로 작성하면, 클릭 시 메일 작성 화면이 열리게 됩니다.

