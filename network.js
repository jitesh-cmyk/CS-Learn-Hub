const $ = (selector) => document.querySelector(selector);
const topicList = $('#topic-list');
const sections = [
  ['Introduction to Computer Networks', 'What is Computer Network?|Need for Computer Networks|Advantages of Networking|Components of Computer Network|Network Criteria|Network Architecture|Client-Server Network|Peer-to-Peer Network'],
  ['Types of Computer Networks', 'PAN|LAN|CAN|MAN|WAN|WLAN|Internet|Intranet|Extranet'],
  ['Network Topologies', 'What is Network Topology?|Bus Topology|Star Topology|Ring Topology|Mesh Topology|Tree Topology|Hybrid Topology|Advantages and Disadvantages of Topologies'],
  ['Network Devices', 'NIC|Repeater|Hub|Bridge|Switch|Router|Gateway|Modem|Wireless Access Point'],
  ['OSI Model', 'What is OSI Model?|Need for OSI Model|Physical Layer|Data Link Layer|Network Layer|Transport Layer|Session Layer|Presentation Layer|Application Layer|Data Flow in OSI Model'],
  ['TCP/IP Model', 'What is TCP/IP Model?|Network Access Layer|Internet Layer|Transport Layer|Application Layer|TCP/IP Protocol Suite|OSI vs TCP/IP Model'],
  ['Physical Layer', 'Signals|Analog Signal|Digital Signal|Bit Rate|Baud Rate|Bandwidth|Transmission Modes|Guided Media|Unguided Media'],
  ['Transmission Media', 'Twisted Pair Cable|Coaxial Cable|Fiber Optic Cable|Radio Waves|Microwaves|Infrared|Satellite Communication'],
  ['Data Link Layer', 'Framing|Physical Addressing|Flow Control|Error Control|Error Detection|Error Correction|MAC Address|Ethernet|Switching'],
  ['Network Layer', 'Network Layer Functions|Logical Addressing|IP Address|IPv4|IPv6|Subnetting|Subnet Mask|Default Gateway|ARP|ICMP'],
  ['IP Addressing', 'What is IP Address?|IPv4 Address|IPv4 Address Classes|Public IP|Private IP|Static IP|Dynamic IP|IPv6 Address|Subnet Mask|CIDR|Subnetting'],
  ['Routing', 'What is Routing?|Routing Table|Static Routing|Dynamic Routing|Default Routing|Distance Vector Routing|Link State Routing|Path Vector Routing|Routing Metrics'],
  ['Routing Protocols', 'RIP|OSPF|EIGRP|BGP|Routing Information Base|Administrative Distance|Autonomous System'],
  ['Transport Layer', 'Transport Layer Functions|TCP|UDP|TCP vs UDP|Port Numbers|Sockets|Flow Control|Error Control|Congestion Control'],
  ['TCP', 'What is TCP?|TCP Features|TCP Segment|TCP Connection|Three-Way Handshake|TCP Termination|Sequence Number|Acknowledgment|TCP Flow Control|TCP Congestion Control'],
  ['UDP', 'What is UDP?|UDP Features|UDP Datagram|UDP Applications|TCP vs UDP'],
  ['Application Layer', 'Application Layer Functions|HTTP|HTTPS|FTP|SFTP|SMTP|POP3|IMAP|DNS|DHCP|Telnet|SSH'],
  ['DNS', 'What is DNS?|Need for DNS|Domain Name|IP Address Resolution|DNS Server|DNS Records|DNS Query|DNS Resolution Process'],
  ['DHCP', 'What is DHCP?|Need for DHCP|DHCP Server|DHCP Client|DORA Process|IP Address Assignment|DHCP Lease'],
  ['Network Security', 'What is Network Security?|Authentication|Authorization|Encryption|Firewall|Proxy Server|VPN|IDS|IPS|Network Security Policies'],
  ['Network Attacks', 'DoS Attack|DDoS Attack|Man-in-the-Middle Attack|Packet Sniffing|Spoofing|Phishing|Password Attacks|Malware|Ransomware'],
  ['Wireless Networking', 'What is Wireless Network?|Wi-Fi|Wi-Fi Standards|Wireless Access Point|Bluetooth|Wireless Security|WPA|WPA2|WPA3'],
  ['Network Management & Troubleshooting', 'Ping|Traceroute|ipconfig|ifconfig|nslookup|netstat|Network Configuration|Connectivity Problems|DNS Problems|IP Configuration Problems'],
  ['Network Practical', 'Creating a Simple Network|IP Configuration|Subnetting Practice|Router Configuration|Switch Configuration|Static Routing Practice|Dynamic Routing Practice|Packet Tracer Basics|Network Troubleshooting'],
  ['Advanced Networking', 'Client-Server Architecture|Distributed Networking|Cloud Networking|Network Virtualization|Software Defined Networking|Network Function Virtualization|Virtual Private Network|Content Delivery Network|Internet of Things (IoT) Networking'],
  ['Computer Network Projects', 'LAN Network Project|Chat Application|Client-Server Application|Network Monitoring Tool|Packet Analyzer|Network Scanner|Routing Simulator|Network Troubleshooting Project']
].map(([title, lessons]) => ({ title, lessons: lessons.split('|') }));

const allLessons = sections.flatMap((section) => section.lessons);
let activeSection = 0;
let activeLesson = 0;
const images = {
  network: 'network.js',
  physical: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  server: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  wireless: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  security: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
  cloud: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
};

function categoryFor(text) {
  const name = text.toLowerCase();
  if (/security|attack|firewall|encryption|vpn|spoof|phishing|malware|ransom|ids|ips/.test(name)) return ['security', 'Network security and protection'];
  if (/wireless|wi-fi|bluetooth|radio|microwave|infrared|satellite/.test(name)) return ['wireless', 'Wireless communication and access'];
  if (/cloud|virtualization|cdn|iot|distributed/.test(name)) return ['cloud', 'Modern and distributed networking'];
  if (/server|client|routing|router|switch|dns|dhcp|tcp|udp|transport|application|osi|protocol|device|topolog|network layer|data link/.test(name)) return ['server', 'Connected devices and network infrastructure'];
  return ['physical', 'Network hardware and data transmission'];
}

function diagramFor(text) {
  const name = text.toLowerCase();
  if (/topolog|lan|pan|wan|star|ring|mesh|tree/.test(name)) return `<svg viewBox="0 0 620 150" role="img" aria-label="Network topology diagram"><g fill="none" stroke="#06b6d4" stroke-width="3"><path d="M310 75L120 35M310 75L120 115M310 75L500 35M310 75L500 115"/><circle cx="310" cy="75" r="22" fill="#10233d"/><circle cx="120" cy="35" r="15" fill="#10233d"/><circle cx="120" cy="115" r="15" fill="#10233d"/><circle cx="500" cy="35" r="15" fill="#10233d"/><circle cx="500" cy="115" r="15" fill="#10233d"/></g><g fill="currentColor" font-size="14" text-anchor="middle"><text x="310" y="80">Switch</text><text x="120" y="18">Node A</text><text x="120" y="143">Node B</text><text x="500" y="18">Node C</text><text x="500" y="143">Node D</text></g></svg>`;
  if (/osi|tcp\/ip|layer|data flow/.test(name)) return `<svg viewBox="0 0 620 150" role="img" aria-label="Layered networking diagram"><g font-size="13" text-anchor="middle"><rect x="30" y="18" width="145" height="30" rx="6" fill="#0891b2"/><rect x="237" y="18" width="145" height="30" rx="6" fill="#10b981"/><rect x="444" y="18" width="145" height="30" rx="6" fill="#f59e0b"/><rect x="30" y="62" width="145" height="30" rx="6" fill="#0e7490"/><rect x="237" y="62" width="145" height="30" rx="6" fill="#059669"/><rect x="444" y="62" width="145" height="30" rx="6" fill="#d97706"/><rect x="30" y="106" width="145" height="30" rx="6" fill="#155e75"/><rect x="237" y="106" width="145" height="30" rx="6" fill="#047857"/><rect x="444" y="106" width="145" height="30" rx="6" fill="#b45309"/><g fill="#fff"><text x="102" y="38">Application</text><text x="309" y="38">Transport</text><text x="516" y="38">Internet</text><text x="102" y="82">Session</text><text x="309" y="82">Network</text><text x="516" y="82">Access</text><text x="102" y="126">Presentation</text><text x="309" y="126">Data Link</text><text x="516" y="126">Physical</text></g></g></svg>`;
  if (/handshake|tcp connection|tcp termination/.test(name)) return `<svg viewBox="0 0 620 150" role="img" aria-label="TCP three way handshake diagram"><g stroke="#06b6d4" stroke-width="3" fill="none"><path d="M130 30V125M490 30V125M130 50H470M470 50l-14-8M470 50l-14 8M470 82H150M150 82l14-8M150 82l14 8M130 114H470M470 114l-14-8M470 114l-14 8"/></g><g fill="currentColor" font-size="15"><text x="78" y="28">Client</text><text x="470" y="28">Server</text><text x="255" y="44">SYN</text><text x="240" y="76">SYN + ACK</text><text x="270" y="108">ACK</text></g></svg>`;
  if (/dns|dhcp|dora|resolution/.test(name)) return `<svg viewBox="0 0 620 150" role="img" aria-label="DNS or DHCP request flow diagram"><g stroke="#06b6d4" stroke-width="3" fill="none"><path d="M115 75H260M260 75H405M405 75H545"/><path d="M245 65l15 10-15 10M390 65l15 10-15 10M530 65l15 10-15 10"/></g><g fill="#10233d" stroke="#06b6d4" stroke-width="2"><rect x="30" y="48" width="85" height="54" rx="8"/><rect x="260" y="48" width="85" height="54" rx="8"/><rect x="405" y="48" width="85" height="54" rx="8"/><rect x="545" y="48" width="55" height="54" rx="8"/></g><g fill="currentColor" font-size="13" text-anchor="middle"><text x="72" y="79">Client</text><text x="302" y="79">Resolver</text><text x="447" y="79">DNS/DHCP</text><text x="572" y="79">IP</text></g></svg>`;
  if (/routing|rip|ospf|eigrp|bgp|gateway|arp|icmp/.test(name)) return `<svg viewBox="0 0 620 150" role="img" aria-label="Routing path diagram"><g fill="none" stroke="#06b6d4" stroke-width="3"><path d="M75 75H210L310 35L410 75H545M210 75L310 115L410 75"/><circle cx="75" cy="75" r="20" fill="#10233d"/><circle cx="210" cy="75" r="20" fill="#10233d"/><circle cx="310" cy="35" r="20" fill="#10233d"/><circle cx="310" cy="115" r="20" fill="#10233d"/><circle cx="410" cy="75" r="20" fill="#10233d"/><circle cx="545" cy="75" r="20" fill="#10233d"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="75" y="79">Host</text><text x="210" y="79">R1</text><text x="310" y="39">R2</text><text x="310" y="119">R3</text><text x="410" y="79">R4</text><text x="545" y="79">Dest.</text></g></svg>`;
  return `<svg viewBox="0 0 620 150" role="img" aria-label="Packet movement diagram"><g fill="none" stroke="#06b6d4" stroke-width="3"><path d="M70 75H550"/><path d="M180 65l15 10-15 10M300 65l15 10-15 10M420 65l15 10-15 10"/></g><g fill="#10233d" stroke="#06b6d4" stroke-width="2"><rect x="25" y="48" width="90" height="54" rx="8"/><rect x="160" y="48" width="90" height="54" rx="8"/><rect x="280" y="48" width="90" height="54" rx="8"/><rect x="400" y="48" width="90" height="54" rx="8"/><rect x="510" y="48" width="85" height="54" rx="8"/></g><g fill="currentColor" font-size="13" text-anchor="middle"><text x="70" y="79">Source</text><text x="205" y="79">Frame</text><text x="325" y="79">Packet</text><text x="445" y="79">Segment</text><text x="552" y="79">Target</text></g></svg>`;
}

function explanationFor(lesson) {
  const name = lesson.toLowerCase();
  if (/tcp|udp|transport|socket|port/.test(name)) return ['moves application data between endpoints using ports and delivery rules', 'Application data -> segment/datagram -> destination port', 'The transport layer identifies applications and manages delivery behavior.'];
  if (/ip|routing|gateway|arp|icmp|subnet|cidr|rip|ospf|eigrp|bgp/.test(name)) return ['selects an address or path so packets can reach another network', 'Destination IP -> routing table -> next hop', 'Routers compare destination networks and forward packets toward the best match.'];
  if (/dns|dhcp|http|https|ftp|smtp|pop3|imap|telnet|ssh|application/.test(name)) return ['provides a service that applications use to communicate across the network', 'Application request -> protocol message -> server response', 'Application protocols define the format and meaning of exchanged messages.'];
  if (/security|attack|firewall|encryption|vpn|spoof|phishing|malware|ransom|ids|ips/.test(name)) return ['protects communication, devices, identities, or data from unauthorized activity', 'Identity + policy + traffic -> allow, log, or block', 'Layered controls reduce risk and make suspicious behavior easier to detect.'];
  if (/wireless|wi-fi|bluetooth|radio|microwave|infrared|satellite/.test(name)) return ['uses electromagnetic waves to connect devices without a physical cable', 'Device -> radio signal -> access point -> network', 'Wireless networks trade mobility for shared-medium planning and security.'];
  if (/topolog|device|nic|hub|switch|router|modem|media|cable|signal|bandwidth|physical/.test(name)) return ['defines how bits, devices, and transmission media connect and carry information', 'Bits -> medium -> interface -> receiving device', 'Hardware choices affect speed, distance, reliability, and collision behavior.'];
  return ['explains how connected systems exchange information reliably and efficiently', 'Sender -> protocol rules -> network -> receiver', 'Networks combine devices, addressing, protocols, and media to deliver data.'];
}


