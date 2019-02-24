#!/bin/bash
#Filename: setup-ansible-on-vagrant.sh

# Variables - Hardcoded entries in case they are needed
#$HOST="myproject.com"
#$SSH_REMOTE_USER="ubuntu"
#$SSH_LOCAL_USER="vagrant"

# Update repo
sudo apt-get update

# Prepare to setup install for ansible
sudo apt-get install software-properties-common -y
sudo apt install python3-pip -y
sudo pip3 install --upgrade pip

# Install Ansible
sudo pip3 install ansible

# Overwrite ansible.cfg file and hosts file
sudo echo -e "[defaults]\nhost_key_checking = False" > /etc/ansible/ansible.cfg
sudo echo -e "[webservers]\n$1 ansible_ssh_port=22 ansible_ssh_user=$2 ansible_ssh_private_key_file=/home/$3/.ssh/id_rsa" > /etc/ansible/hosts

# Setup Playbooks Path and Import Scripts
cd /etc/ansible; sudo mkdir playbooks; cd playbooks
sudo git clone https://github.com/dveleztx/ansible-https-nginx-letsencrypt.git && cd ansible-https-nginx-letsencrypt
