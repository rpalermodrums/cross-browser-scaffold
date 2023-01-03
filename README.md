# cross-platform-scaffold
A well-tooled scaffold for getting a front-end project started.

## Tooling

- [Typescript](https://www.typescriptlang.org/) for application source code (strongly typed in strict mode)
- [Vite](https://vitejs.dev/) for fast module bundling, building for production, and spinning up local dev environments
- [Yarn v3](m/getting-started/qa#why-should-you-upgrade-to-yarn-modern) using Plug-n-Play zero-installs for dependency management with a huge performance boost
- [Eslint](https://eslint.org/) and [prettier](https://prettier.io/) (optional) for uniform code style
- [Jest](https://jestjs.io/)/[testing-library](https://testing-library.com/) for unit testing
- [Mock Service Worker (MSW)](https://mswjs.io/) for running a mock server to interact with the `fetch` API -- most often used for testing, but can be useful for local development as well
- [ky](https://github.com/sindresorhus/ky) for wrapping the `fetch` API in production, small but reliable dependency with a lot of nice features built in
- [Fly.io](https://fly.io/) for deployment
- [Github actions](https://github.com/features/actions) for CI/CD
- [NGINX](https://www.nginx.com/) as a reverse proxy/load balancer
- [Docker](https://www.docker.com/)/[Docker Compose](https://docs.docker.com/compose/) for container orchestration
- [Gitpod](https://www.gitpod.io/) for sharable remote dev environments
- [React-native-web](https://necolas.github.io/react-native-web/) for cross-platform applications (if need be)
- [React-hook-form](https://react-hook-form.com/) for easily creating controlled forms in RNW
- [zod](https://github.com/colinhacks/zod) for easy, strongly typed form validation
- [react-native-paper](https://callstack.github.io/react-native-paper/) as a UI library for cross-platform material design
