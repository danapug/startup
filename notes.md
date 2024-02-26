# CS 260 Midterm Study Guide:
## In-class Quizlet:
•	What is the output of const f = y => ++y; console.log(f(3))?
4

•	 ![image](https://github.com/danapug/startup/assets/156227779/ed80f92b-6daa-40c9-9823-fad43a4e5c2e)
This outputs [‘rat’, ‘fish’]

•   The reduce function starts by calling the function with the initialValue (or the first element if not provided) as the accumulator and the first element of the array as the currentValue.
The provided function performs an operation on these values and returns a new value. This returned value becomes the new accumulator for the next iteration.
The function iterates through the remaining elements of the array, each time calling the provided function with the updated accumulator and the current element.
After iterating through all elements, the final accumulator value becomes the return value of the reduce function.

let a = ['cow', 'rat', 'fish'];

let b = a.reduce((a,v) => [a,v].join(':'));

console.log(b);

The output is cow:rat:fish

• Map function in JS is used to iterate over an array and create a new array.

let a = [1, 2, 3];

let e = a.map(number => {

return ['a' + number)

});

console.log(e);

output: ['a1', 'a2', 'a3',]


• querySelector selects the first element that matches the CSS selector. querySelectorAll selects all elements that match the specified CSS selector.

• DOM(document object model) is a programming interface(API... application programming interface) that represents the structure and content of a web page as a tree of objects. It allows web browsers and scripts to access and modify html elements and css attributes. It allows JS to interacts and modify the content and structure of the web page.

• Valid JS functions would include:

const f = (x) => {}

function f(x) {}

const f = function(x) {}

An invalid function would be: function f(x) = {}


• Valid ways to include JS in html:

\<script>1+1</script>

\<script src='main.js'/>
      
\<div onclick='1+1'/>

Invalid way would be \<javascript>1+1</javascript>

• Valid JS object: {n:1} objects never have double quotes or equal signs

•The DOM textContent property sets the child text for an element

• To turn only the BYU text blue of this code

\<div>other\</div>

\<div class="header">BYU\</div>

Do: div.header{color:blue};

• JSON cannot be undefined and it must have double quotes, for example this is valid JSON: \{"x":3}

• chmod +x deploy.sh is the console command that makes a script executable

•Subdomain is anything that comes before the website name(ex: cs260.cs.byu.edu, or startup.budgettracker.click)

• To point to another DNS record, use the CNAME DNS record type

•What will this promise output?

      const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                  console.log('taco');
                  resolve(true);
            });
            console.log('burger');

            p
            .then((result) => console.log('shake'))
            .catch((e) => console.log('salad'))
            .finally(() => console.log('noodles'))

            console.log('fries');
Output: burger fries taco shake noodles

• What does this await function output?

      const a = async function() {
            return new Promise((resolve, reject) => {
                  setTimeout(() => {console.log('D); resolve(true)}, 10000);
                  })
            }
            try {
                  console.log('A');
                  await a();
                  console.log('B')
            }
            catch(e) {
                  console.log('C');
            }

Output: A D B

### HTML:
•	Hypertext Markup Language

•	HTML is the structure/backbone of your website

•	HTML elements are represented with enclosing tags that may enclose other elements or text. 

      o	Paragraph element: (\<p>) designate that the text is a structural paragraph of text.

      o	Tags are a delimited textual name that we use to designate the start and end of an html element as it appears in an html     document. They are delimited with a < and > symbol. A closing tag will have a forward slash before its name (\</p>)

      o	\<html> element represents the top-level page structure. 

      o	\<head> element contains metadata about the page and page title.

      o	\<body> element represents the content structure

      o	\<main> element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content.

      o	\<footer>

      o	\<nav>

      o	\<div> a block division element

      o	\<ol> ordered list

      o	\<ul> unordered list

      o	\<li> list item

      o	\<span> mark the paragraph’s sub-text

      o	\<table>

      o	\<aside>

      o	\<body> contains three children a header, main, and footer

o	Forming a structure similar to this:

      o	At the top you should also always include <!DOCTYPE html> so the browser knows the version of the document.
      o	Inside <main> you can have header tags <h1>, <h2>, etc.
      
        <html>
          <head>
            <title>My First Page</title>
          </head>
          <body>
            <main>
              <p>Hello world</p>
            </main>
          </body>
        </html>

•	Every html element may have attributes. Attributes describe the specific details of the element. 

      o	“id” attribute gives a unique id to the element so that you can distinguish it from other elements.
      o	“class” attribute designates the element as being classified into a named group of elements
      o	Attributes are written inside the element tag with a name followed by an optional value. You can use single quotes or double quotes to delimit attribute values. 
      	      <p id =”hello” class=”greeting”> Hello world</p>
      •	Hyperlinks made the web so successful. In html they are represented with an anchor (a) element 
              <a href= “lds.org”>Visit the church website</a>
      •	The main html file for your web application should be named “index.html” because by default this is the web server that chrome will display

### CSS:
•	Cascading style sheets

•	Creates design and styling to make a website beautiful

•	CSS defines rulesets(rules): They are comprised of a selector that selects the elements to apply the rule to and one or more declarations that represent the property to style
![image](https://github.com/danapug/startup/assets/156227779/71f17d51-af8e-48c0-82c4-fabdc3dccaaf)

    
•	The best way to link CSS to the html is with a link. The link element must appear in the head of the html
        \<link rel="stylesheet" href="styles.css" />
     
•	Rules cascade down from the highest nodes in the DOM(document object model: data representation of the objects that comprise the structure and content of a document on the web) tree to the lowest level. Any declaration property defined at a lower level will override the higher declaration.

•	CSS defines everything as boxes. The innermost box holds the element’s **content**(text or image), next comes the **padding**(puts space around the content of selected elements, inherits things like background color), then is the **border**(has properties like color, thickness, line style), and the final box is the **margin**(only represent whitespace)

•	To load in fonts, use this link:
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');


•	“display: flex” is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. 

•	The most common css framework is bootstrap
            \<link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                  crossorigin="anonymous"
            />




## Javascript:
•	Provides the functionality of your website.

•	At the end of your body in html you should have a <script src = main.js> element so that your html and javascript are linked up

•	Weakly typed language. Single threaded.

•	To output a string to the debugger console use console.log(“”);

•	Declare variables with let or const. “let” allows you to change the value of the variable, while const will cause an error if you attempt to change it. Javascript does not enforce the declaration of a variable before you use it, so it is entirely possible for a variable to have the type “Undefined”

•	2 + '3';
// OUTPUT: '23'

•	2 * '3';
// OUTPUT: 6

•	[2] + [3];
// OUTPUT: '23'

•	true + null;
// OUTPUT: 1

•	true + undefined;
// OUTPUT: NaN

•	1 === '1';
// OUTPUT: false

•	null === undefined;
// OUTPUT: false

•	'' === false;
// OUTPUT: false







