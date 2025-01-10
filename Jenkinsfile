pipeline{
	agent any 
	environment {
		docker_credentials = credentials("docker_credentials")
		buildId = "$BUILD_ID"
	}
	stages{
		stage("clone git repository") {
			steps{
				git(url: "https://github.com/gokul1630/blog_app_Iac.git", branch: "main")
			}
		}

		stage("build docker image"){
			steps {
				sh "docker build -t gokul1630/blog-app:v$buildId ./frontend"
				sh "docker build -t gokul1630/blog-app:latest ./frontend"
			}
		}
		
		stage("push image to hub"){
			steps {
				sh "echo $docker_credentials_PSW | docker login -u $docker_credentials_USR --password-stdin"
				sh "docker push gokul1630/blog-app:v$buildId"
				sh "docker push gokul1630/blog-app:latest"
			}
		}
	}
}
