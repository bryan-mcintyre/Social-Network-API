# Social-Network-API

## Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Future Development](#future-development)
-[Issues](#issues)
-[Credits](#credits)

## Description
This is the server and API backend for a social media startup. This release includes GET, POST, PUT, and DELETE routes for a User model and a Thought model. Users can create a profile by providing a username and email. Once they are registered they will be able to write thoughts that will be attached to their profile.

## Installation
To install the codebase on your local machine, download it from (https://github.com/bryan-mcintyre/Social-Network-API). Once downloaded open the package.json file in the terminal and run 'npm install'. Once the necessary npm packages are intalled run 'npm start' to create the database and start the server.

## Usage
Once installation is complete open Insomnia Core to test that it is working properly. Open a GET route to 'http://localhost:3001/api/users/' to return a list of all users in the database. If there are no users, open a POST route to the same address and create a JSON body containing a username and email to create a user. For further usage and testing instructions follow this brief video walkthrough: https://drive.google.com/file/d/1VfE56NbFfsh5xBlmg4hZJvh0lQqIl0sy/view?usp=drive_link

## Future Development
In the future users will be able to add other users to a friends list. Users will also be able to add reactions to their friends thoughts.

## Issues
Not all routes are working as intended as seen in the video. Unfortunately I didn't have time to properly debug and fix these issues. I also wasn't able to get the friends list and reactions working either.

## Credits
Course curriculum