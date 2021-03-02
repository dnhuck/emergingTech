const sass = require('node-sass');

module.exports = function(grunt){
    

    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/script.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/styles.css'
            }
        },

        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },

            dist:{
                files: {
                    'css/styles.css': 'sass/style.scss'
                }
            }
        }    

    });

     // load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    // register tasks
    grunt.registerTask('concat-js' ['concat:js'])
    grunt.registerTask('concat-css' ['concat:css'])
    grunt.registerTask('default', ['sass']);


}