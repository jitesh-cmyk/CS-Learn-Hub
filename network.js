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
