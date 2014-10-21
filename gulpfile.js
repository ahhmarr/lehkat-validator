var gulp=require("gulp")
	,uglify= require("gulp-uglify")	,rename=require("gulp-rename");
gulp.task("scripts",function(){
	gulp.src("lib/*.js")
		.pipe(uglify())
		.pipe(rename({suffix:".min"}))
		.pipe(gulp.dest("lib/min/"));
		
});
