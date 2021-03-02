module.export = function(grunt){

    // config
    grunt.initConfig({
        // pass in options to plugins, references to files
    });

    // load plugins
    //grunt.loadNpmTasks('');

    // register tasks
    grunt.registerTask("run", function(){
        console.log('running');
    });

    grunt.registerTask('sleep', function(){
        console.log('sleeping');
    });
    
}