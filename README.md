# testFrontEnd
 latest github comments (https://developer.github.com/v3/search/#search-topics) based on my search data.  If I click on an element I want to see the full description

# Install
 	yarn install

# Note
	If exist any proble delete path testFrontEnd\android\app\build
 
# Run project
 	react-native run-android
 
 # Structure
 ![alt text](https://github.com/emmanuelcampos/testFrontEnd/blob/master/image/3.png)
 
 # Description: The structure of the project is composed from the folder "src" inside this folder we have two folders "config", "App"

	-> assest: static files
	-> component: contains the components without store  
	->commons: reusable components (text, button)
	-> All components carry your folder
	-> containers: compoenetes with connection to the separate store in folders
	-> navigation: all screens to navigate
	-> redux: all files related to middlewars and global status
	-> actions: actions to reduce
	-> constants: all the constants of redux
	-> reducers: all reducers with homologated with [name] Reducer and an index that includes all
	-> sagas: all the sagas approved with [name] Saga and an index that includes all the sagas
	-> services: servivios for external calls (api, sockets etc)
	-> utils: Utilities to be used within the application
 
# Execute project	
![alt text](https://github.com/emmanuelcampos/testFrontEnd/blob/master/image/4.png)

#Login whit user and password to github

![alt text](https://github.com/emmanuelcampos/testFrontEnd/blob/master/image/5.png)

#Boton close session and search topics

![alt text](https://github.com/emmanuelcampos/testFrontEnd/blob/master/image/6.png)

#Search topic in text search

![alt text](https://github.com/emmanuelcampos/testFrontEnd/blob/master/image/7.png)

#Infinite scroll scrolling down
 
 	


