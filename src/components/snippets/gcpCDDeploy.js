const code = `
git clone https://github.com/YugaByte/gcp-deployment-manager.git
cd gcp-deployment-manager
gcloud deployment-manager deployments create <your-deployment-name> --config=yugabyte-deployment.yaml
`

export default code
