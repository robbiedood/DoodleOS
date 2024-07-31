## 🌌 **GroveOS** 🌌

# Try It 🚀

##### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/)

##### Development

```
yarn install
yarn build:prebuild
yarn dev
```

##### Production

```
yarn install
yarn build
yarn serve
```

##### Docker

```
docker build -t daedalos .
docker run -dp 3000:3000 --rm --name daedalos daedalos
```

##### Notes

- If during `yarn install` you receive the error `digital envelope routines::unsupported`, you need to set `NODE_OPTIONS` to `--openssl-legacy-provider` ([1](https://github.com/DustinBrett/daedalOS/blob/main/Dockerfile#L3), [2](https://github.com/DustinBrett/daedalOS/blob/main/.github/workflows/main.yml#L17), [3](https://stackoverflow.com/a/69699772/5895982))
