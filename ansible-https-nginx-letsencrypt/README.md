# Deploy HTTPS Website using NGINX with LetsEncrypt Certs via Ansible 2

## Pre-requisites

### Buy a Domain (or get one for free!)
- To get a free domain, go to https://www.noip.com/ and register for a site and point it to your public IP address, or use a cloud platform
- **NOTE:** These domains expire after 30 days, and you can only get up to 3 domains! But, you can renew your domains!

### Download ubuntu/bionic64 Vagrant Image
- `vagrant box add ubuntu/bionic64`
- `vagrant init ubuntu/bionic64`

### Configure Vagrantfile for Prep
```ruby
Vagrant.configure(2) do |config|

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = "ansible-box"

  # Greeting
  if Dir.glob("#{File.dirname(__FILE__)}/.vagrant/machines/default/*").empty? || ARGV[0] == 'provision'
    print "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
    print " Hello, #{ENV['USER']}. This script will help you setup your ansible server. \n"
    print "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"
    print "+                                                                       +\n"
    print "+           ANSWER THE NEXT COUPLE OF QUESTIONS TO PROCEED!!!           +\n"
    print "+                                                                       +\n"
    print "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n"

    # Obtain Variables via User Entry
    print "Enter your FQDN (Fully Qualified Domain Name, i.e. myproject.com) and press [Enter]: " 
    HOST = STDIN.gets.chomp
    print "\nEnter the username of the remote web server you are setting up (i.e. root, user). This will be the user account we will be sshing into! Enter username and press [Enter]: "
    SSH_REMOTE_USER = STDIN.gets.chomp
    print "\nWhat is the vagrant machine user account being used to launch ansible playbooks, enter username and press [Enter]: "
    SSH_LOCAL_USER = STDIN.gets.chomp
    print "\n"

    # Enable provisioning with a shell script
    config.vm.provision :shell, :path => "setup-ansible-on-vagrant.sh", :args => [HOST, SSH_REMOTE_USER, SSH_LOCAL_USER]
  end
end
```
- **NOTE:** The above configuration file is the vagrant config for your machine, which includes a shell script that will automatically configure ansible on your vagrant machine. This will automate a lot of the process. 

#### Install Ansible
- `vagrant up` - Starts up machine
- `vagrant provision` 
   - **NOTE:** The variables defined in the setup-ansible-for-vagrant.sh script needs to be updated with your own relevant information, hence there will be a prompt for user entry, otherwise, some things may not work!

## Prep the Webserver using Ansible

- Run this [script](https://github.com/TAMUSA-ACM/ansible-flask-gunicorn-nginx/blob/master/prepare_ansible_target.yml) from your ansible server to setup your target webserver
- `vagrant ssh` - ssh into your vagrant instance
  - Use the following command to execute ansible execution of the YML script: `sudo ansible-playbook prepare_ansible_target.yml -i /etc/ansible/hosts -u vagrant -k --ask-sudo-pass` - This will prompt you for the password for vagrant, enter the password and this will automatically install python for you, which is needed to do automation. This will also enter your private SSH key into authorized_keys on the target machine, saving you from having to enter creds in the future
  
## Execute Webserver Playbook for Deployment
- Using my playbook, a lot of the heavy lifting thankfully has been done, if you are curious to see the details of it, feel free to look through the [YML Script](https://github.com/dveleztx/ansible-https-nginx-letsencrypt/blob/master/nginx-https/nginx-setup.yml)
- The script **MUST** be updated with user criteria, there are **TODO** tags in the YML file for user entry
- Execute the script from the Ansible Server, once the script has been updated with relevant information: `sudo ansible-playbook nginx-setup.yml -u root -i /etc/ansible/hosts`

Now just explore to the site and it should have your hello world encrypted via HTTPS!

## References

- Support David Cohen, author of Ansible 2 for Beginners: https://www.udemy.com/ansible-2-for-beginners/
