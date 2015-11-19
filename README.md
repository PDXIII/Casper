# Casper-FormMailer

The default theme for [Ghost-Form Mailer](https://github.com/PDXIII/Ghost-FormMailer), which allows sending a contact form with Ghost’ internal Node Mailer module.

## What’s the difference?

With [Ghost-Form Mailer](https://github.com/PDXIII/Ghost-FormMailer) and this theme you are able create a contact form without any third party service! Therefore the core code of the Ghost platform needed some minor changes and the basic theme, too!

To understand the changes in the big view head over to the [Ghost-Form Mailer repository](https://github.com/PDXIII/Ghost-FormMailer) and start reading.

## Code Changes

Hopefully you have already read the **Code Changes** of the [Ghost-Form Mailer repository](https://github.com/PDXIII/Ghost-FormMailer). Otherwise please go back and read these first.

To keep the code untouched as possible, I tried to work modular.

### The Contact Form

Accordingly the principle of modularity I created the contact form as an partial, so you can find it under `/partials/contactform.hbs`. It is pretty basic and straight forward. There are four input fields for name, email, subject and the final message. When you’ll hit the submit button the function **handleContactForm()** will be executed.

The big advantage of the contact form as a partial is that you can place it everywhere. In this case I added it in the **index.hbs** just right under the post loop. Take a look:

    {{! The main content area on the homepage }}
    <main id="content" class="content" role="main">
    
        {{! The tag below includes the post loop - partials/loop.hbs }}
        {{> "loop"}}
        {{! The following includes the contact form - partials/contactForm.hbs}}
        {{> "contactform"}}
    
    </main>


### The HandleContactForm.js

This javascript file only contains a function with the same name, which will be executed when the user hits the submit button. To get it working, you’ll need to include this function in your own **main.js** (or however you call it) or add it in the **default.hbs** to the other javascript files for Casper before the body closing tag like this:

    {{! The main JavaScript file for Casper }}
    <script type="text/javascript" src="{{asset "js/jquery.fitvids.js"}}"></script>
    <script type="text/javascript" src="{{asset "js/index.js"}}"></script>
    <script type="text/javascript" src="{{asset "js/handleContactForm.js"}}"></script>

The script creates an object from the input values and sends it to the route defined in the variable **postToRoute**

**Attention:** the value of variable **postToRoute** is set to fit the development environment. Please change this if you head over to production.

After getting a responds from the server it replaces the contact form with a message about the success or failure.

## Changing the Contact Form

Please keep in mind: if you want to change the contact form, like adding or removing input fields, you’ll need to make according changes to the following files:

Theme files:

+   `/partials/contactForm.hbs/``
+   `/assets/js/handleContactForm.js`

Core files:

+   `/core/server/controllers/frontend.js`

## Copyright & License

Copyright (c) 2013-2015 PDXIII aka Peter Sekan - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
