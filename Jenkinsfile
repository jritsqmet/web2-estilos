node {
    stage('Checkout') {
        checkout scm
    }

    stage('Instalar Dependencias') {
        sh 'npm install'
    }

    stage('Construir') {
        sh 'npm run build'
    }

    stage('Enviar Correo con Log') {
        emailext(
            subject: "Notificación de Construcción Jenkins",
            body: currentBuild.rawBuild.getLog(),
            to: "destinatario@example.com",
            mimeType: 'text/plain',
        )
    }
}
