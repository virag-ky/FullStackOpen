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
