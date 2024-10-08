# Password Manager Dashboard

Just deploy your own password manager. Just trust yourself. Very simple server for basic password manager. Open for contribute. Your a back end dev? You can check and contribute to [password manager server](https://github.com/amusement-lab/password-manager-server).

Some excellent features:

- Open API implementation (doc and ui)
- Implements many basic cryptographic concepts
- Applying the Zero Knowledge principle
- Use Typescript

## Run This Project

1. Install package

```js
pnpm install
```

2. Setup your `.env`.

```bash
cp .env.example .env
```

```js
VITE_API_BASE_URL = "http://localhost:3000"; // Use port from your server host
```

3. Run the project

```sh
pnpm dev
```

4. You can access the project at

```sh
http://localhost:5173
```

## NodeJS and Server Version Environment

- Typescript = v5.4.5
- NodeJS = v20.11.1
- PNPM = v8.15.6
- Server = [v1.2.6](https://github.com/amusement-lab/password-manager-server)

### Some further developments, if you want to contribute, here the top priority

- For now, you can only save the password, but later you can save bank cards, notes, addresses and documents
