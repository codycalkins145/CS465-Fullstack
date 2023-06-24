# CS465-Fullstack
CS-465 Full Stack Development with MEAN

<br><br>

**Architecture**

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

    This program consists of two different web applications; the customer-facing Express website, and 
    the Admin SPA website. Whereas the Express site has separate controllers and routes for each page, 
    the SPA site routes everything from the same place and on a single page, as the name implies. 
    Between these two sites, JavaScript is used both for routing and data retrieval within the Express 
    site, and used for data retrieval and authentication within the SPA site. All other functions 
    within the SPA site, including routing, are performed using TypeScript.
    
Why did the backend use a NoSQL MongoDB database?

    MongoDB was used for the backend in this project due to its simplicity and ease-of-use. Along with 
    these reasons, MongoDB boasts great scalability and flexibility that is very useful in creating web 
    applications.
    
<br><br>

**Functionality**

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

    The main difference between JSON and JavaScript is the way they are each used. JSON is largely used
    to hold data objects to be used in JavaScript, MongoDB, or even HTML. Using each of these is how JSON 
    connects the front and back ends; the data is stored within MongoDB with the help of Javascript, 
    which is then passed through to the frontend HTML view.   
    
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

    One instance of refactoring code for improved functionality and efficiency was using Handlebars 
    statements for redundant lines within HTML views. For example, if there are several of the same type 
    of element with the same formatting under the same division, the code can be reduced by several lines 
    using Handlebars to parse though JSON data for that section. This not only makes it simple to add or 
    remove an instance of data, but also ensures that all similar instances are consistent.   

<br><br>

**Testing**

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods,   endpoints, and security in a full stack application.

    The methods used within this project are GET, POST, PUT, and DELETE, which tell the program to 
    retrieve, add, update, or remove data from a specified location, respectfully. This location is 
    specified using endpoints, which describe the location of the data within the structure of the web 
    application. Each endpoint can be secured in different ways, like making it so certain actions are 
    only available through an admin account, like modifying stored data.

<br><br>

**Reflection**

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

    This course has taught me a lot about frontend and backend web development that I wasn't aware of 
    before. Specifically, it has taught me about navigating a web application built using the MEAN stack
    and has shown me how versatile these tools can be. Additionally, it has shown me how MongoDB 
    interacts with web applications, as my prior experience with MongoDB was using it within a local 
    program. I have also learned a good bit about how APIs work and what they are used for, which is very 
    important to know as a web developer.
