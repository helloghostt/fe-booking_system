# 테니스 레슨 예약시스템 (fe-booking_system)
1. 프로젝트 목표 및 범위
레슨 예약 시스템으로 관리자와 회원을 타겟 사용자로 하여 권한 및 역할을 설정하였습니다. 테니스 클럽을 중점에 두고 만들었으나 요가 스튜디오나 회의실 예약 등으로 변경 가능합니다.
</br>
2. 기술 스택 및 배포 환경</br>
backend, frontend : Django, Html, CSS, JavaScript, React </br>
cloud service : AWS Lightsail, GitHub</br>

Backend repo : https://github.com/helloghostt/be-booking_system</br>
Frontend repo : https://github.com/helloghostt/fe-booking_system</br>
url :</br>

superuser: admin-park


## 폴더구조
    Frontend/
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
    │   │   ├── blog/
    │   │   │   ├── BlogList.js
    │   │   │   ├── BlogForm.js
    │   │   │   └── BlogDetail.js
    │   │   └── intro/ 소개 페이지 컴포넌트
    │   │       └── Intro.js
    │   ├── pages/ 각 페이지를 나타내는 컴포넌트 폴더
    │   │   ├── Home.js
    │   │   ├── Login.js
    │   │   ├── Signup.js
    │   │   ├── Booking.js
    │   │   ├── Blog.js
    │   │   ├── Notice.js
    │   │   └── Intro.js
    │   ├── api/
    │   │   ├── auth.js  인증 관련 API 호출 함수
    │   │   ├── bookings.js  예약 관련 API 호출 함수
    │   │   ├── blog.js
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
Google Maps 지도 서비스 제공자의 API를 사용할 수 있습니다.</br>
선택한 지도 서비스의 문서를 참조하여 API 키를 발급받고, 프로젝트에 필요한 라이브러리를 설치합니다.</br>
Intro 컴포넌트에서 지도를 렌더링할 부분을 선택하고, 해당 위치에 지도를 표시하는 코드를 추가합니다.</br>
매장의 위치 좌표를 지정하고, 마커를 추가하여 매장의 위치를 표시합니다.</br>

## 연락처 이메일 연동:
연락처 정보를 표시할 때, 이메일 주소를 클릭하면 메일 작성 화면으로 연결되도록 할 수 있습니다.</br>
이메일 주소를 mail to: 링크로 작성하면, 클릭 시 메일 작성 화면이 열리게 됩니다.</br>

</br>
WBS, 트러블슈팅, url구조 등은 backend repo (https://github.com/helloghostt/be-booking_system) readme.md에 있습니다

