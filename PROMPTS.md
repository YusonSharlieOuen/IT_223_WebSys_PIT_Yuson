(for copy and pasting purposes)

Entry #
Tool Used: ChatGPT
Prompt:
AI Output:
How I used/modified it in my project:
------------------------------------------------------------------------------------------------------------------------------------------
Entry #1
Tool Used: ChatGPT
Prompt: how do I add some sort of big spacing in HTML? I want to separate the different divs that I have.
AI Output: Use CSS Margin, Padding, Spacer <div>, or <br> tags
How I used/modified it in my project: I used this to create some space in between divs to make the website some verticality.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #2
Tool Used: ChatGPT
Prompt: I am bad with color theory, you got any ideas on what color combinations are good on a resume styled website?
AI Output: It gave me multiple color combinations to try out.
How I used/modified it in my project: I used this to choose a certain color theme that I like on to the website.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #3
Tool Used: ChatGPT
Prompt: how do I adjust how much space a div takes, I dont want the div background to take up all the horizontal space.
AI Output: It showed me ways on how to adjust the width of the div.
How I used/modified it in my project: I used this to limit the space the div occupies so that when I add a background color to the div, it won't occupy its whole horizontal space.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #4
Tool Used: ChatGPT
Prompt:

<div id="Header">
 <h1>My Resume</h1>
  <h2>Direct links 
   <ol>
    <li><a href="#AboutMe">About Me</a></li>
    <li><a href="#Education">Education</a></li> 
    <li><a href="#Skills">Skills</a></li> 
    <li><a href="#Projects/Portfolio">Projects/Potrfolio</a></li> 
    <li><a href="#Contact">Contact</a></li> 
   </ol> 
  </h2>
</div> 

#header { 
    a:hover{ 
        background-color: aquamarine; 
    } 
}

is this how you do hover?

AI Output:It showed me how to correctly do hover and helped me with the id mismatch.
How I used/modified it in my project:I used this to fix my hover function so that it will work.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #5
Tool Used: ChatGPT
Prompt: regarding the header that I just sent, is there a way to put everything in the center? and make the list line up in a row?
AI Output: It showed me CSS Flexbox and how to use it, and also how to line things up horizontally.
How I used/modified it in my project: I used this to make the list horizontal and lined up in the center.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #6
Tool Used: ChatGPT
Prompt: do you have any ideas on what javascript and jquery features I could add to my resume website? I need at least 3 and 2 respectively.
AI Output: It showed me a few javascript and jquery ideas that I can use.
How I used/modified it in my project: I used some of the ideas that ChatGPT made and implemented them to my website.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #7
Tool Used: ChatGPT
Prompt:  I need help in implementing these ideas.
AI Output: It showed me how to implement those javascript and jquery ideas into my website.
How I used/modified it in my project: I used the code that ChatGPT made and implemented it into my javascript file, albeit with some issues here and there.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #8
Tool Used: ChatGPT
Prompt:

