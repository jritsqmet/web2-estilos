node {

    stage('Checkout') {
        checkout scm
    }

    stage('Instalar Dependencias') {
        'npm install'
    }

    stage('Construir') {
        sh 'npm run build'
    }

     
}
