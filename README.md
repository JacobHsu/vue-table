# vuejs

[Grid Component Example](https://cn.vuejs.org/v2/examples/grid-component.html)  

# data

bin> `python data.py`  output `data.json`  

https://jsoneditoronline.org/  

# Bootstrap

[getbootstrap](https://getbootstrap.com/)  

# axios

[axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js

# gulp  

[gulp.js](https://gulpjs.com)  Automate and enhance your workflow  
[gulp-webserver](https://www.npmjs.com/package/gulp-webserver)  

`npm init`  
`npm install gulp gulp-webserver -save-dev`  
`npm install gulp-uglify gulp-rename -save-dev` 
`npm install gulp-inline -save-dev`  

gulpfile.js

`$ gulp`  

# gh-pages  

`$ git subtree push --prefix app origin gh-pages`   

`git push origin :gh-pages` 刪除遠端分支  

`$ git subtree push --prefix dist origin gh-pages`    
https://jacobhsu.github.io/vue-table


$ npm init -y  
$ npm install gh-pages --save-dev  

package.json
```js
  "scripts": {
	...
    "deploy": "gh-pages -d dist"
  },
```
$ npm run deploy  