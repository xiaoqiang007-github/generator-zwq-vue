const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]).then(answer => {
      this.answers = answer;
    })
  }
  writing() {
    // 批量生成每一个文件
    const templates = [
      'babel.config.js',
      'package.json',
      'public/favicon.ico',
      'public/index.html',
      'src/assets/common/utils.js',
      'src/assets/logo.png',
      'src/assets/components/hellow.vue',
      'src/assets/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.vue'
    ];
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}