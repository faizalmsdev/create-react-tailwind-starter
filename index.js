#!/usr/bin/env node

const { Command } = require('commander');
const execa = require('execa');
const chalk = require('chalk');
const fs = require('fs').promises;
const path = require('path');

const program = new Command();

program
  .version('1.0.0')
  .description('CLI tool to set up a React project with Tailwind CSS')
  .argument('<project-name>', 'name of the project')
  .action(async (projectName) => {
    try {
      console.log(chalk.blue('Creating a new React project...'));
      await execa.command(`npx create-react-app ${projectName}`, { stdio: 'inherit' });

      console.log(chalk.blue('Navigating to project directory...'));
      process.chdir(projectName);

      console.log(chalk.blue('Installing Tailwind CSS...'));
      await execa.command('npm install tailwindcss postcss autoprefixer', { stdio: 'inherit' });
      await execa.command('npx tailwindcss init -p', { stdio: 'inherit' });

      console.log(chalk.blue('Setting up Tailwind CSS configuration...'));

      const tailwindConfigContent = `
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
      `;

      const postcssConfigContent = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
      `;

      await fs.writeFile('tailwind.config.js', tailwindConfigContent.trim());
      await fs.writeFile('postcss.config.js', postcssConfigContent.trim());

      console.log(chalk.blue('Adding Tailwind directives to CSS...'));

      const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;
      `;

      await fs.writeFile('src/index.css', cssContent.trim());

      console.log(chalk.blue('Removing unnecessary files...'));

      const filesToDelete = [
        '/App.test.js',
        '/logo.svg',
        '/reportWebVitals.js',
        '/setupTests.js'
      ];

      for (const file of filesToDelete) {
        const filePath = path.join('src', file);
        try {
          await fs.unlink(filePath);
          console.log(chalk.green(`Deleted ${filePath}`));
        } catch (err) {
          if (err.code !== 'ENOENT') {
            throw err;
          } else {
            console.log(chalk.yellow(`File ${filePath} does not exist, skipping...`));
          }
        }
      }

      console.log(chalk.blue('Updating App.js, index.js, and creating App.css...'));

      const appJsContent = `
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold  text-sky-600">Start building your project with the power of React + Tailwind</h1>
    </div>
  );
}

export default App;
      `;

      const indexJsContent = `
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
      `;

      const appCssContent = `
/* Add your custom styles here */
.App {
  @apply bg-gray-100 h-screen flex items-center justify-center;
}
      `;

      await fs.writeFile('src/App.js', appJsContent.trim());
      await fs.writeFile('src/index.js', indexJsContent.trim());
      await fs.writeFile('src/App.css', appCssContent.trim());

      console.log(chalk.green('React project with Tailwind CSS set up successfully!'));
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
    }
  });

program.parse(process.argv);
