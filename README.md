# MeetApp :rocket:

MeetApp is an event aggregator for developers.


# Getting started

Download this project and run:
```console
yarn start
```

## System prerequisites

In order to run this project you will need to have the following software installed:
- NodeJS v10+
- PostgreeSQL (I recommend you use Docker for this one)
- Yarn (optional)

## Starting

1. Installing all dependencies:
```console
yarn install
```

2. If you are using docker with postgree here is an example of how to run it:

> Docker should be initiazed before following the instructions

Fisrt you need to see if there is a service already running:
```console
docker ps
$ CONTAINER ID  IMAGE COMMAND CREATED STATUS  PORTS NAMES
```
If terminal printed the same as above then we have to start a new postgreeSQL instance

*run:*
```console
docker start <container-hash>
$ <container-hash>
```

## Deployment

:construction: Coming soon :construction:

## Built with

:construction: Coming soon :construction:

## Authors

- **Lucas Rosa** - *Original creator* - [Github](https://github.com/LucasE2996) / [Twitter](https://twitter.com/lucashtwt)

## Licence
This project is licensed under the MIT License

## Acknowledgments

- This is my final project of the [Rocketseat bootcamp](https://rocketseat.com.br/bootcamp).
