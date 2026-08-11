# Using Ansible For Hardening Server

<br>1) Add passwordless sudo user
<br>2) Install some tools
<br>3) Configure ssh service
<br>4) Set fail2ban for ssh service
<br>5) Configure firewall

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
