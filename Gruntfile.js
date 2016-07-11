module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-angular-templates');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    settings: {
      src: 'src',
      tmp: 'public-tmp',
      dist: 'public'
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 Chrome versions']
      },
      dist: {
        files: {
          '<%= settings.src %>/app/app.css': '<%= settings.src %>/app/app.css'
        }
      }
    },

    watch: {
      options: {
        atBegin: true
      },
      html: {
        files: ['<%= settings.src %>/app/**/*.html'],
        tasks: ['ngtemplates', 'notify:templates']
      },
      css: {
        files: ['<%= settings.src %>/app/**/*.css'],
        tasks: ['cssmin', 'autoprefixer', 'notify:cssBuild']
      },
      js: {
        files: [
          '<%= settings.src %>/app/**/*.js',
          '!<%= settings.src %>/app/**/*.spec.js'
        ],
        tasks: ['wiredep', 'injector', 'notify:injector'],
        options: {
          event: ['added', 'deleted']
        }
      },
    },

    ngconstant: {
      options: {
        name: 'config',
        dest: '<%= settings.src %>/app/config/config-module.js'
      },
      dev: {
        constants: {
          TptEnv: grunt.file.readJSON('config/env-dev.json')
        }
      },
      production: {
        constants: {
          TptEnv: grunt.file.readJSON('config/env-production.json')
        }
      }
    },

    ngtemplates: {
      options: {
        module: 'module-templates',
        standalone: true,
        prefix: '/'
      },
      app: {
        cwd: '<%= settings.src %>',
        src: 'app/**/*.html',
        dest: '<%= settings.src %>/app/ng-templates/templates-module.js'
      }
    },

    wiredep: {
      app: {
        src: '<%= settings.src %>/index.html', // point to your HTML file.
        exclude: [
          /jquery/
        ],
        overrides: {
          "angular-i18n": {
            "main": "angular-locale_pt-br.js"
          }
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    },

    injector: {
      app: {
        options: {
          relative: true,
          addRootSlash: false
        },
        src: [
          '<%= settings.src %>/app/**/*-config.js',
          '<%= settings.src %>/app/**/*.js',
          '!<%= settings.src %>/app/**/*.spec.js'
        ],
        dest: '<%= settings.src %>/index.html'
      }
    },

    // Build
    clean: {
      dist: '<%= settings.dist %>',
      tmp: '<%= settings.tmp %>'
    },

    useminPrepare: {
      options: {
        dest: '<%= settings.dist %>',
        staging: '<%= settings.tmp %>'
      },
      html: '<%= settings.src %>/index.html'
    },

    copy: {
      dist: {
        files: {
          '<%= settings.dist %>/index.html': '<%= settings.src %>/index.html',
          '<%= settings.dist %>/assets/images/': '<%= settings.src %>/**/*.jpg'
        }
      }
    },

    filerev: {
      dist: {
        src: [
          '<%= settings.dist %>/**/*.js',
          '<%= settings.dist %>/**/*.css'
        ]
      }
    },

    usemin: {
      html: '<%= settings.dist %>/index.html'
    },

    notify: {
      injector: {
        options: {
          title: 'Task complete',
          message: 'Injector finished running',
        }
      },
      cssBuild: {
        options: {
          title: 'Task complete',
          message: 'Css min finished running',
        }
      },
      templates: {
        options: {
          title: 'Task complete',
          message: 'Templates finished running'
        }
      }
    }

  });

  grunt.registerTask('config-dev', [
    'ngconstant:dev',
    'ngtemplates',
    'wiredep',
    'injector'
  ]);

  grunt.registerTask('config-production', [
    'ngconstant:production',
    'ngtemplates',
    'wiredep',
    'injector'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'copy',
    'filerev',
    'usemin',
    'clean:tmp'
  ]);
};
