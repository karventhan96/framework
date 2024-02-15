// const fs = require('fs');
// const path = require('path');
// console.log('Installing dependencies...');

// // Copy template project files
// const templateDir = path.join(__dirname, 'reactNativeCommonFeatureBoilerplate');
// console.log('templateDir ...',templateDir);

// const projectDir = path.join(__dirname, 'new_project');
// console.log('Installing ...',projectDir);

// fs.mkdirSync(projectDir);
// fs.readdirSync(templateDir).forEach(file => {
//     fs.copyFileSync(path.join(templateDir, file), path.join(projectDir, file));
// });
// // Install dependencies
// console.log('Installing dependencies...');
// const { execSync } = require('child_process');
// execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
// console.log('Dependencies installed successfully.');
const { execSync } = require('child_process');
// const readlineSync = require('readline-sync');
const projectName = process.argv[2]; // Get the project name from command line arguments

if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
}

// Clone template project files using degit with the provided project name
execSync(`npx degit https://github.com/karventhan96/framework.git ${projectName}`, { stdio: 'inherit' });

// Install dependencies
execSync('npm install', { cwd: projectName, stdio: 'inherit' });