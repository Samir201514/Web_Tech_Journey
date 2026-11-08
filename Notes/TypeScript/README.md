# TypeScript Setup & Execution Guide

A quick guide to installing TypeScript, configuring the compiler, compiling TypeScript files, and executing the generated JavaScript code using Node.js.

## 1. Install TypeScript

Install TypeScript globally using npm:

```bash
npm install -g typescript
```

Verify the installation:

```bash
tsc -v
```

**Note:** `tsc` stands for TypeScript Compiler.

## 2. Initialize TypeScript Configuration

Generate the `tsconfig.json` configuration file:

```bash
tsc --init
```

This file contains compiler options that control how TypeScript code is compiled into JavaScript.

### Important Compiler Options

Configure the following options in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "es6",
    "target": "es6"
  }
}
```

- `rootDir`: Specifies the source code directory.
- `outDir`: Specifies where compiled JavaScript files will be generated.
- `target`: Specifies the JavaScript version to compile into.
- `module`: Specifies the module system.

## 3. Compile TypeScript Code

Compile all TypeScript files according to `tsconfig.json`:

```bash
tsc
```

Enable Watch Mode to automatically recompile files whenever changes are detected:

```bash
tsc --watch
```

Alternative shorthand:

```bash
tsc -w
```

## 4. Execute Compiled JavaScript

After compilation, execute the generated JavaScript file using Node.js:

```bash
node ./dist/index.js
```

**Note:** Node.js executes JavaScript files, not TypeScript source files in this workflow.

## 5. Project Structure

A typical TypeScript project structure:

```text
TypeScript/
│
├── src/
│   ├── index.ts
│   ├── Person.ts
│   └── Student.ts
│
├── dist/
│   ├── index.js
│   ├── Person.js
│   └── Student.js
│
├── .gitignore
│
├── README.md
│
└── tsconfig.json
```

- `src/`: Contains TypeScript source files.
- `dist/`: Contains compiled JavaScript files.
- `tsconfig.json`: Contains TypeScript compiler configuration.

## 6. Complete Workflow

| Step | Command                     | Purpose                     |
| ---- | --------------------------- | --------------------------- |
| 1    | `npm install -g typescript` | Install TypeScript          |
| 2    | `tsc -v`                    | Check TypeScript version    |
| 3    | `tsc --init`                | Generate configuration      |
| 4    | `tsc`                       | Compile TypeScript          |
| 5    | `tsc --watch`               | Automatically recompile     |
| 6    | `node ./dist/index.js`      | Execute compiled JavaScript |

---

**Development Workflow:**

```text
TypeScript (.ts)
      |
      v
TypeScript Compiler (tsc)
      |
      v
JavaScript (.js)
      |
      v
Node.js
      |
      v
Program Output
```

**Happy Coding!**
