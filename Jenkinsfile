node {
    stage('Checkout SCM') {
        git branch: 'hrms-frontend', url: 'https://github.com/ChandanGC/hrms-frontend.git'
    }

    stage('Install node modules') {
        sh "npm install"
    }

    stage("Test") {
        sh "npm run test-headless"
    }

    stage("Build") {
        sh "npm run build --prod"
    }
    
    stage("Copy") {
        sh "cp -a /var/lib/jenkins/workspace/hrms/dist/hrms-frontend/. /var/www/hrms-frontend/html/"
    }
}