# Using Ansible For Hardening Server

<br>1)add non-root user
<br>2)install some tools
<br>3)configure ssh service
<br>4)set fail2ban for ssh service
<br>5)configure firewall

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
