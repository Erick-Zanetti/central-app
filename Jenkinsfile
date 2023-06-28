pipeline {
  agent {
    docker { image 'node:18.16.0-alpine' }
  }
  stages {
    stage ('Building server') {
      steps {
        sh '''
        docker build ./server -t server
        '''
      }
    }
  }
}