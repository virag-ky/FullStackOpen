title User creates a new note using the single page version of the app

note over Browser:
Button is clicked
end note

note over Browser:
The event handler creates a new note, adds it
to the notes list, rerenders the note list on the page
and sends the new note to the server.
end note

Browser->Server: Sending the user input to the server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

Server-->Browser: HTTP status code 201
