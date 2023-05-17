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

<strong>5 .Describe the difference between a cookie, sessionStorage and localStorage</strong>

|  | cookie | localStorage | sessionStorage |
| -------- | -------- | -------- | -------- |
| Initiator    | Client or server. Server can use Set-Cookie header   | Client   | Client    |
| Expiry    | Manually set   | Forever    | On tab close    |
| Persistent across browser sessions   |Depends on whether expiration is set    | Yes    | No   |
| Sent to server with every HTTP request    | Cookies are automatically being sent via Cookie header   | No    | No    |
| Capacity (per domain)    | 4kb    | 5MB    | 5MB   |
| Accessibility    | Any window    | Any window    | Same tab    |

<strong>Note:</strong> If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any cookie, localStorage, or sessionStorage stored. It's important to keep this in mind when designing for local persistance, especially when comparing to alternatives such as server side storing in a database or similar (which of course will persist despite user actions).
