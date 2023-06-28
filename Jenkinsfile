pipeline {
  agent {
    docker { image 'node:18.16.0-alpine' }
  }
  stages {
    stage ('Building server') {
      steps {
        sh '''
        docker build -t your_tag .
        docker push ...
        '''
      }
    }
  }
}