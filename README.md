# Selectable squares

Angular application to fetch 100 posts and render it for performing the following actions:
 - Show title by default.
 - Clickable squares and reset any selected squares.
 - Only one square is to be selected at a time.
 - app folder contains the app module and square component.


## Cloning, registry and installing dependencies
 - For cloning: git clone https://github.com/ravibhasker23/custom-feature-squares.git
 - Setting Registry: npm config set registry https://registry.npmjs.org/
 - For installing dependencies: npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Assignment questions

### 1. Why is it (or isn't it) safe to use JWT Token? 
- Signed JWT's have a header, body and signature. They play a vital role in ensuring that JWT's can be used to safely store and trasnmit critical information. Understanding all three of these are critical for the correct use of JWT. They should be used in parallel with the security practices like setting an expiration time, using HTTPS, having a secure storage system and not providing and sensitive data. This can help build a resillient application.

### 2. Describe two HTML Attack vectors and ways to mitigate them
Below are the two commonly associated attack vectors associated with the HTML and browser:
- Cross site scripting(XSS)
Messages containing HTML can cause cross site scripting (XSS) attacks. An attacker can use the web application to send browser side  script which can access cookies or other sensitive information. There are different type of XSS attacks like Reflected, Stored XSS and DOM based XSS. Different ways to implement is by using <script></script> tags.

- CORS(Cross origin resource sharing) Attacks 
The attacker can exploit the same origin policy built in the browsers by default. Maintaining a whitelist or authorized domains can be a big task, which can lead to the application interacting with different domains. Attacker can inject a malicious code and return a response on attacker's server.

- How to mitigate these attacks:
  - Using cookies to access resources and data.
  - Identifying a better way to manage user session in the application.
  - Turning off HTTP TRACE support on all web servers. It can avoid sending information to third party sites.
  - Implementing Content security policy for preventing XSS and any other injection attacks.
  - Having regular security tests or when a major application change happens

### 3. Difference between mutable and immutable objects
- Mutable objects can be changed whereas immutable objects are those which cannot be changed or added.
- Whereas all the referenced types like objects, arrays, functions will reference to a particular object/array/function stored in memory rather than having a dedicated value in the memory. These are mutable objects. It can be changed or a new property or value can be added.
- All the primitive values(string, null, undefined, number, boolean, symbol) are immutable and they can only be reassigned. They are stored as a single value in the memory.

Example of an immutable object:

- On creating a variable with some value and then creating another new variable and assigning the old variable to it will create a new space in the memory with the value of the old variable.

Pros and cons of immutability:
Pros:
 - Helps in simplifying the development and it will represent the exact state present in memory.
 - Code is more efficient and safer.

Cons:
 - Difficult to debug and might slow down development.
 - Every time an object created is different and can cause its child elements to re-render every time.

How to achieve immutability in code:
 - By using Object.freeze() so that no more changes are possible.
 - Copying data structures or objects again or use spread {...obj} operator.
 - Using JSON.stringify() and JSON.parse(). Not really recommended though.
 - Creating read only properties

### 4. Speed up loading the web-applications
 - By implementing lazy loading and only load the modules/components/data/images when they are actually required.
  - This can also be implemented by splitting up the code and user navigates via routes
 - Using pipes
 - AOT compilation


### 5. Selecting a hardware
 - I would prefer a company provided hardware which would be sitting on company supplied operating system image and softwares as it is way more secure and follows all the protocols. It also protects all the work done for the organizations in the form of Intellectual property rights.


