//引入
let gulp = require('gulp');
//服务
let server = require('gulp-webserver');
const fs = require("fs");
const path = require("path");
const url = require("url");
//mock
let data = require('./src/data/data.json');
console.log(data);

gulp.task('webserver', () => {
    return gulp.src('./src')
        .pipe(server({
            port: 3696,
            open: true,
            livereload: true,
            middleware(req, res, next) {
                var pathname = url.parse(req.url, true).pathname;
                console.log(pathname)
                if (pathname === "/favicon.ico") {
                    return res.end();
                }
                if (pathname === "/list") {
                    res.end(JSON.stringify(data))
                } else {
                    pathname = pathname === "/" ? "index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                }

            }
        }));
});