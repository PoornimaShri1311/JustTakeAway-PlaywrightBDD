pipeline {
    agent {
        docker { 
            image 'node:18'
            args '-u root:root'
        }
    }

    environment {
        BROWSER = 'chromium'
        HEADLESS = 'true'
    }

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/PoornimaShri1311/JustTakeAway-PlaywrightBDD.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Compile TypeScript') {
            steps {
                echo 'Compiling TypeScript...'
                sh 'npx tsc'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running Cucumber tests on browser: ${BROWSER}"
                sh 'npx cucumber-js'
            }
        }

        stage('Archive Screenshots') {
            steps {
                archiveArtifacts artifacts: 'screenshots/**/*.png', allowEmptyArchive: true
            }
        }

        stage('Publish Reports') {
            steps {
                echo 'Reports can be published here if configured'
            }
        }
    }

    post {
        always { cleanWs() }
        success { echo 'Tests completed successfully!' }
        failure { echo 'Some tests failed.' }
    }
}
