/* globals module */

module.exports = function (grunt) {
    'use strict';

    [
        'grunt-contrib-less',
        'grunt-contrib-connect'

    ].forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            prod: {
                options: {
                    paths: ['less'],
                    yuicompress: true
                },
                files: {
                    'css/styles.css': 'less/styles.less'
                }
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: process.env.PORT || 5000,
                    base: '.',
                    keepalive: true,
                }
            },
            dev: {
                options: {
                    port: 8000,
                    base: '.',
                    keepalive: true,
                    open: 'http://localhost:8000'
                }
            }
        },

        clean: {
            all: ['.grunt', 'css']
        }

    });

    grunt.registerTask('dev', 'Compile and open', [
        'less:prod', 'connect:dev'
    ]);
    grunt.registerTask('prod', 'Compile and run server', [
        'less:prod', 'connect:server'
    ]);
};