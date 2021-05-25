# kan project backend server

kan project api server application

<br>

## 1. Configuration

**Set environmental values for server application** <br>
Make .env file in server directory (ex. c:/node/kanProto/server/)

- `.env` : for development server environment

**Set environmental values for frontend(React) application** <br>
Make .env file in server directory (ex. c:/node/kanProto/)

- `.env` : for development server environment

Notice: Property should start with "REACT*APP*". Otherwises, they are ignored in run time. <br>
(ex. REACT_APP_SERVER_URL="http://localhost:8000")

<br>

## 2. DB (Prisma Setting)

**Generate prisma client files to use prisma**

```shell
$ npm run generate
or
$ yarn generate
```

<br>

## 3. Pacakge Installation

**Move to server directory**

```shell
$ cd /node/kanProto/server
```

**Install packages**

```shell
$ npm install
or
$ yarn install
```

<br>

## 4. Run

**Run backend server**

```shell
$ yarn start
or
$ npm start
```

<br>

## 5. Formatting

**Run Eslint(w/Prettier) before commit**

```shell
$ yarn lint
or
$ npm run lint
```

Notice: Run eslint command --fix flag to fix eslint errors automatically.

```shell
    npx eslint src/**/* --ext .ts,.tsx,.js,.jsx --fix
```

<br>
