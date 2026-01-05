# ☁️ E-Commerce Cloud Infrastructure (DevOps Lab)

Este projeto implementa uma infraestrutura automatizada para uma aplicação de E-Commerce utilizando **Infrastructure as Code (IaC)**.

O objetivo é provisionar um cluster Kubernetes (AKS) e um Container Registry (ACR) na Microsoft Azure, totalmente gerenciados via pipelines de CI/CD no GitHub Actions, com gerenciamento seguro de estado remoto.

---

## 🏗️ Arquitetura e Tecnologias

O projeto utiliza uma abordagem moderna de DevOps:

* **Terraform:** Provisionamento da infraestrutura (AKS, ACR, Resource Groups, IAM).
* **Microsoft Azure:** Provedor de Nuvem.
* **GitHub Actions:** Automação de CI/CD (Deploy e Destroy).
* **Azure Blob Storage:** Backend remoto para persistência do estado do Terraform (`tfstate`), garantindo segurança e colaboração.
* **Docker & Kubernetes:** Containerização e Orquestração da aplicação React.

---

## 🚀 Funcionalidades do Pipeline

O projeto conta com workflows automatizados (`.github/workflows/`) que permitem:

1.  **Deploy Automatizado (`apply`):**
    * Login seguro na Azure (OIDC).
    * Inicialização do Terraform com Backend Remoto.
    * Criação/Atualização do Cluster AKS e Registry ACR.
    * Configuração automática de permissões (AcrPull) para o Cluster acessar as imagens.

2.  **Destruição Controlada (`destroy`):**
    * Desmontagem completa do ambiente para economia de custos (FinOps).
    * Limpeza de recursos órfãos.

3.  **Destruição de Emergência:**
    * Workflow dedicado via Azure CLI para forçar a remoção de recursos em caso de desvio de estado (State Drift).

---

## 📂 Estrutura do Projeto

```bash
.
├── .github/workflows/   # Pipelines de CI/CD (YAML)
├── app/                 # Código fonte da aplicação (React)
├── k8s/                 # Manifestos Kubernetes (Deployment, Service)
├── main.tf              # Definição dos recursos Azure
├── provider.tf          # Configuração do Provider e Backend Remoto
├── variables.tf         # Declaração de variáveis
└── README.md            # Documentação
