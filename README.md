# cross-platform-scaffold
A well-tooled scaffold for getting a front-end project started.

## Tooling

- Typescript for application code, strongly typed in strict mode
- Vite for module bundling, building for production, and spinning up local dev environments
- Yarn v3 using Plug-n-Play zero-installs for dependency management
- Eslint for uniform code style
- Jest for unit testing
- MSW for running a mock server to interact with the `fetch` API -- most often used for testing, but can be useful for local development as well
- ky for wrapping the `fetch` API in production, small but reliable dependency with a lot of nice features built in
- Fly.io for deployment
- Github actions for CI/CD
- NGINX as a reverse proxy/load balancer
- Docker/Docker Compose for container orchestration

