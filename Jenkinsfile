pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Construir') {
            steps {
                sh 'npm run build'
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
            echo 'Build successful! Run additional deployment steps if needed.'
        }
        failure {
            echo 'Build failed! Take necessary actions.'
        }
    }
}
