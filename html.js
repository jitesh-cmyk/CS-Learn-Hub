window.subjectCourse = {
  subject: "HTML",
  modules: [
    ["HTML Introduction", "What is HTML?|History of HTML|HTML Versions|HTML5|Features of HTML|Advantages of HTML|HTML Document Structure|How HTML Works?|HTML vs HTML5"],
    ["HTML Basic Structure", "<!DOCTYPE html>|<html> Tag|<head> Tag|<title> Tag|<body> Tag|HTML Comments|HTML Elements|HTML Tags|HTML Attributes"],
    ["HTML Text Formatting", "Headings <h1> - <h6>|Paragraph <p>|Line Break <br>|Horizontal Line <hr>|Bold <b>|Strong <strong>|Italic <i>|Emphasis <em>|Underline <u>|Small Text <small>|Highlight <mark>|Superscript <sup>|Subscript <sub>|Deleted Text <del>|Inserted Text <ins>|Preformatted Text <pre>|Code <code>"],
    ["HTML Links", "What is a Hyperlink?|<a> Tag|href Attribute|target Attribute|Absolute URL|Relative URL|Internal Links|External Links|Email Links|Phone Links|Bookmark / Anchor Links|Download Links"],
    ["HTML Images", "<img> Tag|src Attribute|alt Attribute|width and height|Image Title|Image as a Link|Responsive Images|<figure> Tag|<figcaption> Tag"],
    ["HTML Lists", "Ordered List <ol>|Unordered List <ul>|List Item <li>|Ordered List Types|Unordered List Types|Nested Lists|Description List <dl>|Description Term <dt>|Description Details <dd>"],
    ["HTML Tables", "Creating a Table|<table> Tag|<tr> Row|<th> Header|<td> Data|border Attribute|rowspan|colspan|Table Caption|<thead>|<tbody>|<tfoot>|Table Styling Basics"],
    ["HTML Forms", "What is a Form?|<form> Tag|action Attribute|method Attribute|<input> Tag|Text Input|Password Input|Email Input|Number Input|Radio Button|Checkbox|Date Input|Time Input|File Input|Color Input|Range Input|Submit Button|Reset Button|<button>|<label>|<textarea>|<select>|<option>|<optgroup>|<fieldset>|<legend>|Form Validation|required Attribute|placeholder|min and max|pattern Attribute"],
    ["HTML Semantic Elements", "What are Semantic Elements?|<header>|<nav>|<main>|<section>|<article>|<aside>|<footer>|<figure>|<figcaption>|<details>|<summary>|Semantic vs Non-Semantic Elements"],
    ["HTML Multimedia", "Audio|<audio> Tag|Audio Controls|Video|<video> Tag|Video Controls|<source>|Autoplay|Muted|Loop|Poster|YouTube Video Embedding|<iframe>"],
    ["HTML Attributes", "What are Attributes?|Global Attributes|id|class|style|title|lang|hidden|data-*|contenteditable|draggable|tabindex"],
    ["HTML Div and Span", "<div> Element|<span> Element|Difference Between Div and Span|Block-level Elements|Inline Elements|Container Elements"],
    ["HTML Iframe", "What is an Iframe?|<iframe> Tag|Embedding Web Pages|Embedding YouTube Videos|Width and Height|Iframe Border|Iframe Security Basics"],
    ["HTML5 Features", "HTML5 Introduction|Semantic Elements|Audio|Video|Canvas|SVG|Local Storage|Session Storage|Geolocation|Drag and Drop|HTML5 Form Input Types"],
    ["HTML Graphics", "Canvas|<canvas> Element|Canvas Basic Drawing|Lines|Rectangles|Circles|Text|Colors|SVG|SVG Shapes|SVG Text|Canvas vs SVG"],
    ["HTML5 APIs", "Web Storage API|Local Storage|Session Storage|Geolocation API|Drag and Drop API|Web Workers|WebSocket Basics|Notification API"],
    ["HTML Meta Information", "<meta> Tag|Character Encoding|Viewport Meta Tag|Description|Keywords|Author|Robots|Favicon|<link> Tag"],
    ["HTML Head Elements", "<title>|<meta>|<link>|<style>|<script>|<base>|Favicon|External CSS|External JavaScript"],
    ["HTML Entities", "What are HTML Entities?|Space Entity|< and >|&|Copyright Symbol|Registered Symbol|Trademark|Quotation Marks|Currency Symbols|Mathematical Symbols"],
    ["HTML Accessibility", "What is Web Accessibility?|alt Text|Proper Heading Structure|Labels for Forms|Accessible Links|Semantic HTML|Keyboard Navigation|ARIA Basics"],
    ["HTML SEO Basics", "What is SEO?|Page Title|Meta Description|Proper Headings|Semantic HTML|Image alt|SEO-friendly URLs|Open Graph Basics"],
    ["HTML and CSS", "Connecting CSS with HTML|Inline CSS|Internal CSS|External CSS|CSS Selectors|Classes and IDs|Basic Layout|HTML + CSS Website Structure"],
    ["HTML and JavaScript", "Adding JavaScript|<script> Tag|Inline JavaScript|Internal JavaScript|External JavaScript|JavaScript Events|Button Click|Form Interaction|DOM Introduction"],
    ["HTML Best Practices", "Proper Indentation|Meaningful Names|Semantic HTML|Closing Tags|Using alt|Avoiding Deprecated Tags|Responsive Structure|Clean Code|Accessibility|SEO-friendly HTML"],
    ["HTML Practical Projects", "Personal Profile Page|Resume Website|Student Registration Form|Login Page|Contact Form|Product Page|Blog Page|Portfolio Website|College Website|Landing Page|Simple E-commerce Page"]
  ].map(([title, topicList]) => ({
    title,
    topics: topicList.split("|").map((name) => name.trim())
  }))
};
