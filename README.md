Jasmine Feed Reader Testing
===============================

## FEND Project 4 - Overview

This project showcases the ability to test code through Behavior Driven Development(BDD) testing using Jasmine 2.1.2. BDD testing is based on the desired behavior of a feature rather than the code implementation of it. The tests are designed to read more like a sentence, thus allowing the programmer to better design the software instead of simply test the code which Test-Driven Development is more associated with.

## What I was given
I was supplied with a basic news feed website and I had to test whether it was working the way it was intended. I added an additional test to spy on the loadFeed function on the window object.

## Installation

Simply clone repo and run the index.html file in your browser. See whether the application passes the spec tests at the bottom of the page.

![test results](Feed-Reader-Testing/image/test-screenshot.png)

## Tests Ran
* RSS feeds are defined
* RSS feeds have a name
* RSS feeds have a URL
* Navigation menu is hidden
* Navigation menu displays when clicked
* The RSS feed load function is called
* Loadfeed has at least one article entry
* When a different feed is selected, the RSS feed changes