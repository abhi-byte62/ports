import packetImage from "../assets/images/packet-sniffer.png";
import specterImage from "../assets/images/specter-proxy.png";

export const projects = [
  {
    id: 1,
    title: "Packet Sniffer 3D",

    description:
      "Interactive 3D visualization platform that renders real network traffic using PCAP parsing, packet animation, and topology mapping.",

    technologies: ["Three.js", "JavaScript", "PCAP", "Vite"],

    image: packetImage,

    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",

    route: "/packet-sniffer",
  },

  {
    id: 2,
    title: "Specter Proxy",

    description:
      "High-performance HTTP/HTTPS proxy built for packet inspection, TLS analysis, latency injection, and network simulation.",

    technologies: ["Node.js", "Streams", "TLS", "HTTP", "HTTPS", "MITM"],

    image: specterImage,

    github: "https://github.com/abhi-byte62/specter-proxy",

    route: "/specter-proxy",
  },
];
