To run this project you need to install Docker on your PC, just follow the link below and choose a version for your platform:

https://docs.docker.com/engine/install/

After installing Docker you need to have 2 docker containers, 
the first one for an API service (provided by WebbyLab) and the second one for Frontend part(that`s mine).
You can pull those containers with next scripts (just open the command line and run the code below):

docker pull webbylabhub/movies
docker pull bronislavfgb/films-collection-v1.0

After finishing the download run the next code:

docker run --name movies -p 8000:8000 webbylabhub/movies

Open one more command line and type next:

docker run -p 3000:3000 -e REACT_APP_API_URL=http://localhost:8000/api/v1 bronislavfgb/films-collection-v1.0

After finishing, open your browser and type next URL in search: 

http://localhost:3000

Done! The site you were looking for is right in front of you! Hope you gonna enjoy it:)
