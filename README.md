너네는 0번 1번 3번 4번 5번 6번까지만 보면됨 순서대로 하십쇼  


#0. git 설치
  https://git-scm.com/install/
  
#1. git repository local로 가져오는법  
  프로젝트 폴더에서 git clone https://github.com/YSU-2-2/db_pj_2025.git  

#2. 로컬에서 작업하고 푸시하는법  
  1. 작업브랜치 만들기  
  2. 브랜치에서 코딩하고  
  3. git add, git commit, git push 까지만 하십쇼    

#3. 초기세팅  
  git config --global user.name "Your Name"  
  git config --global user.email "your.email@example.com"  

#4. 브랜치 만드는법  
  터미널에서 git switch -c 브랜치명  
  브랜치 변경  
  git switch 변경할브랜치명  
  브랜치 별 기능 설명
    - main : 배포
    - develop : main에 합치기 전에 테스트 하는 브랜치
    - features/~~~ : 뭐 ui를 만들었다거나 백엔드 기능을 추가하거나 할때 여기서 하면됨  
    ex) feature/login -> 이건 뭐 로그인 기능 개발했다는거겠죠?
  
#4-1. 브랜치 만드는 이유  
  기능이나 뭐 만들고 바로 메인으로 넣어버리면 오류 생겼을때 롤백하기 귀찮음  
  코딩하기전에 꼭 브랜치 만들고 거기서 작업하십쇼  
#4-2. 코딩 전에 반드시 브랜치 확인  

#5. 브랜치로 푸시하는법  
  git add 작업한 폴더 또는 .(현재 폴더 전체)  
    ex) git add login.jsx   |   git add .  
  git commit -m "무슨 작업했는지 한줄요약"  
    ex) git commit -m "로그인 기능 만듦 ㅅㄱ"  
  git push origin 작업한 브랜치명(main으로 하면 안됨용)  
    ex) 내가 features/login 브랜치에서 작업했다? 그러면  
        git push origin features/login  
        하면됨  
#6. 최신 코드를 받아오는법  
  작업 이어서 할때 요거 하셔야됩니다  
  프로젝트 루트 폴더에서 git pull origin develop 라고 입력하면됨
        
#7. 브랜치에 병합 pull requests 이건 내가 하지뭐  
  new pull request 클릭  
  base:development으로 설정 compare 작업한 브랜치명으로 변경  
  create pull request 클릭  
  description에 무슨코드인지 써놓고  
  create pull request 클릭   
  merge pull request클릭  
  confirm merge 클릭  
  delete branch 클릭  
  하면 끝  
