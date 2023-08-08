<strong>1. What does a DOCTYPE do?</strong>

The <!DOCTYPE> declaration is an HTML (Hypertext Markup Language) tag that specifies the version of HTML or XML that a web page is written in. The purpose of the <!DOCTYPE> declaration is to tell the web browser how to interpret and render the web page, based on the rules and specifications of the chosen document type.

The <!DOCTYPE> declaration is placed at the very beginning of an HTML document, before the <html> tag. Here is an example of a complete <!DOCTYPE> declaration for HTML5:

```
<!DOCTYPE html>
```
This declaration tells the web browser to render the web page according to the HTML5 specification. The declaration also triggers standards mode in modern web browsers, which follows the standard rules for HTML and CSS.

In addition to specifying the HTML version, the <!DOCTYPE> declaration can also include other attributes that define the document type, such as the DTD (Document Type Definition) or a public identifier. These attributes can be useful for specifying the rules and specifications for specific XML document types.

Including a complete and correct <!DOCTYPE> declaration at the beginning of your HTML documents is important for ensuring that your web pages are displayed consistently across different browsers and devices. This can help avoid layout and display issues, as well as ensure that your web pages comply with web standards and best practices.

<strong>2. How do you serve a page with content in multiple languages?</strong>

To serve a page with content in multiple languages, you can use a technique called internationalization (i18n). Here are some common approaches to implement i18n:

Use different URLs: You can create a different URL for each language version of your website. For example, example.com/en for English, example.com/es for Spanish, etc. When a user visits your website, you can detect their preferred language and redirect them to the appropriate URL.

Use language subdomains: You can use subdomains to indicate the language version of your website. For example, en.example.com for English, es.example.com for Spanish, etc.

Use language parameters: You can add a language parameter to the URL to indicate the language version of your website. For example, example.com/?lang=en for English, example.com/?lang=es for Spanish, etc.

Once you have set up the basic structure for your multi-language website, you can use tools and techniques to translate your content and serve it to users in their preferred language. Here are some common approaches to translate content:

Use machine translation: You can use machine translation services like Google Translate or Microsoft Translator to automatically translate your content into multiple languages. While this approach can be quick and easy, it may not always produce accurate translations.

Use professional translation services: You can hire professional translators to translate your content into multiple languages. This approach can produce higher-quality translations but may be more expensive and time-consuming.

Use translation plugins: If you are using a content management system like WordPress, you can use translation plugins like WPML or Polylang to manage translations of your content.

Once you have translated your content, you can use JavaScript or server-side rendering to dynamically serve the content in the appropriate language based on the user's preferences. You can also use HTML tags to indicate the language of your content to search engines and other automated tools.

<strong>3. Consider HTML5 as an open web platform. What are the building blocks of HTML5?</strong>

HTML5 is a markup language used for structuring and presenting content on the web. It is designed to be an open web platform, with a range of features that make it more powerful and flexible than its predecessors. The building blocks of HTML5 include:

Semantics: HTML5 introduces new tags and attributes that provide more meaningful semantics to web content, making it easier for search engines and screen readers to understand the content.

Forms: HTML5 includes new form controls that make it easier for users to enter and validate data, such as the date picker, color picker, and email input type.

Audio and Video: HTML5 includes built-in support for audio and video playback, making it possible to embed media directly into web pages without the need for plugins.

Canvas: HTML5 includes a new canvas element, which allows for dynamic, scriptable rendering of 2D and 3D graphics.

Geolocation: HTML5 includes a geolocation API that enables web applications to access a user's location information.

Web Storage: HTML5 introduces two new mechanisms for storing data on the client-side: localStorage and sessionStorage.

Web Workers: HTML5 includes a web worker API that enables the execution of JavaScript code in the background, allowing for better performance and scalability.

WebSockets: HTML5 includes a new WebSocket API that enables real-time, bidirectional communication between web browsers and servers.

These building blocks provide the foundation for developing modern, interactive web applications that can run across a range of devices and platforms.

<strong>4. What kind of things must you be wary of when designing or developing for multilingual sites?</strong>

Use lang attribute in your HTML.

Directing users to their native language - Allow a user to change his country/language easily without hassle.

Text in raster-based images (e.g. png, gif, jpg, etc.), is not a scalable approach - Placing text in an image is still a popular way to get good-looking, non-system fonts to display on any computer. However, to translate image text, each string of text will need to have a separate image created for each language. Anything more than a handful of replacements like this can quickly get out of control.
Restrictive words/sentence length - Some content can be longer when written in another language. Be wary of layout or overflow issues in the design. It's best to avoid designing where the amount of text would make or break a design. Character counts come into play with things like headlines, labels, and buttons. They are less of an issue with free-flowing text such as body text or comments.

Be mindful of how colors are perceived - Colors are perceived differently across languages and cultures. The design should use color appropriately.

Formatting dates and currencies - Calendar dates are sometimes presented in different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.