this is now my html, css, and javascript: 
<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="styles.css"> <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>" <script src="javascript.js"></script> <title>Document</title> </head> <body> <div id="Header"> <h1>My Resume</h1> <h2>Direct links</h2> <ol> <li><a href="#AboutMe">About Me</a></li> <li><a href="#Education">Education</a></li> <li><a href="#Skills">Skills</a></li> <li><a href="#ProjectsPortfolio">Projects/Potrfolio</a></li> <li><a href="#Contact">Contact</a></li> </ol> </div> <button onclick="toggleLightMode()">Light Mode</button> <div class="section" id="AboutMe"> <h2>About Me</h2> <div class="content"> <img src="images/My_picture.jpg" alt="My Picture" width="150px" height="150px"> <p>I am Sharlie Ouen T. Yuson. I am currently in college learning Information Technology for my Bachelor's degree. I am rather fond of playing video games, specifically ones that allows me to express my creativity, strategy, and games that give me a meaningful challenge. </p> </div> </div> <div class="section" id="Education"> <h2>My Education</h2> <div class="content"> <ol> <li>Elementary <ul> <li>Infant Jesus School of Bukidnon</li> </ul> </li> <li>High School <ul> <li>Valencia National High School</li> </ul> </li> <li>College (ongiong) <ul> <li>University of Science and Technology of Southern Philippines</li> </ul> </li> </ol> </div> </div> <div class="section" id="Skills"> <h2>My Skills</h2> <div class="content"> <ul> <li>Nothing noteworthy</li> </ul> </div> </div> <div class="section" id="ProjectsPortfolio"> <h2>My Projects/Portfolios</h2> <div class="content"> <ul> <li>Programming Language</li> <ul> <li>C#</li> <li>Java</li> <li>JavaScript</li> <li>Python</li> </ul> </ul> </div> </div> <div class="section" id="Contact"> <h2>My Contacts</h2> <div class="content"> <ul> <li>Email: yuson.sharlieouen@gmail.com</li> <li>Facebook: Sharlie Ouen Tabac Yuson</li> <li>Phone Number: +639156585630</li> </ul> </div> </div> <div> <button id="topBtn" onclick="scrollToTop()">Back to Top</button> </div> </body> </html> /* CSS*/ body { background: linear-gradient(to bottom, #020617, #0a2540); color: #e0f2fe; font-family: Arial; font-size: xx-large; } /* Header CSS */ #Header { text-align: center; background: linear-gradient(to bottom, #1e293b ,#284861); padding: 10px; width: 60%; margin: auto; border-radius: 30px; margin-bottom: 100px; } #Header h1 { background-color: #425f75; width: 450px; margin: auto; border-radius: 20px; margin-bottom: 10px; } #Header h2 { background-color: #425f75; width: 325px; margin: auto; border-radius: 20px; margin-bottom: 30px; margin-top: 30px; } #Header a { display: inline-block; padding: 5px, 10px; text-decoration: none; color: white; } #Header a:hover { background-color: #38bdf8; color: white; border-radius: 5px; } #Header ol { list-style: none; padding: 0; display: flex; justify-content: center; gap: 20px; background-color: #425f75; width: 800px; margin: auto; border-radius: 20px; padding: 10px; } /* Section Class CSS */ .section { max-width: 1200px; margin: 40px auto; padding: 20px; background: linear-gradient(to bottom, #1e293b ,#284861); border-radius: 10px; opacity: 0; transition: opacity 0.5s ease; } /* Top Button CSS */ .topBtn { position: fixed; bottom: 20px; right: 20px; display: block; padding: 10px; } /* Dark Mode CSS */ body.light-mode { background: linear-gradient(to bottom,#ffffff, #284861); } body.light-mode .section { background: linear-gradient(to bottom,#ffffff, #284861); } body.light-mode #Header { background: linear-gradient(to bottom,#ffffff, #284861); } /* Content CSS */ .content { display: none; margin-top: 10px; } //JAVASCRIPT document.querySelectorAll(".section").forEach(section => { const header = section.querySelector("h2"); const content = section.querySelector(".content"); header.addEventListener("click", () => { content.style.display = content.style.display === "block" ? "none" : "block"; }); }); function toggleLightMode() { document.body.classList.toggle("light-mode"); } window.onscroll = function () { const btn = document.getElementById("topBtn"); btn.style.display = window.scrollY > 200 ? "block" : "none"; }; function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth"}); } //JQUERY $(document).ready(function() { $("#Header a").click(function(e) { e.preventDefault(); const target = $(this).attr("href"); $("html, body").animate({ scrollTop: $(target).offset().top }, 600); }); $(window).on("scroll", function() { $(".section").each(function() { if ($(this).offset().top < $(window).scrollTop() + 750) { $(this).css("opacity", "1"); } }); }); });


AI Output:It showed me multiple errors in my code and helped me fix it.
How I used/modified it in my project: I used ChatGPT's fixes to fix what is wrong with my code. Yes, that is my html, css, and js file all in one.
------------------------------------------------------------------------------------------------------------------------------------------
Entry #8
Tool Used: ChatGPT
Prompt: do you think this is a good design for a web based resume?
AI Output: ChatGPT thinks its a good school project, but not a professional resume site. Saying suggestions that would make the website a bit more professional.
How I used/modified it in my project: I used ChatGPT's suggestions to make slight improvements to the design of my website, even if it was just a little bit.
------------------------------------------------------------------------------------------------------------------------------------------