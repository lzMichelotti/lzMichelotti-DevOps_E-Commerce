provider "azurerm" {
  features {}
  subscription_id = "db8bb0d0-08ad-46d8-98bf-5468238a02ac"
}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0"
    }
  }
  required_version = ">= 1.0"
}