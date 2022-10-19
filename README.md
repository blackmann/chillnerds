# chill nerds

Having fun with random colleagues and keep the [remote] workplace chill.

## Design

This is a monorepo containing the extension app written in React ⚛️ and the backend written in Golang.

Communication is done _directly_ between peers using WebRTC. The server however just cordinates the creation of _ice_ 🧊 [not WebRTC ICES] and updating of ICEs [this time WebRTC].

Chats are not saved at the backend and get lost when browser closes.

## Build extension

To build the extension, run

```sh
cd app
yarn pkg-ext
```

This will build and copy the files over to the popup directory of the extension

## Run server

```sh
cd server
go run .
```