# Garage App
The scope of this project is to have a "template" app with Grails 3 (API) - React (FE) - Spring Security

### How to run
 
client: 
`./gradlew client:bootRun`

server: 
`./gradlew server:bootRun`


### How to build

`./gradlew assembleServerAndClient`

This command build one war with client and server

### How to deploy on Heroku

The application is configured for Heroku

Run this commands:

```bash
git add .
git commit -m "Garage App"
heroku login
heroku create
git push heroku master
```

See: https://devcenter.heroku.com/articles/deploying-gradle-apps-on-heroku#using-grails-3
