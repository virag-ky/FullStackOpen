title User goes to the single-page app

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa

Server-->Browser: HTTP status code 200 / HTML - code

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

Server-->Browser: main.css

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js

Server-->Browser: spa.js

note over Browser:
Browser starts executing JS code
that requests JSON data from server
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

Server-->Browser: [{ content: "web development", date: "2022-11-14" }, ...]

note over Browser:
Browser executes the event handler
that renders notes to display
end note
<<<<<<< HEAD


![Screenshot from 2022-11-14 22-39-27](https://user-images.githubusercontent.com/79658534/201765385-588d132b-e5bf-449e-9d5f-a3252d2e6c4b.png)
=======
>>>>>>> 3a5bdec (Add course-information exercise step1)