const lessonContent = {

  "What is Computer Network?": {
    image: "network.jpg",
    title: "What is Computer Network?",
    content: `
      <p>
        A computer network is a group of interconnected computers and
        devices that communicate with each other and share resources.
      </p>

      <p>
        Networks allow users to share files, printers, applications,
        internet connections, and other resources.
      </p>

      <h3>Key Points</h3>

      <ul class="network-points">
        <li>Connects multiple computers and devices.</li>
        <li>Allows data and resource sharing.</li>
        <li>Uses communication protocols.</li>
        <li>Can be wired or wireless.</li>
      </ul>
    `
  },
  "Need for Computer Networks": {
  image: "need network.jpg",
  title: "Need for Computer Networks",
  content: `
    <p>
      Computer networks are needed to connect computers and other
      devices so that they can communicate, share information, and
      access common resources efficiently.
    </p>

    <p>
      In schools, offices, businesses, and data centers, networking
      makes it possible for users and devices to exchange data and
      use shared services from different locations.
    </p>

    <h3>Why Do We Need Computer Networks?</h3>

    <ul class="network-points">
      <li>
        <strong>Resource Sharing:</strong>
        Computers can share printers, storage devices, software,
        and Internet connections.
      </li>

      <li>
        <strong>Data Sharing:</strong>
        Users can quickly exchange files, documents, images,
        and other information.
      </li>

      <li>
        <strong>Communication:</strong>
        Networks support email, messaging, video conferencing,
        voice calls, and other communication services.
      </li>

      <li>
        <strong>Centralized Management:</strong>
        Administrators can manage users, devices, security,
        and network resources from a central location.
      </li>

      <li>
        <strong>Internet Access:</strong>
        Multiple devices can access the Internet through
        a shared network connection.
      </li>

      <li>
        <strong>Cost Reduction:</strong>
        Sharing hardware, software, storage, and Internet
        connections can reduce overall costs.
      </li>

      <li>
        <strong>Remote Access:</strong>
        Users can access files, applications, and services
        from different locations.
      </li>

      <li>
        <strong>Reliability:</strong>
        Properly designed networks can provide alternative
        communication paths and improve availability.
      </li>
    </ul>

    <h3>Example</h3>

    <p>
      Consider a computer laboratory with 30 computers. Without a
      network, each computer would need its own printer, Internet
      connection, and method for transferring files.
    </p>

    <p>
      With a network, all 30 computers can share a printer,
      Internet connection, storage, and other resources. This makes
      the laboratory easier to manage and more efficient.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Real-world example:</strong>
        An office network allows employees to share files,
        communicate with each other, use common printers,
        and access company applications.
      </p>
    </div>

    <h3>Key Reference</h3>

    <table class="network-table">
      <thead>
        <tr>
          <th>Need</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Resource Sharing</td>
          <td>Share printers, storage, software, and other devices.</td>
        </tr>

        <tr>
          <td>Data Sharing</td>
          <td>Exchange files and information between users.</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Enable email, messaging, calls, and video conferencing.</td>
        </tr>

        <tr>
          <td>Centralized Management</td>
          <td>Manage users, devices, and resources efficiently.</td>
        </tr>

        <tr>
          <td>Remote Access</td>
          <td>Access network resources from different locations.</td>
        </tr>

        <tr>
          <td>Cost Reduction</td>
          <td>Reduce costs by sharing hardware and services.</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>

    <p>
      Computer networks are essential because they make communication,
      resource sharing, data transfer, Internet access, and centralized
      management faster and more efficient. They form the foundation
      of modern communication systems used in homes, schools,
      organizations, and businesses.
    </p>
  `
},
"Advantages of Networking": {
  image: "need network.jpg",
  title: "Advantages of Computer Networking",

  content: `
    <p>
      Computer networking provides many advantages by connecting
      computers, servers, mobile devices, and other network-enabled
      systems. A network allows these devices to communicate,
      exchange information, and share resources efficiently.
    </p>

    <p>
      Networking is widely used in homes, schools, offices,
      hospitals, banks, data centers, and large organizations.
    </p>

    <h3>Major Advantages of Networking</h3>

    <ul class="network-points">

      <li>
        <strong>1. Resource Sharing:</strong>
        Multiple users can share printers, scanners, storage devices,
        software, and Internet connections through the same network.
      </li>

      <li>
        <strong>2. File and Data Sharing:</strong>
        Users can quickly transfer documents, images, videos,
        databases, and other files between connected devices.
      </li>

      <li>
        <strong>3. Fast Communication:</strong>
        Networking enables email, instant messaging, voice calls,
        video conferencing, and other communication services.
      </li>

      <li>
        <strong>4. Internet Sharing:</strong>
        Many computers and mobile devices can use a single
        Internet connection through a router or network gateway.
      </li>

      <li>
        <strong>5. Centralized Management:</strong>
        Network administrators can manage users, computers,
        permissions, applications, and resources from a central
        location.
      </li>

      <li>
        <strong>6. Cost Reduction:</strong>
        Organizations can reduce costs by sharing hardware,
        software, storage, printers, and Internet connections.
      </li>

      <li>
        <strong>7. Remote Access:</strong>
        Users can access files, applications, servers, and other
        resources from different locations when appropriate
        network access is provided.
      </li>

      <li>
        <strong>8. Improved Collaboration:</strong>
        Teams can work on shared files, applications, databases,
        and projects more efficiently.
      </li>

      <li>
        <strong>9. Better Data Backup:</strong>
        Centralized network storage can make it easier to create,
        manage, and protect backups of important data.
      </li>

      <li>
        <strong>10. Scalability:</strong>
        A properly designed network can be expanded by adding
        new computers, users, servers, and other devices.
      </li>

    </ul>

    <h3>3D Network Example</h3>

    <div class="network-3d-example">

      <div class="network-3d-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-computer"></i>
        </div>
        <h4>Computer</h4>
        <p>Shares data and network resources.</p>
      </div>

      <div class="network-3d-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="network-3d-card router-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-wifi"></i>
        </div>
        <h4>Router</h4>
        <p>Connects devices and forwards traffic.</p>
      </div>

      <div class="network-3d-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="network-3d-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-server"></i>
        </div>
        <h4>Server</h4>
        <p>Provides shared services and data.</p>
      </div>

    </div>

    <h3>Real-World Examples</h3>

    <table class="network-table">
      <thead>
        <tr>
          <th>Example</th>
          <th>Networking Advantage</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>School Laboratory</td>
          <td>
            Students can share printers, Internet access,
            files, and learning resources.
          </td>
        </tr>

        <tr>
          <td>Office Network</td>
          <td>
            Employees can share documents, printers,
            applications, and databases.
          </td>
        </tr>

        <tr>
          <td>Banking Network</td>
          <td>
            Branches and servers can securely exchange
            financial information.
          </td>
        </tr>

        <tr>
          <td>Hospital Network</td>
          <td>
            Doctors and authorized staff can access
            shared medical systems and information.
          </td>
        </tr>

        <tr>
          <td>Home Network</td>
          <td>
            Phones, laptops, TVs, and other devices can
            share the same Internet connection.
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Advantages at a Glance</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-share-nodes"></i>
        <h4>Resource Sharing</h4>
        <p>Share devices and services.</p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-bolt"></i>
        <h4>Fast Communication</h4>
        <p>Exchange information quickly.</p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-money-bill-trend-up"></i>
        <h4>Lower Cost</h4>
        <p>Share expensive resources.</p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-users"></i>
        <h4>Collaboration</h4>
        <p>Work together efficiently.</p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-cloud"></i>
        <h4>Remote Access</h4>
        <p>Access resources remotely.</p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-expand"></i>
        <h4>Scalability</h4>
        <p>Add new devices easily.</p>
      </div>

    </div>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Simple Example:</strong>
        In an office, 20 employees can use one network to share
        a printer, access a common server, exchange files, and
        use the same Internet connection instead of maintaining
        separate resources for every employee.
      </p>
    </div>

    <h3>Conclusion</h3>

    <p>
      Computer networking improves communication, resource sharing,
      collaboration, accessibility, and centralized management.
      It also helps organizations reduce costs and build systems
      that can grow as the number of users and devices increases.
    </p>
  `
},

"Components of Computer Network": {
  image: "component.jpg",
  title: "Components of Computer Network",

  content: `
    <p>
      A computer network is made up of several hardware and software
      components that work together to enable communication between
      computers and other devices.
    </p>

    <p>
      These components help devices connect to the network, transmit
      data, identify destinations, control communication, and provide
      network services.
    </p>

    <h3>Main Components of a Computer Network</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-desktop"></i>
        <h4>End Devices</h4>
        <p>
          Computers, laptops, smartphones, and other devices
          that send or receive data.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-network-wired"></i>
        <h4>NIC</h4>
        <p>
          Network Interface Card allows a device to connect
          to a wired or wireless network.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-repeat"></i>
        <h4>Switch</h4>
        <p>
          Connects multiple devices in a LAN and forwards
          data to the correct destination.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-route"></i>
        <h4>Router</h4>
        <p>
          Connects different networks and forwards packets
          using network addresses.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-server"></i>
        <h4>Server</h4>
        <p>
          Provides services such as files, websites,
          applications, authentication, or databases.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-wifi"></i>
        <h4>Access Point</h4>
        <p>
          Provides wireless connectivity to computers,
          phones, tablets, and other devices.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-plug"></i>
        <h4>Transmission Media</h4>
        <p>
          Carries data between devices using cables,
          fiber optics, or wireless signals.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-code"></i>
        <h4>Protocols</h4>
        <p>
          Rules such as TCP/IP, HTTP, DNS, and DHCP
          control how devices communicate.
        </p>
      </div>

    </div>

    <h3>3D Network Components Example</h3>

    <div class="network-3d-example">

      <div class="network-3d-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-laptop"></i>
        </div>

        <h4>Client</h4>

        <p>
          Sends and receives network data.
        </p>
      </div>

      <div class="network-3d-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="network-3d-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-network-wired"></i>
        </div>

        <h4>Switch</h4>

        <p>
          Connects devices within a LAN.
        </p>
      </div>

      <div class="network-3d-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="network-3d-card router-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-route"></i>
        </div>

        <h4>Router</h4>

        <p>
          Connects the local network to other networks.
        </p>
      </div>

      <div class="network-3d-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="network-3d-card">
        <div class="network-3d-icon">
          <i class="fa-solid fa-cloud"></i>
        </div>

        <h4>Internet</h4>

        <p>
          Provides access to remote networks and services.
        </p>
      </div>

    </div>

    <h3>Hardware Components</h3>

    <p>
      Hardware components are the physical devices used to build
      and operate a computer network.
    </p>

    <ul class="network-points">

      <li>
        <strong>Network Interface Card (NIC):</strong>
        Provides a network interface for a computer or device.
      </li>

      <li>
        <strong>Switch:</strong>
        Connects multiple devices within a local network.
      </li>

      <li>
        <strong>Router:</strong>
        Connects different networks and forwards packets.
      </li>

      <li>
        <strong>Hub:</strong>
        Connects multiple devices and broadcasts incoming data
        to connected ports.
      </li>

      <li>
        <strong>Repeater:</strong>
        Regenerates signals to extend transmission distance.
      </li>

      <li>
        <strong>Modem:</strong>
        Converts signals so a network can communicate over
        certain Internet access technologies.
      </li>

      <li>
        <strong>Wireless Access Point:</strong>
        Allows wireless devices to connect to a network.
      </li>

      <li>
        <strong>Cables:</strong>
        Ethernet and fiber-optic cables provide wired
        communication between network devices.
      </li>

    </ul>

    <h3>Software Components</h3>

    <p>
      Software components define how devices communicate and
      how network resources are managed.
    </p>

    <ul class="network-points">

      <li>
        <strong>Network Protocols:</strong>
        Define rules for data communication.
      </li>

      <li>
        <strong>Network Operating System:</strong>
        Provides services for managing network resources,
        users, and devices.
      </li>

      <li>
        <strong>Network Services:</strong>
        Services such as DNS, DHCP, web servers, and file servers
        provide useful functions to network users.
      </li>

      <li>
        <strong>Security Software:</strong>
        Helps protect devices, data, and network traffic
        from unauthorized access.
      </li>

    </ul>

    <h3>Real-World Example</h3>

    <p>
      Consider a school computer laboratory with 30 computers.
      Each computer uses a network interface to connect to a
      switch. The switch connects the computers to a router,
      while the router provides access to the Internet.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Simple Example:</strong>
        Computer → NIC → Switch → Router → Internet.
        Each component performs a specific role in delivering
        data from the source device to its destination.
      </p>
    </div>

    <h3>Components Reference Table</h3>

    <table class="network-table">

      <thead>
        <tr>
          <th>Component</th>
          <th>Main Function</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Computer</td>
          <td>Sends and receives network data.</td>
          <td>Laptop, Desktop</td>
        </tr>

        <tr>
          <td>NIC</td>
          <td>Provides network connectivity.</td>
          <td>Ethernet NIC, Wi-Fi Adapter</td>
        </tr>

        <tr>
          <td>Switch</td>
          <td>Connects devices in a LAN.</td>
          <td>Ethernet Switch</td>
        </tr>

        <tr>
          <td>Router</td>
          <td>Connects different networks.</td>
          <td>Home Router</td>
        </tr>

        <tr>
          <td>Server</td>
          <td>Provides network services.</td>
          <td>Web Server, File Server</td>
        </tr>

        <tr>
          <td>Access Point</td>
          <td>Provides wireless network access.</td>
          <td>Wi-Fi Access Point</td>
        </tr>

        <tr>
          <td>Transmission Media</td>
          <td>Carries network signals.</td>
          <td>Ethernet, Fiber</td>
        </tr>

        <tr>
          <td>Protocol</td>
          <td>Defines communication rules.</td>
          <td>TCP/IP, HTTP, DNS</td>
        </tr>

      </tbody>

    </table>

    <h3>Conclusion</h3>

    <p>
      A computer network depends on hardware and software components
      working together. End devices generate and consume data,
      networking devices forward and connect traffic, transmission
      media carries signals, and protocols define how communication
      takes place.
    </p>
  `
},
"Network Criteria": {
  image: "craiteria.jpg",
  title: "Network Criteria",

  content: `
    <p>
      Network criteria are the main factors used to judge whether
      a computer network is working properly and efficiently.
      A good network should be fast, reliable, secure, and easy
      to manage.
    </p>

    <h3>Main Network Criteria</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-gauge-high"></i>
        <h4>Performance</h4>
        <p>
          Shows how quickly data is transferred through
          the network.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-shield-halved"></i>
        <h4>Security</h4>
        <p>
          Protects data and devices from unauthorized
          access and attacks.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-circle-check"></i>
        <h4>Reliability</h4>
        <p>
          Shows how consistently the network works
          without failures.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-expand"></i>
        <h4>Scalability</h4>
        <p>
          Shows how easily new devices and users
          can be added.
        </p>
      </div>

    </div>

    <h3>Easy Network Criteria Model</h3>

    <div class="network-criteria-model">

      <div class="criteria-center">
        <i class="fa-solid fa-network-wired"></i>
        <strong>NETWORK</strong>
      </div>

      <div class="criteria-item criteria-performance">
        <i class="fa-solid fa-gauge-high"></i>
        <span>Performance</span>
      </div>

      <div class="criteria-item criteria-security">
        <i class="fa-solid fa-shield-halved"></i>
        <span>Security</span>
      </div>

      <div class="criteria-item criteria-reliability">
        <i class="fa-solid fa-circle-check"></i>
        <span>Reliability</span>
      </div>

      <div class="criteria-item criteria-scalability">
        <i class="fa-solid fa-expand"></i>
        <span>Scalability</span>
      </div>

    </div>

    <h3>Simple Example</h3>

    <p>
      Suppose a school has a network with 30 computers.
      If the computers transfer data quickly, stay connected,
      protect student information, and allow more computers
      to be added easily, the network has good criteria.
    </p>

    <table class="network-table">
      <thead>
        <tr>
          <th>Criteria</th>
          <th>Simple Meaning</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Performance</td>
          <td>How fast the network works.</td>
        </tr>

        <tr>
          <td>Security</td>
          <td>How well the network protects data.</td>
        </tr>

        <tr>
          <td>Reliability</td>
          <td>How consistently the network works.</td>
        </tr>

        <tr>
          <td>Scalability</td>
          <td>How easily the network can grow.</td>
        </tr>
      </tbody>
    </table>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Remember:</strong>
        A good network should be
        <strong>Fast + Secure + Reliable + Scalable.</strong>
      </p>
    </div>

    <h3>Conclusion</h3>

    <p>
      Network criteria help us measure the quality of a network.
      Performance, security, reliability, and scalability are
      important factors for building an effective network.
    </p>
  `
},
"Network Architecture": {
  image: "networkArch.jpg",
  title: "Network Architecture",

  content: `
    <p>
      Network architecture is the overall design of a computer network.
      It describes how computers, servers, network devices, and software
      are connected and how they communicate with each other.
    </p>

    <h3>Types of Network Architecture</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-server"></i>
        <h4>Client-Server</h4>
        <p>
          Clients request services and a central server
          provides those services.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-users"></i>
        <h4>Peer-to-Peer</h4>
        <p>
          Computers communicate directly and can share
          resources with each other.
        </p>
      </div>

    </div>

    <h3>Client-Server Architecture</h3>

    <div class="network-architecture-model">

      <div class="architecture-device">
        <div class="architecture-icon">
          <i class="fa-solid fa-laptop"></i>
        </div>
        <strong>Client 1</strong>
      </div>

      <div class="architecture-device">
        <div class="architecture-icon">
          <i class="fa-solid fa-desktop"></i>
        </div>
        <strong>Client 2</strong>
      </div>

      <div class="architecture-server">
        <div class="architecture-server-icon">
          <i class="fa-solid fa-server"></i>
        </div>
        <strong>SERVER</strong>
        <span>Central Services</span>
      </div>

      <div class="architecture-device">
        <div class="architecture-icon">
          <i class="fa-solid fa-tablet-screen-button"></i>
        </div>
        <strong>Client 3</strong>
      </div>

    </div>

    <h3>How It Works</h3>

    <ol class="network-lesson-list">
      <li>Client sends a request to the server.</li>
      <li>Server processes the request.</li>
      <li>Server sends the required data or service back.</li>
    </ol>

    <h3>Simple Example</h3>

    <p>
      When you open a website, your computer or mobile acts as a
      client. It sends a request to the web server, and the server
      sends the requested webpage back to your device.
    </p>

    <table class="network-table">
      <thead>
        <tr>
          <th>Architecture</th>
          <th>Simple Meaning</th>
          <th>Example</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Client-Server</td>
          <td>Central server provides services to clients.</td>
          <td>Web Server</td>
        </tr>

        <tr>
          <td>Peer-to-Peer</td>
          <td>Devices share resources directly.</td>
          <td>File Sharing</td>
        </tr>
      </tbody>
    </table>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Remember:</strong>
        Client-Server means
        <strong>Client requests → Server responds.</strong>
      </p>
    </div>

    <h3>Conclusion</h3>

    <p>
      Network architecture defines how devices and services are
      organized in a network. Client-server architecture uses a
      central server, while peer-to-peer architecture allows devices
      to communicate and share resources directly.
    </p>
  `
},

"Client-Server Network": {
  image: "client.jpg",
  title: "Client-Server Network",

  content: `
    <p>
      A Client-Server Network is a network in which client devices
      request services or resources, and a central server provides
      those services.
    </p>

    <p>
      The server manages shared resources such as files, websites,
      databases, applications, and user accounts.
    </p>

    <h3>How Client-Server Network Works</h3>

    <div class="client-server-model">

      <div class="cs-device">
        <div class="cs-icon">
          <i class="fa-solid fa-laptop"></i>
        </div>
        <strong>Client 1</strong>
        <span>Request</span>
      </div>

      <div class="cs-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="cs-server">
        <div class="cs-server-icon">
          <i class="fa-solid fa-server"></i>
        </div>
        <strong>SERVER</strong>
        <span>Provides Services</span>
      </div>

      <div class="cs-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="cs-device">
        <div class="cs-icon">
          <i class="fa-solid fa-desktop"></i>
        </div>
        <strong>Client 2</strong>
        <span>Response</span>
      </div>

    </div>

    <h3>Main Components</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-computer"></i>
        <h4>Client</h4>
        <p>
          Requests data or services from the server.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-server"></i>
        <h4>Server</h4>
        <p>
          Processes requests and provides services.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-network-wired"></i>
        <h4>Network</h4>
        <p>
          Connects clients and servers for communication.
        </p>
      </div>

    </div>

    <h3>Simple Example</h3>

    <p>
      When a student opens a website on a computer, the computer
      acts as a client. It sends a request to the web server.
      The server processes the request and sends the webpage back
      to the student's computer.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Remember:</strong>
        Client asks for a service →
        Server processes the request →
        Server sends the response.
      </p>
    </div>

    <h3>Advantages</h3>

    <ul class="network-points">
      <li>Centralized management of network resources.</li>
      <li>Better control over users and data.</li>
      <li>Easy data backup and security management.</li>
      <li>Multiple clients can use the same server.</li>
    </ul>

    <table class="network-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Client</td>
          <td>Requests services or resources.</td>
        </tr>

        <tr>
          <td>Server</td>
          <td>Provides services and processes requests.</td>
        </tr>

        <tr>
          <td>Network</td>
          <td>Allows communication between clients and servers.</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>

    <p>
      A Client-Server Network uses a central server to provide
      services and resources to connected client devices.
      It is commonly used in schools, offices, banks, websites,
      and business networks.
    </p>
  `
},
"Peer-to-Peer Network": {
  image: "images/peer-to-peer-network.jpg",
  title: "Peer-to-Peer Network",

  content: `
    <p>
      A Peer-to-Peer (P2P) Network is a network in which computers
      communicate directly with each other without depending on
      a central server.
    </p>

    <p>
      Each computer can act as both a client and a server.
      It can share files, folders, printers, or other resources
      with other computers.
    </p>

    <h3>How Peer-to-Peer Network Works</h3>

    <div class="p2p-network-model">

      <div class="p2p-device p2p-one">
        <div class="p2p-icon">
          <i class="fa-solid fa-laptop"></i>
        </div>
        <strong>Peer 1</strong>
        <span>File Sharing</span>
      </div>

      <div class="p2p-device p2p-two">
        <div class="p2p-icon">
          <i class="fa-solid fa-desktop"></i>
        </div>
        <strong>Peer 2</strong>
        <span>Printer Sharing</span>
      </div>

      <div class="p2p-device p2p-three">
        <div class="p2p-icon">
          <i class="fa-solid fa-computer"></i>
        </div>
        <strong>Peer 3</strong>
        <span>Data Sharing</span>
      </div>

      <div class="p2p-device p2p-four">
        <div class="p2p-icon">
          <i class="fa-solid fa-tablet-screen-button"></i>
        </div>
        <strong>Peer 4</strong>
        <span>Resource Sharing</span>
      </div>

      <div class="p2p-center">
        <i class="fa-solid fa-share-nodes"></i>
        <strong>P2P</strong>
        <span>Direct Communication</span>
      </div>

    </div>

    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-users"></i>
        <h4>Equal Devices</h4>
        <p>
          All connected computers can share resources
          with each other.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-share-nodes"></i>
        <h4>Direct Sharing</h4>
        <p>
          Files and resources can be shared directly
          between peers.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-server"></i>
        <h4>No Central Server</h4>
        <p>
          A dedicated central server is not required
          for basic P2P communication.
        </p>
      </div>

    </div>

    <h3>Simple Example</h3>

    <p>
      Suppose four computers are connected in a small office.
      Computer 1 can share a file with Computer 2, while
      Computer 3 can share a printer with Computer 4.
      Every computer can provide and receive resources.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Remember:</strong>
        In P2P network,
        <strong>every computer can be both Client and Server.</strong>
      </p>
    </div>

    <h3>Advantages</h3>

    <ul class="network-points">
      <li>Easy to set up for small networks.</li>
      <li>No dedicated server is required.</li>
      <li>Resources can be shared directly.</li>
      <li>Useful for small offices and home networks.</li>
    </ul>

    <h3>Disadvantages</h3>

    <ul class="network-points">
      <li>Security can be difficult to manage.</li>
      <li>Data backup is not centralized.</li>
      <li>Performance can decrease as the network grows.</li>
    </ul>

    <table class="network-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>P2P Network</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Central Server</td>
          <td>Not required</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Peer-to-Peer</td>
        </tr>

        <tr>
          <td>Resource Sharing</td>
          <td>Direct between devices</td>
        </tr>

        <tr>
          <td>Best For</td>
          <td>Small networks</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>

    <p>
      A Peer-to-Peer network allows connected computers to
      communicate and share resources directly. It is simple
      and useful for small networks, but it becomes harder
      to manage as the number of devices increases.
    </p>
  `
},
"PAN": {
  image: "images/pan-network.jpg",
  title: "Personal Area Network (PAN)",

  content: `
    <p>
      A Personal Area Network (PAN) is a small network that connects
      devices around a single person. It is mainly used to share
      data and resources between personal devices.
    </p>

    <p>
      Devices such as smartphones, laptops, smartwatches, wireless
      earbuds, keyboards, and other personal devices can be connected
      together using technologies such as Bluetooth, USB, and Wi-Fi.
    </p>

    <h3>How Personal Area Network Works</h3>

    <div class="p2p-network-model">

      <div class="p2p-device p2p-one">
        <div class="p2p-icon">
          <i class="fa-solid fa-mobile-screen-button"></i>
        </div>
        <strong>Smartphone</strong>
        <span>Data Sharing</span>
      </div>

      <div class="p2p-device p2p-two">
        <div class="p2p-icon">
          <i class="fa-solid fa-clock"></i>
        </div>
        <strong>Smartwatch</strong>
        <span>Notifications</span>
      </div>

      <div class="p2p-device p2p-three">
        <div class="p2p-icon">
          <i class="fa-solid fa-headphones"></i>
        </div>
        <strong>Earbuds</strong>
        <span>Audio Sharing</span>
      </div>

      <div class="p2p-device p2p-four">
        <div class="p2p-icon">
          <i class="fa-solid fa-laptop"></i>
        </div>
        <strong>Laptop</strong>
        <span>File Sharing</span>
      </div>

      <div class="p2p-center">
        <i class="fa-solid fa-user"></i>
        <strong>PAN</strong>
        <span>Personal Network</span>
      </div>

    </div>

    <h3>Types of PAN</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-plug"></i>
        <h4>Wired PAN</h4>
        <p>
          Devices are connected using physical cables such as
          USB cables.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-brands fa-bluetooth"></i>
        <h4>Wireless PAN</h4>
        <p>
          Devices communicate wirelessly using technologies such
          as Bluetooth and Wi-Fi Direct.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-wifi"></i>
        <h4>Short Range</h4>
        <p>
          PAN normally covers a small area around a person,
          usually a few meters.
        </p>
      </div>

    </div>

    <h3>Technologies Used in PAN</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-brands fa-bluetooth"></i>
        <h4>Bluetooth</h4>
        <p>
          Used to connect smartphones, smartwatches, earbuds,
          keyboards, and other nearby devices.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-plug"></i>
        <h4>USB</h4>
        <p>
          Used for wired communication and data transfer
          between personal devices.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-wifi"></i>
        <h4>Wi-Fi Direct</h4>
        <p>
          Allows compatible devices to communicate directly
          without requiring a traditional Wi-Fi router.
        </p>
      </div>

    </div>

    <h3>Simple Example</h3>

    <p>
      Suppose you are using a smartphone connected to wireless
      earbuds and a smartwatch through Bluetooth. Your laptop
      may also be connected to your smartphone for transferring
      files.
    </p>

    <p>
      All these devices are close to you and communicate with
      your personal devices. This is a simple example of a
      Personal Area Network.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Remember:</strong>
        A PAN connects
        <strong>personal devices within a small area around a person.</strong>
      </p>
    </div>

    <h3>Real-Life Examples of PAN</h3>

    <ul class="network-points">
      <li>Connecting wireless earbuds to a smartphone using Bluetooth.</li>
      <li>Connecting a smartwatch to a smartphone.</li>
      <li>Connecting a wireless keyboard to a laptop.</li>
      <li>Transferring files between a smartphone and laptop.</li>
      <li>Connecting a smartphone to another device using Wi-Fi Direct.</li>
    </ul>

    <h3>Advantages</h3>

    <ul class="network-points">
      <li>Easy to set up and use.</li>
      <li>Requires a small area for communication.</li>
      <li>Useful for connecting personal devices.</li>
      <li>Wireless PAN can reduce the need for cables.</li>
      <li>Bluetooth devices generally consume low power.</li>
    </ul>

    <h3>Disadvantages</h3>

    <ul class="network-points">
      <li>Has a limited communication range.</li>
      <li>Wireless connections can be affected by interference.</li>
      <li>Connection speed may vary depending on the technology.</li>
      <li>Security should be considered when connecting wireless devices.</li>
    </ul>

    <table class="network-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>PAN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Full Form</td>
          <td>Personal Area Network</td>
        </tr>

        <tr>
          <td>Coverage Area</td>
          <td>Very Small Area</td>
        </tr>

        <tr>
          <td>Typical Range</td>
          <td>A few meters</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Wired or Wireless</td>
        </tr>

        <tr>
          <td>Common Technologies</td>
          <td>Bluetooth, USB, Wi-Fi Direct</td>
        </tr>

        <tr>
          <td>Best For</td>
          <td>Connecting Personal Devices</td>
        </tr>
      </tbody>
    </table>

    <h3>PAN vs LAN</h3>

    <table class="network-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>PAN</th>
          <th>LAN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Full Form</td>
          <td>Personal Area Network</td>
          <td>Local Area Network</td>
        </tr>

        <tr>
          <td>Area</td>
          <td>Very Small</td>
          <td>Building or Local Area</td>
        </tr>

        <tr>
          <td>Range</td>
          <td>A few meters</td>
          <td>Larger than PAN</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>Phone + Smartwatch + Earbuds</td>
          <td>Computers in a school lab</td>
        </tr>

        <tr>
          <td>Common Technologies</td>
          <td>Bluetooth, USB</td>
          <td>Ethernet, Wi-Fi</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>

    <p>
      A Personal Area Network (PAN) is a small network designed
      to connect personal devices around a person. It makes it
      easy to share data, audio, files, and other resources between
      nearby devices.
    </p>

    <p>
      Bluetooth is one of the most common technologies used in
      wireless PANs, making PAN useful in everyday devices such as
      smartphones, smartwatches, earbuds, keyboards, and laptops.
    </p>
  `
},
"LAN": {
  image: "images/lan-network.jpg",
  title: "Local Area Network (LAN)",

  content: `
    <p>
      A Local Area Network (LAN) is a network that connects
      computers and other devices within a small geographical area,
      such as a home, school, office, computer laboratory, or building.
    </p>

    <p>
      LAN allows connected devices to communicate with each other
      and share resources such as files, printers, applications,
      and network connections.
    </p>

    <h3>How Local Area Network Works</h3>

    <div class="lan-3d-network">

      <!-- Animated Network Ring -->
      <div class="lan-network-ring"></div>

      <!-- Network Switch -->
      <div class="lan-switch">
        <div class="lan-switch-icon">
          <i class="fa-solid fa-network-wired"></i>
        </div>
        <strong>Network Switch</strong>
        <span>Central Connection</span>

        <div class="lan-ports">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- PC -->
      <div class="lan-device lan-pc">
        <div class="lan-device-icon">
          <i class="fa-solid fa-desktop"></i>
        </div>
        <strong>PC 1</strong>
        <span>File Sharing</span>
      </div>

      <!-- Laptop -->
      <div class="lan-device lan-laptop">
        <div class="lan-device-icon">
          <i class="fa-solid fa-laptop"></i>
        </div>
        <strong>Laptop</strong>
        <span>Internet Access</span>
      </div>

      <!-- Server -->
      <div class="lan-device lan-server">
        <div class="lan-device-icon">
          <i class="fa-solid fa-server"></i>
        </div>
        <strong>Server</strong>
        <span>Data Storage</span>
      </div>

      <!-- Printer -->
      <div class="lan-device lan-printer">
        <div class="lan-device-icon">
          <i class="fa-solid fa-print"></i>
        </div>
        <strong>Printer</strong>
        <span>Print Sharing</span>
      </div>

      <!-- Second PC -->
      <div class="lan-device lan-pc2">
        <div class="lan-device-icon">
          <i class="fa-solid fa-computer"></i>
        </div>
        <strong>PC 2</strong>
        <span>Data Sharing</span>
      </div>

      <!-- Network Labels -->
      <div class="lan-label">
        <i class="fa-solid fa-building"></i>
        <span>Local Area</span>
      </div>

    </div>

    <h3>How Devices Communicate</h3>

    <p>
      In a typical LAN, devices are connected to a network switch
      using Ethernet cables or connected wirelessly through Wi-Fi.
      The switch helps forward data between the connected devices.
    </p>

    <div class="lan-flow">

      <div class="lan-flow-step">
        <div class="lan-flow-icon">
          <i class="fa-solid fa-computer"></i>
        </div>
        <strong>PC 1</strong>
        <span>Sends Data</span>
      </div>

      <div class="lan-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="lan-flow-step active">
        <div class="lan-flow-icon">
          <i class="fa-solid fa-network-wired"></i>
        </div>
        <strong>Switch</strong>
        <span>Forwards Data</span>
      </div>

      <div class="lan-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="lan-flow-step">
        <div class="lan-flow-icon">
          <i class="fa-solid fa-server"></i>
        </div>
        <strong>Server</strong>
        <span>Receives Data</span>
      </div>

    </div>

    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-location-dot"></i>
        <h4>Small Area</h4>
        <p>
          LAN normally covers a limited area such as a room,
          building, school, or office.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-gauge-high"></i>
        <h4>High Speed</h4>
        <p>
          LAN can provide fast communication and data transfer
          between connected devices.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-share-nodes"></i>
        <h4>Resource Sharing</h4>
        <p>
          Devices can share files, printers, applications,
          and other network resources.
        </p>
      </div>

    </div>

    <h3>Common LAN Technologies</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-ethernet"></i>
        <h4>Ethernet</h4>
        <p>
          Ethernet uses network cables to connect devices
          within a LAN.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-wifi"></i>
        <h4>Wi-Fi</h4>
        <p>
          Wi-Fi allows devices to connect to the LAN wirelessly.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-network-wired"></i>
        <h4>Switching</h4>
        <p>
          Network switches connect multiple devices and
          forward data to the appropriate device.
        </p>
      </div>

    </div>

    <h3>Simple Example</h3>

    <p>
      Imagine a computer laboratory containing 20 computers,
      one printer, and a server. All computers are connected
      through a network switch.
    </p>

    <p>
      Students can access files stored on the server, send
      documents to the shared printer, and communicate with
      other computers. Since all these devices are located
      within the same laboratory, this is an example of a LAN.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <p>
        <strong>Remember:</strong>
        LAN connects multiple devices
        <strong>within a limited geographical area.</strong>
      </p>
    </div>

    <h3>Real-Life Examples of LAN</h3>

    <ul class="network-points">
      <li>Computers connected in a school computer laboratory.</li>
      <li>Computers and printers connected in an office.</li>
      <li>Devices connected to a home Wi-Fi network.</li>
      <li>Computers connected within a college campus building.</li>
      <li>Devices connected inside a small business network.</li>
    </ul>

    <h3>Advantages</h3>

    <ul class="network-points">
      <li>High-speed data transfer.</li>
      <li>Easy sharing of files and resources.</li>
      <li>Printers and other devices can be shared.</li>
      <li>Easy communication between connected devices.</li>
      <li>Usually easier to manage than larger networks.</li>
    </ul>

    <h3>Disadvantages</h3>

    <ul class="network-points">
      <li>Limited geographical coverage.</li>
      <li>Initial setup may require networking equipment.</li>
      <li>Network failure can affect connected devices.</li>
      <li>Security must be properly managed.</li>
    </ul>

    <table class="network-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>LAN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Full Form</td>
          <td>Local Area Network</td>
        </tr>

        <tr>
          <td>Coverage Area</td>
          <td>Small Local Area</td>
        </tr>

        <tr>
          <td>Examples</td>
          <td>School, Office, Home, Computer Lab</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Wired or Wireless</td>
        </tr>

        <tr>
          <td>Common Technologies</td>
          <td>Ethernet and Wi-Fi</td>
        </tr>

        <tr>
          <td>Common Device</td>
          <td>Network Switch</td>
        </tr>

        <tr>
          <td>Best For</td>
          <td>Connecting Devices in a Local Area</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>

    <p>
      A Local Area Network (LAN) connects computers and other
      devices within a limited geographical area. It provides
      fast communication and allows users to share files,
      printers, applications, and other resources.
    </p>

    <p>
      LANs are commonly used in homes, schools, offices,
      computer laboratories, and small organizations.
    </p>
  `
},
"LAN": {
  image: "LAN.png",
  title: "Local Area Network (LAN)",

  content: `
    <p>
      A Local Area Network (LAN) is a network that connects
      computers and other devices within a small geographical
      area such as a home, school, office, or computer laboratory.
    </p>

    <p>
      LAN allows connected devices to communicate with each other
      and share resources such as files, printers, applications,
      and internet connections.
    </p>

    <h3>3D Example of LAN</h3>

    <div class="lan-visual-3d">

      <div class="lan-visual-header">
        <div>
          <span class="lan-small-label">
            <i class="fa-solid fa-network-wired"></i>
            NETWORK MODEL
          </span>

          <h4>Local Area Network</h4>

          <p>
            Multiple devices connected within one local area
          </p>
        </div>

        <div class="lan-status">
          <span class="lan-status-dot"></span>
          Connected
        </div>
      </div>

      <div class="lan-3d-image-box">

        <img
          src="images/lan-network.png"
          alt="3D Local Area Network"
          class="lan-3d-image"
        />

        <div class="lan-image-label lan-label-server">
          <i class="fa-solid fa-server"></i>
          Server
        </div>

        <div class="lan-image-label lan-label-switch">
          <i class="fa-solid fa-network-wired"></i>
          Switch
        </div>

        <div class="lan-image-label lan-label-pc">
          <i class="fa-solid fa-computer"></i>
          Computers
        </div>

        <div class="lan-image-label lan-label-printer">
          <i class="fa-solid fa-print"></i>
          Printer
        </div>

      </div>

      <div class="lan-visual-footer">

        <div>
          <i class="fa-solid fa-computer"></i>
          <span>Computers</span>
        </div>

        <div>
          <i class="fa-solid fa-server"></i>
          <span>Server</span>
        </div>

        <div>
          <i class="fa-solid fa-network-wired"></i>
          <span>Network</span>
        </div>

        <div>
          <i class="fa-solid fa-print"></i>
          <span>Printer</span>
        </div>

      </div>

    </div>


    <h3>How LAN Works</h3>

    <p>
      In a LAN, different devices are connected using network
      equipment such as switches, routers, and wireless access
      points. These devices allow computers to communicate and
      exchange data.
    </p>


    <div class="lan-steps-3d">

      <div class="lan-step-card">
        <div class="lan-step-number">01</div>

        <div class="lan-step-icon">
          <i class="fa-solid fa-computer"></i>
        </div>

        <h4>Connect Devices</h4>

        <p>
          Computers, laptops, printers and servers are connected
          to the local network.
        </p>
      </div>


      <div class="lan-step-connector">
        <i class="fa-solid fa-chevron-right"></i>
      </div>


      <div class="lan-step-card featured">
        <div class="lan-step-number">02</div>

        <div class="lan-step-icon">
          <i class="fa-solid fa-network-wired"></i>
        </div>

        <h4>Network Communication</h4>

        <p>
          A switch or wireless network allows devices to
          communicate with each other.
        </p>
      </div>


      <div class="lan-step-connector">
        <i class="fa-solid fa-chevron-right"></i>
      </div>


      <div class="lan-step-card">
        <div class="lan-step-number">03</div>

        <div class="lan-step-icon">
          <i class="fa-solid fa-share-nodes"></i>
        </div>

        <h4>Share Resources</h4>

        <p>
          Users can share files, printers, applications,
          and other resources.
        </p>
      </div>

    </div>


    <h3>Simple Real-Life Example</h3>

    <p>
      Imagine a school computer laboratory with 20 computers,
      one server, and a shared printer. All computers are
      connected to the same local network.
    </p>

    <p>
      When a student sends a document to the printer, the data
      travels through the LAN and reaches the shared printer.
      Students can also access files stored on the server.
    </p>


    <div class="lan-data-animation">

      <div class="lan-data-device">
        <div>
          <i class="fa-solid fa-computer"></i>
        </div>

        <strong>Computer</strong>
        <span>Send Data</span>
      </div>


      <div class="lan-data-path">
        <span></span>
        <i class="fa-solid fa-arrow-right"></i>
        <span></span>
      </div>


      <div class="lan-data-device lan-data-switch">
        <div>
          <i class="fa-solid fa-network-wired"></i>
        </div>

        <strong>Switch</strong>
        <span>Forward Data</span>
      </div>


      <div class="lan-data-path">
        <span></span>
        <i class="fa-solid fa-arrow-right"></i>
        <span></span>
      </div>


      <div class="lan-data-device">
        <div>
          <i class="fa-solid fa-print"></i>
        </div>

        <strong>Printer</strong>
        <span>Receive Data</span>
      </div>

    </div>


    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Remember:</strong>
        LAN is used to connect devices within a
        <strong>small geographical area</strong>
        such as a home, school, office, or computer laboratory.
      </p>

    </div>


    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-location-dot"></i>

        <h4>Small Area</h4>

        <p>
          LAN covers a limited geographical area such as
          a building, room, school, or office.
        </p>
      </div>


      <div class="network-3d-box">
        <i class="fa-solid fa-gauge-high"></i>

        <h4>High Speed</h4>

        <p>
          LAN provides fast communication and data transfer
          between connected devices.
        </p>
      </div>


      <div class="network-3d-box">
        <i class="fa-solid fa-share-nodes"></i>

        <h4>Resource Sharing</h4>

        <p>
          Files, printers, applications and other resources
          can be shared between devices.
        </p>
      </div>

    </div>


    <h3>Common LAN Technologies</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">

        <i class="fa-solid fa-ethernet"></i>

        <h4>Ethernet</h4>

        <p>
          Ethernet uses network cables to connect devices
          within a LAN.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-wifi"></i>

        <h4>Wi-Fi</h4>

        <p>
          Wi-Fi allows devices to connect to a LAN
          wirelessly.
        </p>

      </div>

    </div>


    <h3>Advantages</h3>

    <ul class="network-points">

      <li>High-speed communication.</li>

      <li>Easy file and resource sharing.</li>

      <li>Printers can be shared by multiple users.</li>

      <li>Easy communication between connected devices.</li>

      <li>Suitable for homes, schools and offices.</li>

    </ul>


    <h3>Disadvantages</h3>

    <ul class="network-points">

      <li>Limited geographical coverage.</li>

      <li>Network setup may require additional hardware.</li>

      <li>Security must be properly managed.</li>

      <li>Network failure can affect connected devices.</li>

    </ul>


    <table class="network-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>LAN</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Full Form</td>
          <td>Local Area Network</td>
        </tr>

        <tr>
          <td>Coverage Area</td>
          <td>Small geographical area</td>
        </tr>

        <tr>
          <td>Examples</td>
          <td>Home, School, Office, Computer Lab</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Wired or Wireless</td>
        </tr>

        <tr>
          <td>Common Technologies</td>
          <td>Ethernet and Wi-Fi</td>
        </tr>

        <tr>
          <td>Common Device</td>
          <td>Network Switch</td>
        </tr>

      </tbody>

    </table>


    <h3>Conclusion</h3>

    <p>
      A Local Area Network (LAN) connects multiple devices
      within a limited geographical area. It allows devices
      to communicate with each other and share resources such
      as files, printers, servers, applications, and internet
      connections.
    </p>
  `
},
"CAN": {
  image: "CAN.webp",
  title: "Campus Area Network (CAN)",

  content: `
    <p>
      A Campus Area Network (CAN) is a network that connects
      multiple Local Area Networks (LANs) within a limited
      geographical area such as a college campus, university,
      hospital, or large organization.
    </p>

    <p>
      CAN is larger than a LAN but smaller than a MAN. It allows
      different buildings and departments within the same campus
      to communicate and share network resources.
    </p>

    <h3>3D Example of Campus Area Network</h3>

    <div class="can-campus-3d">

      <div class="can-campus-title">
        <i class="fa-solid fa-building-columns"></i>

        <div>
          <strong>University Campus Network</strong>
          <span>Multiple Buildings Connected Together</span>
        </div>

        <div class="can-live">
          <span></span>
          Network Active
        </div>
      </div>


      <div class="can-campus-area">

        <!-- Main Network -->
        <div class="can-main-network">
          <div class="can-network-core">
            <i class="fa-solid fa-network-wired"></i>
            <strong>Campus Network</strong>
            <span>CAN Core</span>
          </div>
        </div>


        <!-- Computer Lab -->
        <div class="can-building can-lab">

          <div class="can-building-roof"></div>

          <div class="can-building-icon">
            <i class="fa-solid fa-computer"></i>
          </div>

          <strong>Computer Lab</strong>
          <span>LAN 1</span>

          <div class="can-windows">
            <i></i><i></i><i></i>
          </div>

        </div>


        <!-- Library -->
        <div class="can-building can-library">

          <div class="can-building-roof"></div>

          <div class="can-building-icon">
            <i class="fa-solid fa-book"></i>
          </div>

          <strong>Library</strong>
          <span>LAN 2</span>

          <div class="can-windows">
            <i></i><i></i><i></i>
          </div>

        </div>


        <!-- Administration -->
        <div class="can-building can-admin">

          <div class="can-building-roof"></div>

          <div class="can-building-icon">
            <i class="fa-solid fa-building"></i>
          </div>

          <strong>Administration</strong>
          <span>LAN 3</span>

          <div class="can-windows">
            <i></i><i></i><i></i>
          </div>

        </div>


        <!-- Hostel -->
        <div class="can-building can-hostel">

          <div class="can-building-roof"></div>

          <div class="can-building-icon">
            <i class="fa-solid fa-house"></i>
          </div>

          <strong>Hostel</strong>
          <span>LAN 4</span>

          <div class="can-windows">
            <i></i><i></i><i></i>
          </div>

        </div>


        <!-- Internet -->
        <div class="can-internet">

          <i class="fa-solid fa-globe"></i>

          <strong>Internet</strong>

        </div>

      </div>


      <div class="can-legend">

        <div>
          <span class="can-dot"></span>
          Computer Lab
        </div>

        <div>
          <span class="can-dot"></span>
          Library
        </div>

        <div>
          <span class="can-dot"></span>
          Administration
        </div>

        <div>
          <span class="can-dot"></span>
          Hostel
        </div>

      </div>

    </div>


    <h3>How Campus Area Network Works</h3>

    <p>
      A CAN connects several LANs located in different buildings
      of the same campus. High-speed network links connect these
      LANs to a common campus network.
    </p>


    <div class="can-working-flow">

      <div class="can-flow-card">

        <div class="can-flow-number">01</div>

        <i class="fa-solid fa-building"></i>

        <h4>Different Buildings</h4>

        <p>
          Each building can have its own LAN for computers,
          printers, servers and other devices.
        </p>

      </div>


      <div class="can-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="can-flow-card featured">

        <div class="can-flow-number">02</div>

        <i class="fa-solid fa-network-wired"></i>

        <h4>Campus Network</h4>

        <p>
          The individual LANs are connected together through
          the campus backbone network.
        </p>

      </div>


      <div class="can-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="can-flow-card">

        <div class="can-flow-number">03</div>

        <i class="fa-solid fa-share-nodes"></i>

        <h4>Resource Sharing</h4>

        <p>
          Users can communicate and access shared resources
          across different buildings.
        </p>

      </div>

    </div>


    <h3>Simple Real-Life Example</h3>

    <p>
      Imagine a university campus containing a Computer Science
      building, Library, Administration building and Student Hostel.
    </p>

    <p>
      Each building has its own LAN. These LANs are connected
      together through a high-speed campus network. Students and
      staff can access authorized servers, applications and other
      network resources from different buildings.
    </p>


    <div class="can-data-flow">

      <div class="can-data-device">

        <i class="fa-solid fa-computer"></i>

        <strong>Computer Lab</strong>

        <span>LAN 1</span>

      </div>


      <div class="can-flow-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="can-data-device central">

        <i class="fa-solid fa-network-wired"></i>

        <strong>Campus Core</strong>

        <span>CAN</span>

      </div>


      <div class="can-flow-line">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="can-data-device">

        <i class="fa-solid fa-book"></i>

        <strong>Library</strong>

        <span>LAN 2</span>

      </div>

    </div>


    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Remember:</strong>
        CAN connects
        <strong>multiple LANs within a campus or organization.</strong>
      </p>

    </div>


    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">

        <i class="fa-solid fa-building-columns"></i>

        <h4>Campus Coverage</h4>

        <p>
          CAN covers multiple buildings within a campus,
          university, hospital, or organization.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-network-wired"></i>

        <h4>Connects LANs</h4>

        <p>
          Multiple Local Area Networks can be connected
          together to form a campus network.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-gauge-high"></i>

        <h4>High Speed</h4>

        <p>
          CAN generally uses high-speed connections
          between different buildings.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-share-nodes"></i>

        <h4>Resource Sharing</h4>

        <p>
          Users can share servers, applications, files
          and other resources across the campus.
        </p>

      </div>

    </div>


    <h3>Where is CAN Used?</h3>

    <ul class="network-points">

      <li>Universities and colleges.</li>

      <li>Large school campuses.</li>

      <li>Hospitals and medical campuses.</li>

      <li>Research institutions.</li>

      <li>Large corporate campuses.</li>

    </ul>


    <h3>Advantages</h3>

    <ul class="network-points">

      <li>Connects multiple LANs together.</li>

      <li>Provides fast communication across the campus.</li>

      <li>Allows resource sharing between buildings.</li>

      <li>Centralized network management is possible.</li>

      <li>Useful for universities and large organizations.</li>

    </ul>


    <h3>Disadvantages</h3>

    <ul class="network-points">

      <li>More expensive than a small LAN.</li>

      <li>Requires additional networking equipment.</li>

      <li>Network management can be complex.</li>

      <li>Security must be carefully managed.</li>

    </ul>


    <table class="network-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>CAN</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Full Form</td>
          <td>Campus Area Network</td>
        </tr>

        <tr>
          <td>Coverage Area</td>
          <td>Campus or Organization</td>
        </tr>

        <tr>
          <td>Connects</td>
          <td>Multiple LANs</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>University Campus</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Wired or Wireless</td>
        </tr>

        <tr>
          <td>Purpose</td>
          <td>Connect Different Buildings</td>
        </tr>

      </tbody>

    </table>


    <h3>CAN vs LAN</h3>

    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>LAN</th>
          <th>CAN</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Coverage</td>
          <td>Small Area</td>
          <td>Campus Area</td>
        </tr>

        <tr>
          <td>Connects</td>
          <td>Devices</td>
          <td>Multiple LANs</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>Computer Lab</td>
          <td>University Campus</td>
        </tr>

        <tr>
          <td>Size</td>
          <td>Smaller</td>
          <td>Larger than LAN</td>
        </tr>

      </tbody>

    </table>


    <h3>Conclusion</h3>

    <p>
      A Campus Area Network (CAN) connects multiple Local Area
      Networks within a limited campus or organizational area.
      It provides fast communication and allows users in different
      buildings to share network resources.
    </p>

    <p>
      A university campus is a common example where separate
      LANs in classrooms, laboratories, libraries, offices and
      hostels are connected to form a CAN.
    </p>
  `
},
"MAN": {
  image: "MAN.jpg",
  title: "Metropolitan Area Network (MAN)",

  content: `
    <p>
      A Metropolitan Area Network (MAN) is a network that
      connects computers and different Local Area Networks (LANs)
      across a city or large metropolitan area.
    </p>

    <p>
      MAN is larger than a LAN and CAN, but generally smaller
      than a WAN. It is commonly used to connect offices,
      universities, hospitals, government buildings and other
      organizations within the same city.
    </p>


    <h3>3D Example of Metropolitan Area Network</h3>

    <div class="man-city-3d">

      <div class="man-city-header">

        <div class="man-title-area">

          <div class="man-title-icon">
            <i class="fa-solid fa-city"></i>
          </div>

          <div>
            <strong>Smart City Network</strong>
            <span>Multiple Locations Connected Across One City</span>
          </div>

        </div>

        <div class="man-status">
          <span></span>
          City Network Active
        </div>

      </div>


      <div class="man-city-map">

        <!-- Main Backbone -->

        <div class="man-backbone man-backbone-1"></div>
        <div class="man-backbone man-backbone-2"></div>
        <div class="man-backbone man-backbone-3"></div>
        <div class="man-backbone man-backbone-4"></div>


        <!-- Central Network -->

        <div class="man-network-core">

          <div class="man-core-glow"></div>

          <i class="fa-solid fa-network-wired"></i>

          <strong>MAN Core</strong>

          <span>City Network</span>

        </div>


        <!-- Business Office -->

        <div class="man-city-building man-office">

          <div class="man-building-top"></div>

          <div class="man-building-icon">
            <i class="fa-solid fa-building"></i>
          </div>

          <strong>Business Office</strong>

          <span>LAN</span>

          <div class="man-building-lights">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- University -->

        <div class="man-city-building man-university">

          <div class="man-building-top"></div>

          <div class="man-building-icon">
            <i class="fa-solid fa-building-columns"></i>
          </div>

          <strong>University</strong>

          <span>LAN</span>

          <div class="man-building-lights">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- Hospital -->

        <div class="man-city-building man-hospital">

          <div class="man-building-top"></div>

          <div class="man-building-icon">
            <i class="fa-solid fa-hospital"></i>
          </div>

          <strong>Hospital</strong>

          <span>LAN</span>

          <div class="man-building-lights">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- Data Center -->

        <div class="man-city-building man-data">

          <div class="man-building-top"></div>

          <div class="man-building-icon">
            <i class="fa-solid fa-server"></i>
          </div>

          <strong>Data Center</strong>

          <span>Server Network</span>

          <div class="man-building-lights">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- Internet -->

        <div class="man-internet">

          <i class="fa-solid fa-globe"></i>

          <strong>Internet</strong>

        </div>

      </div>


      <div class="man-city-legend">

        <div>
          <span></span>
          Business
        </div>

        <div>
          <span></span>
          University
        </div>

        <div>
          <span></span>
          Hospital
        </div>

        <div>
          <span></span>
          Data Center
        </div>

      </div>

    </div>


    <h3>How MAN Works</h3>

    <p>
      A MAN connects multiple LANs located at different places
      within a city. These networks are connected using
      high-speed communication links such as fiber-optic cables,
      wireless links or other metropolitan network technologies.
    </p>


    <div class="man-working-flow">

      <div class="man-flow-card">

        <span class="man-flow-number">01</span>

        <div class="man-flow-icon">
          <i class="fa-solid fa-building"></i>
        </div>

        <h4>Local Networks</h4>

        <p>
          Offices, universities, hospitals and organizations
          have their own LANs.
        </p>

      </div>


      <div class="man-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="man-flow-card man-featured">

        <span class="man-flow-number">02</span>

        <div class="man-flow-icon">
          <i class="fa-solid fa-tower-broadcast"></i>
        </div>

        <h4>City Backbone</h4>

        <p>
          High-speed links connect different LANs across
          the metropolitan area.
        </p>

      </div>


      <div class="man-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="man-flow-card">

        <span class="man-flow-number">03</span>

        <div class="man-flow-icon">
          <i class="fa-solid fa-share-nodes"></i>
        </div>

        <h4>Communication</h4>

        <p>
          Connected organizations can exchange data and
          access shared network services.
        </p>

      </div>

    </div>


    <h3>Simple Real-Life Example</h3>

    <p>
      Suppose a company has several offices located in different
      parts of the same city. Each office has its own LAN.
    </p>

    <p>
      A MAN can connect these offices together so that employees
      can securely communicate, access company servers and share
      information between different locations.
    </p>


    <div class="man-data-flow">

      <div class="man-data-device">

        <i class="fa-solid fa-building"></i>

        <strong>Office A</strong>

        <span>LAN</span>

      </div>


      <div class="man-data-line">
        <span></span>
        <i class="fa-solid fa-arrow-right"></i>
        <span></span>
      </div>


      <div class="man-data-device man-central">

        <i class="fa-solid fa-city"></i>

        <strong>City MAN</strong>

        <span>Metropolitan Network</span>

      </div>


      <div class="man-data-line">
        <span></span>
        <i class="fa-solid fa-arrow-right"></i>
        <span></span>
      </div>


      <div class="man-data-device">

        <i class="fa-solid fa-building"></i>

        <strong>Office B</strong>

        <span>LAN</span>

      </div>

    </div>


    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Remember:</strong>
        MAN connects
        <strong>multiple LANs across a city or metropolitan area.</strong>
      </p>

    </div>


    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">

        <i class="fa-solid fa-city"></i>

        <h4>City-Wide Coverage</h4>

        <p>
          MAN covers a larger area such as a city or
          metropolitan region.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-network-wired"></i>

        <h4>Connects LANs</h4>

        <p>
          It connects multiple LANs located at
          different places within a city.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-gauge-high"></i>

        <h4>High Speed</h4>

        <p>
          MAN commonly uses high-speed communication
          links for connecting locations.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-building"></i>

        <h4>Multiple Organizations</h4>

        <p>
          Businesses, universities, hospitals and
          government offices can use MAN.
        </p>

      </div>

    </div>


    <h3>Where is MAN Used?</h3>

    <ul class="network-points">

      <li>Large companies with multiple city offices.</li>

      <li>Universities with multiple locations.</li>

      <li>Government departments within a city.</li>

      <li>Hospitals and medical organizations.</li>

      <li>Internet and telecommunication providers.</li>

    </ul>


    <h3>Advantages</h3>

    <ul class="network-points">

      <li>Connects networks across a city.</li>

      <li>Provides high-speed communication.</li>

      <li>Allows data sharing between different locations.</li>

      <li>Can connect multiple organizations or branches.</li>

      <li>Larger coverage than LAN and CAN.</li>

    </ul>


    <h3>Disadvantages</h3>

    <ul class="network-points">

      <li>More expensive than a LAN.</li>

      <li>Network management can be complex.</li>

      <li>Requires specialized networking equipment.</li>

      <li>Security needs careful planning.</li>

    </ul>


    <table class="network-table">

      <thead>
        <tr>
          <th>Feature</th>
          <th>MAN</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Full Form</td>
          <td>Metropolitan Area Network</td>
        </tr>

        <tr>
          <td>Coverage</td>
          <td>City or Metropolitan Area</td>
        </tr>

        <tr>
          <td>Connects</td>
          <td>Multiple LANs</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>City-Wide Company Network</td>
        </tr>

        <tr>
          <td>Speed</td>
          <td>Generally High</td>
        </tr>

        <tr>
          <td>Size</td>
          <td>Larger than LAN and CAN</td>
        </tr>

      </tbody>

    </table>


    <h3>MAN vs CAN</h3>

    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>CAN</th>
          <th>MAN</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Coverage</td>
          <td>Campus</td>
          <td>City</td>
        </tr>

        <tr>
          <td>Connects</td>
          <td>Buildings within a campus</td>
          <td>Networks across a city</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>University Campus</td>
          <td>City-Wide Offices</td>
        </tr>

        <tr>
          <td>Size</td>
          <td>Smaller</td>
          <td>Larger</td>
        </tr>

      </tbody>

    </table>


    <h3>Conclusion</h3>

    <p>
      A Metropolitan Area Network (MAN) connects multiple LANs
      across a city or metropolitan area. It provides fast
      communication between different offices, universities,
      hospitals and other organizations.
    </p>

    <p>
      In simple words, if LAN connects devices in one local area
      and CAN connects buildings in one campus, MAN connects
      networks across a city.
    </p>
  `
},
"WAN": {
  image: "WAN.jpg",
  title: "Wide Area Network (WAN)",

  content: `
    <p>
      A Wide Area Network (WAN) is a network that connects
      computers and smaller networks over a very large
      geographical area such as different cities, states,
      countries, or even continents.
    </p>

    <p>
      WAN is larger than LAN, CAN, and MAN. It uses
      communication technologies such as fiber-optic cables,
      satellites, leased lines, cellular networks, and the
      Internet to connect distant locations.
    </p>


    <h3>3D Example of Wide Area Network</h3>

    <div class="wan-world-3d">

      <div class="wan-header">

        <div class="wan-title">

          <div class="wan-title-icon">
            <i class="fa-solid fa-earth-americas"></i>
          </div>

          <div>
            <strong>Global Wide Area Network</strong>
            <span>Connecting Cities, Countries & Continents</span>
          </div>

        </div>

        <div class="wan-status">
          <span></span>
          Global Network Active
        </div>

      </div>


      <div class="wan-global-map">

        <!-- Global Network Lines -->

        <div class="wan-orbit wan-orbit-one"></div>
        <div class="wan-orbit wan-orbit-two"></div>
        <div class="wan-orbit wan-orbit-three"></div>


        <!-- Connection Lines -->

        <div class="wan-line wan-line-1"></div>
        <div class="wan-line wan-line-2"></div>
        <div class="wan-line wan-line-3"></div>
        <div class="wan-line wan-line-4"></div>
        <div class="wan-line wan-line-5"></div>
        <div class="wan-line wan-line-6"></div>


        <!-- Central Earth -->

        <div class="wan-earth">

          <div class="wan-earth-glow"></div>

          <i class="fa-solid fa-earth-americas"></i>

          <strong>WAN</strong>

          <span>Global Network</span>

        </div>


        <!-- North America -->

        <div class="wan-location wan-america">

          <div class="wan-location-icon">
            <i class="fa-solid fa-building"></i>
          </div>

          <strong>New York</strong>

          <span>USA</span>

          <small>LAN / MAN</small>

        </div>


        <!-- Europe -->

        <div class="wan-location wan-europe">

          <div class="wan-location-icon">
            <i class="fa-solid fa-city"></i>
          </div>

          <strong>London</strong>

          <span>UK</span>

          <small>LAN / MAN</small>

        </div>


        <!-- Asia -->

        <div class="wan-location wan-asia">

          <div class="wan-location-icon">
            <i class="fa-solid fa-building-columns"></i>
          </div>

          <strong>Delhi</strong>

          <span>India</span>

          <small>LAN / MAN</small>

        </div>


        <!-- Australia -->

        <div class="wan-location wan-australia">

          <div class="wan-location-icon">
            <i class="fa-solid fa-house"></i>
          </div>

          <strong>Sydney</strong>

          <span>Australia</span>

          <small>LAN / MAN</small>

        </div>


        <!-- Japan -->

        <div class="wan-location wan-japan">

          <div class="wan-location-icon">
            <i class="fa-solid fa-server"></i>
          </div>

          <strong>Tokyo</strong>

          <span>Japan</span>

          <small>Data Center</small>

        </div>


        <!-- Satellite -->

        <div class="wan-satellite">

          <i class="fa-solid fa-satellite"></i>

          <span>Satellite Link</span>

        </div>

      </div>


      <div class="wan-legend">

        <div>
          <span></span>
          City Network
        </div>

        <div>
          <span></span>
          Global Connection
        </div>

        <div>
          <span></span>
          Data Center
        </div>

        <div>
          <span></span>
          Satellite Link
        </div>

      </div>

    </div>


    <h3>How WAN Works</h3>

    <p>
      WAN connects networks that are located far away from each
      other. A local network in one city can communicate with
      another network in a different city or country through
      long-distance communication links.
    </p>


    <div class="wan-working-flow">

      <div class="wan-flow-card">

        <span class="wan-number">01</span>

        <div class="wan-flow-icon">
          <i class="fa-solid fa-house-laptop"></i>
        </div>

        <h4>Local Network</h4>

        <p>
          Devices in an office, home, college or organization
          first connect through a local network.
        </p>

      </div>


      <div class="wan-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="wan-flow-card wan-featured">

        <span class="wan-number">02</span>

        <div class="wan-flow-icon">
          <i class="fa-solid fa-tower-broadcast"></i>
        </div>

        <h4>Long-Distance Link</h4>

        <p>
          Routers and communication links carry data between
          distant cities and countries.
        </p>

      </div>


      <div class="wan-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="wan-flow-card">

        <span class="wan-number">03</span>

        <div class="wan-flow-icon">
          <i class="fa-solid fa-earth-americas"></i>
        </div>

        <h4>Remote Network</h4>

        <p>
          The destination network receives the data and
          delivers it to the required device.
        </p>

      </div>

    </div>


    <h3>Simple Real-Life Example</h3>

    <p>
      Suppose a multinational company has offices in India,
      the United States, the United Kingdom and Australia.
      Each office may have its own LAN.
    </p>

    <p>
      A WAN can connect these distant office networks so that
      employees can communicate, access company servers,
      exchange files and use applications from different
      countries.
    </p>


    <div class="wan-data-flow">

      <div class="wan-data-device">

        <i class="fa-solid fa-building"></i>

        <strong>India Office</strong>

        <span>LAN</span>

      </div>


      <div class="wan-flow-line">
        <i class="fa-solid fa-globe"></i>
      </div>


      <div class="wan-data-device wan-central">

        <i class="fa-solid fa-earth-americas"></i>

        <strong>Global WAN</strong>

        <span>Long-Distance Network</span>

      </div>


      <div class="wan-flow-line">
        <i class="fa-solid fa-globe"></i>
      </div>


      <div class="wan-data-device">

        <i class="fa-solid fa-building"></i>

        <strong>USA Office</strong>

        <span>LAN</span>

      </div>

    </div>


    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Remember:</strong>
        WAN connects
        <strong>networks over very large geographical areas.</strong>
      </p>

    </div>


    <h3>Communication Technologies Used in WAN</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">

        <i class="fa-solid fa-globe"></i>

        <h4>Internet</h4>

        <p>
          The Internet is the world's largest example of
          a WAN connecting networks globally.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-network-wired"></i>

        <h4>Fiber Optic</h4>

        <p>
          Fiber-optic connections provide high-speed
          communication between distant locations.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-satellite"></i>

        <h4>Satellite</h4>

        <p>
          Satellites can provide communication links
          between locations over very large distances.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-tower-cell"></i>

        <h4>Cellular Network</h4>

        <p>
          Cellular networks can provide wide-area
          communication for mobile devices.
        </p>

      </div>

    </div>


    <h3>Where is WAN Used?</h3>

    <ul class="network-points">

      <li>Multinational companies with offices in different countries.</li>

      <li>Banking networks connecting branches across regions.</li>

      <li>Government organizations with distant offices.</li>

      <li>Telecommunication networks.</li>

      <li>Cloud and Internet services.</li>

      <li>Global business communication.</li>

    </ul>


    <h3>Advantages</h3>

    <ul class="network-points">

      <li>Connects networks over very large distances.</li>

      <li>Allows communication between different cities and countries.</li>

      <li>Supports global business operations.</li>

      <li>Allows remote access to network resources.</li>

      <li>Provides worldwide connectivity through the Internet.</li>

    </ul>


    <h3>Disadvantages</h3>

    <ul class="network-points">

      <li>More expensive and complex than smaller networks.</li>

      <li>Requires long-distance communication infrastructure.</li>

      <li>Security can be more difficult to manage.</li>

      <li>Performance depends on the communication links used.</li>

      <li>Network failures over long distances can affect communication.</li>

    </ul>


    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>WAN</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Full Form</td>
          <td>Wide Area Network</td>
        </tr>

        <tr>
          <td>Coverage</td>
          <td>Large Geographical Area</td>
        </tr>

        <tr>
          <td>Connects</td>
          <td>Networks in Different Locations</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>Internet</td>
        </tr>

        <tr>
          <td>Communication</td>
          <td>Fiber, Satellite, Cellular, Leased Lines</td>
        </tr>

        <tr>
          <td>Size</td>
          <td>Very Large</td>
        </tr>

      </tbody>

    </table>


    <h3>WAN vs MAN</h3>

    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>MAN</th>
          <th>WAN</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Coverage</td>
          <td>City</td>
          <td>Countries / Continents</td>
        </tr>

        <tr>
          <td>Connects</td>
          <td>Networks across a city</td>
          <td>Networks across large distances</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>City-Wide Network</td>
          <td>Internet</td>
        </tr>

        <tr>
          <td>Size</td>
          <td>Large</td>
          <td>Very Large</td>
        </tr>

      </tbody>

    </table>


    <h3>Conclusion</h3>

    <p>
      A Wide Area Network (WAN) connects networks over very
      large geographical areas. It can connect cities, states,
      countries and continents using different communication
      technologies.
    </p>

    <p>
      In simple words, LAN connects a small area, CAN connects
      a campus, MAN connects a city, and WAN connects very
      large geographical areas such as countries and continents.
    </p>
  `
},
"WLAN": {
  image: "WLAN.jpg",
  title: "Wireless Local Area Network (WLAN)",

  content: `
    <p>
      A Wireless Local Area Network (WLAN) is a network that
      connects devices within a small geographical area using
      wireless communication, usually Wi-Fi, instead of physical
      network cables.
    </p>

    <p>
      WLAN is commonly used in homes, offices, schools, colleges,
      libraries, cafes and other places where devices need to
      communicate and access the Internet wirelessly.
    </p>


    <h3>3D Example of Wireless Local Area Network</h3>

    <div class="wlan-3d-network">

      <div class="wlan-top-header">

        <div class="wlan-heading">

          <div class="wlan-heading-icon">
            <i class="fa-solid fa-wifi"></i>
          </div>

          <div>
            <strong>Smart Wi-Fi Network</strong>
            <span>Wireless Local Area Network</span>
          </div>

        </div>

        <div class="wlan-online">
          <span></span>
          Wi-Fi Active
        </div>

      </div>


      <div class="wlan-room">

        <!-- Wireless Waves -->

        <div class="wlan-wave wlan-wave-1"></div>
        <div class="wlan-wave wlan-wave-2"></div>
        <div class="wlan-wave wlan-wave-3"></div>


        <!-- Router -->

        <div class="wlan-router">

          <div class="wlan-router-light"></div>

          <i class="fa-solid fa-wifi"></i>

          <strong>Wi-Fi Router</strong>

          <span>Wireless Access Point</span>

          <div class="wlan-router-dots">
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- Laptop -->

        <div class="wlan-device wlan-laptop">

          <div class="wlan-device-icon">
            <i class="fa-solid fa-laptop"></i>
          </div>

          <strong>Laptop</strong>

          <span>Connected</span>

          <small>
            <i class="fa-solid fa-wifi"></i>
            Wi-Fi
          </small>

        </div>


        <!-- Mobile -->

        <div class="wlan-device wlan-mobile">

          <div class="wlan-device-icon">
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>

          <strong>Smartphone</strong>

          <span>Connected</span>

          <small>
            <i class="fa-solid fa-wifi"></i>
            Wi-Fi
          </small>

        </div>


        <!-- Tablet -->

        <div class="wlan-device wlan-tablet">

          <div class="wlan-device-icon">
            <i class="fa-solid fa-tablet-screen-button"></i>
          </div>

          <strong>Tablet</strong>

          <span>Connected</span>

          <small>
            <i class="fa-solid fa-wifi"></i>
            Wi-Fi
          </small>

        </div>


        <!-- Smart TV -->

        <div class="wlan-device wlan-tv">

          <div class="wlan-device-icon">
            <i class="fa-solid fa-tv"></i>
          </div>

          <strong>Smart TV</strong>

          <span>Connected</span>

          <small>
            <i class="fa-solid fa-wifi"></i>
            Wi-Fi
          </small>

        </div>


        <!-- Printer -->

        <div class="wlan-device wlan-printer">

          <div class="wlan-device-icon">
            <i class="fa-solid fa-print"></i>
          </div>

          <strong>Printer</strong>

          <span>Wireless</span>

          <small>
            <i class="fa-solid fa-wifi"></i>
            Wi-Fi
          </small>

        </div>


        <!-- Internet -->

        <div class="wlan-internet">

          <i class="fa-solid fa-globe"></i>

          <strong>Internet</strong>

        </div>

      </div>


      <div class="wlan-legend">

        <div>
          <span></span>
          Wi-Fi Device
        </div>

        <div>
          <span></span>
          Wireless Signal
        </div>

        <div>
          <span></span>
          Internet
        </div>

      </div>

    </div>


    <h3>How WLAN Works</h3>

    <p>
      In a WLAN, a wireless router or access point sends and
      receives data using radio signals. Devices such as laptops,
      smartphones, tablets and smart TVs connect to the wireless
      network without requiring an Ethernet cable.
    </p>


    <div class="wlan-working">

      <div class="wlan-work-card">

        <span class="wlan-work-number">01</span>

        <div class="wlan-work-icon">
          <i class="fa-solid fa-wifi"></i>
        </div>

        <h4>Wireless Signal</h4>

        <p>
          The router broadcasts wireless signals within
          its coverage area.
        </p>

      </div>


      <div class="wlan-work-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="wlan-work-card wlan-highlight">

        <span class="wlan-work-number">02</span>

        <div class="wlan-work-icon">
          <i class="fa-solid fa-mobile-screen"></i>
        </div>

        <h4>Device Connects</h4>

        <p>
          Devices connect to the Wi-Fi network using
          a wireless connection.
        </p>

      </div>


      <div class="wlan-work-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="wlan-work-card">

        <span class="wlan-work-number">03</span>

        <div class="wlan-work-icon">
          <i class="fa-solid fa-globe"></i>
        </div>

        <h4>Data Communication</h4>

        <p>
          Connected devices can communicate and access
          shared network or Internet resources.
        </p>

      </div>

    </div>


    <h3>Simple Real-Life Example</h3>

    <p>
      Suppose you are at home and connect your laptop, smartphone,
      tablet and Smart TV to the same Wi-Fi router.
    </p>

    <p>
      All these devices are connected wirelessly within the local
      area. This is an example of a WLAN.
    </p>


    <div class="wlan-data-flow">

      <div class="wlan-data-device">

        <i class="fa-solid fa-laptop"></i>

        <strong>Laptop</strong>

        <span>Wi-Fi</span>

      </div>


      <div class="wlan-signal">
        <i class="fa-solid fa-wifi"></i>
      </div>


      <div class="wlan-data-device wlan-main-device">

        <i class="fa-solid fa-router"></i>

        <strong>Wi-Fi Router</strong>

        <span>Access Point</span>

      </div>


      <div class="wlan-signal">
        <i class="fa-solid fa-wifi"></i>
      </div>


      <div class="wlan-data-device">

        <i class="fa-solid fa-mobile-screen-button"></i>

        <strong>Smartphone</strong>

        <span>Wi-Fi</span>

      </div>

    </div>


    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Remember:</strong>
        WLAN is a
        <strong>local network that uses wireless communication,
        usually Wi-Fi, instead of physical cables.</strong>
      </p>

    </div>


    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">

        <i class="fa-solid fa-wifi"></i>

        <h4>Wireless Connection</h4>

        <p>
          Devices communicate using wireless radio signals
          instead of network cables.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-mobile-screen-button"></i>

        <h4>Mobile Devices</h4>

        <p>
          Smartphones, tablets and laptops can connect
          while moving within the coverage area.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-house"></i>

        <h4>Local Coverage</h4>

        <p>
          WLAN normally covers a limited area such as a
          home, office, classroom or building.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-plug-circle-xmark"></i>

        <h4>Less Cabling</h4>

        <p>
          Devices can connect without requiring a separate
          physical network cable.
        </p>

      </div>

    </div>


    <h3>Where is WLAN Used?</h3>

    <ul class="network-points">

      <li>Homes and apartments.</li>

      <li>Offices and workplaces.</li>

      <li>Schools and colleges.</li>

      <li>Libraries and cafes.</li>

      <li>Hotels and airports.</li>

      <li>Public Wi-Fi hotspots.</li>

    </ul>


    <h3>Advantages</h3>

    <ul class="network-points">

      <li>No physical cable is required for every device.</li>

      <li>Easy to install and expand.</li>

      <li>Devices can move within the wireless coverage area.</li>

      <li>Convenient for smartphones, tablets and laptops.</li>

      <li>Useful for homes, offices and public places.</li>

    </ul>


    <h3>Disadvantages</h3>

    <ul class="network-points">

      <li>Wireless signals can be affected by interference.</li>

      <li>Security must be properly configured.</li>

      <li>Speed may decrease with distance from the access point.</li>

      <li>Physical obstacles can weaken wireless signals.</li>

    </ul>


    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>WLAN</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Full Form</td>
          <td>Wireless Local Area Network</td>
        </tr>

        <tr>
          <td>Connection</td>
          <td>Wireless</td>
        </tr>

        <tr>
          <td>Common Technology</td>
          <td>Wi-Fi</td>
        </tr>

        <tr>
          <td>Coverage</td>
          <td>Small Local Area</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>Home Wi-Fi Network</td>
        </tr>

        <tr>
          <td>Main Device</td>
          <td>Wireless Router / Access Point</td>
        </tr>

      </tbody>

    </table>


    <h3>WLAN vs LAN</h3>

    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>LAN</th>
          <th>WLAN</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Connection</td>
          <td>Mostly Wired</td>
          <td>Wireless</td>
        </tr>

        <tr>
          <td>Medium</td>
          <td>Ethernet Cable</td>
          <td>Radio / Wi-Fi</td>
        </tr>

        <tr>
          <td>Mobility</td>
          <td>Limited</td>
          <td>Higher</td>
        </tr>

        <tr>
          <td>Example</td>
          <td>Office Ethernet Network</td>
          <td>Home Wi-Fi</td>
        </tr>

      </tbody>

    </table>


    <h3>Conclusion</h3>

    <p>
      A Wireless Local Area Network (WLAN) connects devices
      within a small geographical area using wireless
      communication. Wi-Fi is the most common technology used
      to create WLANs.
    </p>

    <p>
      In simple words, when your laptop, phone, tablet and other
      devices connect to the same Wi-Fi network within a home,
      classroom or office, they form a WLAN.
    </p>
  `
},
"Internet": {
  image: "internet.jpg",
  title: "Internet",
  content: `
    <p>
      The <strong>Internet</strong> is a worldwide network of interconnected
      computers and devices that communicate with each other using standard
      communication protocols such as TCP/IP.
    </p>

    <p>
      It allows people and organizations to share information, communicate,
      access websites, use online services, stream videos, send emails,
      transfer files, and connect with devices across the world.
    </p>

    <h3>3D Example of the Internet</h3>

    <div class="internet-3d-network">

      <div class="internet-header">
        <div>
          <i class="fa-solid fa-globe"></i>
          <strong>GLOBAL INTERNET NETWORK</strong>
        </div>
        <span class="internet-status">
          <i class="fa-solid fa-circle"></i> ONLINE
        </span>
      </div>

      <div class="internet-space">

        <!-- World Network -->
        <div class="internet-globe">
          <div class="globe-ring ring-1"></div>
          <div class="globe-ring ring-2"></div>
          <div class="globe-ring ring-3"></div>

          <i class="fa-solid fa-earth-americas"></i>
          <span>INTERNET</span>
        </div>

        <!-- USA -->
        <div class="internet-node node-usa">
          <div class="internet-node-icon">
            <i class="fa-solid fa-server"></i>
          </div>
          <strong>USA</strong>
          <small>Web Server</small>
        </div>

        <!-- India -->
        <div class="internet-node node-india">
          <div class="internet-node-icon">
            <i class="fa-solid fa-server"></i>
          </div>
          <strong>INDIA</strong>
          <small>Data Center</small>
        </div>

        <!-- Europe -->
        <div class="internet-node node-europe">
          <div class="internet-node-icon">
            <i class="fa-solid fa-building"></i>
          </div>
          <strong>EUROPE</strong>
          <small>ISP Network</small>
        </div>

        <!-- Asia -->
        <div class="internet-node node-asia">
          <div class="internet-node-icon">
            <i class="fa-solid fa-building"></i>
          </div>
          <strong>ASIA</strong>
          <small>ISP Network</small>
        </div>

        <!-- User 1 -->
        <div class="internet-user user-1">
          <i class="fa-solid fa-laptop"></i>
          <span>Laptop</span>
        </div>

        <!-- User 2 -->
        <div class="internet-user user-2">
          <i class="fa-solid fa-mobile-screen"></i>
          <span>Mobile</span>
        </div>

        <!-- User 3 -->
        <div class="internet-user user-3">
          <i class="fa-solid fa-desktop"></i>
          <span>PC</span>
        </div>

        <!-- Cloud -->
        <div class="internet-cloud">
          <i class="fa-solid fa-cloud"></i>
          <span>Cloud Services</span>
        </div>

        <!-- Connection Lines -->
        <div class="internet-line line-usa"></div>
        <div class="internet-line line-india"></div>
        <div class="internet-line line-europe"></div>
        <div class="internet-line line-asia"></div>
        <div class="internet-line line-cloud"></div>

        <div class="internet-packet packet-1"></div>
        <div class="internet-packet packet-2"></div>
        <div class="internet-packet packet-3"></div>
        <div class="internet-packet packet-4"></div>

      </div>

      <div class="internet-legend">
        <span><i class="fa-solid fa-user"></i> Users</span>
        <span><i class="fa-solid fa-server"></i> Servers</span>
        <span><i class="fa-solid fa-cloud"></i> Cloud</span>
        <span><i class="fa-solid fa-globe"></i> Global Network</span>
      </div>

    </div>

    <h3>How the Internet Works</h3>

    <div class="network-points">

      <div class="network-point">
        <i class="fa-solid fa-1"></i>
        <div>
          <strong>User Sends a Request</strong>
          <p>
            A user opens a website or application and sends a request
            from their device.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-2"></i>
        <div>
          <strong>ISP Receives the Request</strong>
          <p>
            The request travels through the user's router to the
            Internet Service Provider (ISP).
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-3"></i>
        <div>
          <strong>Routers Forward Data</strong>
          <p>
            Internet routers examine the destination address and
            forward packets toward the correct server.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-4"></i>
        <div>
          <strong>Server Processes the Request</strong>
          <p>
            The destination server receives the request and prepares
            the required information.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-5"></i>
        <div>
          <strong>Response Returns</strong>
          <p>
            The requested data is divided into packets and travels
            back to the user's device.
          </p>
        </div>
      </div>

    </div>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <div>
        <strong>Real-Life Example</strong>
        <p>
          When you search something on Google, your request travels
          through your device, router, ISP and several Internet routers
          until it reaches Google's servers. The result is then sent
          back to your device.
        </p>
      </div>
    </div>

    <h3>Real-Life Uses of the Internet</h3>

    <ul>
      <li>🌐 Browsing websites</li>
      <li>📧 Sending and receiving emails</li>
      <li>💬 Online chatting and social media</li>
      <li>🎥 Video streaming</li>
      <li>🎮 Online gaming</li>
      <li>☁️ Cloud computing and storage</li>
      <li>🛒 Online shopping</li>
      <li>💳 Online banking and digital payments</li>
      <li>🎓 Online education</li>
      <li>💼 Remote work and collaboration</li>
    </ul>

    <h3>Important Components of the Internet</h3>

    <table class="network-table">
      <tr>
        <th>Component</th>
        <th>Purpose</th>
      </tr>
      <tr>
        <td>Client Device</td>
        <td>Used by users to access Internet services.</td>
      </tr>
      <tr>
        <td>ISP</td>
        <td>Provides Internet connectivity to users.</td>
      </tr>
      <tr>
        <td>Router</td>
        <td>Forwards data packets between networks.</td>
      </tr>
      <tr>
        <td>Server</td>
        <td>Stores and provides websites, applications and data.</td>
      </tr>
      <tr>
        <td>DNS</td>
        <td>Converts domain names into IP addresses.</td>
      </tr>
      <tr>
        <td>Protocols</td>
        <td>Define how devices communicate over the Internet.</td>
      </tr>
    </table>

    <h3>Advantages of the Internet</h3>

    <ul>
      <li>Fast communication</li>
      <li>Easy access to information</li>
      <li>Online education</li>
      <li>Online banking and shopping</li>
      <li>Cloud services</li>
      <li>Global connectivity</li>
      <li>Remote work and collaboration</li>
    </ul>

    <h3>Disadvantages of the Internet</h3>

    <ul>
      <li>Cybersecurity threats</li>
      <li>Privacy risks</li>
      <li>Online scams and fraud</li>
      <li>Spread of misinformation</li>
      <li>Internet addiction</li>
      <li>Dependence on network availability</li>
    </ul>

    <h3>Internet vs World Wide Web</h3>

    <table class="network-table">
      <tr>
        <th>Internet</th>
        <th>World Wide Web (WWW)</th>
      </tr>
      <tr>
        <td>Global network infrastructure</td>
        <td>Service that runs on the Internet</td>
      </tr>
      <tr>
        <td>Includes many services</td>
        <td>Mainly consists of websites and web pages</td>
      </tr>
      <tr>
        <td>Uses many protocols</td>
        <td>Commonly uses HTTP/HTTPS</td>
      </tr>
    </table>

    <h3>Conclusion</h3>

    <p>
      The Internet is a global network that connects billions of devices
      around the world. It provides the foundation for websites, cloud
      services, communication, online education, entertainment,
      e-commerce and many other digital services.
    </p>
  `
},
"Intranet": {
  image: "internet.jpg",
  title: "Intranet",
  content: `
    <p>
      An <strong>Intranet</strong> is a private computer network used
      within an organization such as a company, university, hospital,
      or government office. It uses Internet technologies and protocols
      to securely share information and resources with authorized users.
    </p>

    <p>
      Unlike the public Internet, an intranet is designed for internal
      communication and collaboration. Access is normally restricted to
      authorized members of the organization. :contentReference[oaicite:1]{index=1}
    </p>

    <h3>3D Example of an Intranet</h3>

    <div class="intranet-3d-network">

      <div class="intranet-header">
        <div>
          <i class="fa-solid fa-building"></i>
          <strong>COMPANY INTRANET</strong>
        </div>

        <span class="intranet-status">
          <i class="fa-solid fa-lock"></i> PRIVATE NETWORK
        </span>
      </div>

      <div class="intranet-space">

        <!-- Central Intranet Server -->
        <div class="intranet-server">
          <div class="server-glow"></div>

          <i class="fa-solid fa-server"></i>

          <strong>INTRANET</strong>
          <small>Internal Server</small>

          <div class="server-status">
            <span></span> SECURE
          </div>
        </div>

        <!-- Firewall -->
        <div class="intranet-firewall">
          <i class="fa-solid fa-shield-halved"></i>
          <strong>FIREWALL</strong>
          <small>Access Control</small>
        </div>

        <!-- HR -->
        <div class="intranet-department dept-hr">
          <div class="dept-icon">
            <i class="fa-solid fa-users"></i>
          </div>
          <strong>HR</strong>
          <small>Employee Portal</small>
        </div>

        <!-- IT -->
        <div class="intranet-department dept-it">
          <div class="dept-icon">
            <i class="fa-solid fa-computer"></i>
          </div>
          <strong>IT DEPARTMENT</strong>
          <small>IT Resources</small>
        </div>

        <!-- Finance -->
        <div class="intranet-department dept-finance">
          <div class="dept-icon">
            <i class="fa-solid fa-file-invoice-dollar"></i>
          </div>
          <strong>FINANCE</strong>
          <small>Financial Data</small>
        </div>

        <!-- Management -->
        <div class="intranet-department dept-management">
          <div class="dept-icon">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <strong>MANAGEMENT</strong>
          <small>Company Dashboard</small>
        </div>

        <!-- Employees -->
        <div class="intranet-user employee-1">
          <i class="fa-solid fa-laptop"></i>
          <span>Employee</span>
        </div>

        <div class="intranet-user employee-2">
          <i class="fa-solid fa-desktop"></i>
          <span>Employee</span>
        </div>

        <!-- Internal Database -->
        <div class="intranet-database">
          <i class="fa-solid fa-database"></i>
          <span>Company Database</span>
        </div>

        <!-- Connection Lines -->
        <div class="intranet-line line-hr"></div>
        <div class="intranet-line line-it"></div>
        <div class="intranet-line line-finance"></div>
        <div class="intranet-line line-management"></div>
        <div class="intranet-line line-db"></div>

        <!-- Data Packets -->
        <div class="intranet-packet packet-a"></div>
        <div class="intranet-packet packet-b"></div>
        <div class="intranet-packet packet-c"></div>

      </div>

      <div class="intranet-legend">
        <span>
          <i class="fa-solid fa-lock"></i> Private
        </span>

        <span>
          <i class="fa-solid fa-server"></i> Server
        </span>

        <span>
          <i class="fa-solid fa-shield-halved"></i> Firewall
        </span>

        <span>
          <i class="fa-solid fa-users"></i> Authorized Users
        </span>
      </div>

    </div>

    <h3>How Intranet Works</h3>

    <div class="network-points">

      <div class="network-point">
        <i class="fa-solid fa-1"></i>
        <div>
          <strong>User Authentication</strong>
          <p>
            An employee first logs in using authorized credentials
            before accessing internal resources.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-2"></i>
        <div>
          <strong>Firewall Checks Access</strong>
          <p>
            The organization's firewall and access-control systems
            help protect internal resources from unauthorized access.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-3"></i>
        <div>
          <strong>Request Reaches the Server</strong>
          <p>
            The employee's browser sends a request to an internal
            intranet server.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-4"></i>
        <div>
          <strong>Internal Data is Retrieved</strong>
          <p>
            The server accesses the required company information,
            files, applications or database records.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-5"></i>
        <div>
          <strong>Information is Displayed</strong>
          <p>
            The requested information is returned to the authorized
            employee through the intranet portal.
          </p>
        </div>
      </div>

    </div>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>

      <div>
        <strong>Real-Life Example</strong>

        <p>
          Imagine a company where employees can open an internal website
          to check salary information, company announcements, HR policies,
          leave applications and internal documents. This private system
          is an example of an intranet.
        </p>
      </div>
    </div>

    <h3>Common Uses of Intranet</h3>

    <ul>
      <li>👥 Employee communication</li>
      <li>📄 Sharing internal documents</li>
      <li>📢 Company announcements</li>
      <li>🧑‍💼 HR and employee portals</li>
      <li>📅 Internal calendars and events</li>
      <li>📚 Training and learning resources</li>
      <li>💼 Project collaboration</li>
      <li>🗃️ Internal databases</li>
      <li>📝 Leave and employee applications</li>
      <li>🔐 Secure internal services</li>
    </ul>

    <h3>Main Components of an Intranet</h3>

    <table class="network-table">
      <tr>
        <th>Component</th>
        <th>Purpose</th>
      </tr>

      <tr>
        <td>Intranet Server</td>
        <td>
          Hosts internal websites, applications and services.
        </td>
      </tr>

      <tr>
        <td>Firewall</td>
        <td>
          Helps control and protect network access.
        </td>
      </tr>

      <tr>
        <td>Database</td>
        <td>
          Stores organizational information and records.
        </td>
      </tr>

      <tr>
        <td>Client Devices</td>
        <td>
          Computers, laptops and other devices used by employees.
        </td>
      </tr>

      <tr>
        <td>Authentication</td>
        <td>
          Verifies whether a user is authorized to access resources.
        </td>
      </tr>

      <tr>
        <td>Network Infrastructure</td>
        <td>
          Connects users, servers and internal systems.
        </td>
      </tr>
    </table>

    <h3>Advantages of Intranet</h3>

    <ul>
      <li>Improves internal communication</li>
      <li>Centralizes company information</li>
      <li>Provides controlled access</li>
      <li>Makes document sharing easier</li>
      <li>Supports employee collaboration</li>
      <li>Helps organize internal resources</li>
      <li>Can improve productivity</li>
    </ul>

    <h3>Disadvantages of Intranet</h3>

    <ul>
      <li>Requires maintenance and administration</li>
      <li>Initial setup can be costly</li>
      <li>Security must be properly managed</li>
      <li>Users may lose access if internal services fail</li>
      <li>Requires regular updates and monitoring</li>
    </ul>

    <h3>Internet vs Intranet</h3>

    <table class="network-table">
      <tr>
        <th>Internet</th>
        <th>Intranet</th>
      </tr>

      <tr>
        <td>Public global network</td>
        <td>Private organizational network</td>
      </tr>

      <tr>
        <td>Used by people around the world</td>
        <td>Used mainly by authorized members</td>
      </tr>

      <tr>
        <td>Publicly accessible services</td>
        <td>Internal services and resources</td>
      </tr>

      <tr>
        <td>Very large global scope</td>
        <td>Limited to an organization</td>
      </tr>

      <tr>
        <td>Examples: Google, YouTube, public websites</td>
        <td>Examples: HR portal, internal dashboard, company documents</td>
      </tr>
    </table>

    <h3>Intranet vs Extranet</h3>

    <p>
      An <strong>Intranet</strong> is mainly designed for internal users,
      while an <strong>Extranet</strong> extends selected private resources
      to authorized external users such as business partners, suppliers
      or customers.
    </p>

    <h3>Conclusion</h3>

    <p>
      An Intranet provides a private and controlled environment for
      organizations to share information, applications and resources.
      It uses Internet technologies while restricting access to
      authorized users, making it useful for internal communication,
      collaboration and information management.
    </p>
  `
},
"Extranet": {
  image: "need network.jpg",
  title: "Extranet",
  content: `
    <p>
      An <strong>Extranet</strong> is a private network that allows an
      organization to securely share selected information and resources
      with authorized external users such as business partners,
      suppliers, customers, or distributors.
    </p>

    <p>
      An Extranet extends selected parts of an organization's internal
      network to trusted external users. Access is controlled using
      authentication, firewalls, VPNs, and other security mechanisms.
    </p>

    <h3>3D Example of an Extranet</h3>

    <div class="extranet-3d-network">

      <div class="extranet-header">
        <div>
          <i class="fa-solid fa-network-wired"></i>
          <strong>BUSINESS EXTRANET</strong>
        </div>

        <span class="extranet-status">
          <i class="fa-solid fa-shield-halved"></i>
          SECURE CONNECTION
        </span>
      </div>

      <div class="extranet-space">

        <!-- Company -->
        <div class="extranet-company">

          <div class="company-icon">
            <i class="fa-solid fa-building"></i>
          </div>

          <strong>COMPANY</strong>
          <small>Private Network</small>

          <div class="company-server">
            <i class="fa-solid fa-server"></i>
            Internal Server
          </div>

        </div>

        <!-- Firewall -->
        <div class="extranet-firewall">

          <i class="fa-solid fa-shield-halved"></i>

          <strong>FIREWALL</strong>

          <small>Access Control</small>

        </div>

        <!-- Partner -->
        <div class="extranet-partner partner-1">

          <div class="partner-icon">
            <i class="fa-solid fa-handshake"></i>
          </div>

          <strong>BUSINESS PARTNER</strong>
          <small>Authorized Access</small>

        </div>

        <!-- Supplier -->
        <div class="extranet-partner partner-2">

          <div class="partner-icon">
            <i class="fa-solid fa-truck"></i>
          </div>

          <strong>SUPPLIER</strong>
          <small>Order System</small>

        </div>

        <!-- Customer -->
        <div class="extranet-partner partner-3">

          <div class="partner-icon">
            <i class="fa-solid fa-user"></i>
          </div>

          <strong>CUSTOMER</strong>
          <small>Customer Portal</small>

        </div>

        <!-- Distributor -->
        <div class="extranet-partner partner-4">

          <div class="partner-icon">
            <i class="fa-solid fa-boxes-stacked"></i>
          </div>

          <strong>DISTRIBUTOR</strong>
          <small>Inventory Access</small>

        </div>

        <!-- Shared Portal -->
        <div class="extranet-portal">

          <i class="fa-solid fa-globe"></i>

          <strong>SHARED PORTAL</strong>

          <small>
            Selected Resources
          </small>

        </div>

        <!-- Connection Lines -->

        <div class="extranet-line company-line"></div>
        <div class="extranet-line partner-line-1"></div>
        <div class="extranet-line partner-line-2"></div>
        <div class="extranet-line partner-line-3"></div>
        <div class="extranet-line partner-line-4"></div>

        <!-- Data Packets -->

        <div class="extranet-packet packet-1"></div>
        <div class="extranet-packet packet-2"></div>
        <div class="extranet-packet packet-3"></div>

      </div>

      <div class="extranet-legend">

        <span>
          <i class="fa-solid fa-building"></i>
          Company
        </span>

        <span>
          <i class="fa-solid fa-shield-halved"></i>
          Firewall
        </span>

        <span>
          <i class="fa-solid fa-handshake"></i>
          Partners
        </span>

        <span>
          <i class="fa-solid fa-lock"></i>
          Authorized Access
        </span>

      </div>

    </div>

    <h3>How Extranet Works</h3>

    <div class="network-points">

      <div class="network-point">
        <i class="fa-solid fa-1"></i>
        <div>
          <strong>External User Requests Access</strong>
          <p>
            A supplier, partner, customer, or distributor requests
            access to selected company resources.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-2"></i>
        <div>
          <strong>User Authentication</strong>
          <p>
            The external user is verified using authorized credentials
            or another authentication method.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-3"></i>
        <div>
          <strong>Firewall Controls Access</strong>
          <p>
            Security systems check the request and allow access only
            to permitted resources.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-4"></i>
        <div>
          <strong>Selected Resources are Shared</strong>
          <p>
            The authorized user can access specific portals,
            documents, applications, or business services.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-5"></i>
        <div>
          <strong>Secure Data Exchange</strong>
          <p>
            Business information can be exchanged securely between
            the organization and its external partners.
          </p>
        </div>
      </div>

    </div>

    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <div>

        <strong>Real-Life Example</strong>

        <p>
          Suppose a manufacturing company works with several suppliers.
          The suppliers can log in to an Extranet portal to check
          purchase orders, update delivery information, and view
          selected inventory details without getting access to the
          company's complete internal network.
        </p>

      </div>

    </div>

    <h3>Common Uses of Extranet</h3>

    <ul>
      <li>🤝 Business partner collaboration</li>
      <li>🚚 Supplier management</li>
      <li>📦 Distributor communication</li>
      <li>🛒 Customer portals</li>
      <li>📄 Secure document sharing</li>
      <li>📊 Order and inventory management</li>
      <li>💼 B2B collaboration</li>
      <li>🔐 Controlled external access</li>
      <li>📋 Project collaboration</li>
      <li>💬 Communication with business partners</li>
    </ul>

    <h3>Main Components of an Extranet</h3>

    <table class="network-table">

      <tr>
        <th>Component</th>
        <th>Purpose</th>
      </tr>

      <tr>
        <td>Extranet Server</td>
        <td>
          Provides selected applications and resources to authorized
          external users.
        </td>
      </tr>

      <tr>
        <td>Firewall</td>
        <td>
          Controls and filters incoming and outgoing network traffic.
        </td>
      </tr>

      <tr>
        <td>Authentication</td>
        <td>
          Verifies the identity of external users.
        </td>
      </tr>

      <tr>
        <td>VPN</td>
        <td>
          Can provide a secure connection between trusted networks.
        </td>
      </tr>

      <tr>
        <td>Partner Portal</td>
        <td>
          Provides controlled access to shared business resources.
        </td>
      </tr>

      <tr>
        <td>Database</td>
        <td>
          Stores information required by authorized applications.
        </td>
      </tr>

    </table>

    <h3>Advantages of Extranet</h3>

    <ul>
      <li>Improves business collaboration</li>
      <li>Provides controlled external access</li>
      <li>Makes information sharing easier</li>
      <li>Improves communication with suppliers and partners</li>
      <li>Can reduce paperwork and manual processes</li>
      <li>Supports faster business operations</li>
      <li>Provides centralized access to selected resources</li>
    </ul>

    <h3>Disadvantages of Extranet</h3>

    <ul>
      <li>Requires strong security controls</li>
      <li>Setup and maintenance can be complex</li>
      <li>Unauthorized access can create security risks</li>
      <li>Requires proper user management</li>
      <li>Network failure can affect external collaboration</li>
    </ul>

    <h3>Internet vs Intranet vs Extranet</h3>

    <table class="network-table">

      <tr>
        <th>Internet</th>
        <th>Intranet</th>
        <th>Extranet</th>
      </tr>

      <tr>
        <td>Public network</td>
        <td>Private internal network</td>
        <td>Private network with controlled external access</td>
      </tr>

      <tr>
        <td>Used by anyone</td>
        <td>Used by organization members</td>
        <td>Used by employees and authorized external users</td>
      </tr>

      <tr>
        <td>Global scope</td>
        <td>Organization scope</td>
        <td>Organization + selected external users</td>
      </tr>

      <tr>
        <td>Public services</td>
        <td>Internal resources</td>
        <td>Selected shared resources</td>
      </tr>

    </table>

    <h3>Conclusion</h3>

    <p>
      An <strong>Extranet</strong> allows an organization to securely
      share selected resources with trusted external users. It is
      especially useful for suppliers, customers, distributors and
      business partners because it provides collaboration while keeping
      the organization's private resources protected.
    </p>
  `
},
"What is Network Topology?": {
  image: "topology.jpg",
  title: "What is Network Topology?",
  content: `
    <p>
      <strong>Network Topology</strong> refers to the physical or logical
      arrangement of computers, devices, and connections in a network.
      It describes how different devices are connected and how data
      travels between them.
    </p>

    <p>
      In simple words, network topology tells us
      <strong>how the devices in a network are arranged and connected
      with each other.</strong>
    </p>

    <h3>3D Interactive Example of Network Topology</h3>

    <div class="topology-3d-network">

      <div class="topology-header">
        <div>
          <i class="fa-solid fa-network-wired"></i>
          <strong>NETWORK TOPOLOGY</strong>
        </div>

        <span class="topology-status">
          <i class="fa-solid fa-circle"></i>
          NETWORK ACTIVE
        </span>
      </div>

      <div class="topology-space">

        <!-- Central Switch -->
        <div class="topology-switch">

          <div class="switch-top">
            <i class="fa-solid fa-network-wired"></i>
          </div>

          <strong>SWITCH</strong>
          <small>Central Device</small>

          <div class="switch-ports">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        <!-- Devices -->

        <div class="topology-device device-1">
          <i class="fa-solid fa-desktop"></i>
          <strong>PC 1</strong>
        </div>

        <div class="topology-device device-2">
          <i class="fa-solid fa-laptop"></i>
          <strong>Laptop</strong>
        </div>

        <div class="topology-device device-3">
          <i class="fa-solid fa-print"></i>
          <strong>Printer</strong>
        </div>

        <div class="topology-device device-4">
          <i class="fa-solid fa-server"></i>
          <strong>Server</strong>
        </div>

        <div class="topology-device device-5">
          <i class="fa-solid fa-mobile-screen"></i>
          <strong>Mobile</strong>
        </div>

        <div class="topology-device device-6">
          <i class="fa-solid fa-desktop"></i>
          <strong>PC 2</strong>
        </div>

        <!-- Connection Lines -->

        <div class="topology-line line-1"></div>
        <div class="topology-line line-2"></div>
        <div class="topology-line line-3"></div>
        <div class="topology-line line-4"></div>
        <div class="topology-line line-5"></div>
        <div class="topology-line line-6"></div>

        <!-- Data Packets -->

        <span class="topology-packet packet-1"></span>
        <span class="topology-packet packet-2"></span>
        <span class="topology-packet packet-3"></span>
        <span class="topology-packet packet-4"></span>

      </div>

      <div class="topology-legend">

        <span>
          <i class="fa-solid fa-network-wired"></i>
          Central Device
        </span>

        <span>
          <i class="fa-solid fa-desktop"></i>
          Network Devices
        </span>

        <span>
          <i class="fa-solid fa-link"></i>
          Connections
        </span>

        <span>
          <i class="fa-solid fa-circle"></i>
          Data Flow
        </span>

      </div>

    </div>

    <h3>What Does Network Topology Do?</h3>

    <div class="network-points">

      <div class="network-point">
        <i class="fa-solid fa-1"></i>

        <div>
          <strong>Defines Device Arrangement</strong>

          <p>
            It defines how computers, servers, switches, routers and
            other devices are arranged in a network.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-2"></i>

        <div>
          <strong>Defines Connections</strong>

          <p>
            It shows which devices are directly or indirectly connected
            to each other.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-3"></i>

        <div>
          <strong>Controls Data Flow</strong>

          <p>
            The topology affects the path through which data travels
            between network devices.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-4"></i>

        <div>
          <strong>Helps Network Design</strong>

          <p>
            Choosing the correct topology helps create a network that
            is reliable, scalable and easier to manage.
          </p>
        </div>
      </div>

    </div>

    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <div>

        <strong>Easy Example</strong>

        <p>
          Imagine a classroom where all computers are connected to one
          central switch. The switch acts as the central point through
          which devices communicate. This arrangement is called
          <strong>Star Topology</strong>.
        </p>

      </div>

    </div>

    <h3>Types of Network Topology</h3>

    <div class="topology-types-grid">

      <div class="topology-type-card">
        <i class="fa-solid fa-circle-dot"></i>
        <h4>Bus Topology</h4>
        <p>
          All devices share a single main communication cable.
        </p>
      </div>

      <div class="topology-type-card">
        <i class="fa-solid fa-star"></i>
        <h4>Star Topology</h4>
        <p>
          All devices connect to a central switch or hub.
        </p>
      </div>

      <div class="topology-type-card">
        <i class="fa-solid fa-circle-nodes"></i>
        <h4>Ring Topology</h4>
        <p>
          Devices are connected in a circular arrangement.
        </p>
      </div>

      <div class="topology-type-card">
        <i class="fa-solid fa-diagram-project"></i>
        <h4>Mesh Topology</h4>
        <p>
          Devices have multiple connections with other devices.
        </p>
      </div>

      <div class="topology-type-card">
        <i class="fa-solid fa-sitemap"></i>
        <h4>Tree Topology</h4>
        <p>
          Devices are arranged in a hierarchical structure.
        </p>
      </div>

      <div class="topology-type-card">
        <i class="fa-solid fa-diagram-next"></i>
        <h4>Hybrid Topology</h4>
        <p>
          Combines two or more different network topologies.
        </p>
      </div>

    </div>

    <h3>Physical and Logical Topology</h3>

    <table class="network-table">

      <tr>
        <th>Type</th>
        <th>Meaning</th>
        <th>Example</th>
      </tr>

      <tr>
        <td>Physical Topology</td>
        <td>
          Shows the actual physical arrangement of devices and cables.
        </td>
        <td>
          Computers connected using Ethernet cables.
        </td>
      </tr>

      <tr>
        <td>Logical Topology</td>
        <td>
          Shows how data actually moves through the network.
        </td>
        <td>
          The path followed by data packets.
        </td>
      </tr>

    </table>

    <h3>Real-Life Examples</h3>

    <ul>
      <li>
        🏫 <strong>School Lab:</strong>
        Computers connected to a central switch.
      </li>

      <li>
        🏢 <strong>Office:</strong>
        Employees' computers connected through network switches.
      </li>

      <li>
        🏦 <strong>Bank:</strong>
        Branch devices connected using different network structures.
      </li>

      <li>
        🌐 <strong>Internet:</strong>
        Uses a combination of different network structures.
      </li>
    </ul>

    <h3>Advantages of Network Topology</h3>

    <ul>
      <li>Helps organize network devices</li>
      <li>Makes network planning easier</li>
      <li>Helps determine data paths</li>
      <li>Can improve network performance</li>
      <li>Makes troubleshooting easier</li>
      <li>Helps in network expansion and maintenance</li>
    </ul>

    <h3>Factors for Choosing a Topology</h3>

    <div class="network-points">

      <div class="network-point">
        <i class="fa-solid fa-dollar-sign"></i>

        <div>
          <strong>Cost</strong>
          <p>
            Consider the cost of cables, switches, routers and other
            network equipment.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-expand"></i>

        <div>
          <strong>Scalability</strong>
          <p>
            The topology should allow new devices to be added easily.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-shield-halved"></i>

        <div>
          <strong>Reliability</strong>
          <p>
            A good topology should minimize network failures and
            provide reliable communication.
          </p>
        </div>
      </div>

      <div class="network-point">
        <i class="fa-solid fa-screwdriver-wrench"></i>

        <div>
          <strong>Maintenance</strong>
          <p>
            The network should be easy to monitor, troubleshoot and
            maintain.
          </p>
        </div>
      </div>

    </div>

    <h3>Conclusion</h3>

    <p>
      <strong>Network Topology</strong> describes the arrangement and
      connection of devices in a computer network. Different topologies
      such as Bus, Star, Ring, Mesh, Tree and Hybrid are used according
      to the requirements of the network.
    </p>

    <p>
      Understanding network topology is important because it helps
      network designers choose the right structure for better
      performance, reliability, scalability and maintenance.
    </p>
  `
},
"Bus Topology": {
  image: "images/bus-topology.jpg",
  title: "Bus Topology",

  content: `
    <p>
      <strong>Bus Topology</strong> is a network topology in which
      all computers and network devices are connected to one main
      communication cable called the <strong>backbone cable</strong>.
    </p>

    <p>
      All devices share the same communication medium. When one
      device sends data, the signal travels through the backbone
      cable and reaches the connected devices.
    </p>


    <h3>3D Example of Bus Topology</h3>

    <div class="bus-3d-network">

      <div class="bus-top-header">

        <div class="bus-heading">

          <div class="bus-heading-icon">
            <i class="fa-solid fa-route"></i>
          </div>

          <div>
            <strong>Shared Bus Network</strong>
            <span>Bus Topology</span>
          </div>

        </div>

        <div class="bus-online">
          <span></span>
          Network Active
        </div>

      </div>


      <div class="bus-room">

        <!-- Floor -->
        <div class="bus-floor"></div>

        <!-- Main Backbone -->
        <div class="bus-backbone">
          <span class="bus-backbone-light"></span>
        </div>


        <!-- Data Packets -->
        <span class="bus-packet bus-packet-1"></span>
        <span class="bus-packet bus-packet-2"></span>
        <span class="bus-packet bus-packet-3"></span>


        <!-- PC 1 -->

        <div class="bus-device bus-device-1">

          <div class="bus-device-icon">
            <i class="fa-solid fa-desktop"></i>
          </div>

          <strong>PC 1</strong>

          <span>Network Node</span>

          <small>
            <i class="fa-solid fa-link"></i>
            Connected
          </small>

        </div>


        <!-- PC 2 -->

        <div class="bus-device bus-device-2">

          <div class="bus-device-icon">
            <i class="fa-solid fa-laptop"></i>
          </div>

          <strong>PC 2</strong>

          <span>Network Node</span>

          <small>
            <i class="fa-solid fa-link"></i>
            Connected
          </small>

        </div>


        <!-- PC 3 -->

        <div class="bus-device bus-device-3">

          <div class="bus-device-icon">
            <i class="fa-solid fa-desktop"></i>
          </div>

          <strong>PC 3</strong>

          <span>Network Node</span>

          <small>
            <i class="fa-solid fa-link"></i>
            Connected
          </small>

        </div>


        <!-- Server -->

        <div class="bus-device bus-device-4">

          <div class="bus-device-icon">
            <i class="fa-solid fa-server"></i>
          </div>

          <strong>Server</strong>

          <span>Network Node</span>

          <small>
            <i class="fa-solid fa-link"></i>
            Connected
          </small>

        </div>


        <!-- Printer -->

        <div class="bus-device bus-device-5">

          <div class="bus-device-icon">
            <i class="fa-solid fa-print"></i>
          </div>

          <strong>Printer</strong>

          <span>Network Node</span>

          <small>
            <i class="fa-solid fa-link"></i>
            Connected
          </small>

        </div>


        <!-- Drop Cables -->

        <div class="bus-drop bus-drop-1"></div>
        <div class="bus-drop bus-drop-2"></div>
        <div class="bus-drop bus-drop-3"></div>
        <div class="bus-drop bus-drop-4"></div>
        <div class="bus-drop bus-drop-5"></div>


        <!-- Terminators -->

        <div class="bus-terminator bus-terminator-left">
          <i class="fa-solid fa-stop"></i>
          <span>Terminator</span>
        </div>

        <div class="bus-terminator bus-terminator-right">
          <i class="fa-solid fa-stop"></i>
          <span>Terminator</span>
        </div>


        <!-- Labels -->

        <div class="bus-label bus-backbone-label">
          <i class="fa-solid fa-arrows-left-right"></i>
          Main Backbone Cable
        </div>

        <div class="bus-label bus-data-label">
          <i class="fa-solid fa-bolt"></i>
          Data Flow
        </div>

      </div>


      <div class="bus-legend">

        <div>
          <span></span>
          Network Device
        </div>

        <div>
          <span></span>
          Backbone Cable
        </div>

        <div>
          <span></span>
          Data Signal
        </div>

        <div>
          <span></span>
          Terminator
        </div>

      </div>

    </div>


    <h3>How Bus Topology Works</h3>

    <p>
      Bus Topology uses one common backbone cable for communication.
      Every connected device shares this communication path.
    </p>


    <div class="bus-working">

      <div class="bus-work-card">

        <span class="bus-work-number">01</span>

        <div class="bus-work-icon">
          <i class="fa-solid fa-computer"></i>
        </div>

        <h4>Send Data</h4>

        <p>
          A device sends data onto the shared backbone cable.
        </p>

      </div>


      <div class="bus-work-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="bus-work-card bus-highlight">

        <span class="bus-work-number">02</span>

        <div class="bus-work-icon">
          <i class="fa-solid fa-route"></i>
        </div>

        <h4>Data Travels</h4>

        <p>
          The signal travels through the common backbone cable.
        </p>

      </div>


      <div class="bus-work-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="bus-work-card">

        <span class="bus-work-number">03</span>

        <div class="bus-work-icon">
          <i class="fa-solid fa-desktop"></i>
        </div>

        <h4>Receive Data</h4>

        <p>
          The intended destination device accepts and processes
          the transmitted data.
        </p>

      </div>

    </div>


    <h3>Simple Real-Life Example</h3>

    <p>
      Imagine a long road with several houses connected to it.
      The <strong>road</strong> represents the backbone cable,
      while the <strong>houses</strong> represent network devices.
    </p>

    <p>
      All houses use the same road. Similarly, all devices in
      Bus Topology use the same backbone cable to communicate.
    </p>


    <div class="bus-data-flow">

      <div class="bus-data-device">

        <i class="fa-solid fa-laptop"></i>

        <strong>PC 1</strong>

        <span>Sending Data</span>

      </div>


      <div class="bus-signal">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="bus-data-device bus-main-device">

        <i class="fa-solid fa-route"></i>

        <strong>Backbone</strong>

        <span>Shared Medium</span>

      </div>


      <div class="bus-signal">
        <i class="fa-solid fa-arrow-right"></i>
      </div>


      <div class="bus-data-device">

        <i class="fa-solid fa-server"></i>

        <strong>Server</strong>

        <span>Receiving Data</span>

      </div>

    </div>


    <div class="network-callout">

      <i class="fa-solid fa-lightbulb"></i>

      <p>
        <strong>Remember:</strong>
        Bus Topology uses a
        <strong>single shared backbone cable</strong>
        to connect multiple devices.
      </p>

    </div>


    <h3>Main Features</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">

        <i class="fa-solid fa-route"></i>

        <h4>Single Backbone</h4>

        <p>
          All devices are connected to one main communication cable.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-share-nodes"></i>

        <h4>Shared Medium</h4>

        <p>
          Devices share the same communication medium for data
          transmission.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-stop"></i>

        <h4>Terminators</h4>

        <p>
          Terminators are placed at both ends of the backbone cable.
        </p>

      </div>


      <div class="network-3d-box">

        <i class="fa-solid fa-network-wired"></i>

        <h4>Simple Structure</h4>

        <p>
          The topology has a simple and easy-to-understand structure.
        </p>

      </div>

    </div>


    <h3>Where is Bus Topology Used?</h3>

    <ul class="network-points">

      <li>Older Ethernet networks.</li>

      <li>Small and temporary networks.</li>

      <li>Educational network demonstrations.</li>

      <li>Networks using shared communication media.</li>

      <li>Older coaxial cable based networks.</li>

    </ul>


    <h3>Advantages</h3>

    <ul class="network-points">

      <li>Simple network structure.</li>

      <li>Requires less cable.</li>

      <li>Low installation cost for small networks.</li>

      <li>Easy to install and understand.</li>

      <li>No central switch is required.</li>

    </ul>


    <h3>Disadvantages</h3>

    <ul class="network-points">

      <li>Backbone failure can affect the entire network.</li>

      <li>Performance decreases as more devices are added.</li>

      <li>Data collisions can occur.</li>

      <li>Fault detection can be difficult.</li>

      <li>Limited scalability.</li>

    </ul>


    <h3>Main Components</h3>

    <table class="network-table">

      <thead>
        <tr>
          <th>Component</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Backbone Cable</td>
          <td>
            Main cable through which network data travels.
          </td>
        </tr>

        <tr>
          <td>Nodes</td>
          <td>
            Computers, servers, printers and other connected devices.
          </td>
        </tr>

        <tr>
          <td>Drop Cable</td>
          <td>
            Connects a device to the main backbone cable.
          </td>
        </tr>

        <tr>
          <td>Terminator</td>
          <td>
            Prevents signal reflection at the ends of the backbone.
          </td>
        </tr>

      </tbody>

    </table>


    <h3>Bus Topology vs Star Topology</h3>

    <table class="network-table">

      <thead>

        <tr>
          <th>Feature</th>
          <th>Bus Topology</th>
          <th>Star Topology</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Connection</td>
          <td>Single backbone cable</td>
          <td>Central switch or hub</td>
        </tr>

        <tr>
          <td>Cable Usage</td>
          <td>Usually less</td>
          <td>Usually more</td>
        </tr>

        <tr>
          <td>Failure</td>
          <td>Backbone failure may affect the network</td>
          <td>One cable failure usually affects one device</td>
        </tr>

        <tr>
          <td>Scalability</td>
          <td>Limited</td>
          <td>Better</td>
        </tr>

      </tbody>

    </table>


    <h3>Conclusion</h3>

    <p>
      <strong>Bus Topology</strong> connects multiple devices using
      one shared backbone cable. It is simple, economical and easy
      to understand.
    </p>

    <p>
      However, backbone failure, data collisions and limited
      scalability make it less suitable for modern large networks.
      It is still an important topology for understanding the
      fundamentals of computer networking.
    </p>
  `
},

"Star Topology": {
  image: "images/star-topology.jpg",
  title: "Star Topology",
  content: `
    <p>
      <strong>Star Topology</strong> is a network topology in which all
      computers and network devices are connected to a central device,
      such as a <strong>Switch</strong> or <strong>Hub</strong>.
      The central device controls communication between the connected devices.
    </p>

    <div class="network-callout">
      <i class="fas fa-lightbulb"></i>
      <div>
        <strong>Simple Idea:</strong>
        Every device has a separate connection to the central switch.
        If one computer fails, the other computers can normally continue
        communicating through the switch.
      </div>
    </div>

    <!-- 3D STAR TOPOLOGY -->
    <div class="star-3d-network">

      <div class="star-top-header">
        <div class="star-heading">
          <span class="star-heading-icon">
            <i class="fas fa-star"></i>
          </span>
          <div>
            <h3>3D Star Topology</h3>
            <p>Central switch connected with multiple devices</p>
          </div>
        </div>

        <span class="star-online">
          <i class="fas fa-circle"></i> NETWORK ONLINE
        </span>
      </div>

      <div class="star-room">

        <div class="star-floor"></div>

        <!-- Connection Lines -->
        <div class="star-line star-line-1"></div>
        <div class="star-line star-line-2"></div>
        <div class="star-line star-line-3"></div>
        <div class="star-line star-line-4"></div>
        <div class="star-line star-line-5"></div>
        <div class="star-line star-line-6"></div>

        <!-- Data Packets -->
        <span class="star-packet star-packet-1">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="star-packet star-packet-2">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="star-packet star-packet-3">
          <i class="fas fa-bolt"></i>
        </span>

        <!-- Central Switch -->
        <div class="star-switch">
          <div class="star-switch-glow"></div>

          <div class="star-switch-box">
            <i class="fas fa-network-wired"></i>
            <strong>SWITCH</strong>

            <div class="star-switch-ports">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <span class="star-switch-label">Central Device</span>
        </div>

        <!-- Computers -->
        <div class="star-device star-device-1">
          <div class="star-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 01</strong>
          <small>Client</small>
        </div>

        <div class="star-device star-device-2">
          <div class="star-device-icon">
            <i class="fas fa-laptop"></i>
          </div>
          <strong>Laptop</strong>
          <small>Client</small>
        </div>

        <div class="star-device star-device-3">
          <div class="star-device-icon">
            <i class="fas fa-print"></i>
          </div>
          <strong>Printer</strong>
          <small>Device</small>
        </div>

        <div class="star-device star-device-4">
          <div class="star-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 02</strong>
          <small>Client</small>
        </div>

        <div class="star-device star-device-5">
          <div class="star-device-icon">
            <i class="fas fa-server"></i>
          </div>
          <strong>Server</strong>
          <small>Resource</small>
        </div>

        <div class="star-device star-device-6">
          <div class="star-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 03</strong>
          <small>Client</small>
        </div>

        <div class="star-data-label">
          <i class="fas fa-exchange-alt"></i>
          Data travels through the central switch
        </div>

      </div>

      <div class="star-legend">
        <span>
          <i class="fas fa-network-wired"></i>
          Central Switch
        </span>

        <span>
          <i class="fas fa-desktop"></i>
          Connected Device
        </span>

        <span>
          <i class="fas fa-bolt"></i>
          Data Packet
        </span>
      </div>
    </div>

    <!-- HOW IT WORKS -->
    <h3>
      <i class="fas fa-cogs"></i>
      How Does Star Topology Work?
    </h3>

    <p>
      In Star Topology, every device is connected directly to a central
      switch or hub. When one device wants to communicate with another,
      the data is first sent to the central device.
    </p>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fas fa-desktop"></i>
        <h4>1. Sender</h4>
        <p>
          A computer or device generates the data that needs to be sent.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-network-wired"></i>
        <h4>2. Central Switch</h4>
        <p>
          The switch receives the data and determines where it should go.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-laptop"></i>
        <h4>3. Receiver</h4>
        <p>
          The destination device receives the data from the switch.
        </p>
      </div>

    </div>

    <!-- SIMPLE EXAMPLE -->
    <h3>
      <i class="fas fa-school"></i>
      Simple Example
    </h3>

    <p>
      Imagine a computer laboratory with 10 computers. All 10 computers
      are connected separately to one central network switch.
    </p>

    <div class="network-callout">
      <i class="fas fa-arrow-right"></i>
      <div>
        <strong>Example:</strong>
        PC 1 → Switch → PC 2
        <br>
        PC 3 → Switch → Printer
        <br>
        PC 4 → Switch → Server
      </div>
    </div>

    <p>
      Here, the switch acts as the central point of the network.
      Every device has its own connection to the switch.
    </p>

    <!-- MAIN COMPONENTS -->
    <h3>
      <i class="fas fa-puzzle-piece"></i>
      Main Components
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-network-wired"></i>
        <strong>Central Switch/Hub</strong>
        <p>
          The main connecting device through which network communication
          takes place.
        </p>
      </div>

      <div>
        <i class="fas fa-desktop"></i>
        <strong>End Devices</strong>
        <p>
          Computers, laptops, printers, servers and other network devices.
        </p>
      </div>

      <div>
        <i class="fas fa-ethernet"></i>
        <strong>Network Cables</strong>
        <p>
          Cables such as Ethernet cables are commonly used to connect
          devices with the switch.
        </p>
      </div>

      <div>
        <i class="fas fa-share-alt"></i>
        <strong>Network Interface</strong>
        <p>
          Network interfaces allow computers and devices to communicate
          with the network.
        </p>
      </div>

    </div>

    <!-- DATA FLOW -->
    <h3>
      <i class="fas fa-random"></i>
      Data Flow in Star Topology
    </h3>

    <div class="star-data-flow">

      <div class="star-data-device">
        <i class="fas fa-desktop"></i>
        <strong>PC 1</strong>
        <small>Sender</small>
      </div>

      <div class="star-flow-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="star-data-device star-central-flow">
        <i class="fas fa-network-wired"></i>
        <strong>Switch</strong>
        <small>Central Device</small>
      </div>

      <div class="star-flow-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="star-data-device">
        <i class="fas fa-laptop"></i>
        <strong>PC 2</strong>
        <small>Receiver</small>
      </div>

    </div>

    <!-- ADVANTAGES -->
    <h3>
      <i class="fas fa-check-circle"></i>
      Advantages of Star Topology
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-tools"></i>
        <strong>Easy to Manage</strong>
        <p>
          Network devices can be added, removed or managed easily.
        </p>
      </div>

      <div>
        <i class="fas fa-search"></i>
        <strong>Easy Fault Detection</strong>
        <p>
          Problems in an individual connection can be identified easily.
        </p>
      </div>

      <div>
        <i class="fas fa-expand-arrows-alt"></i>
        <strong>Easy to Expand</strong>
        <p>
          New devices can be connected to the central switch.
        </p>
      </div>

      <div>
        <i class="fas fa-shield-alt"></i>
        <strong>Better Isolation</strong>
        <p>
          Failure of one device connection generally does not affect
          other connected devices.
        </p>
      </div>

    </div>

    <!-- DISADVANTAGES -->
    <h3>
      <i class="fas fa-times-circle"></i>
      Disadvantages of Star Topology
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-exclamation-triangle"></i>
        <strong>Central Device Failure</strong>
        <p>
          If the central switch fails, communication between connected
          devices can be disrupted.
        </p>
      </div>

      <div>
        <i class="fas fa-dollar-sign"></i>
        <strong>Higher Cost</strong>
        <p>
          More cables are required because every device needs a separate
          connection to the central device.
        </p>
      </div>

      <div>
        <i class="fas fa-network-wired"></i>
        <strong>More Cable Required</strong>
        <p>
          Large networks may require considerable cabling.
        </p>
      </div>

    </div>

    <!-- REAL LIFE EXAMPLE -->
    <h3>
      <i class="fas fa-building"></i>
      Real-Life Example
    </h3>

    <p>
      Star Topology is commonly used in modern Ethernet-based Local Area
      Networks such as computer labs, offices, schools and small business
      networks.
    </p>

    <div class="network-callout">
      <i class="fas fa-network-wired"></i>
      <div>
        <strong>Office Example:</strong>
        Multiple employee computers, printers and servers are connected
        to a central network switch. The switch manages communication
        between these devices.
      </div>
    </div>

    <!-- COMPARISON -->
    <h3>
      <i class="fas fa-table"></i>
      Star Topology vs Bus Topology
    </h3>

    <div class="network-table-wrapper">
      <table class="network-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Star Topology</th>
            <th>Bus Topology</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Central Device</td>
            <td>Required</td>
            <td>Not Required</td>
          </tr>

          <tr>
            <td>Connection</td>
            <td>Each device connects to switch</td>
            <td>Devices share one backbone cable</td>
          </tr>

          <tr>
            <td>Fault Detection</td>
            <td>Easy</td>
            <td>More difficult</td>
          </tr>

          <tr>
            <td>Expansion</td>
            <td>Easy</td>
            <td>More difficult</td>
          </tr>

          <tr>
            <td>Cost</td>
            <td>Higher</td>
            <td>Lower</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CONCLUSION -->
    <h3>
      <i class="fas fa-graduation-cap"></i>
      Conclusion
    </h3>

    <p>
      <strong>Star Topology</strong> is one of the most commonly used
      network topologies in modern computer networks. It connects every
      device to a central switch or hub, making the network easy to
      manage, expand and troubleshoot.
    </p>

    <p>
      Its main disadvantage is that the central device becomes a critical
      point of failure. If the central switch stops working, communication
      between the connected devices may be affected.
    </p>
  `
},
"Ring Topology": {
  image: "images/ring-topology.jpg",
  title: "Ring Topology",
  content: `
    <p>
      <strong>Ring Topology</strong> is a network topology in which each
      device is connected to exactly two other devices, forming a closed
      circular path or ring. Data travels from one device to another around
      the ring until it reaches the destination.
    </p>

    <div class="network-callout">
      <i class="fas fa-lightbulb"></i>
      <div>
        <strong>Simple Idea:</strong>
        Every device is connected to two neighboring devices, creating a
        continuous circular network.
      </div>
    </div>

    <!-- 3D RING TOPOLOGY -->
    <div class="ring-3d-network">

      <div class="ring-top-header">
        <div class="ring-heading">
          <span class="ring-heading-icon">
            <i class="fas fa-circle-notch"></i>
          </span>

          <div>
            <h3>3D Ring Topology</h3>
            <p>Devices connected in a closed circular path</p>
          </div>
        </div>

        <span class="ring-online">
          <i class="fas fa-circle"></i> NETWORK ONLINE
        </span>
      </div>

      <div class="ring-room">

        <div class="ring-floor"></div>

        <!-- Ring -->
        <div class="ring-core"></div>
        <div class="ring-core-inner"></div>

        <!-- Data Flow -->
        <span class="ring-packet ring-packet-1">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="ring-packet ring-packet-2">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="ring-packet ring-packet-3">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="ring-packet ring-packet-4">
          <i class="fas fa-bolt"></i>
        </span>

        <!-- Device 1 -->
        <div class="ring-device ring-device-1">
          <div class="ring-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 01</strong>
          <small>Node 1</small>
        </div>

        <!-- Device 2 -->
        <div class="ring-device ring-device-2">
          <div class="ring-device-icon">
            <i class="fas fa-laptop"></i>
          </div>
          <strong>Laptop</strong>
          <small>Node 2</small>
        </div>

        <!-- Device 3 -->
        <div class="ring-device ring-device-3">
          <div class="ring-device-icon">
            <i class="fas fa-server"></i>
          </div>
          <strong>Server</strong>
          <small>Node 3</small>
        </div>

        <!-- Device 4 -->
        <div class="ring-device ring-device-4">
          <div class="ring-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 02</strong>
          <small>Node 4</small>
        </div>

        <!-- Device 5 -->
        <div class="ring-device ring-device-5">
          <div class="ring-device-icon">
            <i class="fas fa-print"></i>
          </div>
          <strong>Printer</strong>
          <small>Node 5</small>
        </div>

        <!-- Device 6 -->
        <div class="ring-device ring-device-6">
          <div class="ring-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 03</strong>
          <small>Node 6</small>
        </div>

        <div class="ring-center">
          <i class="fas fa-sync-alt"></i>
          <strong>RING</strong>
          <small>Closed Network Path</small>
        </div>

        <div class="ring-data-label">
          <i class="fas fa-exchange-alt"></i>
          Data moves from node to node around the ring
        </div>

      </div>

      <div class="ring-legend">
        <span>
          <i class="fas fa-desktop"></i>
          Network Node
        </span>

        <span>
          <i class="fas fa-circle-notch"></i>
          Ring Path
        </span>

        <span>
          <i class="fas fa-bolt"></i>
          Data Packet
        </span>
      </div>
    </div>

    <!-- HOW IT WORKS -->
    <h3>
      <i class="fas fa-cogs"></i>
      How Does Ring Topology Work?
    </h3>

    <p>
      In Ring Topology, every device has two direct connections. One
      connection is made with the previous device and the other connection
      is made with the next device.
    </p>

    <p>
      When a device sends data, the data travels through the connected
      devices around the ring until it reaches the destination device.
    </p>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fas fa-desktop"></i>
        <h4>1. Sender</h4>
        <p>
          The sender creates a data packet and sends it to the next node.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-sync-alt"></i>
        <h4>2. Ring Path</h4>
        <p>
          Data moves from one connected node to the next node around the
          circular network.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-laptop"></i>
        <h4>3. Receiver</h4>
        <p>
          The destination device receives the data when the packet reaches it.
        </p>
      </div>

    </div>

    <!-- SIMPLE EXAMPLE -->
    <h3>
      <i class="fas fa-school"></i>
      Simple Example
    </h3>

    <p>
      Suppose six computers are connected in a circle. PC 1 is connected
      to PC 2, PC 2 to PC 3, and so on. Finally, the last computer is
      connected back to PC 1.
    </p>

    <div class="network-callout">
      <i class="fas fa-arrow-right"></i>
      <div>
        <strong>Example:</strong>
        PC 1 → PC 2 → PC 3 → PC 4 → PC 5 → PC 6 → PC 1
      </div>
    </div>

    <p>
      This creates a complete closed loop. Data can travel around this
      circular path from one node to another.
    </p>

    <!-- MAIN COMPONENTS -->
    <h3>
      <i class="fas fa-puzzle-piece"></i>
      Main Components
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-desktop"></i>
        <strong>Network Nodes</strong>
        <p>
          Computers, laptops, servers and other devices connected in the ring.
        </p>
      </div>

      <div>
        <i class="fas fa-link"></i>
        <strong>Network Links</strong>
        <p>
          Physical or logical connections that connect one node to the next.
        </p>
      </div>

      <div>
        <i class="fas fa-sync-alt"></i>
        <strong>Closed Loop</strong>
        <p>
          The last device is connected back to the first device, creating
          a complete ring.
        </p>
      </div>

      <div>
        <i class="fas fa-exchange-alt"></i>
        <strong>Data Packets</strong>
        <p>
          Data travels between nodes until it reaches the destination.
        </p>
      </div>

    </div>

    <!-- DATA FLOW -->
    <h3>
      <i class="fas fa-random"></i>
      Data Flow in Ring Topology
    </h3>

    <div class="ring-data-flow">

      <div class="ring-data-device">
        <i class="fas fa-desktop"></i>
        <strong>PC 1</strong>
        <small>Sender</small>
      </div>

      <div class="ring-flow-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="ring-data-device">
        <i class="fas fa-desktop"></i>
        <strong>PC 2</strong>
        <small>Node</small>
      </div>

      <div class="ring-flow-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="ring-data-device ring-destination">
        <i class="fas fa-laptop"></i>
        <strong>PC 3</strong>
        <small>Receiver</small>
      </div>

    </div>

    <div class="network-callout">
      <i class="fas fa-route"></i>
      <div>
        <strong>Data Route:</strong>
        PC 1 → PC 2 → PC 3
        <br>
        The packet passes through the connected nodes before reaching
        the destination.
      </div>
    </div>

    <!-- ADVANTAGES -->
    <h3>
      <i class="fas fa-check-circle"></i>
      Advantages of Ring Topology
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-stream"></i>
        <strong>Organized Data Flow</strong>
        <p>
          Data follows a defined path from one node to another.
        </p>
      </div>

      <div>
        <i class="fas fa-tachometer-alt"></i>
        <strong>Good Performance</strong>
        <p>
          It can provide predictable performance when network traffic
          is properly managed.
        </p>
      </div>

      <div>
        <i class="fas fa-project-diagram"></i>
        <strong>No Central Hub Required</strong>
        <p>
          Traditional ring networks can operate without a central
          switch or hub.
        </p>
      </div>

      <div>
        <i class="fas fa-equals"></i>
        <strong>Equal Access</strong>
        <p>
          Each node gets an opportunity to participate in communication.
        </p>
      </div>

    </div>

    <!-- DISADVANTAGES -->
    <h3>
      <i class="fas fa-times-circle"></i>
      Disadvantages of Ring Topology
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-exclamation-triangle"></i>
        <strong>Single Link Failure</strong>
        <p>
          In a basic ring, failure of one connection can affect
          communication around the network.
        </p>
      </div>

      <div>
        <i class="fas fa-tools"></i>
        <strong>Difficult Troubleshooting</strong>
        <p>
          Finding a faulty node or connection can be more difficult
          than in a star topology.
        </p>
      </div>

      <div>
        <i class="fas fa-plus-circle"></i>
        <strong>Adding Devices</strong>
        <p>
          Adding or removing a device may require changes to the ring.
        </p>
      </div>

      <div>
        <i class="fas fa-clock"></i>
        <strong>Delay</strong>
        <p>
          Data may need to pass through multiple nodes before reaching
          its destination.
        </p>
      </div>

    </div>

    <!-- REAL LIFE EXAMPLE -->
    <h3>
      <i class="fas fa-building"></i>
      Real-Life Example
    </h3>

    <p>
      Ring-based network designs have been used in some communication
      and metropolitan network systems where devices or network nodes
      are connected in a circular path.
    </p>

    <div class="network-callout">
      <i class="fas fa-network-wired"></i>
      <div>
        <strong>Example:</strong>
        A group of network nodes connected in a circular path can
        continue forwarding data from one node to the next until the
        packet reaches its destination.
      </div>
    </div>

    <!-- COMPARISON -->
    <h3>
      <i class="fas fa-table"></i>
      Ring Topology vs Star Topology
    </h3>

    <div class="network-table-wrapper">
      <table class="network-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Ring Topology</th>
            <th>Star Topology</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Structure</td>
            <td>Circular / Closed Loop</td>
            <td>Centralized</td>
          </tr>

          <tr>
            <td>Central Device</td>
            <td>Usually Not Required</td>
            <td>Required</td>
          </tr>

          <tr>
            <td>Data Path</td>
            <td>Node to Node</td>
            <td>Through Central Switch</td>
          </tr>

          <tr>
            <td>Fault Detection</td>
            <td>More Difficult</td>
            <td>Easy</td>
          </tr>

          <tr>
            <td>Expansion</td>
            <td>More Difficult</td>
            <td>Easy</td>
          </tr>

          <tr>
            <td>Failure Impact</td>
            <td>Can affect the ring</td>
            <td>Central device failure can affect network</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CONCLUSION -->
    <h3>
      <i class="fas fa-graduation-cap"></i>
      Conclusion
    </h3>

    <p>
      <strong>Ring Topology</strong> connects network devices in a
      circular arrangement. Each device is connected to two neighboring
      devices, creating a closed communication path.
    </p>

    <p>
      Its organized data flow can provide predictable communication,
      but troubleshooting and expansion can be more difficult. In a
      basic ring, failure of a link or node may also affect network
      communication.
    </p>
  `
},

"Mesh Topology": {
  image: "images/mesh-topology.jpg",
  title: "Mesh Topology",
  content: `
    <p>
      <strong>Mesh Topology</strong> is a network topology in which devices
      are connected to multiple other devices. In a <strong>full mesh</strong>,
      every device has a direct connection with every other device, while in
      a <strong>partial mesh</strong>, only selected devices have multiple
      connections.
    </p>

    <div class="network-callout">
      <i class="fas fa-lightbulb"></i>
      <div>
        <strong>Simple Idea:</strong>
        Mesh Topology provides multiple paths between devices. If one
        connection fails, data can often use another available path.
      </div>
    </div>

    <!-- 3D MESH TOPOLOGY -->
    <div class="mesh-3d-network">

      <div class="mesh-top-header">
        <div class="mesh-heading">
          <span class="mesh-heading-icon">
            <i class="fas fa-project-diagram"></i>
          </span>

          <div>
            <h3>3D Mesh Topology</h3>
            <p>Multiple devices with multiple interconnected paths</p>
          </div>
        </div>

        <span class="mesh-online">
          <i class="fas fa-circle"></i> NETWORK ONLINE
        </span>
      </div>

      <div class="mesh-room">

        <div class="mesh-floor"></div>

        <!-- CONNECTIONS -->
        <div class="mesh-line mesh-line-1"></div>
        <div class="mesh-line mesh-line-2"></div>
        <div class="mesh-line mesh-line-3"></div>
        <div class="mesh-line mesh-line-4"></div>
        <div class="mesh-line mesh-line-5"></div>
        <div class="mesh-line mesh-line-6"></div>
        <div class="mesh-line mesh-line-7"></div>
        <div class="mesh-line mesh-line-8"></div>
        <div class="mesh-line mesh-line-9"></div>
        <div class="mesh-line mesh-line-10"></div>
        <div class="mesh-line mesh-line-11"></div>
        <div class="mesh-line mesh-line-12"></div>

        <!-- DATA PACKETS -->
        <span class="mesh-packet mesh-packet-1">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="mesh-packet mesh-packet-2">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="mesh-packet mesh-packet-3">
          <i class="fas fa-bolt"></i>
        </span>

        <span class="mesh-packet mesh-packet-4">
          <i class="fas fa-bolt"></i>
        </span>

        <!-- DEVICES -->

        <div class="mesh-device mesh-device-1">
          <div class="mesh-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 01</strong>
          <small>Node 1</small>
        </div>

        <div class="mesh-device mesh-device-2">
          <div class="mesh-device-icon">
            <i class="fas fa-laptop"></i>
          </div>
          <strong>Laptop</strong>
          <small>Node 2</small>
        </div>

        <div class="mesh-device mesh-device-3">
          <div class="mesh-device-icon">
            <i class="fas fa-server"></i>
          </div>
          <strong>Server</strong>
          <small>Node 3</small>
        </div>

        <div class="mesh-device mesh-device-4">
          <div class="mesh-device-icon">
            <i class="fas fa-desktop"></i>
          </div>
          <strong>PC 02</strong>
          <small>Node 4</small>
        </div>

        <div class="mesh-device mesh-device-5">
          <div class="mesh-device-icon">
            <i class="fas fa-print"></i>
          </div>
          <strong>Printer</strong>
          <small>Node 5</small>
        </div>

        <div class="mesh-device mesh-device-6">
          <div class="mesh-device-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <strong>Mobile</strong>
          <small>Node 6</small>
        </div>

        <div class="mesh-center">
          <i class="fas fa-project-diagram"></i>
          <strong>MESH</strong>
          <small>Multiple Paths</small>
        </div>

        <div class="mesh-data-label">
          <i class="fas fa-route"></i>
          Multiple paths allow data to reach its destination
        </div>

      </div>

      <div class="mesh-legend">

        <span>
          <i class="fas fa-desktop"></i>
          Network Node
        </span>

        <span>
          <i class="fas fa-project-diagram"></i>
          Interconnection
        </span>

        <span>
          <i class="fas fa-bolt"></i>
          Data Packet
        </span>

      </div>
    </div>

    <!-- DEFINITION -->
    <h3>
      <i class="fas fa-info-circle"></i>
      What is Mesh Topology?
    </h3>

    <p>
      Mesh Topology is a network arrangement where devices have multiple
      connections with other devices. This creates several possible paths
      for data transmission.
    </p>

    <p>
      Mesh networks are mainly divided into two types:
      <strong>Full Mesh</strong> and <strong>Partial Mesh</strong>.
    </p>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fas fa-circle-nodes"></i>
        <h4>Full Mesh</h4>
        <p>
          Every device is directly connected to every other device.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-project-diagram"></i>
        <h4>Partial Mesh</h4>
        <p>
          Only selected devices have multiple direct connections.
        </p>
      </div>

    </div>

    <!-- HOW IT WORKS -->
    <h3>
      <i class="fas fa-cogs"></i>
      How Does Mesh Topology Work?
    </h3>

    <p>
      In Mesh Topology, data can travel through different network paths.
      When multiple paths are available, the network can select an
      appropriate route to reach the destination.
    </p>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fas fa-desktop"></i>
        <h4>1. Sender</h4>
        <p>
          The sender generates a data packet for the destination device.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-route"></i>
        <h4>2. Multiple Paths</h4>
        <p>
          Data can travel through one of several available network paths.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fas fa-laptop"></i>
        <h4>3. Receiver</h4>
        <p>
          The destination device receives the data after it reaches the
          selected route.
        </p>
      </div>

    </div>

    <!-- SIMPLE EXAMPLE -->
    <h3>
      <i class="fas fa-school"></i>
      Simple Example
    </h3>

    <p>
      Imagine five important network routers connected to several other
      routers. If one link between two routers stops working, traffic
      can potentially be redirected through another available route.
    </p>

    <div class="network-callout">
      <i class="fas fa-route"></i>
      <div>
        <strong>Example:</strong>
        Router A → Router B → Router D
        <br>
        If A → B is unavailable, another route may be used depending
        on the network design and routing information.
      </div>
    </div>

    <!-- MAIN COMPONENTS -->
    <h3>
      <i class="fas fa-puzzle-piece"></i>
      Main Components
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-server"></i>
        <strong>Network Nodes</strong>
        <p>
          Computers, routers, servers and other devices that participate
          in the network.
        </p>
      </div>

      <div>
        <i class="fas fa-link"></i>
        <strong>Multiple Links</strong>
        <p>
          Several connections provide different possible paths between
          network devices.
        </p>
      </div>

      <div>
        <i class="fas fa-route"></i>
        <strong>Routing</strong>
        <p>
          Routing mechanisms can determine suitable paths for forwarding
          data between devices.
        </p>
      </div>

      <div>
        <i class="fas fa-exchange-alt"></i>
        <strong>Data Packets</strong>
        <p>
          Information is divided into packets and transmitted through
          available network paths.
        </p>
      </div>

    </div>

    <!-- FULL VS PARTIAL -->
    <h3>
      <i class="fas fa-sitemap"></i>
      Types of Mesh Topology
    </h3>

    <div class="network-table-wrapper">
      <table class="network-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Connections</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Full Mesh</td>
            <td>
              Every device is directly connected to every other device.
            </td>
            <td>Very High</td>
          </tr>

          <tr>
            <td>Partial Mesh</td>
            <td>
              Only selected devices have multiple direct connections.
            </td>
            <td>Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- DATA FLOW -->
    <h3>
      <i class="fas fa-random"></i>
      Data Flow in Mesh Topology
    </h3>

    <div class="mesh-data-flow">

      <div class="mesh-data-device">
        <i class="fas fa-desktop"></i>
        <strong>PC 1</strong>
        <small>Sender</small>
      </div>

      <div class="mesh-flow-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="mesh-data-device mesh-route-device">
        <i class="fas fa-route"></i>
        <strong>Router</strong>
        <small>Path Selection</small>
      </div>

      <div class="mesh-flow-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="mesh-data-device">
        <i class="fas fa-laptop"></i>
        <strong>PC 2</strong>
        <small>Receiver</small>
      </div>

    </div>

    <div class="network-callout">
      <i class="fas fa-shield-alt"></i>
      <div>
        <strong>Fault Tolerance:</strong>
        One of the major benefits of Mesh Topology is the availability
        of multiple communication paths. This can improve reliability
        when a link fails.
      </div>
    </div>

    <!-- ADVANTAGES -->
    <h3>
      <i class="fas fa-check-circle"></i>
      Advantages of Mesh Topology
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-shield-alt"></i>
        <strong>High Reliability</strong>
        <p>
          Multiple connections can provide alternative paths when a
          link becomes unavailable.
        </p>
      </div>

      <div>
        <i class="fas fa-route"></i>
        <strong>Multiple Paths</strong>
        <p>
          Data can have more than one possible route between network nodes.
        </p>
      </div>

      <div>
        <i class="fas fa-exclamation-triangle"></i>
        <strong>Fault Tolerance</strong>
        <p>
          Failure of one link does not necessarily stop all communication.
        </p>
      </div>

      <div>
        <i class="fas fa-lock"></i>
        <strong>Better Privacy</strong>
        <p>
          In a full mesh, direct device-to-device links can provide
          dedicated communication paths.
        </p>
      </div>

    </div>

    <!-- DISADVANTAGES -->
    <h3>
      <i class="fas fa-times-circle"></i>
      Disadvantages of Mesh Topology
    </h3>

    <div class="network-points">

      <div>
        <i class="fas fa-dollar-sign"></i>
        <strong>High Cost</strong>
        <p>
          Full mesh requires many links, increasing installation and
          maintenance costs.
        </p>
      </div>

      <div>
        <i class="fas fa-cogs"></i>
        <strong>Complex Installation</strong>
        <p>
          Designing and maintaining a large number of connections can
          be complicated.
        </p>
      </div>

      <div>
        <i class="fas fa-plug"></i>
        <strong>More Cabling</strong>
        <p>
          A full mesh requires a large number of physical or logical
          connections.
        </p>
      </div>

      <div>
        <i class="fas fa-tools"></i>
        <strong>Difficult Management</strong>
        <p>
          Managing many interconnected links becomes difficult as the
          network grows.
        </p>
      </div>

    </div>

    <!-- REAL LIFE EXAMPLE -->
    <h3>
      <i class="fas fa-globe"></i>
      Real-Life Example
    </h3>

    <p>
      Mesh-based designs are useful in situations where network
      reliability and alternative communication paths are important.
      Wireless mesh networks, backbone networks and some large-scale
      communication systems can use mesh principles.
    </p>

    <div class="network-callout">
      <i class="fas fa-wifi"></i>
      <div>
        <strong>Example:</strong>
        In a wireless mesh network, multiple access points or nodes
        communicate with one another. If one path becomes unavailable,
        traffic may be able to use another path.
      </div>
    </div>

    <!-- COMPARISON -->
    <h3>
      <i class="fas fa-table"></i>
      Mesh Topology vs Star Topology
    </h3>

    <div class="network-table-wrapper">
      <table class="network-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Mesh Topology</th>
            <th>Star Topology</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Structure</td>
            <td>Multiple interconnected paths</td>
            <td>Centralized</td>
          </tr>

          <tr>
            <td>Central Device</td>
            <td>Not necessarily required</td>
            <td>Required</td>
          </tr>

          <tr>
            <td>Reliability</td>
            <td>Very High</td>
            <td>High</td>
          </tr>

          <tr>
            <td>Cost</td>
            <td>High</td>
            <td>Moderate</td>
          </tr>

          <tr>
            <td>Installation</td>
            <td>Complex</td>
            <td>Easy</td>
          </tr>

          <tr>
            <td>Fault Tolerance</td>
            <td>High</td>
            <td>Depends on central device</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CONCLUSION -->
    <h3>
      <i class="fas fa-graduation-cap"></i>
      Conclusion
    </h3>

    <p>
      <strong>Mesh Topology</strong> connects network devices through
      multiple links and provides more than one possible communication
      path. This makes it highly reliable and suitable for networks where
      availability is very important.
    </p>

    <p>
      However, full mesh networks require many connections, making them
      expensive and complex to install and maintain. For this reason,
      partial mesh designs are often preferred when only important nodes
      need multiple connections.
    </p>
  `
},
"Tree Topology": {
  image: "images/tree-topology.jpg",
  title: "Tree Topology",
  content: `
    <p>
      <strong>Tree Topology</strong> is a hierarchical network topology in which
      devices are arranged in the form of a tree structure. It combines the
      features of <strong>Star Topology</strong> and <strong>Bus Topology</strong>
      to create different levels of network connections.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <div>
        <strong>Simple Idea:</strong>
        Think of a tree. One main device works like the root, several branch
        devices connect below it, and computers are connected at the lower levels.
        This creates a clear hierarchical structure.
      </div>
    </div>

    <h3><i class="fa-solid fa-network-wired"></i> 3D Tree Topology Example</h3>

    <div class="tree-3d-network">

      <div class="tree-top-header">
        <div class="tree-heading">
          <span class="tree-heading-icon">
            <i class="fa-solid fa-sitemap"></i>
          </span>
          Hierarchical Network
        </div>
        <span class="tree-online">
          <i class="fa-solid fa-circle"></i> Network Online
        </span>
      </div>

      <div class="tree-room">

        <div class="tree-floor"></div>

        <!-- Main Root -->
        <div class="tree-root">
          <div class="tree-root-glow"></div>
          <div class="tree-root-box">
            <i class="fa-solid fa-server"></i>
            <strong>Core Router</strong>
            <small>ROOT</small>
          </div>
        </div>

        <!-- Main Branch Lines -->
        <div class="tree-branch tree-branch-1"></div>
        <div class="tree-branch tree-branch-2"></div>
        <div class="tree-branch tree-branch-3"></div>

        <!-- Level 1 Switches -->
        <div class="tree-switch tree-switch-1">
          <i class="fa-solid fa-network-wired"></i>
          <span>Switch A</span>
        </div>

        <div class="tree-switch tree-switch-2">
          <i class="fa-solid fa-network-wired"></i>
          <span>Switch B</span>
        </div>

        <div class="tree-switch tree-switch-3">
          <i class="fa-solid fa-network-wired"></i>
          <span>Switch C</span>
        </div>

        <!-- Lower Branches -->
        <div class="tree-sub-branch tree-sub-1"></div>
        <div class="tree-sub-branch tree-sub-2"></div>
        <div class="tree-sub-branch tree-sub-3"></div>
        <div class="tree-sub-branch tree-sub-4"></div>
        <div class="tree-sub-branch tree-sub-5"></div>
        <div class="tree-sub-branch tree-sub-6"></div>

        <!-- End Devices -->
        <div class="tree-device tree-device-1">
          <i class="fa-solid fa-desktop"></i>
          <span>PC 1</span>
        </div>

        <div class="tree-device tree-device-2">
          <i class="fa-solid fa-desktop"></i>
          <span>PC 2</span>
        </div>

        <div class="tree-device tree-device-3">
          <i class="fa-solid fa-laptop"></i>
          <span>Laptop 1</span>
        </div>

        <div class="tree-device tree-device-4">
          <i class="fa-solid fa-desktop"></i>
          <span>PC 3</span>
        </div>

        <div class="tree-device tree-device-5">
          <i class="fa-solid fa-laptop"></i>
          <span>Laptop 2</span>
        </div>

        <div class="tree-device tree-device-6">
          <i class="fa-solid fa-desktop"></i>
          <span>PC 4</span>
        </div>

        <div class="tree-device tree-device-7">
          <i class="fa-solid fa-desktop"></i>
          <span>PC 5</span>
        </div>

        <div class="tree-device tree-device-8">
          <i class="fa-solid fa-laptop"></i>
          <span>Laptop 3</span>
        </div>

        <!-- Data Packets -->
        <div class="tree-packet tree-packet-1">
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div class="tree-packet tree-packet-2">
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div class="tree-packet tree-packet-3">
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div class="tree-data-label">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
          Data travels through hierarchical levels
        </div>

      </div>

      <div class="tree-legend">
        <span><i class="fa-solid fa-server"></i> Root Device</span>
        <span><i class="fa-solid fa-network-wired"></i> Branch Switch</span>
        <span><i class="fa-solid fa-desktop"></i> End Device</span>
        <span><i class="fa-solid fa-bolt"></i> Data Packet</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-route"></i> How Tree Topology Works</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-1"></i>
        <h4>Root Device</h4>
        <p>
          The top-level router or switch acts as the main connection point
          for the entire network.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-2"></i>
        <h4>Branch Devices</h4>
        <p>
          Secondary switches are connected to the root device and create
          different branches of the network.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-3"></i>
        <h4>End Devices</h4>
        <p>
          Computers, laptops, printers and other devices connect to the
          branch switches.
        </p>
      </div>

    </div>

    <h3><i class="fa-solid fa-diagram-project"></i> Simple Example</h3>

    <p>
      Suppose a college has one main network room. A <strong>Core Router</strong>
      is placed at the top level. It connects to different switches for the
      Computer Lab, Library and Administration Department. Each switch then
      connects to several computers.
    </p>

    <div class="network-points">
      <div>
        <i class="fa-solid fa-building"></i>
        <strong>College Network</strong>
      </div>
      <div>
        <i class="fa-solid fa-server"></i>
        <strong>Core Router</strong>
      </div>
      <div>
        <i class="fa-solid fa-network-wired"></i>
        <strong>Department Switches</strong>
      </div>
      <div>
        <i class="fa-solid fa-computer"></i>
        <strong>Computers</strong>
      </div>
    </div>

    <h3><i class="fa-solid fa-gears"></i> Main Components</h3>

    <table class="network-table">
      <tr>
        <th>Component</th>
        <th>Purpose</th>
      </tr>
      <tr>
        <td>Root Router/Switch</td>
        <td>Acts as the main connection point.</td>
      </tr>
      <tr>
        <td>Branch Switches</td>
        <td>Connect different sections or departments.</td>
      </tr>
      <tr>
        <td>End Devices</td>
        <td>Computers, laptops, printers and other devices.</td>
      </tr>
      <tr>
        <td>Transmission Media</td>
        <td>Carries data between network devices.</td>
      </tr>
    </table>

    <h3><i class="fa-solid fa-arrow-right-arrow-left"></i> Data Flow</h3>

    <div class="tree-data-flow">

      <div class="tree-flow-device">
        <i class="fa-solid fa-desktop"></i>
        <span>PC</span>
      </div>

      <div class="tree-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="tree-flow-device">
        <i class="fa-solid fa-network-wired"></i>
        <span>Switch</span>
      </div>

      <div class="tree-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="tree-flow-device">
        <i class="fa-solid fa-server"></i>
        <span>Core Router</span>
      </div>

      <div class="tree-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="tree-flow-device">
        <i class="fa-solid fa-network-wired"></i>
        <span>Other Branch</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-circle-check"></i> Advantages of Tree Topology</h3>

    <div class="network-points">
      <div>
        <i class="fa-solid fa-expand"></i>
        <strong>Highly Scalable</strong>
        <span>New branches and devices can be added easily.</span>
      </div>

      <div>
        <i class="fa-solid fa-sitemap"></i>
        <strong>Hierarchical Structure</strong>
        <span>Devices are organized into clear levels.</span>
      </div>

      <div>
        <i class="fa-solid fa-wrench"></i>
        <strong>Easy Management</strong>
        <span>Different network sections can be managed separately.</span>
      </div>

      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <strong>Easy Troubleshooting</strong>
        <span>Problems can often be isolated to a particular branch.</span>
      </div>
    </div>

    <h3><i class="fa-solid fa-circle-xmark"></i> Disadvantages of Tree Topology</h3>

    <div class="network-points">
      <div>
        <i class="fa-solid fa-triangle-exclamation"></i>
        <strong>Root Failure</strong>
        <span>Failure of the main device can affect the whole network.</span>
      </div>

      <div>
        <i class="fa-solid fa-money-bill"></i>
        <strong>Higher Cost</strong>
        <span>More switches, cables and networking equipment may be required.</span>
      </div>

      <div>
        <i class="fa-solid fa-network-wired"></i>
        <strong>Complex Installation</strong>
        <span>Large hierarchical networks require careful planning.</span>
      </div>

      <div>
        <i class="fa-solid fa-bolt"></i>
        <strong>Branch Dependency</strong>
        <span>A failed branch device can disconnect devices below that branch.</span>
      </div>
    </div>

    <h3><i class="fa-solid fa-earth-americas"></i> Real-Life Examples</h3>

    <ul>
      <li>Large college and university networks</li>
      <li>Corporate office networks</li>
      <li>Bank branch networks</li>
      <li>Large organizational networks</li>
      <li>Campus area networks</li>
      <li>Enterprise networks with multiple departments</li>
    </ul>

    <h3><i class="fa-solid fa-table"></i> Tree vs Star Topology</h3>

    <table class="network-table">
      <tr>
        <th>Feature</th>
        <th>Tree Topology</th>
        <th>Star Topology</th>
      </tr>
      <tr>
        <td>Structure</td>
        <td>Hierarchical</td>
        <td>Centralized</td>
      </tr>
      <tr>
        <td>Scalability</td>
        <td>Very High</td>
        <td>Moderate</td>
      </tr>
      <tr>
        <td>Network Levels</td>
        <td>Multiple levels</td>
        <td>Usually one central level</td>
      </tr>
      <tr>
        <td>Management</td>
        <td>Section-wise management</td>
        <td>Central management</td>
      </tr>
    </table>

    <div class="network-callout">
      <i class="fa-solid fa-graduation-cap"></i>
      <div>
        <strong>Key Point:</strong>
        Tree Topology is best suited for large networks where devices need
        to be organized into multiple hierarchical branches.
      </div>
    </div>

    <h3><i class="fa-solid fa-flag-checkered"></i> Conclusion</h3>

    <p>
      <strong>Tree Topology</strong> provides a structured and scalable way
      to connect large numbers of devices. Its hierarchical design makes
      network management easier and allows different departments or sections
      to have their own branches. However, it requires more equipment and
      careful planning compared with simpler topologies.
    </p>
  `
},

"Hybrid Topology": {
  image: "images/hybrid-topology.jpg",
  title: "Hybrid Topology",
  content: `
    <p>
      <strong>Hybrid Topology</strong> is a network topology that combines
      two or more different types of network topologies, such as
      <strong>Star, Bus, Ring, Mesh,</strong> or <strong>Tree</strong>.
      It is designed to provide flexibility and scalability in large networks.
    </p>

    <div class="network-callout">
      <i class="fa-solid fa-lightbulb"></i>
      <div>
        <strong>Simple Idea:</strong>
        Hybrid Topology is like combining different road systems.
        One part of a network may use Star Topology, while another part
        may use Ring or Bus Topology. These different parts are connected
        together to form one larger network.
      </div>
    </div>

    <h3><i class="fa-solid fa-diagram-project"></i> 3D Hybrid Network Example</h3>

    <div class="hybrid-3d-network">

      <div class="hybrid-top-header">
        <div class="hybrid-heading">
          <span class="hybrid-heading-icon">
            <i class="fa-solid fa-network-wired"></i>
          </span>
          Hybrid Enterprise Network
        </div>

        <span class="hybrid-online">
          <i class="fa-solid fa-circle"></i> Network Online
        </span>
      </div>

      <div class="hybrid-room">

        <div class="hybrid-floor"></div>

        <!-- Central Core -->
        <div class="hybrid-core">
          <div class="hybrid-core-glow"></div>
          <div class="hybrid-core-box">
            <i class="fa-solid fa-server"></i>
            <strong>Core Router</strong>
            <small>MAIN NETWORK</small>
          </div>
        </div>

        <!-- Star Section -->
        <div class="hybrid-section hybrid-star-section">
          <div class="hybrid-section-title">
            <i class="fa-solid fa-star"></i>
            Star Network
          </div>

          <div class="hybrid-star-switch">
            <i class="fa-solid fa-network-wired"></i>
            <span>Switch A</span>
          </div>

          <div class="hybrid-star-line hybrid-star-line-1"></div>
          <div class="hybrid-star-line hybrid-star-line-2"></div>
          <div class="hybrid-star-line hybrid-star-line-3"></div>

          <div class="hybrid-device hybrid-device-1">
            <i class="fa-solid fa-desktop"></i>
            <span>PC 1</span>
          </div>

          <div class="hybrid-device hybrid-device-2">
            <i class="fa-solid fa-laptop"></i>
            <span>Laptop 1</span>
          </div>

          <div class="hybrid-device hybrid-device-3">
            <i class="fa-solid fa-print"></i>
            <span>Printer</span>
          </div>
        </div>

        <!-- Bus Section -->
        <div class="hybrid-section hybrid-bus-section">
          <div class="hybrid-section-title">
            <i class="fa-solid fa-road"></i>
            Bus Network
          </div>

          <div class="hybrid-bus-line"></div>

          <div class="hybrid-bus-drop hybrid-bus-drop-1"></div>
          <div class="hybrid-bus-drop hybrid-bus-drop-2"></div>
          <div class="hybrid-bus-drop hybrid-bus-drop-3"></div>

          <div class="hybrid-device hybrid-device-4">
            <i class="fa-solid fa-desktop"></i>
            <span>PC 2</span>
          </div>

          <div class="hybrid-device hybrid-device-5">
            <i class="fa-solid fa-desktop"></i>
            <span>PC 3</span>
          </div>

          <div class="hybrid-device hybrid-device-6">
            <i class="fa-solid fa-laptop"></i>
            <span>Laptop 2</span>
          </div>
        </div>

        <!-- Ring Section -->
        <div class="hybrid-section hybrid-ring-section">
          <div class="hybrid-section-title">
            <i class="fa-solid fa-circle-notch"></i>
            Ring Network
          </div>

          <div class="hybrid-ring">
            <div class="hybrid-ring-node hybrid-ring-node-1">
              <i class="fa-solid fa-desktop"></i>
            </div>

            <div class="hybrid-ring-node hybrid-ring-node-2">
              <i class="fa-solid fa-laptop"></i>
            </div>

            <div class="hybrid-ring-node hybrid-ring-node-3">
              <i class="fa-solid fa-desktop"></i>
            </div>

            <div class="hybrid-ring-node hybrid-ring-node-4">
              <i class="fa-solid fa-print"></i>
            </div>
          </div>
        </div>

        <!-- Core Connections -->
        <div class="hybrid-core-link hybrid-link-star"></div>
        <div class="hybrid-core-link hybrid-link-bus"></div>
        <div class="hybrid-core-link hybrid-link-ring"></div>

        <!-- Data Packets -->
        <div class="hybrid-packet hybrid-packet-1">
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div class="hybrid-packet hybrid-packet-2">
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div class="hybrid-packet hybrid-packet-3">
          <i class="fa-solid fa-bolt"></i>
        </div>

        <div class="hybrid-data-label">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
          Different topologies working as one network
        </div>

      </div>

      <div class="hybrid-legend">
        <span>
          <i class="fa-solid fa-server"></i>
          Core Router
        </span>

        <span>
          <i class="fa-solid fa-star"></i>
          Star Section
        </span>

        <span>
          <i class="fa-solid fa-road"></i>
          Bus Section
        </span>

        <span>
          <i class="fa-solid fa-circle-notch"></i>
          Ring Section
        </span>

        <span>
          <i class="fa-solid fa-bolt"></i>
          Data Packet
        </span>
      </div>

    </div>

    <h3><i class="fa-solid fa-circle-info"></i> How Hybrid Topology Works</h3>

    <div class="network-3d-grid">

      <div class="network-3d-box">
        <i class="fa-solid fa-1"></i>
        <h4>Separate Sections</h4>
        <p>
          Different departments or locations can use different network
          topologies according to their requirements.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-2"></i>
        <h4>Connect the Sections</h4>
        <p>
          Routers and switches connect the different topology sections
          together.
        </p>
      </div>

      <div class="network-3d-box">
        <i class="fa-solid fa-3"></i>
        <h4>One Large Network</h4>
        <p>
          All sections communicate with each other and work together
          as a single network.
        </p>
      </div>

    </div>

    <h3><i class="fa-solid fa-diagram-project"></i> Simple Example</h3>

    <p>
      Imagine a large company with different departments. The
      <strong>IT Department</strong> may use Star Topology, another section
      may use Ring Topology, and a smaller section may use Bus Topology.
      These sections are connected through a central router to create
      a single <strong>Hybrid Network</strong>.
    </p>

    <div class="network-points">

      <div>
        <i class="fa-solid fa-code"></i>
        <strong>IT Department</strong>
        <span>Uses Star Topology.</span>
      </div>

      <div>
        <i class="fa-solid fa-users"></i>
        <strong>Office Department</strong>
        <span>Uses another topology according to its requirements.</span>
      </div>

      <div>
        <i class="fa-solid fa-server"></i>
        <strong>Core Router</strong>
        <span>Connects different network sections.</span>
      </div>

      <div>
        <i class="fa-solid fa-building"></i>
        <strong>Complete Company</strong>
        <span>All departments communicate through the hybrid network.</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-puzzle-piece"></i> Common Hybrid Combinations</h3>

    <table class="network-table">
      <tr>
        <th>Combination</th>
        <th>Description</th>
      </tr>

      <tr>
        <td>Star-Bus</td>
        <td>Multiple Star networks connected through a common bus.</td>
      </tr>

      <tr>
        <td>Star-Ring</td>
        <td>Star networks connected using a ring structure.</td>
      </tr>

      <tr>
        <td>Tree-Star</td>
        <td>Hierarchical Tree structure with Star networks at lower levels.</td>
      </tr>

      <tr>
        <td>Mesh-Star</td>
        <td>Star networks combined with multiple redundant connections.</td>
      </tr>
    </table>

    <h3><i class="fa-solid fa-gears"></i> Main Components</h3>

    <div class="network-points">

      <div>
        <i class="fa-solid fa-server"></i>
        <strong>Routers</strong>
        <span>Connect different network sections.</span>
      </div>

      <div>
        <i class="fa-solid fa-network-wired"></i>
        <strong>Switches</strong>
        <span>Connect devices inside individual sections.</span>
      </div>

      <div>
        <i class="fa-solid fa-computer"></i>
        <strong>End Devices</strong>
        <span>Computers, laptops, printers and servers.</span>
      </div>

      <div>
        <i class="fa-solid fa-link"></i>
        <strong>Transmission Media</strong>
        <span>Provides communication paths between devices.</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-route"></i> Data Flow in Hybrid Topology</h3>

    <div class="hybrid-data-flow">

      <div class="hybrid-flow-device">
        <i class="fa-solid fa-desktop"></i>
        <span>Source PC</span>
      </div>

      <div class="hybrid-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="hybrid-flow-device">
        <i class="fa-solid fa-network-wired"></i>
        <span>Local Network</span>
      </div>

      <div class="hybrid-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="hybrid-flow-device">
        <i class="fa-solid fa-server"></i>
        <span>Core Router</span>
      </div>

      <div class="hybrid-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="hybrid-flow-device">
        <i class="fa-solid fa-network-wired"></i>
        <span>Other Network</span>
      </div>

      <div class="hybrid-flow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="hybrid-flow-device">
        <i class="fa-solid fa-laptop"></i>
        <span>Destination</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-circle-check"></i> Advantages of Hybrid Topology</h3>

    <div class="network-points">

      <div>
        <i class="fa-solid fa-expand"></i>
        <strong>Highly Scalable</strong>
        <span>New network sections can be added according to requirements.</span>
      </div>

      <div>
        <i class="fa-solid fa-sliders"></i>
        <strong>Flexible</strong>
        <span>Different topologies can be used for different departments.</span>
      </div>

      <div>
        <i class="fa-solid fa-shield-halved"></i>
        <strong>Reliable</strong>
        <span>A problem in one section may not affect the complete network.</span>
      </div>

      <div>
        <i class="fa-solid fa-wrench"></i>
        <strong>Easy Management</strong>
        <span>Individual sections can be managed independently.</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-circle-xmark"></i> Disadvantages of Hybrid Topology</h3>

    <div class="network-points">

      <div>
        <i class="fa-solid fa-money-bill"></i>
        <strong>Expensive</strong>
        <span>It requires more networking devices and infrastructure.</span>
      </div>

      <div>
        <i class="fa-solid fa-gears"></i>
        <strong>Complex Design</strong>
        <span>Planning and configuring multiple topologies can be difficult.</span>
      </div>

      <div>
        <i class="fa-solid fa-user-gear"></i>
        <strong>Requires Skilled Staff</strong>
        <span>Network administrators need knowledge of different topologies.</span>
      </div>

      <div>
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <strong>Maintenance Cost</strong>
        <span>Maintenance can be more expensive than simpler topologies.</span>
      </div>

    </div>

    <h3><i class="fa-solid fa-earth-americas"></i> Real-Life Examples</h3>

    <ul>
      <li>Large corporate networks</li>
      <li>University and college campus networks</li>
      <li>Banking networks</li>
      <li>Telecommunication networks</li>
      <li>Data center networks</li>
      <li>Large enterprise networks</li>
    </ul>

    <h3><i class="fa-solid fa-scale-balanced"></i> Hybrid vs Other Topologies</h3>

    <table class="network-table">
      <tr>
        <th>Feature</th>
        <th>Hybrid</th>
        <th>Star</th>
        <th>Bus</th>
        <th>Ring</th>
      </tr>

      <tr>
        <td>Structure</td>
        <td>Combination</td>
        <td>Centralized</td>
        <td>Linear</td>
        <td>Circular</td>
      </tr>

      <tr>
        <td>Flexibility</td>
        <td>Very High</td>
        <td>High</td>
        <td>Low</td>
        <td>Moderate</td>
      </tr>

      <tr>
        <td>Scalability</td>
        <td>Very High</td>
        <td>High</td>
        <td>Low</td>
        <td>Moderate</td>
      </tr>

      <tr>
        <td>Cost</td>
        <td>High</td>
        <td>Moderate</td>
        <td>Low</td>
        <td>Moderate</td>
      </tr>
    </table>

    <div class="network-callout">
      <i class="fa-solid fa-graduation-cap"></i>
      <div>
        <strong>Key Point:</strong>
        Hybrid Topology combines two or more different network topologies
        to create a flexible, scalable and customized network.
      </div>
    </div>

    <h3><i class="fa-solid fa-flag-checkered"></i> Conclusion</h3>

    <p>
      <strong>Hybrid Topology</strong> is suitable for large and complex
      networks where a single topology cannot satisfy all requirements.
      It provides high flexibility, scalability and reliability, but its
      installation, management and maintenance can be more expensive and
      complex.
    </p>
  `
},

"Advantages and Disadvantages of Topologies": {
  image: "images/network-topology-advantages.jpg",
  title: "Advantages and Disadvantages of Network Topology",
  content: `
    <div class="topology-ad-content">

      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-network-wired"></i> Advantages and Disadvantages of Network Topology</h2>

        <p>
          Network topology describes how computers, networking devices, and communication
          links are arranged in a network. Different topologies provide different levels
          of performance, reliability, cost, and scalability.
        </p>

        <div class="topology-ad-callout">
          <i class="fa-solid fa-lightbulb"></i>
          <div>
            <strong>Exam Tip:</strong>
            In an exam, always write at least 4–5 advantages and disadvantages
            with suitable examples.
          </div>
        </div>
      </section>


      <!-- 3D NETWORK -->
      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-cubes"></i> 3D Network Overview</h2>

        <p>
          The following 3D model shows a network where multiple devices communicate
          through a central networking device.
        </p>

        <div class="topology-ad-3d">
          <div class="topology-ad-header">
            <div class="topology-ad-heading">
              <span class="topology-ad-heading-icon">
                <i class="fa-solid fa-network-wired"></i>
              </span>
              Network Topology
            </div>

            <div class="topology-ad-online">
              <span></span> NETWORK ONLINE
            </div>
          </div>

          <div class="topology-ad-room">

            <div class="topology-ad-floor"></div>

            <!-- Central Router -->
            <div class="topology-ad-router">
              <div class="topology-ad-router-glow"></div>

              <div class="topology-ad-router-box">
                <i class="fa-solid fa-server"></i>
                <strong>Router</strong>

                <div class="topology-ad-router-lights">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <!-- Connection Lines -->
            <div class="topology-ad-line topology-ad-line-1"></div>
            <div class="topology-ad-line topology-ad-line-2"></div>
            <div class="topology-ad-line topology-ad-line-3"></div>
            <div class="topology-ad-line topology-ad-line-4"></div>
            <div class="topology-ad-line topology-ad-line-5"></div>
            <div class="topology-ad-line topology-ad-line-6"></div>

            <!-- Devices -->
            <div class="topology-ad-device topology-ad-device-1">
              <i class="fa-solid fa-laptop"></i>
              <span>PC 1</span>
            </div>

            <div class="topology-ad-device topology-ad-device-2">
              <i class="fa-solid fa-desktop"></i>
              <span>PC 2</span>
            </div>

            <div class="topology-ad-device topology-ad-device-3">
              <i class="fa-solid fa-laptop"></i>
              <span>PC 3</span>
            </div>

            <div class="topology-ad-device topology-ad-device-4">
              <i class="fa-solid fa-desktop"></i>
              <span>PC 4</span>
            </div>

            <div class="topology-ad-device topology-ad-device-5">
              <i class="fa-solid fa-laptop"></i>
              <span>PC 5</span>
            </div>

            <div class="topology-ad-device topology-ad-device-6">
              <i class="fa-solid fa-desktop"></i>
              <span>PC 6</span>
            </div>

            <!-- Data Packets -->
            <span class="topology-ad-packet topology-ad-packet-1"></span>
            <span class="topology-ad-packet topology-ad-packet-2"></span>
            <span class="topology-ad-packet topology-ad-packet-3"></span>

            <div class="topology-ad-caption">
              <i class="fa-solid fa-circle-info"></i>
              Different topologies provide different benefits and limitations.
            </div>
          </div>

          <div class="topology-ad-legend">
            <span><i class="fa-solid fa-server"></i> Central Device</span>
            <span><i class="fa-solid fa-computer"></i> Network Device</span>
            <span><i class="fa-solid fa-circle"></i> Data Flow</span>
          </div>
        </div>
      </section>


      <!-- ADVANTAGES -->
      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-circle-check"></i> Advantages of Network Topology</h2>

        <div class="topology-ad-benefit-grid">

          <div class="topology-ad-benefit-card">
            <div class="topology-ad-benefit-icon">
              <i class="fa-solid fa-sitemap"></i>
            </div>
            <h3>Easy Network Management</h3>
            <p>
              A properly designed topology makes it easier for administrators
              to monitor and manage connected devices.
            </p>
          </div>

          <div class="topology-ad-benefit-card">
            <div class="topology-ad-benefit-icon">
              <i class="fa-solid fa-expand"></i>
            </div>
            <h3>Easy Expansion</h3>
            <p>
              Some topologies, especially Star and Tree, allow new computers
              and devices to be added easily.
            </p>
          </div>

          <div class="topology-ad-benefit-card">
            <div class="topology-ad-benefit-icon">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <h3>Better Performance</h3>
            <p>
              A suitable topology can provide efficient communication and
              reduce unnecessary network traffic.
            </p>
          </div>

          <div class="topology-ad-benefit-card">
            <div class="topology-ad-benefit-icon">
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <h3>Easy Troubleshooting</h3>
            <p>
              Structured topologies make it easier to identify faulty devices
              or communication links.
            </p>
          </div>

          <div class="topology-ad-benefit-card">
            <div class="topology-ad-benefit-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Improved Reliability</h3>
            <p>
              Some topologies provide alternative communication paths, which
              can improve network reliability.
            </p>
          </div>

          <div class="topology-ad-benefit-card">
            <div class="topology-ad-benefit-icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <h3>Scalability</h3>
            <p>
              Proper topology selection allows a network to grow according
              to organizational requirements.
            </p>
          </div>

        </div>
      </section>


      <!-- DISADVANTAGES -->
      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-circle-xmark"></i> Disadvantages of Network Topology</h2>

        <div class="topology-ad-disadvantage-grid">

          <div class="topology-ad-disadvantage-card">
            <div class="topology-ad-disadvantage-icon">
              <i class="fa-solid fa-indian-rupee-sign"></i>
            </div>
            <h3>High Cost</h3>
            <p>
              Some topologies require more cables, switches, routers, and
              other networking equipment, increasing the overall cost.
            </p>
          </div>

          <div class="topology-ad-disadvantage-card">
            <div class="topology-ad-disadvantage-icon">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3>Single Point of Failure</h3>
            <p>
              In some topologies, failure of a central device can affect
              communication between many connected devices.
            </p>
          </div>

          <div class="topology-ad-disadvantage-card">
            <div class="topology-ad-disadvantage-icon">
              <i class="fa-solid fa-gears"></i>
            </div>
            <h3>Complex Installation</h3>
            <p>
              Large and advanced topologies can require careful planning
              and professional installation.
            </p>
          </div>

          <div class="topology-ad-disadvantage-card">
            <div class="topology-ad-disadvantage-icon">
              <i class="fa-solid fa-toolbox"></i>
            </div>
            <h3>Maintenance</h3>
            <p>
              Large networks require regular monitoring, maintenance,
              configuration, and troubleshooting.
            </p>
          </div>

          <div class="topology-ad-disadvantage-card">
            <div class="topology-ad-disadvantage-icon">
              <i class="fa-solid fa-network-wired"></i>
            </div>
            <h3>Cabling Requirements</h3>
            <p>
              Some topologies require a large amount of physical cabling,
              which can make installation difficult.
            </p>
          </div>

          <div class="topology-ad-disadvantage-card">
            <div class="topology-ad-disadvantage-icon">
              <i class="fa-solid fa-diagram-project"></i>
            </div>
            <h3>Design Complexity</h3>
            <p>
              Complex topologies such as Mesh and Hybrid require more
              planning and configuration.
            </p>
          </div>

        </div>
      </section>


      <!-- COMPARISON -->
      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-table"></i> Advantages vs Disadvantages</h2>

        <div class="topology-ad-table-wrapper">
          <table class="topology-ad-table">
            <thead>
              <tr>
                <th>Advantages</th>
                <th>Disadvantages</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Easy network management</td>
                <td>Some topologies are expensive</td>
              </tr>

              <tr>
                <td>Easy network expansion</td>
                <td>Central device may become a failure point</td>
              </tr>

              <tr>
                <td>Better performance with proper design</td>
                <td>Complex installation in large networks</td>
              </tr>

              <tr>
                <td>Easy troubleshooting</td>
                <td>Maintenance can be difficult</td>
              </tr>

              <tr>
                <td>Some topologies provide high reliability</td>
                <td>Some designs require more cables</td>
              </tr>

              <tr>
                <td>Supports network scalability</td>
                <td>Complex topologies need careful planning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <!-- TOPOLOGY COMPARISON -->
      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-code-compare"></i> Major Topologies Comparison</h2>

        <div class="topology-ad-table-wrapper">
          <table class="topology-ad-table topology-ad-main-table">
            <thead>
              <tr>
                <th>Topology</th>
                <th>Main Advantage</th>
                <th>Main Disadvantage</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Bus</td>
                <td>Low cost and simple design</td>
                <td>Backbone failure affects the network</td>
              </tr>

              <tr>
                <td>Star</td>
                <td>Easy management and troubleshooting</td>
                <td>Central device failure can affect the network</td>
              </tr>

              <tr>
                <td>Ring</td>
                <td>Organized data transmission</td>
                <td>Failure can disturb communication</td>
              </tr>

              <tr>
                <td>Mesh</td>
                <td>High reliability and redundancy</td>
                <td>High cost and complex cabling</td>
              </tr>

              <tr>
                <td>Tree</td>
                <td>Good scalability</td>
                <td>Higher-level device failure may affect branches</td>
              </tr>

              <tr>
                <td>Hybrid</td>
                <td>Flexible and customizable</td>
                <td>Complex design and higher cost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <!-- SHORT EXAM ANSWER -->
      <section class="topology-ad-section">
        <h2><i class="fa-solid fa-pen-to-square"></i> Short Exam Answer</h2>

        <div class="topology-ad-exam-answer">
          <p>
            <strong>Network topology</strong> is the physical or logical arrangement
            of computers and networking devices in a network. Its advantages include
            easy management, scalability, better performance, easy troubleshooting,
            and improved reliability in suitable designs. Its disadvantages include
            high cost, complex installation, maintenance requirements, cabling
            requirements, and possible single points of failure. Therefore, the
            appropriate topology should be selected according to network size,
            cost, performance, and reliability requirements.
          </p>
        </div>
      </section>


      <!-- CONCLUSION -->
      <section class="topology-ad-conclusion">
        <div class="topology-ad-conclusion-icon">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>

        <div>
          <h2>Conclusion</h2>
          <p>
            Every network topology has its own advantages and disadvantages.
            Star topology is commonly preferred for easy management, Mesh provides
            high reliability, Tree supports hierarchical expansion, and Hybrid
            topology provides flexibility. The best topology depends on the
            requirements of the network.
          </p>
        </div>
      </section>

    </div>
  `
},

// aagla topic

};


