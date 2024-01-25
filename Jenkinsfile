node {

    stage('Checkout') {
        checkout scm
    }

    stage('Instalar Dependencias') {
        'npm install'
    }

    stage('Construir') {
        'npm run build'
    }

  stage('Enviar Correo con Log') {
      emailext(
            subject: "Notificación de Construcción Jenkins",
            body: currentBuild.getLog(),
            to: "destinatario@example.com",
            mimeType: 'text/plain',
        )
    }

     
}
