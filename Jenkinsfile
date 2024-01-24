node {
    // Definir el entorno del nodo

    stage('Checkout') {
        // Acciones de la etapa de checkout
        checkout scm
    }

    stage('Instalar Dependencias') {
        // Acciones para instalar dependencias
        sh 'npm install'
    }

    stage('Construir') {
        // Acciones para la etapa de construcción
        sh 'npm run build'
    }

     
}
