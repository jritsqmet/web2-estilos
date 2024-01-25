node {
    stage('Checkout') {
        checkout scm
    }

    stage('Instalar Dependencias') {
        sh 'npm install'
    }

    stage('Construir') {
        sh 'npm run build'
       emailext(
        subject: 'Build exitoso',
        body: 'El build se completó correctamente.',
        to: 'rosero.julio.d@gmail.com'
      )
    }

    
}
