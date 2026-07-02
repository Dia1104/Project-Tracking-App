pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t project-tracking-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop tracker || exit 0'
                bat 'docker rm tracker || exit 0'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name tracker project-tracking-app'
            }
        }
    }
}