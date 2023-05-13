<strong>1. What is CSS selector specificity and how does it work?</strong>

CSS selector specificity is a measure of how specific a CSS selector is, and it determines which styles should be applied to an element when there are conflicting styles specified for the same element.

In CSS, selectors can have different levels of specificity, which are calculated based on the number and types of selectors used in the selector. Here is how selector specificity is calculated:

Inline styles have the highest specificity and always override other styles. An inline style is applied to an element using the style attribute.

ID selectors have a higher specificity than class selectors or element selectors. An ID selector is specified using the # character followed by the ID of the element.

Class selectors have a higher specificity than element selectors. A class selector is specified using the . character followed by the name of the class.

If two selectors have the same level of specificity, the one that appears later in the stylesheet takes precedence.

Here are some examples to illustrate how selector specificity works:

```
<!-- inline style -->
<div style="color: red;">This text is red.</div>

<!-- ID selector -->
<div id="myDiv">This text is black.</div>
<style>
#myDiv {
  color: black;
}
</style>

<!-- class selector -->
<div class="myClass">This text is blue.</div>
<style>
.myClass {
  color: blue;
}
</style>

<!-- element selector -->
<p>This text is green.</p>
<style>
p {
  color: green;
}
</style>

```

In this example, the inline style on the first div element takes precedence over the ID selector, which takes precedence over the class selector, which takes precedence over the element selector.

It's important to understand selector specificity when working with CSS, as it can help you avoid unintended style conflicts and make sure that your styles are applied consistently across your website or application. However, it's also important to use selector specificity judiciously and avoid over-specific selectors, as they can make your code harder to maintain and lead to style conflicts.

<strong>2. What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?</strong>

"Resetting" and "normalizing" are two approaches to dealing with the default styles and inconsistencies of CSS across different web browsers.

"Resetting" involves removing all the default styles applied by the browser to HTML elements and setting all the properties to a common baseline. This can be achieved by using a CSS file that sets all properties to their initial value or by using a specialized CSS framework such as Eric Meyer's "CSS Reset".

"Normalizing" involves preserving some of the default styles of HTML elements while making sure that they are consistent across different browsers. This can be achieved by using a CSS file that applies styles to HTML elements to ensure that they are displayed consistently across different browsers. Some popular CSS frameworks that use the "normalize" approach include Normalize.css and Modern Normalize.

Which approach to choose depends on the specific needs of the project. Resetting can provide a blank slate for developers to work with and can ensure that the final styles of the website are consistent across different browsers. However, resetting can also lead to a lot of additional work for developers as they have to manually style every HTML element from scratch. Normalizing can save time and effort by providing a consistent base style for all HTML elements, but it may also result in some deviations from the default styles of certain elements.

Ultimately, both approaches have their pros and cons, and the choice between them depends on the specific needs and constraints of the project.