# 고급웹프로그래밍(2020-01) 개인과제
## 오늘 뭐 먹지?(경북대학교ver.)

### URL
https://seungsin.github.io/WebProg_MidProj/

#### 주요기능
1. 메뉴 추천 받기    
    a. Gate(학교 문)과 메뉴 분류에 대한 옵션 선택 가능(복수 선택 가능, 1개 이상 선택)    
    b. 옵션 설정에 따라 랜덤으로 메뉴 추천 받기    
    c. 추천 받은 메뉴를 파는 학교 근처 가게 확인(이름, 주소, 지도)    
2. 근처 식당 보기    
    a. Gate(학교 문)과 메뉴 분류에 대한 옵션 선택 가능(복수 선택 불가능, 옵션별 1개만 선택)    
    b. 옵션 설정에 따라 분류된 메뉴를 파는 모든 가게 확인(이름, 주소, 지도)

#### 사용기술
1. 카카오맵 API
2. Math.rand()를 이용한 랜덤 함수(메뉴 랜덤 추천을 위함)

#### 각 페이지 소개    
1. index.html
- 메인 페이지로서 웹 페이지에 대한 소개 및 각 기능으로 이동하는 버튼이 존재함.
![image](https://user-images.githubusercontent.com/62578738/116710927-45f65380-aa0d-11eb-88bf-871ace36e3f0.png)

2. recom.html
- 메뉴 추천 페이지로서 메뉴 추천받기를 누르면 옵션에 따라 메뉴를 추천함.
- 옵션은 "옵션 설정" 버튼을 눌러야 화면이 나타남.
- 카카오맵 API를 이용하여 근처 식당의 지도를 보여줌.
![image](https://user-images.githubusercontent.com/62578738/116711075-7211d480-aa0d-11eb-8369-a8fe7805f090.png)

3. show_map.html
- 메뉴 추천을 받지 않고, 문 근처의 식당을 알고자 하는 사람들이 사용 할 수 있는 페이지.
- 옵션은 복수 선택이 불가능함.
![image](https://user-images.githubusercontent.com/62578738/116711356-ba30f700-aa0d-11eb-9cf6-3a29b075f82e.png)
