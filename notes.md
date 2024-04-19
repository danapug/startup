# CS 260 Final Study Guide:
## In-class Quizlet:
-For the request [GET]/fav/george what is logged?

paul george john
![image](https://images-cdn.kahoot.it/907074b0-266a-4d57-82c3-9dcf71190893?auto=webp&width=1000)


-What middleware matches?

app.delete(/fav\/(.*)/, () => {})

You could also do app.delete(‘/fav/:id’, () => {})
![image](https://images-cdn.kahoot.it/a5a33ddc-5363-46c0-84a8-b1957cb376ff?auto=webp&width=1000)


-What document matches the mongodb query?

{ name: "Walke", score: -55 }      (OR so it needed to be J. or have a score less than 3, this was the only score less than 3
![image](https://images-cdn.kahoot.it/d0a8c0d5-2488-448f-9a92-ae103c7161d9?auto=webp&width=1000)



-Why is hashing passwords a good idea?

It improves security by making the password unreadable


-What will console.log print?
Client:Server:Hello
![image](https://images-cdn.kahoot.it/f696d33d-3ee4-4937-be45-50513792defc?auto=webp&width=1000)



-Value of websocket?

It is a peer to peer relationship rather than client to server


-Purposes of JSX:

To render html from JavaScript, to componentize your html, to allow for composability of your html. JSX does not touch CSS.


-What component with the url `/burger` render?

B
![image](https://images-cdn.kahoot.it/7e2b94e0-40d7-4a94-bc2b-d8bcdd40b6aa?auto=webp&width=1000)


-The command "npm install ws" does the following: 

locks the version of the websocket package for your application, adds the websocket source code to the node_modules directory, and adds a dependency to your package.json file.  This command does not add template code for websockets to your javascript.

-What will component A initially display?

tacofish
![image](https://images-cdn.kahoot.it/eb05f83b-27b1-42ed-9c43-27e5705fe3fc?auto=webp&width=1000)


-Fetch can be used in front-end and back-end



-Linux daemon:
executes independent of a user, starts when the computer is rebooted, PM2 is an example of a daemon, can fork other processes.


## Class Notes
### HTTP Service
•	The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain name system (DNS). To see an IP address, use the console command “dig”
 
![image](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServers/domainNames/domainNameParts.jpg)  
•	TCP/IP Layers:

o	Application: ex is HTTPS, Purpose: functionality like web browsing

o	Transport: ex is TCP, Purpose: moving connection information packets

o	Internet: ex is IP, Purpose: establishing connections

o	Link: ex is Fiber/hardware, Purpose: physical connections

•	Web server: a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

•	The same computing device commonly has multiple web services running, the trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. Each service on the device starts up on a different port.

•	Service Gateway/Reverse Proxy: a simple web service that listens on the common https port 443. The gateway then looks at the request and maps it to the other services running on different ports. 

•	Our web server used the application Caddy as the gateway to our services.

•	The DNA databse records that facilitate the mapping of domain names to IP addresses come in several flavors.

o	A: address, this record is a straight mapping from a domain name to IP address

o	CNAME: canonical name, record maps one domain name to another domain name. This acts as a domain name alias. For example, mapping byu.com to the same IP address as byu.edu so that either one could be used.

•	All web programming requests between devices use HTTPS to exchange data.

•	The web service provides the static frontend files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, executing application logic that you don’t want your user to be able to see, and communicating with other users. The functionality provided by your web service represents the backend of your application.

•	Endpoints(sometimes APIs): the functions provided by a web service. You access the web service endpoints from your frontend JS with the fetch function. 
![image](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServices/introduction/backEnd.png)
 
•	The backend can also have fetch requests to other services (For example a database service)

•	URL: (uniform resource locator) represents the location of a web resource. 

•	The only parts of a URL that are required are the scheme and the domain name

#<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>


•	Port 80 is reserved for HTTP (hypertext transfer protocol) for web requests

Port 443 is reserved for HTTPS

Port 22 is reserved for SSH

•	The web browser makes a HTTP request and the server will generate an HTTP response. To see these exchanges use the console command “curl”

•	Common HTTP Request:

o	GET: get the request resource

o	POST: create a new resource (response should include a unique ID of the newly created resource)

o	PUT: update a resource. 

o	DELETE: delete a resource

•	Status Codes standard to HTTP responses so that the client of a request can know how to interpret the response

o	100: informational

o	200: success

o	300: redirect to some other location or that the previously cached resources is still valid

o	400: client errors. The request is invalid

o	500: server errors.

•	HTTP Headers: specify metadata about a request or response. Includes things like how to handle security, caching, data formats, and cookies. Common headers are: Authorization, Accept, Content-Type, Cookie, Host, Origin, Content-Length



•	Cookie: method to track state across requests because HTTP itself is stateless, one http request does not know anything about a previous or future request. Cookies are generated by a server and passed to the client as an HTTP header. **A server to store data on the client.

•	Syntax for HTTP response:
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
•	Syntax for HTTP request:
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
    
•	The basic usage of fetch takes a URL and returns a promise. The promise “then” function takes a callback function that is asynchronously called when the request URL content is obtained. If the returned content is of type 
    
•	Node.js: application for deploying JS outside of a browser. This is good for simple web servers, little projects

•	Express: good for production-ready application that provides framework and full we b service. Does the following: routing requests for service endpoints, manipulating HTTP requests with JSON body content, generating HTTP responses, and using middleware to add functionality. 

o	app.get('/store/:storeName', (req, res, next) => {
 res.send({name: req.params.storeName});
});

•	// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

•	// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));


### Data and Authentication Services:

-MongoDB: does not have a rigid table definition, you can include some of the properties and it will still store that item for you.

-When you run a program from the console, the program will automatically terminate when you close the console or if the computer 
restarts. In order to keep programs running after a shutdown you need to register it as a daemon. Daemon: something that is always there working in the background. We want our web services to continue running as a daemon.

### WebSocket
-WebSocket connection: made using HTTP and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time. Websockets are only between two parties, so a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers. 

### Security
-10 Security No-No’s:

1. Broken access control (doesn’t enforce permissions on users, so a non-admin is doing something only an admin should be able to)
   
2. Cryptographic Failtures (sensitive data is accessible)
   
3. Injection (an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input)
   
4. Insecure Design (architectural flaws, when the app was created there was not a focus on security)
   
5. Security Misconfiguration (security misconfiguration attacks exploit the configuration of an application)
    
6. Vulnerable and outdated components (the longer an application has been deployed, the more likely it is that the attack surface and corresponding exploits of the application will increase)
    
7. Identification and authentication failures (any situation where a user’s identity can be impersonated or assumed by an attacker. For example, if an attacker can repeatedly attempt to guess a user’s password, then eventually they will be successful.)
    
8. software and data integrity failure (attacks that allow external software, processes, or data to compromise your application)
    
9. Security logging and monitoring failures (have a secure system that will store logs because the attacker will delete any trace that he was there, if you don’t have a system in place that is already logging everything)
    
10. Server side request forgery (causes the application service to make unintended internal requests, that utilized the service’s elevated privileges in order to expose internal data or services)

### Web Frameworks:
-Web frameworks modularize code, create single page applications, simplify reactivity, and support diverse hardware devices. 

-React: combines html and javascript into a jsx file. CSS is declared in its own file. JSX is converted into valid HTML and JS using a preprocessor called Babel.

-Using a web framework creates components, which enables code reuse as common application components often show up repeatedly. The component generates the user interface using render.

-React Properties: the component receives the properties in its constructor and then can display them when it renders. 

JSX:
<div>Component: <Demo who="Walke" /><div>
React component: 
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
Resulting HTML:
<div>Component: <b>Hello Walke</b></div>

-React State: component state is created by calling React.useState hook function. The useState function returns a variable thata contains the current state and a function to update the state. 

-The toolchain we used was Vite. This extends usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our applications. 

-Web framework router: provides essential functionality for single page applications. With a multiple webpage application the headers, footers, navigation, and common components must be either duplicated in each html page or injected before the server sends the page to the browser. With a single page application, the browser only loads one html page and then js is used to manipulate the DOM and give it the appearance of multiple pages. 

// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

-React enables reactivity with three major pieces of a react component: props, state, and render.






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

• DOM(document object model) object representation of the html elements that the browser uses to render the display. For everything in an html document there is a node in the DOM(this includes elements, attributes, text, comments, whitespace). All of these nodes form a big tree with the document node at the top. DOM is a programming interface(API... application programming interface) that represents the structure and content of a web page as a tree of objects. It allows web browsers and scripts to access and modify html elements and css attributes. It allows JS to interacts and modify the content and structure of the web page.

•DOM can insert, modify, or delete elements. You can insert a new element with 'createElement' and then querySelector, and appendChild the new element that you created.

function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');

To delte elements call the removeChild function on the parent element:
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');



• textContent: property contains all of the element's text.

• innerHTML: access a textual representation of an element's html content.

•addEventListener: ability to attach a function that gets called when an event occurs on the element.

• JS promise objects are great for asynchronous execution.

•Async/await: 'await' wraps the execution of a promise and removed the need to chain functions. 'await' expression will block until the promise state moves to 'fulfilled' or throws an execption if the state moves to rejected. 'await' must be called at the top level of the JS or it must be in a function that is defined with the async keyword. 'async' blocks execution until the promise has resolved and then returns the result of the promise.

• By combining 'async' to define functions that return promises with 'await' to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

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

So if there was a resolve false(then you would output the exception salad, but since it is true, we do not output the exception. If there was a wait then it would have been burger, taco, shake, noodles, fries.

•Promise allows the main rendering thread to continue while some action is executed in the background. Create a promise by calling the promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. 

•The state of the promise is in one of three states: pending(currently running asynchronously), fulfilled(completed successfully), or rejected(Failed to complete). Asynchronous execution is demonstrated by using the setTimeout function(number of milliseconds to wait and a function to call after that amount of time has expired).

• The promise object has 3 functions: then, catch, and finally. 'then' function is called if the promise is fulfilled, 'catch' is called if the promise is rejected, and 'finally' is always called after all the processing is completed. 

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

• HTML executes on a single thread. 

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

• Local Storage: ability to persistently store and retrieve data(scores, usernames) on a user's browser across user sessions and html page renderings. For example, your frontend js code could store a user's name on one html page and then retrieve the name later when a different html page is loaded. The user's name will also be availale in local storage the next time the same browser is used to access the same website.

•Four functions with localStorage:
  -setItem(name, value) sets a named item's value into local storage
  -getItem(name) gets a named item's value from local storage
  -removeItem(name) removes a named item from local storage
  -clear() clears all items in local storage

• To store a JS object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion and parse it back to JSON.parse() when retrieved.

• JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. 

• Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

•UTF-8 allows for representation of global data, this allows you to write any language character.

const obj = { a: 2, b: 'crockford', c: undefined };

const json = JSON.stringify(obj);

const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}

// {"a":2, "b":"crockford"}

// {a: 2, b: 'crockford'}

• There are no type declarations in js as the type is always inferred by the assignmenet of the value to the parameter. When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.

const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11

console.log(s.indexOf('조선글'));
// OUTPUT: 8

console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']

console.log(s.startsWith('Ex'));
// OUTPUT: true

console.log(s.endsWith('조선글'));
// OUTPUT: true

console.log(s.toLowerCase());
// OUTPUT: example:조선글
