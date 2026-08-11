# Using Ansible For Hardening Server

<br>add non-root user
<br>install some tools
<br>configure ssh service
<br>set fail2ban for ssh service
<br>configure firewall

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
