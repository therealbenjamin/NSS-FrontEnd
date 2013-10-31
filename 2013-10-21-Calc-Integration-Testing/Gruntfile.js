module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    qunit: {
      master: {
        options: {
          urls: [ "http://localhost:3333/tests/master.html" ]
        }
      },
      filter: {
        options: {
          urls: [ "http://localhost:3333/tests/filter.html" ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 3333,
          hostname: "localhost",
          base: "public"
        }
      }
    },

    watch: {
      js: {
        files: [ "public/js/app/**/*.js" ],
        tasks: [ "dev" ],
        options: { nospawn: true }
      },
      tests: {
        files: [ "public/tests/**/*.html", "public/js/tests/**/*.js" ],
        tasks: [ "qunit" ],
        options: { nospawn: true }
      },
      html: {
        files: [ "public/**/*.haml" ],
        tasks: [ "haml"],
        options: {nospawn: true}
      }
    },

    haml: {
      build: {
        files: {
          "_build/index.html": "public/index.haml",
          "_build/tests/master.html": "public/tests/master.haml",
          "_build/tests/filter.html": "public/tests/filter.haml"
        }
      }
    },

    copy: {
      images: {
        expand: true,
        src: [ "img/**/*.*" ],
        cwd: "public/",
        dest: "_build/"
      },
      fonts: {
        expand: true,
        src: [ "css/**/*.*" ],
        cwd: "public/",
        dest: "_build/"
      },
      js: {
        expand: true,
        src: [ "js/**/*.*" ],
        cwd: "public/",
        dest: "_build/"
      }
    },

    clean: [ "_build" ],

    jshint: {
      files: ["public/js/app/**/*.js"],
      options: {
        force: true,
        jshintrc: "./.jshintrc"
      }
    }

  });



  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-haml");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask( "test", [ "connect", "qunit" ] );
  grunt.registerTask( "dev", [ "jshint", "test" ] );
  grunt.registerTask( "build", [ "clean", "haml", "copy", "concat" ] );

  grunt.registerTask( "default", [ "dev" ]);

};