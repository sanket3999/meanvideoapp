MEAN Video Application

Exploring Mean Stack Application:

Setting up Environment:

Install Ruby https://rubyinstaller.org/downloads/ rubyinstaller-2.3.1.exe
Install NodeJS https://nodejs.org/en/download/ node-v4.4.3-x86.msi
Install Wamp for MySQL or MongoDB For MySQL – download wamp server from the following url http://www.wampserver.com/en/#download-wrapper For Mongodb – download from the following url https://www.mongodb.com/download-center#community
Install Grunt CLI npm install -g grunt-cli

Install Bower npm install -g bower

Run Mongodb Mongod Or Run wampstart.exe for mysql
Server Application Setup

mkdir meanapp mkdir server npm init

Example of npm init is as below – make sure to provide server name as have given meanapp in my case. serverdir#npm init This utility will walk you through creating a package.json file. It only covers the most common items, and tries to guess sensible defaults.

See npm help json for definitive documentation on these fields and exactly what they do.

Use npm install <pkg> --save afterwards to install a package and save it as a dependency in the package.json file.

Press ^C at any time to quit. name: (server) MeanApp Sorry, name can no longer contain capital letters. name: (server) version: (1.0.0) description: entry point: (index.js) test command: git repository: keywords: author: license: (ISC)

Installing Required Node packages using node package manager (npm)

npm install --save express

npm install --save mongoose

npm install --save mysql

npm install --save node-restful

npm install --save method-override

npm install --save body-parser

npm install --save loadash