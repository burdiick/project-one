module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      /*Main banner image for page span*/
      banner: {
        options: {
          engine: 'im',
          sizes: [{
            
            width: 2000,
            suffix: "_2x",
            quality: 70
            
          }, {
            width: 1000,
            suffix: "_1x",
            quality: 70
          }, {
            
            width: 1000,
            suffix: "_2x",
            quality: 70
            
          }, {
            width: 500,
            suffix: "_1x",
            quality: 70
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/banner',
          dest: 'images'
        }]
      },

      /*Project images for 50w*/
      project_images: {
        options: {
          engine:'im',
          sizes: [{
            
            width: 1000,
            suffix: "_2x",
            quality: 70
            
          }, {
            width: 500,
            suffix: "_1x",
            quality: 70
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/project_images',
          dest: 'images'
        }]
      }
    },
  

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        }
      },
      
    }
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images:banner', 'responsive_images:project_images']);
  grunt.registerTask('banner', ['clean', 'mkdir', 'responsive_images:banner']);
  grunt.registerTask('project_images', ['clean', 'mkdir', 'responsive_images:project_images']);
};