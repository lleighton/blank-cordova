module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        exec: {
            'ios-device': {
                command: "cordova run ios --device",
                stdout: false,
                stderror: false
            },
            'ios-emulator': {
                command: "cordova run ios --emulator",
                stdout: true,
                stderror: true
            },
            'android-device': {
                command: "cordova run android --device",
                stdout: false,
                stderror: false
            },
            'android-emulator': {
                command: "cordova run android --emulator",
                stdout: true,
                stderror: true
            }
        },
        clean: {
            build: {
                src: ['www']
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.html'],
                    dest: 'www/'
                },{
                    expand: true,
                    cwd: 'bower_components/onsenui/build/css',
                    src: ['**/*'],
                    dest: 'www/css/onsenui/'
                }],
            }
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false,
                beautify:true
            },
            libs: {
                files: {
                    'www/js/libs.js': ['bower_components/jquery/jquery.js','bower_components/onsenui/build/js/onsenui_all.js','bower_components/ngCordova/ng-cordova.js']
                }
            },
            app: {
                files: {
                    'www/js/app.js': ['src/js/app.js', 'src/js/controllers/**/*.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    open: 'http://127.0.0.1:9001',
                    hostname: '*',
                    port: 9001,
                    base: 'www',
                    livereload: 35721
                }
            }
        },
        watch: {
            html: {
                files: ['src/*.html'],
                tasks: ['copy']
            },
            css: {
                files: ['**/*.less'],
                tasks: ['less']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.server.options.livereload %>',
                    event: ['changed']
                },
                files: [
                    'www/*.html', 'www/css/*.css', 'www/js/*.js'
                ]
            }
        },
        less: {
            dist: {
                files: {
                    'www/css/style.css': 'src/less/style.less'
                }
            }
        }
    });

    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load the plugin that provides the "connect" task.
    grunt.loadNpmTasks('grunt-contrib-connect');
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    // Load the plugin that provides the "exec" task.
    grunt.loadNpmTasks('grunt-exec');


    grunt.registerTask('build', ['clean', 'copy', 'less', 'uglify']);
    grunt.registerTask('default', ['build', 'connect:server', 'watch']);
    grunt.registerTask('ios-device', ['build', 'exec:ios-device']);
    grunt.registerTask('ios-emulator', ['build', 'exec:ios-emulator']);
    grunt.registerTask('android-device', ['build', 'exec:android-device']);
    grunt.registerTask('android-emulator', ['build', 'exec:android-emulator']);


};