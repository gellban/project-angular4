# project-angular4
The source code of the project web applications containing view and controller. You need to use another project to run the code. The another project name is project-nodes

#git commands
Quick setup — if you’ve done this kind of thing before
 Set up in Desktop	or
 HTTPS
 SSH

We recommend every repository include a README, LICENSE, and .gitignore.
…or create a new repository on the command line

echo "# project-angular4" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/...
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/...
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

Import code
<<<<<<< HEAD




=============================================
Steps for creating new angular 4/5 project called projects
ng new projects
cd projects
ng g component components/project
ng g component components/about

ng serve
http://localhost:4200/

#copy the following files from my project in GitHub which includes my changes:
app.module.ts
app.component.css
app.component.html

about.component.html

project.component.html
project.component.ts



#open a new terminal and run mongodb. if you do not have mongodb you need to install it
cd /Applications/mongodb/bin/
./mongod
#open another terminal and run mongo db command line to create a new database and collection, as well as inserting 3 records of test data
cd /Applications/mongodb/bin/
./mongo
use projectdb
db.projects.deleteMany({});
db.createCollection('projects');
db.projects.insert({id:1,n ame:"Test Name",code:"TN",start_date:"11/05/2017",end_date:"06/01/2018",owner:"HR Department",description:"This project is helpful for the HR department to evaluate the employees' satisfactions"})
db.projects.insert({id:2, name:"Test Name2",code:"TN2",start_date:"11/05/2017",end_date:"06/01/2018",owner:"HR Department2",description:"This project is helpful for the HR department to evaluate the employees' satisfactions"})
db.projects.insert({id:3, name:"Test Name3",code:"TN3",start_date:"11/05/2017",end_date:"06/01/2018",owner:"HR Department3",description:"This project is helpful for the HR department to evaluate the employees' satisfactions"})
db.projects.find();
==============================================
steps for creating a new Node.js project. if you do not have Node.js then you need to install it:
cd ..
mkdir projectprofile
cd projectprofile
npm init
npm install g express --save
npm install g mongojs --save
npm install g body-parser --save


===========
#build angular project and move the dist folder of build view and controllers to view folder in nodejs project profile
mkdir view
cd ..
cd projects
ng build -prod
mv dist/*.* to ../projectprofile/view
======================
#copy index.js from projectprofile of my GitHub which included the code of Node.js and express and mongojs to handle RESTful or http requests for adding fetching updating and deleting records from mongofb:
index.js
====================
open github desktop to push (upload) the files to this hub
fill summary data
press commit button
repository>push