function buildTheory(lesson, section) {

  // Agar lesson ka custom content available hai
  if (lessonContent[lesson]) {

    const data = lessonContent[lesson];

    return `
      <figure class="network-visual">
        <img
          src="${data.image}"
          alt="${data.title}"
        >
        <figcaption>${data.title}</figcaption>
      </figure>

      <div class="network-callout">
        <i class="fa-solid fa-circle-info"></i>
        <p>
          <strong>${data.title}</strong>
          is part of the ${section.title} module.
        </p>
      </div>

      <h3>${data.title}</h3>

      ${data.content}
    `;
  }
}


function renderTopics() {
  topicList.innerHTML = '';
  sections.forEach((section, sectionIndex) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'network-topic'; button.dataset.section = sectionIndex;
    button.innerHTML = `<span>${sectionIndex + 1}. ${section.title}</span><i class="fa-solid fa-chevron-right topic-arrow"></i>`;
    const lessons = document.createElement('div'); lessons.className = 'network-subtopics'; lessons.id = `network-section-${sectionIndex}`;
    section.lessons.forEach((lesson, lessonIndex) => {
      const lessonButton = document.createElement('button'); lessonButton.type = 'button'; lessonButton.className = 'network-subtopic'; lessonButton.textContent = `${lessonIndex + 1}. ${lesson}`;
      lessonButton.addEventListener('click', () => loadLesson(sectionIndex, lessonIndex)); lessons.appendChild(lessonButton);
    });
    button.addEventListener('click', () => {
      const wasOpen = lessons.classList.contains('open');
      document.querySelectorAll('.network-subtopics').forEach((group) => group.classList.remove('open'));
      document.querySelectorAll('.network-topic').forEach((topic) => topic.classList.remove('expanded'));
      lessons.classList.toggle('open', !wasOpen); button.classList.toggle('expanded', !wasOpen);
      if (!wasOpen) loadLesson(sectionIndex, 0);
    });
    topicList.append(button, lessons);
  });
  $('#lesson-count').textContent = allLessons.length;
}

