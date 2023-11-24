node {
    stage('Checkout SCM') {
        git branch: 'master', url: 'https://github.com/ChandanGC/hrms-frontend.git'
    }

    stage('Install node modules') {
        sh "npm install"
    }

    stage("Test") {
        sh "npm run test"
    }
  
    stage('Run Chrome Headless') {
        sh "xvfb-run google-chrome --headless --disable-gpu --no-sandbox"
    }
    

    stage("Build") {
        sh "npm run build --prod"
    }
    
    stage("Copy") {
        sh "cp -a /var/lib/jenkins/workspace/hrms/dist/template/. /var/www/template/html/"
    }
}
