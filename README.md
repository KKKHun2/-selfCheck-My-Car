# 셀프로 만든 자동차 점검 내역 확인 !

처음에 이걸 만들고자 했던 이유가 <br />
차를 산지 5년이 넘어서 교체해야 하는 항목들이 조금씩 생기기 시작했는데 <br />
그때마다 예전 구매내역등을 확인해서 공임비, 부품비등을 일일히 확인해봤는데 <br />
시간도 오래걸리고 구매 쇼핑몰 찾는것도 큰 일이였습니다. <br />

<br />
또한 가격또한 불과 1년전과도 가격차이가 나는것을 발견했고 <br />
단순히 공임비, 부품비 등을 적어서 기억하는것보다는 <br />
따로 페이지를 통해 관리해서 부품비,공임비 등을 기억하고 <br />
수리한 내역과 날짜도 쉽게 확인하고 정기적으로 오일등을 교환할때 도움이 될꺼같아서 시작하게되었고 <br />
기존의 앱등을 왜 사용하지 않는다고 하면은 광고등이 너무 많아 짜증이 생겼고 쓸때없는 알림등  <br />
앱 자체의 본질적인 기능보다는 부수적인게 너무 크다 생각해서 심플하게 기록 저장용으로 만들었습니다. <br />


## 배포 링크
https://huncar.vercel.app/    


## QR코드 :<br />

<br />

## 프로젝트 시작방법

<strong>npm i </strong><br />


<strong>npm run dev</strong>

<br />



# 초기 설정 페이지(/firstStep)

처음에 입력한 정보가 없을시 브랜드,차종,연식,주행거리등을 입력받아서 로컬스토리지로 저장합니다.
추후 로컬스토리지를 통한 삭제가 아닌 삭제 기능 추가 예정





# 메인화면(/dashboard)

여기서 설정페이지에서 입력한 정보가 화면 상단에 보이고
아래에는 + 아이콘을 통한 점검내역 추가가 가능합니다.





## 점검 내역 추가

추가는 아이템 추가 팝업을 통해 점검 이유등을 입력하고


추가된 아이템을 클릭해 점검 사항,점검 날짜, 점검 날짜,공임비,부품비 등을 입력해서 총 가격 확인 가능 합니다.
여기서 점검 목록 삭제, 점검 내역삭제등이 가능합니다.


## 년간 점검 내역 확인

년간 점검 내역 확인 가능합니다.
가격 비싼순, 저렴한 순, 오래된 순, 최신순등 기록이 쌓이면서 쉽게 확인이 가능하도록 버튼으로 내역위에 설정하였고
이렇게 했을때 년간 차에 얼마만큼의 금액을 썻는지 기록하기 좋을꺼 같아서 설정했습니다.

지금은 단순히 년간으로 나오지만 추후 년도별 확인 가능하도록 기능 추가예정입니다.


## 색상테마(다크모드,라이트모드)

색상 테마 추가 예정입니다.
단순히 다크모드,라이트 모드가 아니라 색상 골라서 그색상에 맞는 ui로 보여줄 예정입니다.





#
<div align=center><h1>📚 FE STACKS</h1></div>

<div align=left>


<img src="https://img.shields.io/badge/JavaScript-FFE400?style=for-the-badge&logo=JavaScript&logoColor=white">

<img src="https://img.shields.io/badge/TypeScript-273c75?style=for-the-badge&logo=TypeScript&logoColor=white">

<img src="https://img.shields.io/badge/Next.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">

<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">

<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">

</div>



## 커밋 규칙
|아이콘| 설명 | 아이콘 | 설명 |
|----|---|---|---|
|🎨|코드의 구조/형태 개선|👷|CI 빌드 시스템 추가/수정|
|⚡️|성능 개선| 📈|분석, 추적 코드 추가/수정|
|🔥|코드/파일 삭제| ♻️|코드 리팩토링|
|🐛|버그 수정|➕|의존성 추가|
|🚑|긴급 수정|➖|의존성 제거|
|✨|새 기능|🔧|구성 파일 추가/삭제|
|📝|문서 추가/수정|🔨|개발 스크립트 추가/수정|
|💄|UI/스타일 파일 추가/수정|🌐|국제화/현지화|
|🎉|프로젝트 시작|💩|똥싼 코드|
|✅|테스트 추가/수정|⏪|변경 내용 되돌리기|
|🔒|보안 이슈 수정|🔀|브랜치 합병|
|🔖|릴리즈/버전 태그|📦|컴파일된 파일 추가/수정|
|💚|CI 빌드 수정|👽|외부 API 변화로 인한 수정|
|📌|특정 버전 의존성 고정|🚚|리소스 이동, 이름 변경|
|📄|라이센스 추가/수정|💡|주석 추가/수정|
|🍻|술 취해서 쓴 코드|🗃|데이버베이스 관련 수정|
|🔊|로그 추가/수정|🙈|.gitignore 추가/수정|

