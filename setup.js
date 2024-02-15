const fs = require('fs');
const path = require('path');
console.log('Installing dependencies...');

// Copy template project files
const templateDir = path.join(__dirname, 'reactNativeCommonFeatureBoilerplate');
console.log('templateDir ...',templateDir);

const projectDir = path.join(__dirname, 'new_project');
console.log('Installing ...',projectDir);

fs.mkdirSync(projectDir);
fs.readdirSync(templateDir).forEach(file => {
    fs.copyFileSync(path.join(templateDir, file), path.join(projectDir, file));
});
// Install dependencies
console.log('Installing dependencies...');
const { execSync } = require('child_process');
execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
console.log('Dependencies installed successfully.');