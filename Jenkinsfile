pipeline {
    agent any

    environment {
        NODE_VERSION = '18'                // Node version you want to use
        BROWSER = 'chromium'               // default browser; or 'webkit' , 'firefox'
        HEADLESS = 'true'                  // run headless by default
    }

    options {
        timestamps()                        // adds timestamps to console output
        // ansiColor('xterm')                  // colored console output
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
                echo 'Reports (Allure or Cucumber JSON) can be published here if configured'
                // e.g., publish HTML reports using Jenkins HTML Publisher plugin
                // publishHTML(target: [allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'allure-report', reportFiles: 'index.html', reportName: 'Allure Report'])
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo 'Tests completed successfully!'
        }
        failure {
            echo 'Some tests failed. Check console output and screenshots.'
        }
    }
}
