# Capstone 3: Adding MongoDB / MongoDB 추가하기

This capstone project involves adding MongoDB to our website. The website starter code we will use from now on is the midterm test project.<br>
이번 캡스톤 프로젝트에서는 MongoDB를 웹사이트에 추가합니다. 이제부터 사용할 웹사이트 스타터 코드는 중간고사 프로젝트입니다.

## Basic Requirements / 기본 요구사항

- [ ] `npm install mongodb mongoose`<br>
      Install the MongoDB and Mongoose packages.<br>
      MongoDB와 Mongoose 패키지를 설치하세요.
- [ ] Create new files for:
  - [ ] The Subscriber MODEL (`/models/Subscriber.js`)<br>
        구독자 모델을 위한 새로운 파일을 생성하세요.
  - [ ] The subcriber VIEW (`/views/subscribers.ejs`).<br>
        구독자 목록을 보여주는 뷰를 생성하세요.
  - [ ] The subscriber CONTROLLER (`/controllers/subscriberController.js`).<br>
        구독자 컨트롤러를 위한 새로운 파일을 생성하세요.
- [ ] Add or update subscriber routes in `main.js`.<br>
      `main.js`에 구독자 라우트를 추가하거나 업데이트하세요.

### Included files / 포함된 파일

```bash
|___/views
| |___/partials
| | |___header.ejs
| | |___footer.ejs
| | |___navigation.ejs
| | |___confetti.ejs
| |___layout.ejs
| |___index.ejs
| |___transportation.ejs
| |___contact.ejs
| |___thanks.ejs
| |___error.ejs
| |___`subscribers.ejs`       # <NEW> 구독자 목록을 보여주는 페이지

|___/public
| |___css
| | |___style.css
| | |___style.small.css
| | |___bootstrap.min.css
| | |___bootstrap.min.css.map
| | |___confetti.css
| |___img
| | |___dribbble_404.gif
| |___js
| | |___functions.js
| | |___bootstrap.bundle.min.js
| | |___bootstrap.bundle.min.js.map

|___/controllers
| |___homeController.js
| |___errorController.js
| |___`subscriberController.js` # <NEW> Subscriber 모델을 처리하는 컨트롤러

|___/models                   # <NEW>
| |___`Subscriber.js`           # <NEW> Subscriber 모델

|___`main.js`                 # <UPDATE> MongooDB 연결을 위해 수정 + 구독자 목록을 보여주는 라우트 추가
|___package.json
|___package-lock.json
```
