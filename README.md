# 업무규칙
- git checkout master (master 브런치로 이동한다)
- git pull origin master
- 내작업에 대한 내용을 이슈등록을 한다. (ex. 제목: 로그인 기능추가 내용: 작업내용 상세기입)
- git branch 이슈제목명_날짜 (브런치생성)
- git checkout 만든브런치로 이동
- git add 작업된파일 또는 .
- git commit -m "[#이슈번호] 이슈제목명_날짜"
- git push -u origin 이슈제목명_날짜 ( 브런치는 하나의 작업단위로 생각 )
- pull request 작성 및 merge
- 작업이 끝난후 등록한이슈 닫기

새로운 작업이 있을경우 위와같이 branch를 새로 생성하여 반복

# 운영 환경
Ubuntu 20.04 LTS (AWS EC2)
서버에서 Docker 이미지를 빌드하여 Docker-hub 계정의 레포지토리에 push 자동화 (By Github action)
Jenkin를 통한 CI/CD 전략을 사용하려 했으나 Github Action으로만 구축
## Jenkins + Github Action
![1](https://user-images.githubusercontent.com/41939976/163118254-4925f26a-89d7-43db-8a1d-ede7d0afbec3.png)
## Only use Github Action
![2](https://user-images.githubusercontent.com/41939976/163118263-a830ec54-5cb0-49ce-a4f8-65310c4982e6.png)

# RESTful API SERVER (springboot)
http://skrevolve.org:8080/test-docker

# FRONT SERVER (nginx)
http://skrevolve.org

# DB (mariadb)
3.35.234.53:3306/nike_db
