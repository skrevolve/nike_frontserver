# NIKE 복제 사이트
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

중요 ☆ 새로운 작업이 있을경우 위와같이 branch를 새로 생성하여 반복


기본규칙
1. 자기 업무에 따라 이슈하나 생성 (ex. 로그인 페이지 생성)
2. 해당이슈에 맞게 작업을 하면서 commit 메세지를 "[#이슈번호] 작업내용" 로 통일되게 작성
3. commit 을 자기 branch영역에 push가 완료되고 작업이 끝났으면 pull request요청.(pull request요청 승인 대상은 본인제외 서규,주연만 선택)
4. 함부로 merge하지 말아주세여
5. 본인의 branch에 자기가 추가한거이외에는 master랑 내용이 똑같아야합니다 ~ 같은 파일을 여러명이 작업하고 있다면 이점을 주의해주세요

# RESTful API SERVER (springboot)
http://3.35.234.53:8080/test-docker

# FRONT SERVER (nginx)
http://3.35.234.53:3000/

# DB (mariadb)
아직 미정
