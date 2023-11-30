# build-out-the-website

Week 1 submission

Scroll-behaviour inspired by @SK (30/11/23)
html {
scroll-behavior: smooth;
}

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
/_@SK = https://spacey-kappa.vercel.app/_/