function loadLesson(sectionIndex, lessonIndex) {
  activeSection = sectionIndex; activeLesson = lessonIndex;
  const section = sections[sectionIndex]; const lesson = section.lessons[lessonIndex]; const lessons = $(`#network-section-${sectionIndex}`);
  lessons.classList.add('open');
  topicList.querySelectorAll('.network-topic').forEach((button, index) => { button.classList.toggle('active', index === sectionIndex); button.classList.toggle('expanded', index === sectionIndex); });
  topicList.querySelectorAll('.network-subtopic').forEach((button) => button.classList.remove('active'));
  lessons.querySelectorAll('.network-subtopic')[lessonIndex].classList.add('active');
  $('#page-title').textContent = `${sectionIndex + 1}. ${section.title}`;
  $('#topic-title').textContent = lesson;
  $('#topic-description').textContent = `Learn ${lesson} as part of the ${section.title} module.`;
  $('#topic-theory').innerHTML = buildTheory(lesson, section);
  $('#topic-practice').innerHTML = `<ol class="network-lesson-list">${section.lessons.map((item) => `<li>${item}</li>`).join('')}</ol>`;
  $('#progress-fill').style.width = `${((sectionIndex + 1) / sections.length) * 100}%`;
  $('#progress-text').textContent = `${sectionIndex + 1} of ${sections.length} modules completed`;
  $('#progress-note').textContent = `${section.title}: ${lesson}`;
  $('#prev-topic-btn').disabled = sectionIndex === 0; $('#next-topic-btn').disabled = sectionIndex === sections.length - 1;
  $('#bottom-prev').disabled = sectionIndex === 0; $('#bottom-next').disabled = sectionIndex === sections.length - 1;
}

function movePrevious() { loadLesson(Math.max(0, activeSection - 1), 0); }
function moveNext() { loadLesson(Math.min(sections.length - 1, activeSection + 1), 0); }
$('#prev-topic-btn').addEventListener('click', movePrevious); $('#next-topic-btn').addEventListener('click', moveNext);
$('#bottom-prev').addEventListener('click', movePrevious); $('#bottom-next').addEventListener('click', moveNext);

const themeToggle = $('#theme-toggle');
function updateTheme() { const light = document.body.classList.contains('light-theme'); themeToggle.querySelector('i').className = light ? 'fa-solid fa-moon' : 'fa-solid fa-sun'; themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode'); }
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');
updateTheme(); themeToggle.addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); updateTheme(); });
const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav-menu');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
const modal = $('#auth-modal'); const auth = $('#auth-btn'); const close = $('#auth-close'); const form = $('#auth-form'); const email = $('#auth-email');
auth.addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); email.focus(); });
close.addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
modal.addEventListener('click', (event) => { if (event.target === modal) close.click(); });
form.addEventListener('submit', (event) => { event.preventDefault(); auth.textContent = 'Sign Out'; close.click(); form.reset(); });

renderTopics(); loadLesson(0, 0);
