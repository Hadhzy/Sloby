<h2 align="center"><b>SlobyBuilder</b>: ✨The reformed way of webdevelopment ✨</h2>
<p align="center"><i>Built by the FlurryGlo Developer Team (organization)</i></p>
<p align="center"> <a href="https://github.com/FlurryGlo/Sloby/blob/main/Contributing.md">Contribute for the Sloby</a></p>
<p align="center"> 
  <a href="github.com/FlurryGlo"> FlurryGlo Organization </a>
</p>

 <p align="center"><a href="github.com/FlurryGlo/slobypy">Related slobypy python framework</a></p>
 
 ## 📝 Table of Contents
- [📝 Table of Contents](#-table-of-contents)
- [👋 Run our project](#run-project)
- [📁 Our Folder structure](#folder)


## 👋 Run our project <a name = "run-project"></a>
You can start our project and run it locally, just to see where are we at. You can clone the project and you can run the dev branch, like this: 
```
npm start
```
Currently we use json-server as our data, because we're refacrtoring our backend to *Nest JS* and we use json-server as a temporary solution:
```
json-server --watch db.json --port 3001
```
However if you just wanna see the website and not the code itself then you can reach out to this link: `link goes here`
</br>
</br>
***Note***: Make sure to run `npm install`before running the project, and make sure that *Node* is installed as well

## 📁 Our folder structure <a></a>


## Setup
### Docker Installation 📦

Install docker for your operating system: https://docs.docker.com/get-docker/
- #### Linux/Ubuntu
```
sudo snap install docker
sudo docker-compose up
```
- #### Windows
https://docs.docker.com/desktop/install/windows-install/
### PostgreSQL
> Download and setup
- #### https://www.postgresql.org/download/
- #### https://www.youtube.com/watch?v=0sOvCWFmrtA&t=8934s

> `Don't forget`
> Add it to the `path` environment variable: **https://www.youtube.com/watch?v=D3YzLLo34ZU**
## Node
### Node Linux Setup

```
$snap install node --classic
$node --version
v16.16.0
$sudo "curl -qL https://www.npmjs.com/install.sh > install.sh"
$npm --version
8.15.0
```
### Node Windows setup
```
https://nodejs.org/en/download/
node -v
v14.18.1
```
### Install project Dependencies
```
cd site
npm install
```
> It is going to install the package-lock.json
```
# serve the webpage with:
cd site
npm start
```
## Python(FastAPI)

> Create a virtual environment.
> `python -m venv venv`
> `. venv/bin/activate` for linux
> `.\venv\Scripts\activate` for windows powershell.

#### Install FastAPI:
**https://fastapi.tiangolo.com/tutorial/**
```
pip install fastapi
```
#### Run:
*To serve the python websocket, use*
> If you working with python package*

```powershell
cd app/

uvicorn main:app --reload
```

## Authors and Contributors 🤼

- Add people here (Contributor/Author) ~ Contribution to the project
