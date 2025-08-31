# Prisma + MySQL Setup Guide :rocket:
## *Quickstart for Node.js Projects*
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-orange?logo=mysql)](https://www.mysql.com/)
This guide helps you set up **Prisma ORM with MySQL** in a Node.js project.
:warning: Note: Prisma v6.15.0 is not compatible with **Node v20.19.3** and **npm v11.5.2**.
---
## Features :sparkles:
* Full step-by-step Prisma + MySQL setup
* Fix for **Prisma + Node compatibility error**
* Migration commands with rollback & reset
* Clean, ready-to-use commands for your next project
---
## Installation :zap:
### 1. Initialize project
```sh
npm init -y
npm install prisma --save-dev
```
### 2. Initialize Prisma
```sh
npx prisma init
```
:x: If you see this error:
```
Failed to install dynamic subcommand via npm...
```
It means the current Prisma version is incompatible.
---
## Fixing Compatibility :wrench:
### Step 1: Uninstall broken Prisma setup
```sh
npm -g uninstall prisma
npm -g uninstall @prisma/cli-init
```
### Step 2: Install an older compatible version
```sh
npx -p prisma@6.3.0 prisma init
```
### Step 3: Update to latest Prisma + Client
```sh
npm i --save-dev prisma@latest
npm i @prisma/client@latest
```
---
## Database Migrations :file_cabinet:
### Create a migration
```sh
npx prisma migrate dev --name init
```
### Reset migrations (if needed)
```sh
npx prisma migrate reset
npx prisma migrate dev --name init
```
---
## Tech Stack :gear:
* [Node.js](https://nodejs.org/) – JavaScript runtime
* [Prisma ORM](https://www.prisma.io/) – Type-safe database client
* [MySQL](https://www.mysql.com/) – Relational database
---
## Troubleshooting :hammer_and_wrench:
* If Prisma CLI fails, try clearing npm cache:
  ```sh
  npm cache clean --force
  ```
* Ensure Node.js and npm are up-to-date but check [Prisma release notes](https://github.com/prisma/prisma/releases) for version compatibility.
---
## License :scroll:
MIT
**Happy Coding! :computer::fire:**
---
