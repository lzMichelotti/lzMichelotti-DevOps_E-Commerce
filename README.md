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
```

⚙️ Pré-requisitos (Bootstrapping)
Para replicar este ambiente, é necessário criar manualmente o recurso onde o Terraform guardará seu arquivo de estado (memória). Isso deve ser feito uma única vez antes do primeiro deploy.

Execute os comandos abaixo na Azure CLI:

Bash

# 1. Criar Grupo de Recursos para o Estado
az group create --name rg-terraform-state --location eastus2

# 2. Criar Storage Account
az storage account create --resource-group rg-terraform-state --name tfstate5289 --sku Standard_LRS --encryption-services blob

# 3. Criar Container 
az storage container create --name tfstate --account-name tfstate5289

🔌 Configuração do Backend
Após criar os recursos acima, o arquivo provider.tf foi configurado para conectar neste backend remoto:

Terraform

backend "azurerm" {
  resource_group_name  = "rg-terraform-state"
  storage_account_name = "tfstate5289"
  container_name       = "tfstate"
  key                  = "ecommerce.terraform.tfstate"
}
🚦 Como Usar
Acesse a aba Actions no repositório GitHub.

Selecione o workflow Gerenciar Infraestrutura.

Clique em Run workflow.

Escolha a ação desejada:

🟢 apply: Para subir o ambiente (Cluster AKS + ACR).

🔴 destroy: Para derrubar o ambiente e parar custos.

---

## 🔮 Roadmap (Próximos Passos)

A atual versão foca na automação da Infraestrutura (IaC). As próximas implementações visam atingir o nível de **CI/CD Completo**:

- [ ] **Pipeline Unificado (CI/CD):** Automatizar o build da imagem Docker e o deploy no Kubernetes diretamente no GitHub Actions.
    - *Objetivo:* Eliminar a necessidade de rodar comandos manuais (`docker push`, `kubectl apply`) após a criação da infraestrutura.
- [ ] **Monitoramento:** Implementar Prometheus e Grafana para visualização de métricas do Cluster.
- [ ] **Testes Automatizados:** Incluir etapas de teste (Unit/Integration) na aplicação React antes da construção da imagem.

👤 Autor
Projeto desenvolvido com foco em automação de infraestrutura, Kubernetes e Azure DevOps.
