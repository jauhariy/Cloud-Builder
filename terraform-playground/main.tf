provider "aws" {
  profile = "default"
  region = "eu-west-1"
}

resource "aws_instance" "app_server" {
  ami = "ami-12345678"
  instance_type = var.ec2_instance_type

  tags = {
    Name = var.instance_name
  }
}

