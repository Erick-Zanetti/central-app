pipeline {
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