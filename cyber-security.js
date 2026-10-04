window.subjectCourse = {
  subject: "Cyber Security",
  modules: [
    ["Introduction to Cyber Security", "What is Cyber Security?|Need for Cyber Security|Importance of Cyber Security|Cyber Security Goals|CIA Triad|Confidentiality|Integrity|Availability|Cyber Security vs Information Security|Types of Cyber Security|Common Cyber Security Challenges"],
    ["Cyber Threats", "What is a Cyber Threat?|Cyber Attacks|Malware|Virus|Worm|Trojan Horse|Ransomware|Spyware|Adware|Rootkit|Keylogger|Botnet|Phishing|Spear Phishing|Whaling|Social Engineering|Identity Theft|Denial of Service|Distributed Denial of Service"],
    ["Cyber Attacks", "Password Attacks|Brute Force Attack|Dictionary Attack|Credential Stuffing|Man-in-the-Middle Attack|Replay Attack|Spoofing|Sniffing|Session Hijacking|SQL Injection|Cross-Site Scripting (XSS)|Cross-Site Request Forgery (CSRF)|Zero-Day Attack|Insider Threat"],
    ["Ethical Hacking", "What is Ethical Hacking?|Need for Ethical Hacking|Ethical Hacker|Types of Hackers|White Hat|Black Hat|Grey Hat|Ethical Hacking vs Malicious Hacking|Rules of Ethical Hacking|Legal and Ethical Considerations|Scope and Permission|Vulnerability Assessment|Penetration Testing"],
    ["Ethical Hacking Methodology", "Reconnaissance|Information Gathering|Scanning|Enumeration|Vulnerability Analysis|Exploitation Concepts|Privilege Escalation Concepts|Maintaining Access Concepts|Reporting|Remediation|Security Testing Lifecycle"],
    ["Reconnaissance & Information Gathering", "What is Reconnaissance?|Passive Reconnaissance|Active Reconnaissance|OSINT|Domain Information|DNS Information|IP Address Basics|WHOIS Concepts|Subdomain Discovery Concepts|Information Gathering Risks"],
    ["Network Security", "What is Network Security?|Need for Network Security|Network Security Principles|Network Threats|Network Attacks|Network Security Devices|Firewall|IDS|IPS|Proxy Server|VPN|Network Segmentation"],
    ["Firewall", "What is a Firewall?|Need for Firewall|Firewall Functions|Packet Filtering|Stateful Firewall|Proxy Firewall|Next-Generation Firewall|Host-based Firewall|Network-based Firewall|Firewall Advantages & Limitations"],
    ["Intrusion Detection & Prevention", "Intrusion Detection System (IDS)|Intrusion Prevention System (IPS)|Network-based IDS|Host-based IDS|Signature-based Detection|Anomaly-based Detection|IDS vs IPS|Basic Security Monitoring"],
    ["Network Security Protocols", "HTTPS|TLS|SSH|IPsec|VPN|Secure Email Concepts|DNS Security Basics|Secure Network Communication"],
    ["Wireless Network Security", "Wi-Fi Security|Wireless Threats|WEP|WPA|WPA2|WPA3|Secure Wi-Fi Configuration|Rogue Access Point|Evil Twin Concept"],
    ["Cryptography Introduction", "What is Cryptography?|Need for Cryptography|History of Cryptography|Plaintext|Ciphertext|Encryption|Decryption|Key|Cryptographic Algorithm|Symmetric vs Asymmetric Cryptography"],
    ["Symmetric Key Cryptography", "What is Symmetric Encryption?|Characteristics|Advantages|Limitations|DES|3DES|AES|Block Cipher|Stream Cipher|Key Management Basics"],
    ["Asymmetric Key Cryptography", "What is Asymmetric Encryption?|Public Key|Private Key|RSA|Diffie-Hellman|ECC|Advantages|Limitations|Symmetric vs Asymmetric Encryption"],
    ["Hashing", "What is Hashing?|Hash Function|Characteristics of Hash Functions|MD5|SHA-1|SHA-2|SHA-256|SHA-3|Hashing vs Encryption|Password Hashing|Salt"],
    ["Digital Signature", "What is Digital Signature?|Need for Digital Signature|Digital Signature Process|Signing|Verification|Digital Signature vs Digital Certificate|Applications of Digital Signatures"],
    ["Digital Certificate & PKI", "What is a Digital Certificate?|Certificate Authority (CA)|Public Key Infrastructure (PKI)|Certificate Validation|SSL/TLS Certificates|Certificate Chain|Public Key vs Private Key"],
    ["Authentication & Authorization", "Authentication|Authorization|Identification|Password Authentication|Multi-Factor Authentication (MFA)|Two-Factor Authentication (2FA)|Biometrics|Role-Based Access Control (RBAC)|Least Privilege"],
    ["Password Security", "Strong Passwords|Password Policies|Password Managers|Password Hashing|Salting|Brute Force Protection|Account Lockout|Multi-Factor Authentication"],
    ["Web Security", "Web Security Basics|HTTPS|Secure Cookies|Session Security|SQL Injection|XSS|CSRF|Authentication Security|Input Validation|Secure Headers|OWASP Top 10 Introduction"],
    ["Malware & Endpoint Security", "Malware Introduction|Antivirus|Anti-Malware|Endpoint Protection|Virus Detection|Malware Prevention|Software Updates|Patch Management|Application Security"],
    ["Email Security", "Email Threats|Phishing|Spear Phishing|Email Spoofing|Spam|Malicious Attachments|Secure Email Practices|SPF|DKIM|DMARC"],
    ["Cloud Security", "What is Cloud Security?|Cloud Security Challenges|Data Protection|Identity & Access Management|Encryption in Cloud|Cloud Misconfiguration|Shared Responsibility Model|Secure Cloud Practices"],
    ["Mobile Security", "Mobile Security Basics|Mobile Threats|Malicious Apps|App Permissions|Device Encryption|Screen Lock|Secure Wi-Fi|Mobile Updates|Mobile Device Management"],
    ["Cyber Security Best Practices", "Software Updates|Strong Passwords|MFA|Secure Browsing|Safe Downloads|Backup|Antivirus|Firewall|Public Wi-Fi Safety|Phishing Awareness|Data Protection"],
    ["Cyber Security Risk Management", "Security Risk|Threat|Vulnerability|Risk Assessment|Risk Analysis|Risk Mitigation|Security Policies|Security Controls|Business Continuity|Disaster Recovery"],
    ["Incident Response", "What is Incident Response?|Incident Detection|Incident Analysis|Containment|Eradication|Recovery|Post-Incident Analysis|Incident Response Plan"],
    ["Cyber Forensics – Basics", "What is Cyber Forensics?|Digital Evidence|Evidence Collection|Evidence Preservation|Disk Forensics|Network Forensics|Log Analysis|Chain of Custody|Cyber Forensics vs Ethical Hacking"],
    ["Cyber Security Tools – Introduction", "Nmap|Wireshark|Burp Suite|Metasploit Framework|Kali Linux|Nessus|OpenVAS|John the Ripper|OWASP ZAP"],
    ["Cyber Security Careers", "Cyber Security Analyst|Security Engineer|Ethical Hacker|Penetration Tester|SOC Analyst|Digital Forensics Analyst|Security Consultant|Cloud Security Engineer|Cyber Security Certifications|Career Roadmap"]
  ].map(([title, topics]) => ({
    title,
    topics: topics.split("|").map((topic) => topic.trim())
  }))
};
