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
<<<<<<< HEAD

![Screenshot from 2022-11-14 23-00-57](https://user-images.githubusercontent.com/79658534/201765471-c154c4b3-346c-4ebb-8cc0-b8d743a36a30.png)

=======
>>>>>>> 3a5bdec (Add course-information exercise step1)
