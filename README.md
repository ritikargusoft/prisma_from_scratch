//Prisma v6.15.0 is not compaitable with latest node v20.19.3 and npm v11.5.2 

//Steps to install prisma with mysql
npm init -y
npm install prisma --save-dev

npx prisma init 
//now this is where a comapitability error will occur 
Failed to install dynamic subcommand via npm.
        This subcommand is dynamically loaded and therefore requires npm to be installed.
        Please install npm and rerun this command.

Underlying Error:
Error: Command failed with exit code 1: npm install @prisma/cli-init@latest --no-save --prefix /tmp/@prisma/cli-init@latest-1756492200000 --userconfig /tmp/@prisma/cli-init@latest-1756492200000 --loglevel error

//To fix it unistall prisma
npm -g uninstall prisma 
npm -g uninstall @prisma/cli-init 

 //Download an older version
npx -p prisma@6.3.0 prisma init

//Now update it with latest version
npm i --save-dev prisma@latest             
npm i @prisma/client@latest 


