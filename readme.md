# Create React Tailwind Starter

![Create React Tailwind Starter](https://img.shields.io/npm/v/create-react-tailwind-starter.svg)
![License](https://img.shields.io/npm/l/create-react-tailwind-starter.svg)
![Downloads](https://img.shields.io/npm/dt/create-react-tailwind-starter.svg)

Create React Tailwind Starter is a CLI tool that sets up a new React project with Tailwind CSS configuration. This tool streamlines the process of creating a React app integrated with Tailwind CSS, saving you time and effort.

## Features

- Quickly create a new React project.
- Automatically set up Tailwind CSS.
- Removes unnecessary files from the default Create React App setup.
- Provides a basic file structure with Tailwind CSS ready to use.

## Installation

You can install the CLI tool globally or use it directly with `npx`.

### Global Installation

1. **Install the CLI tool globally:**

   ```bash
   npm install -g create-react-tailwind-starter

2. **Create a new project:**

   ```bash
    create-react-tailwind-starter my-new-project

### Instant Use with npx

1. **Create a new project instantly:**

   ```bash
    npx create-react-tailwind-starter my-new-project

Replace my-new-project with the name of your new project.

### Usage

After running the CLI tool, you will have a new React project set up with Tailwind CSS. Navigate to your project directory and start the development server:

        cd my-new-project
        npm start

### Project Structure

After running the CLI tool, your project structure will look like this:

    my-new-project/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    ├── .gitignore
    ├── package.json
    ├── tailwind.config.js
    └── postcss.config.js

### Customization
You can customize the Tailwind CSS configuration by editing the tailwind.config.js file. Add your custom styles in the src/App.css file.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

### License
This project is licensed under the ISC License. See the LICENSE file for more details.

### Author
Created by faizalmsdev