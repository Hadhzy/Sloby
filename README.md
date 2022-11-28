# Sloby 🦥

The **next level** online editor the allows people to build their own websites without **no problem** .
$${\color{red}How \space \color{lightblue}Does \space \color{orange}sloby \space \color{lightblue}  works? }$$

_Parts of the sloby:_

> The `Editor`(itself)

> The `sloby-python-framework`

> The `parsers(python, react)`

## Setup.

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
> `python -m venv venv` > `. venv/bin/activate` for linux
> `.\venv\Scripts\activate` for windows powershell.

#### Install FastAPI:

**https://fastapi.tiangolo.com/tutorial/**

```
pip install fastapi
```

#### Run:

_To serve the python websocket, use_

> If you working with python package\*

```powershell
cd app/

uvicorn main:app --reload
```

## Authors and Contributors 🤼

- Add people here (Contributor/Author) ~ Contribution to the project
