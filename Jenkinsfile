pipeline {
  agent any
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