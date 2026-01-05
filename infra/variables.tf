variable "location" {
  type    = string
  default = "eastus2"
}

variable "rg_name" {
  type    = string
  default = "rg-ecommerce-devops"
}

variable "acr_name" {
  type = string
}

variable "aks_name" {
  type    = string
  default = "aks-ecommerce"
}

variable "node_count" {
  type    = number
  default = 1
}

variable "vm_size" {
  type    = string
  default = "Standard_B2s"
}