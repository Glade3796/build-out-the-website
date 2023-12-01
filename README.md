# build-out-the-website

Week 1 submission

1/12/23 did not realise we had to copy the spacey website closely. i went rogue, sorry about that #adhdFail. I did ensure my website has similar features interpreted in a different way. I hope it meets the spirit of the assignment atleast, if not exactly what was asked.

Foxy space(c) 2023 is a fox themed website that features multiple images of foxes. There is a floating nav bar at the top of the screen. It contains several sections with blank 'read more' buttons. It has a donate button at the bottom, and a separate button that plays a short video before actioning the donate button.

I'll follow the assignment more closely next time.

Scroll-behaviour inspired by @SK (30/11/23)
html {
scroll-behavior: smooth;
}
\*(Added scroll anchors 1/12/23)
Added extra sections to test usability.

Hyperlink function inspired by @SK (30/11/23)
\*adding ID to sections

spent an age wondering why the nav bar dissapeared - z-index shows the order things are layered - set to 1 for now but will change if needded.
.header {
position: fixed;
display: flex;
width: 100%;
background-color: rgba(0, 0, 0, 0.433);
color: white;
z-index: 1; /_just figured out that this is important _/
}

!!!! remember to save both HTML and CSS or goLive wont update ^x^

Logo div hyperlink guide from @SO1 (30/11/23)

Added scroll snapping following the guide from @CSS1

Credits:
@SK = https://spacey-kappa.vercel.app/_/
@SO1 = https://stackoverflow.com/questions/2188272/html-how-to-make-an-entire-div-a-hyperlink
@CSS1 = https://css-tricks.com/practical-css-scroll-snapping/
