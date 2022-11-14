title User adds new note

note over Browser:
Button is clicked
end note

Browser->Server: Sending the user input to the server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/notes

Server-->Browser: HTTP status code 302

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes

Server-->Browser: HTML-code

note over Browser:
Browser reloads the Notes page
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

Server-->Browser: main.css

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js

Server-->Browser: main.js

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
