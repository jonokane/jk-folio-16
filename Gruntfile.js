module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/styles.css': 'bower_components/bootstrap/scss/bootstrap.scss'
        }
      },
      options: {
        includePaths: [
          'bower_components/bootstrap/scss/'
        ]
      }
    },
    watch: {
      source: {
        files: ['bower_components/bootstrap/scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};



// module.exports = function(grunt) {
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),

//     sass: {
//       options: {
//         includePaths: ['bower_components/bootstrap/scss/*']
//       },
//       dist: {
//         options: {
//           outputStyle: 'compressed',
//           sourceMap: true,
//         },
//         files: [{
//           expand: true,
//           src: ['bower_components/bootstrap/scss/*.scss'],
//           dest: 'bower_components/bootstrap/dist/css/bootstrap.css',
//           ext: '.css'
//         }]
//       }
//     },

//     watch: {
//       grunt: {
//         options: {
//           reload: true
//         },
//         files: ['bower_components/bootstrap/scss/*']
//       },

//       sass: {
//         files: 'scss/**/*.scss',
//         tasks: ['sass']
//       }
//     }
//   });

//   grunt.loadNpmTasks('grunt-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');

//   grunt.registerTask('build', ['sass']);
//   grunt.registerTask('default', ['build','watch']); 
// } 