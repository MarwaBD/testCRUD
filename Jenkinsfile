pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    // Compile and build the backend
                    dir('product-backend') {
                        sh 'npm install'
                        sh 'npm run build'
                    }

                    // Compile and build the frontend
                    dir('product-front') {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Unit Test') {
            steps {
                script {
                    // Add commands to run unit tests for the backend
                      dir('product-backend') {
                        sh 'npm test'
                    // }
                }
            }
        }
        stage('Sonar') {
            steps {
                script {
                    // Use SonarQube to scan the code and generate reports
                    // Adjust this command based on your SonarQube configuration
                    sh 'sonar-scanner'
                }
            }
        }
        stage('Integration Test') {
            steps {
                script {
                    // Run integration tests with Cypress
                    dir('product-front') {
                        sh 'npm run cypress:run'
                    }
                }
            }
        }
    }
}
