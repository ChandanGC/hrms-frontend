node {
    stage('Checkout SCM') {
        git branch: 'master', url: 'https://github.com/ChandanGC/hrms-frontend.git'
    }

    stage('Install node modules') {
        sh "npm install"
    }

   

    stage("Build") {
        sh "npm run build"
    }
    
    stage("Copy") {
        sh "cp -a /var/lib/jenkins/workspace/hrms/dist/template/. /var/www/template/html/"
    }
}
