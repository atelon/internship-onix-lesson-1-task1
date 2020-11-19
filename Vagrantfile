# -*- mode: ruby -*-
# vi: set ft=ruby :

# Path to vagrant prefences
curr_folder = File.dirname(__FILE__)
vagrant_folder = curr_folder + '/vagrant'
config_folder = vagrant_folder + '/config'
utils_folder = vagrant_folder + '/utils'
provisions_folder = vagrant_folder + '/provisions'
shell_provision_folder = provisions_folder + '/shell'

# Require files
require 'json'
require "#{utils_folder}/installPlugins.rb"

# Options
options = JSON.parse(File.read(config_folder + '/config.json'))

# Install plugins
installPlugins(options['BOX_PLUGINS'])

# Vagrant config
Vagrant.configure(options['API_VERSION']) do |config|

  # Box
  config.vm.box = options['BOX']

  # Machine name (for vagrant console)
  config.vm.define options['MACHINE_NAME']

  # Machine name (for guest machine console)
  config.vm.hostname = options['MACHINE_NAME']

  # Sync folder '/vagrant'
  config.vm.synced_folder ".", "/usr/app",
    type: "nfs"

  config.vm.network :private_network, ip: "10.11.12.13"

  # VirtualBox
  config.vm.provider 'virtualbox' do |vb|
    # machine cpus count
    vb.cpus = options['VIRTUALBOX_PROVIDER']['cpus']
    # machine memory size
    vb.memory = options['VIRTUALBOX_PROVIDER']['memory']
    # machine name (for VirtualBox UI)
    vb.name = options['MACHINE_NAME']
    # linked clone
    vb.linked_clone = options['VIRTUALBOX_PROVIDER']['linked_clone']
  end

  # Provisions
  config.vm.provision "shell", path: shell_provision_folder + "/install.sh"

end
