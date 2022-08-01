# General Assembly Unit 1 Website

### This project was designed and created for Project 1 for General Assembly Unit 1. 
Portfolio website simulating a Windows 10 GUI with a notepad and some Chrome pop up links. 

#### The project had these minimum specifications: 
+ Built with HTML, CSS, JavaScript and jQuery
+ Hosted with Netlify or Github Pages
+ Commits to Github every day
+ A README.md file with explanations of the technologies used, the approach taken, a link to your live stie, installation instructions, unsolved problems, etc.
+  **Must Haves**
    + Home (greeting page) - In this case it's index.html
    + Bio - Found in the notepad 
    + Resume - Found in a PDF link
    + Projects - Included Frogger as well as Card Library JS
    + Links - Github, LinkedIn, Photography Website are included
+ 3 jQuery interactions with the user, without using 3rd party frameworks/libraries 
    + **List of intended jQuery interactions**
        + Changing Background Image 
        + Date/Time in Bottom-Right
        + On click, double click and tap for UI 
        + Notepad that opens up
        + Typing in Notepad types html lines in 
        + Windows opens up to a start menu with selection
        + On click links 
        + Escape key closes all windows 
        + Card shuffle and deal which are utilizing own JS library hosted on Amazon Web Services CloudFront (https://github.com/youkaithegreat/PlayingCardLibrary)
        + **The frogger game that opens up is an old project that I included**

## Installation

Download the Zip from Github and open index.html and voila!

## Live Sites
**Netlify:** https://zingy-conkies-dc2149.netlify.app/
**Github Pages:** https://youkaithegreat.github.io/ga_unit1_website/


## Notes/Thoughts
This project was a bit of a challenge for me as I've created quite a few personal websites and portfolio websites in the past. 
I wanted to do something unique, so this time I sought out to recreate a Windows 10 GUI and see if I could make it responsive as well. 
Thinking of the scope of the project and our inability to use external libraries, I originally wanted to create a more specific syntax highlighter to highlight syntax.
However, I found that with the rudimentary way that I was implementing it, it wouldn't function well with jQuery and was slowing the website down quite considerably over time.
Originally, I had planned on putting Syntax Highlighter in a Library and pushing it to CloudFront, thus creating my own "library". However, this proved to be too time consuming and difficult. 
I then created Playing Card Library as a result of that. 

## Sources 
Intial Readme taken from https://www.makeareadme.com/
README CheatSheet  https://www.markdownguide.org/basic-syntax/
Playing Card Library https://github.com/youkaithegreat/PlayingCardLibrary (For Card Image Sources, Refer to Playing Card Library)
Frogger Game https://github.com/youkaithegreat/ProjectThreeArcadeGame

## License
This project may not be used for any other purpose. 
Images found in the img directory CAN NOT be used for any other purpose. The copyright and licensing belong to www.youkaicreations.com 
DO NOT use the images for any other purpose or advertising or risk legal action.