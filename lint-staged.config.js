module.exports = {
  '**/*.ts?(x)': () => 'yarn type-check', // Run type-check on changes to TypeScript files
  '**/*.(scss|css)': (filenames) => `npm run lint:css ${filenames.join(' ')}`, // Run Stylelint on changes to SCSS/CSS files
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint:js ${filenames.join(' ')}`, // Run ESLint on changes to JavaScript/TypeScript files
}
