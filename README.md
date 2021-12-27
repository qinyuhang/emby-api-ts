# Emby Api TypeScript
TypeScript implementation of Emby's api.

This project is forked from [ecavard/emby-api-ts](https://gitlab.com/ecavard/emby-api-ts/)

I found the repo is not maintained for over 1 year

And I have no method to contact the original author so I fork this project and use github action
to develop this project.

# How to use
```shell
npm install @qinyuhang/emby-api-ts
```

```typescript
import EmbyConnector from '@qinyuhang/emby-api-ts'
const yourEmbyHost = 'http://localhost:8096'
const emby = new EmbyConnect(yourEmbyHost)
const username = 'abc'
const password = 'password'
emby.authenticateByName(username, password)

// a demo you can replace it with any endpoint
// NOTE this is a first stage
// We will create apis from openapi.json file
// download from the provided host
emby.embyAPI.request({
  url: '/openapi.json'
}).then(console.log)
```

# Development Plan
- [] Use provide host's openapi to regenerate embyAPI