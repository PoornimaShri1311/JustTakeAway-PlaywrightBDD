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

    pipeline {
        agent {
            docker {
                image params.NODE_IMAGE ?: 'node:18'
                args '-u root:root'
            }
        }

        parameters {
            string(name: 'NODE_IMAGE', defaultValue: 'node:18', description: 'Docker Node.js image')
            string(name: 'REPO_URL', defaultValue: 'https://github.com/PoornimaShri1311/JustTakeAway-PlaywrightBDD.git', description: 'Git repository URL')
            string(name: 'REPO_BRANCH', defaultValue: 'main', description: 'Git branch to build')
            string(name: 'BROWSER', defaultValue: 'chromium', description: 'Browser for Playwright tests')
            string(name: 'HEADLESS', defaultValue: 'true', description: 'Run browser in headless mode')
            string(name: 'ARTIFACT_RETENTION_DAYS', defaultValue: '7', description: 'Days to keep Playwright artifacts')
            string(name: 'CRON_SCHEDULE', defaultValue: '0 0 * * 0', description: 'Pipeline schedule (cron)')
        }

        environment {
            BROWSER = params.BROWSER
            HEADLESS = params.HEADLESS
        }

        options {
            timestamps()
        }

        triggers {
            cron(params.CRON_SCHEDULE)
        }

        stages {
            stage('Checkout') {
                steps {
                    git url: params.REPO_URL, branch: params.REPO_BRANCH
                }
            }

            stage('Install Dependencies') {
                steps {
                    echo 'Installing Node.js dependencies...'
                    sh 'npm install'
                }
            }

            stage('Cleanup Artifacts') {
                steps {
                    echo 'Cleaning up old Playwright artifacts (videos, traces, screenshots)...'
                    sh "node clean-artifacts.js --days=${params.ARTIFACT_RETENTION_DAYS}"
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
        }
    }
