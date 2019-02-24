# -*- mode: ruby -*-
# vi: set ft=ruby :

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
