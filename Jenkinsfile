pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Instalar Dependencias') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Construir') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Enviar Correo con Log') {
            steps {
                script {
                    emailext(
                        subject: "Notificación de Construcción Jenkins",
                        body: currentBuild.getLog(),
                        to: "destinatario@example.com",
                        mimeType: 'text/plain',
                    )
                }
            }
        }
    }

    post {
        success {
            script {
                echo 'Build successful! Run additional deployment steps if needed.'
            }
        }
        failure {
            script {
                echo 'Build failed! Take necessary actions.'
            }
        }
    }
}
