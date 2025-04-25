# Cloud Native Ahmedabad Meetup #11

## Progressive Delivery with GitOps
This repository demonstrates a GitOps approach for progressive delivery using Argo CD and Argo Rollouts. It includes a sample application deployed using canary and blue-green strategies, visualise and manages the user traffic split with Argo Rollouts and Argo CD

## Prerequisites
- Kubernetes cluster, Kubectl
- Helm
- DNS Records
- Argo CD: [Ref Helm Charts](https://github.com/smartSenseSolutions/progressive-delivery-with-gitops/tree/main/helm-charts/argo-rollouts)
- Argo Rollouts: [Ref Helm Charts](https://github.com/smartSenseSolutions/progressive-delivery-with-gitops/tree/main/helm-charts/argo-rollouts)
- Cert Manager: [Ref Helm Charts](https://github.com/smartSenseSolutions/progressive-delivery-with-gitops/tree/main/helm-charts/cert-manager)
- Containerized App: [Ref Sample Node App](https://github.com/smartSenseSolutions/progressive-delivery-with-gitops/tree/main/sample-node-app)

## Live Demo: Progressive Delivery in Action
This demo walks through deploying a sample NodeJS app using the GitOps approach with ArgoCD. How we can handle new versions of the app using canary and blue-green deployment strategies — including how traffic gets split between versions during rollouts. All the demo resources are available in the repo: [ArgoCD app configs](https://github.com/smartSenseSolutions/progressive-delivery-with-gitops/tree/main/argocd-apps) for both canary and blue-green rollouts, along with the [Helm charts](https://github.com/smartSenseSolutions/progressive-delivery-with-gitops/tree/main/helm-charts). You can plug in the container image of the sample Node.js app right there

## Presentation Slides
[Google Slides](https://docs.google.com/presentation/d/1iVrn_f4IkQJlWALJjAFpmDICtY8vDmjH3rSPKUb4VuM/edit?usp=sharing)
