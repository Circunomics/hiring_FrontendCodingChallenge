# Frontend Coding Challenge

## Idea of the App 
The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. 
You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below). 

## Features
* As a User I should be able to list the most starred Github repos that were created in the last 30 days. 
* As a User I should see the results as a list. One repository per row. 
* As a User I should be able to see for each repo/row the following details :
  * Repository name
  * Repository description 
  * Number of stars for the repo. 
  * Number of issues for the repo.
  * Username and avatar of the owner. 
* As a User I should be able to keep scrolling and new results should appear (pagination).

Extra points:

* As a User I should be able to click on the name of the repo to open a modal window the datails requested above
* As a User I should be able only on the modal window to rate the repo using a stars model (5 stars rating mode)
* As a User I should be able to close the modal window and see the given rating on the right side of the repo name

## Things to keep in mind

Please understand that this challenge is not decisive if you are applying to work at Circunomics. This is just an opportunity for us both to work together and get to know each other in a more technical way.

* Features are as important as code quality. Try to balance between code quality and number of features implemented
* Your code will be evaluated in this order based on: code structure, programming best practices, legibility and number of features implemented or speed
* The git commit history (and git commit messages) will be also evaluated
* Please run tests and provide the results of the first and last run
* Do not forget to include few details about the project in the PROJECT.md (e.g explain choice of libraries, how to run it ...) 

## How to get the data from Github 
To get the most starred Github repos created in the last 30 days (relative to 2021-Feb-[Start_Date]), you'll need to call the following endpoint : 

`https://api.github.com/search/repositories?q=created:>[Start_Date]&sort=stars&order=desc`

The JSON data from Github will be paginated (you'll receive around 100 repos per JSON page). 

To get the 2nd page, you add `&page=2` to the end of your API request : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2`

To get the 3rd page, you add `&page=3` ... etc

You can read more about the Github API over [here](https://docs.github.com/en/rest/reference/search#search-repositories).

## Mockups
![alt text]([https://bitbucket.org/cesar_prados/frontendcodingchallenge/raw/c051c14f98b7ad71921709a54a8035f87e3d9860/mockup.png](https://github.com/Circunomics/hiring_FrontendCodingChallenge/blob/master/mockup.png?raw=true))

Here's what each element represents :

![alt text]([https://bitbucket.org/cesar_prados/frontendcodingchallenge/raw/c051c14f98b7ad71921709a54a8035f87e3d9860/row_explained.png](https://github.com/Circunomics/hiring_FrontendCodingChallenge/blob/master/row_explained.png?raw=true)

## Technologies to use 
* Angular

## How to submit the challenge solution? 
Now after you finished your app and we assume that you already pushed it to your repo account, if so please follow the instructions below:

1. Set the Repo privacy:
   - If the repo is sensitive and you're not comfortable sharing it publicly please tell us where you are going to push the code and we will provide you with an user that you can give access to.
   - If it's public go to the next step
2. Send the repo's link to this email: `jobs@circunomics.com`.
