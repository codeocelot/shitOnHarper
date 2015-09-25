module.exports = function(grunt) {
	grunt.initConfig({
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'expanded'
				},
				files: {                         // Dictionary of files
					'public/stylesheets/css/main.css': 'public/stylesheets/scss/main.scss',       // 'destination': 'source'
					// 'widgets.css': 'widgets.scss'
				}
			}
		},
		watch:{
			exp:{
				// files: ['**/*.js'],
				files: ['app.js','secrets/**/*.js','routes/**/*.js'],
				//tasks: ['./bin/www'],
				options:{
					spawn:false
				}
			},
			style:{
				files:['public/stylesheets/scss/**/*.scss'],
				tasks:['sass'],
				
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass','watch']);
}
