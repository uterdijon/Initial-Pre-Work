# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

My browser contacts the DNS server to find out the IP address associated with the domain www.techtonic.com. When it gets the IP address from the DNS server, it contacts the server that hosts that site and requests the HTML code. The browser and server communicate using a protocol called HTTP. The browser sends an HTTP GET request.


## From start to finish, how does data reach you to be rendered in the browser?

After my browser sends the HTTP request, the server hosting the site www.techtonic.com sends back an HTTP response which includes the data to be rendered in the browser (this includes some meta-data (headers), as well as the webpage's content).


## What code is rendered in the browser?

The client-side code, otherwise known as front-end code, is rendered in the browser. In the case of www.techtonic.com, HTML with CSS and JavaScript are rendered in the browser.

## What is the server-side code’s main function?

The server-side code (or back-end code) is run on the server before anything is sent to the client (browser).  It retrieves data from permanent storage such as SQL databases and files stored on the server and inserts this data into static page templates. Then the server-side code produces the HTML to be sent to the browser.  

Some examples of server-side code are Ruby on Rails, PHP, and Python.


## What is the client-side code’s main function?

The client-side code focuses on the interface of the webpage. It is used for making interactive websites and creating dynamic content on the webpages. It also creates and accesses temporary storage on the client's computer, such as cookies. This allows the webpage to "remember" information from the last time the user visited the page.

## What is runtime?

Runtime is code that is the building blocks of the language that you are using. This code comes with the language and is run during the execution of a program. It happens “behind the scenes” so to speak and allows the code to perform the action that you want it to.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of the client-side assets is created when a client makes an HTTP request. So, for every client that makes a request, a new instance of the client-side assets is created.

## How many instances of the server-side code are available at any given time?

There is one instance of server-side code at one time, stored on the server. This is updated and modified but new versions replace the existing one.

## How many instances of the databases connected to the server application are created?

There is one instance of each database connected to the server application. It is constantly updated and modified as the server-side code interacts with it.
