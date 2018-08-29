# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

Server
	API server for database system only return specific information to client side from the request.

Folder structure

	- python
		Leave python script here
	- uploads
		File uploaded from the client side are stored here
	- src
		/api
	post api/auth				-	Authenticate
	post api/signout			-	Signout
	get api/python			-	Runing python test script
	get api/resource/locuslist 		-	List of Locus
	get api/resource/locuslist/amout	-	amount of each Locus in DB
	get api/resource/locusinfo/:locus	-	information for locus statistic
	get api/resource/hetero		-	Heterozygocity		
	post api/search/manual		-	(Exact Match) Haplotype matching
		/config
	Config/constant set DBconfig on to connect to your own DB
		/public
	Folder for file to be download to client
		/service
		/test
 
Client Side

	- src	
		/Components
			-	Component without state
		/Containers
			-	Component with state
		/Constants
			-	Leave all constant here

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

1.	Clone the repository Server + Client
2.	Dump DB from file “DumpDB_17_11_2017.sql”
3.	Config the mysql to your DB just like 
4.	Run node server npm start
5.	Run Client yarn start

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
