# Using Ansible For Hardening Server

 install some tools
 configure ssh service
 set fail2ban for ssh service
 configure firewall

```text
├── ansible.cfg
├── inventory
│   ├── group_vars
│   │   └── all.yml
│   └── hosts.ini
├── playbooks
│   ├── hardening.yml
│   └── setup.yml
└── roles
    ├── fail2ban
    │   ├── handlers
    │   │   └── main.yml
    │   ├── tasks
    │   │   └── main.yml
    │   └── template
    │       └── fail2ban.j2
    ├── ssh
    │   ├── handlers
    │   │   └── main.yml
    │   ├── ssh-banner
    │   └── tasks
    │       └── main.yml
    ├── ufw
    │   └── tasks
    │       └── main.yml
    └── users
        └── tasks
            └── main.yml
Author: Hossein Moradi
