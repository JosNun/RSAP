# RSAP

Robotics Scouting and Analytics Program (Probably gonna change the name later)

## Getting Started

Here's how to get the project up and running for development purposes. Deployment instructions will be in their respective section when we get there.

### Prerequisites

- `node.js`

### Installing

Clone the project

```sh
git clone https://github.com/PulseDevelopmentGroup/RSAP.git
```

Install the dependancies

```sh
cd RSAP
npm run install
```

After that, there's a couple of NPM scripts provided you can use for development.

```sh
npm run watch:build # Have webpack watch the source and compile it when changes are  made
npm run watch:server # Have nodemon watch your dist folder for changes (when Webpack builds your files) and restart the node process
```

Typically, you'll want to use both the above when developing
Also, the above commands can be run simultaneously with the following

```sh
npm run start # NOTE: the webpack output AND the nodemon output will be in the same console
```

### Testing

TODO

### Deployment

To build a production package, run

```sh
npm run build
```

The files will be output do the dist directory.

_Do other stuff here_

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
