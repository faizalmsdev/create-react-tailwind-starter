
const chalk = require('chalk');
const packageJson = require('./package.json');
const checkForUpdate = require('update-check');

async function checkVersion() {
  try {
    const update = await checkForUpdate(packageJson);

    if (update) {
      console.log(chalk.yellow(`A new version of ${packageJson.name} is available!`));
      console.log(`Current version: ${packageJson.version}`);
      console.log(`Latest version: ${update.latest}`);
      console.log(`To update, run: ${chalk.green(`npm install -g ${packageJson.name}@latest`)}`);
    } else {
      console.log(chalk.green(`${packageJson.name} is up to date.`));
    }
  } catch (err) {
    console.error(chalk.red(`Failed to check for updates: ${err}`));
  }
}

checkVersion();