Do not concatenate translated strings - Do not do anything like "The date today is " + date. It will break in languages with different word order. Use a template string with parameters substitution for each language instead. For example, look at the following two sentences in English and Chinese respectively: I will travel on {% date %} and {% date %} 我会出发. Note that the position of the variable is different due to grammar rules of the language.

Language reading direction - In English, we read from left-to-right, top-to-bottom, in traditional Japanese, text is read up-to-down, right-to-left.

Useful-to-have - include the locale in the path (e.g en_US, zh_CN, etc

<strong>5 .Describe the difference between a cookie, sessionStorage and localStorage.</strong>

|  | cookie | localStorage | sessionStorage |
| -------- | -------- | -------- | -------- |
| Initiator    | Client or server. Server can use Set-Cookie header   | Client   | Client    |
| Expiry    | Manually set   | Forever    | On tab close    |
| Persistent across browser sessions   |Depends on whether expiration is set    | Yes    | No   |
| Sent to server with every HTTP request    | Cookies are automatically being sent via Cookie header   | No    | No    |
| Capacity (per domain)    | 4kb    | 5MB    | 5MB   |
| Accessibility    | Any window    | Any window    | Same tab    |

<strong>Note:</strong> If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any cookie, localStorage, or sessionStorage stored. It's important to keep this in mind when designing for local persistance, especially when comparing to alternatives such as server side storing in a database or similar (which of course will persist despite user actions).

<strong>6 .Describe the difference between `<script>`, `<script async>` and `<script defer>`.</strong>

`<script>` - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.

`<script async>` - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example, analytics.

`<script defer>` - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encountered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML is fully parsed before executing. A deferred script must not contain document.write.
Note: The async and defer attributes are ignored for scripts that have no src attribute.

<strong>7 .What are data- attributes good for?</strong>

Before JavaScript frameworks became popular, front end developers used data- attributes to store extra data within the DOM itself, without other hacks such as non-standard attributes, extra properties on the DOM. It is intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

These days, using data- attributes is generally not encouraged. One reason is that users can modify the data attribute easily by using inspect element in the browser. The data model is better stored within JavaScript itself and stay updated with the DOM via data binding possibly through a library or a framework.

However, one perfectly valid use of data attributes, is to add a hook for end to end testing frameworks such as Selenium and Capybara without having to create a meaningless classes or ID attributes. The element needs a way to be found by a particular Selenium spec and something like data-selector='the-thing' is a valid way to do so without convoluting the semantic markup otherwise.

<strong>8 .What is the use case between data-atrributes and class?</strong>

a. Purpose:

Data Attributes: Data attributes (data-*) are primarily used to store custom data or metadata within HTML elements. They are designed to associate additional information with elements without affecting their visual presentation or behavior.
Class/ID: Classes and IDs are used to target and select elements for styling or DOM manipulation. They help define the style or behavior of elements or serve as unique identifiers for specific elements.

b. Selectivity:

Data Attributes: Data attributes are not specifically designed for element selection. While you can use data attributes to target elements for manipulation, it generally requires more complex and specific selectors, such as [data-attribute-name].
Class/ID: Classes and IDs are explicitly intended for selecting elements. Classes can be applied to multiple elements, allowing for grouped selection, while IDs must be unique within the document and provide a straightforward way to target a single element.

c. Code Organization and Semantics:

Data Attributes: Data attributes enhance code organization by allowing you to attach additional data to elements, making it more semantic and self-descriptive. They provide a way to associate meaningful information with elements, enhancing the understanding of the HTML structure.
Class/ID: Classes and IDs primarily focus on styling and element identification. While they can be used to convey meaning through naming conventions, their primary purpose is not to describe the element's purpose or additional data.

d. JavaScript Integration:

Data Attributes: Data attributes offer a convenient way to access and manipulate data within JavaScript. You can use methods like getAttribute() or the dataset property to retrieve or modify the custom data associated with an element.
Class/ID: Classes and IDs are commonly used for element selection in JavaScript. You can select elements by class or ID using methods like querySelector() or getElementById() and manipulate their properties, styles, or content.

In summary, data attributes provide a means to attach custom data to elements, improving code organization and semantics, while classes and IDs are primarily used for selecting elements and defining styling or behavior. The choice between using data attributes and classes/IDs depends on the specific purpose and requirements of your application or project.

<strong>9 .What is progressive rendering?</strong>

Progressive rendering, also known as progressive rendering or incremental rendering, is an approach to web page rendering that prioritizes the early display of content to provide a better user experience, even before the entire page has finished loading.

Traditionally, web pages are rendered in a blocking manner, where the browser waits until all the resources (HTML, CSS, JavaScript, images, etc.) are fully downloaded and processed before rendering anything to the user. This can lead to a significant delay, especially for pages with large or complex content.

Progressive rendering, on the other hand, aims to start rendering and displaying content as soon as possible, incrementally, while the rest of the page resources are still being loaded. This allows the user to see and interact with the initial content faster, providing a perception of a faster-loading page.

There are several techniques and strategies employed to achieve progressive rendering:

a. Prioritizing Critical Resources: Identify and prioritize the most important resources needed to render the initial content, such as the main HTML structure and critical CSS. These resources are fetched and processed first, allowing the browser to start rendering the page sooner.

b. Lazy Loading: Defer the loading of non-critical resources, such as images or additional scripts, until they are needed. This ensures that the initial content is rendered quickly, and the remaining resources are loaded progressively as the user scrolls or interacts with the page.

c. Content Chunking: Splitting large content or data into smaller chunks and loading them incrementally. This allows the browser to render and display the available content piece by piece, providing a sense of progress to the user.

d. Server-Side Rendering (SSR): Pre-rendering the initial content on the server and sending it to the client, reducing the client-side rendering time. This is particularly useful for delivering meaningful content faster, especially for dynamic or data-driven pages.

By implementing progressive rendering techniques, websites can enhance the perceived performance, improve user engagement, and provide a better overall user experience by showing content to users quickly and allowing them to interact with it while the rest of the page loads progressively.


<strong>10 .Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>` ? Do you know any exceptions? </strong>


It is generally a good idea to position CSS `<link>` tags between the `<head>` and JS `<script>` tags just before the `</body>` for a couple of reasons:

Faster rendering: Placing CSS in the `<head>` allows the browser to start fetching and parsing the CSS file early in the rendering process. This helps to ensure that the styles are applied to the content as soon as possible, resulting in faster rendering and a better user experience. By placing CSS at the bottom, it could lead to a delay in rendering the styles, causing a flash of unstyled content (FOUC).

Non-blocking JavaScript: By placing JavaScript `<script>` tags just before the closing `</body>` tag, the browser can continue parsing and rendering the HTML content without being blocked by JavaScript execution. This allows the page to be displayed to the user quickly. Placing JavaScript at the bottom also ensures that all HTML content is available for manipulation by the scripts.

Exceptions to this general guideline may exist based on specific use cases or requirements:

Critical CSS: In some scenarios, it might be beneficial to inline critical CSS directly within the `<head>` of the HTML document. Critical CSS refers to the minimal set of styles required to render the above-the-fold content of a page. Inlining it can help avoid the FOUC and ensure that the critical content is styled immediately.

Asynchronous JavaScript: If your JavaScript code is designed to work asynchronously or doesn't require immediate interaction with the page's content, you can place it higher up in the HTML document, even within the `<head>`. This can be useful when loading external scripts or libraries that are not critical for the initial page rendering.

Preloading and Resource Optimization: In some cases, you may need to preload certain resources, such as fonts or images, to improve performance. Preloading can be done using the `<link rel="preload">` tag, and it may be necessary to position these preload tags in the `<head>` section, even before CSS.

It's important to consider the specific requirements and performance characteristics of your application when deciding on the placement of CSS and JavaScript. Performance testing, profiling, and benchmarking can help you identify the optimal placement for your specific use case.

<strong>11 .Have you used different HTML templating languages before and how does it different from HTML?</strong>

Yes, Pug (formerly Jade), ERB, Slim, Handlebars, Jinja, Liquid, and EJS just to name a few. In my opinion, they are more or less the same and provide similar functionality of escaping content and helpful filters for manipulating the data to be displayed. Most templating engines will also allow you to inject your own filters in the event you need custom processing before display.

HTML templating is used for dynamic web content generation and offers several advantages over using static HTML alone:

a. Dynamic Content: HTML templating allows you to generate dynamic content based on data from various sources such as databases, APIs, or user input. With templating, you can dynamically generate HTML pages, emails, or other content that adapts to different scenarios or conditions.

b. Code Reusability: Templating engines provide features like partials or includes, which enable you to reuse sections of HTML code across multiple pages. This helps maintain consistency, reduces code duplication, and improves development efficiency.

c. Separation of Concerns: Templating encourages a clear separation of concerns between the presentation layer (HTML) and the logic/data layer. Templating engines allow you to keep the presentation logic separate from the business logic, making the codebase more maintainable and facilitating collaboration between frontend and backend developers.

d. Template Inheritance/Layouts: Templating engines often support template inheritance or layouts, where you define a base template with common elements (e.g., header, footer, navigation), and then extend or override specific sections in child templates. This promotes code reuse, consistent design, and easier maintenance.

e. Conditional Rendering and Loops: Templating engines provide constructs like conditionals and loops, allowing you to control the rendering of HTML elements based on specific conditions or iterate over arrays or objects. This flexibility enables dynamic content generation and makes it easier to handle different scenarios.

f. Integration with Backend: HTML templating engines can seamlessly integrate with backend programming languages, allowing you to pass data from the server-side to the templating engine and generate HTML dynamically. This integration facilitates server-side rendering (SSR) and enhances the performance and SEO of your web application.

While static HTML is suitable for simple and static content, HTML templating is preferred when you need to generate dynamic content, reuse code, separate concerns, and enhance the flexibility and maintainability of your web application. Templating engines provide powerful features that simplify the process of generating dynamic HTML, making it easier to create robust and adaptable web applications.

