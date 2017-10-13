# Week 2 Assignment

### Overview
In this assignment, you'll create two different portfolios. The first will be an update of the one you made last week--you'll enhance this one with a mobile-responsive layout. For your second portfolio, you’ll build a layout with the Bootstrap CSS framework.


### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Before You Begin

* You've learned a ton of material these past two weeks: HTML/CSS, GitHub, Heroku and Bootstrap. If you feel like you're falling behind, there's no need to panic. You'll have 22 weeks to digest this material and master it. 

* We're diving into JavaScript next week, and HTML/CSS will start getting less focus. Still, you'll find that a basic knowledge of HTML/CSS will help you understand JavaScript, especially when we use it to manipulate web pages.


### Instructions
1. Create two new GitHub repositories and name them `Responsive-Portfolio` and `Bootstrap-Portfolio`.

2. Clone these repositories onto your computer.

3. Copy the contents of `Basic-Portfolio` (your first homework solution) and paste the mentioned files into `Responsive-Portfolio`.
  * Note: Be sure not to include any dot files (e.g .git, .gitignore for example) from the `Basic-Portfolio` repo.
  * If you chose the `Skeleton` exercise for your first homework assignment, contact a TA, who will provide you with a template for your portfolio.


### Assignment One Instructions - (No Bootstrap)
1. Inside your `Responsive-Portfolio` folder, find your `style.css` file, it may be in `assets/css`. At the bottom of `styles.css` you will write your media queries.
  * Use three `@media screen` tags, each with one of these `max-width`s: `980px`, `768px` and `640px`.
    * You use `980px` because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.
    * `768px` is about the width of a tablet and `640px` is about the width of a phone in landscape

2. Make the layout match the following screenshots:
  * `index.html`: [980px](Images/980-index.jpg), [768px](Images/768-index.jpg), [640px](Images/640-index.jpg)
  * `portfolio.html`: [980px](Images/980-portfolio.jpg), [768px](Images/768-portfolio.jpg), [640px](Images/640-portfolio.jpg)
  * `contact.html`: [980px](Images/980-contact.jpg), [768px](Images/768-contact.jpg), [640px](Images/640-contact.jpg)

3. Make the position of the header `static` (the default positioning) when the screen is `640px` wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.

4. Be sure to include the `viewport` tag in all your html files, otherwise your media-queries won't function like you'd expect on mobile devices.

5. **Protip**: Use the Chrome extensions [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) and [Browser Width](https://chrome.google.com/webstore/detail/browser-width/mlnegepkjlccabakompdmbcmdieaideh) to see the browser dimensions in Chrome.*

### Assignment Two Instructions (Bootstrap)
1. Inside your `Bootstrap-Portfolio` repo, create `index.html`, `portfolio.html` and `contact.html`.

2. Find a Bootstrap theme that you like (or make your own!). There are plenty of free options available, or you can pay for one if you choose. Here are a few site where you can find themes.
  * [Wrap Bootstrap](https://wrapbootstrap.com/themes/portfolios)
  * [Boots Watch](https://bootswatch.com/)
  * [Start Bootstrap](http://startbootstrap.com/template-categories/portfolios/)
  * [Theme Forest](http://themeforest.net/tags/bootstrap)
  * [Bootstrap Skins](https://www.bootstrapskins.com/)
  * [Blacktie](http://blacktie.co/tag/portfolio/)

3. Install the Bootstrap theme and add your portfolio content.
  * Be sure to leave space for your future projects.

4. Create the `index.php` and `composer.json` inside `Bootstrap-Portfolio`
  * Make sure you have `<?php include_once("yourFileNameHere"); ?>` and `{}` for those files.

5. Deploy your new Bootstrap-powered portfolio to Heroku. Remember:
  * `heroku login`
  * `heroku create`
  * `git push heroku master`

### Submitting Your Work on [BootcampSpot.com](http://bootcampspot.com/)

1. Submit the GitHub links to your portfolio repositories on GitHub.

2. Submit the link to your Heroku sites in the same input field.


### BONUS
* Incorporate CSS animations in your portfolio. [More info here](http://www.w3schools.com/css/css3_animations.asp).

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

## Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
