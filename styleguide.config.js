const path = require('path');

module.exports = {
	title: 'Test Vue App (Authors-Books)',
  require: [
    path.join(__dirname, './src/common.css'),
    path.join(__dirname, './src/config.js')
  ],
	components: 'src/components/**/[A-Z]*.vue',
	defaultExample: false
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// }
};
