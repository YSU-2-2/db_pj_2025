# Git/GitHub 초보자 가이드

> 순서대로 따라하세요.  
> 0번 → 1번 → 3번 → 4번 → 6번 → 5번 순서로 보시면 됩니다.  
> (7번은 내가함)  

---

## 0. Git 설치

https://git-scm.com/install/  
위 링크에서 본인 OS에 맞게 설치하세요.  

---

## 1. Git Repository를 Local로 가져오기

프로젝트를 저장할 폴더로 이동해서 아래 명령어를 입력합니다.  

git clone -b develop https://github.com/YSU-2-2/db_pj_2025.git  
이러면 현재 폴더에 db_pj_2025 폴더가 생성됩니다.  
## 2. 로컬에서 작업하고 푸시하는 법 (개요)  
이 섹션은 전체 흐름 이해용입니다. 실제로는 3→4→6→5 순서로 진행하세요.  
작업 브랜치 만들기  
브랜치에서 코딩하기  
git add → git commit → git push 순서로 업로드  
## 3. 초기 세팅 (최초 1회만)  
Git을 처음 사용한다면 본인 정보를 등록해야 합니다.  
git config --global user.name "Your Name"  
git config --global user.email   "your.email@example.com"  
예시:
git config --global user.name "홍길동"  
git config --global user.email "hong@example.com"  
## 4. 브랜치 만들고 관리하기  
4-1. 브랜치를 만드는 이유  
기능을 만들고 바로 main에 넣으면 오류 발생 시 롤백이 어렵습니다.  
코딩하기 전에 반드시 브랜치를 만들고 해당 브랜치에서 작업하세요.  
4-2. 브랜치 종류 설명  
main: 배포용 브랜치입니다. 직접 수정하지 마세요.  
develop: main에 합치기 전 테스트하는 브랜치입니다.  
features/~~~: 기능 개발 시 사용하는 브랜치입니다.  
예시: features/login - 로그인 기능 개발  
예시: features/user-profile - 유저 프로필 기능 개발  
4-3. 브랜치 만드는 법  
git switch -c 브랜치명  
예시:
git switch -c features/login  
4-4. 브랜치 변경하기  
git switch 변경할브랜치명  
예시:
git switch feature/login  
4-5. 현재 브랜치 확인하기  
코딩 전에 반드시 현재 브랜치를 확인하세요.  
git branch  
* 표시가 있는 것이 현재 브랜치입니다.  

## 5. 작업한 코드 푸시하기  
5-1. 변경사항 추가  
git add .  
git add .: 현재 폴더의 모든 변경사항을 추가합니다.  
git add 파일명: 특정 파일만 추가합니다.  
예시:
git add .  
git add login.jsx  
5-2. 변경사항 기록 (커밋)  
git commit -m "무슨 작업했는지 한 줄 요약"  
예시:
git commit -m "로그인 기능 추가"  
git commit -m "회원가입 UI 수정"  
git commit -m "버그 수정: 로그아웃 안되던 문제 해결"  
5-3. GitHub에 업로드 (푸시)  
git push origin 작업한브랜치명  
주의: 절대 main으로 푸시하지 마세요.  
예시: features/login 브랜치에서 작업했다면  
git push origin features/login  
features/signup 브랜치에서 작업했다면  
git push origin features/signup  
## 6. 최신 코드 받아오기  
작업 시작 전에 반드시 실행해야 합니다.  
프로젝트 루트 폴더에서:
git pull origin develop  
이 과정을 생략하면 다른 팀원이 작업한 최신 코드가 없는 상태로 작업하게 됩니다.  
이는 나중에 충돌(conflict) 발생 가능성을 높입니다.  
## 7. Pull Request (PR) 만들기  
이건 내가할겨  
참고용으로만 확인하세요.  
GitHub 저장소 페이지에서 "New pull request" 클릭  
base: develop 으로 설정  
compare: 작업한 브랜치명으로 변경  
"Create pull request" 클릭  
Description에 작업 내용 작성  
"Create pull request" 클릭  
"Merge pull request" 클릭  
"Confirm merge" 클릭  
"Delete branch" 클릭 (병합된 브랜치 삭제)  

## 8. 주의사항  
1. main이나 develop에 직접 push 금지  
잘못된 예시  
git push origin main  
git push origin develop  
2. 코딩 전에 항상 최신 코드 받기  
  작업 시작 전 필수  
git pull origin develop  
3. 현재 브랜치 확인하기  
  코딩 전에 반드시 확인  
git branch  
4. 브랜치명 규칙 지키기  
올바른 예시  
features/login  
features/user-profile  
features/payment  
잘못된 예시  
test  
aaa  
my-branch  

## 작업 순서 요약  
1. git pull origin develop          # 최신 코드 받기  
2. git switch -c features/기능명    # 브랜치 만들기  
3. git branch                       # 브랜치 확인  
4. (코딩 작업)  
5. git add .                        # 변경사항 추가  
6. git commit -m "작업 내용"        # 커밋  
7. git push origin features/기능명  # 푸시  
