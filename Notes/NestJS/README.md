[cil(Command Line Interface)]
npm i -g @nestjs/cli

nest -v

nest new project-name
->npm
->n
->ESM

npm run start:dev

[g for generate]
nest g module AuthModule --no-spec --dry--run
nest g controller AuthController --no-spec --dry--run
nest g service AuthService --no-spec --dry--run
nest g resource Auth --no-spec
->REST API
->n

[Node.js Built-In Features]
npm i --save-dev @types/node

[JSON to DTO(Data Transfer Object) & Validation]
npm i class-validator class-transformer

[For Partical DTO Class]
npm i @nestjs/mapped-types

[File Upload]
npm i @nestjs/platform-express
npm i multer
npm i -D @types/multer

[Postgres TypeORM]
npm i @nestjs/typeorm typeorm pg

[Password Hashing]
npm i bcrypt
npm i -D @types/bcrypt

[JWT Auth]
npm i @nestjs/jwt
npm i @nestjs/passport
npm i passport
npm i passport-jwt
npm i -D @nestjs/passport-jwt

[After Pull]
npm i
