import { useEffect, useState } from "react";

const StatusOverlay = () => {
  const [uptime, setUptime] = useState(0);
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(12);
  const [activeModule, setActiveModule] = useState("IDLE");

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    // Update uptime counter (simulated system uptime)
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);

    // Simulate latency fluctuations
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 20) + 5);
    }, 5000);

    // Simulate active module changes
    const moduleNames = ["Routing", "Proxies", "Sniffing", "Protocols", "TLS", "Scanning", "Monitoring", "QUEUED"];
    const moduleInterval = setInterval(() => {
      const randomModule = moduleNames[Math.floor(Math.random() * moduleNames.length)];
      setActiveModule(randomModule);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(uptimeInterval);
      clearInterval(latencyInterval);
      clearInterval(moduleInterval);
    };
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* Top-left - System Status */}
      <div className="fixed top-4 left-4 z-50 font-terminal text-xs tracking-wider family-terminal">
        <div className="flex flex-col gap-1 text-[#00ff9d]">
          <div>{">"} SYSTEM: ONLINE</div>
          <div>{">"} LATENCY: {latency}ms</div>
          <div>{">"} UPTIME: {formatUptime(uptime)}</div>
          <div>{">"} ACTIVE MODULE: [{activeModule}]</div>
        </div>
      </div>

      {/* Bottom-right - Git/Build Info */}
      <div className="fixed bottom-4 right-4 z-50 font-terminal text-xs tracking-wider family-terminal">
        <div className="px-3 py-2 border border-[#2e2e3a] bg-[#0a0a0c]/80 rounded-lg backdrop-blur-sm">
          <div className="text-[#a855f7]">{">"} v.1.0.4-beta</div>
          <div className="text-[#ff2a2a]">#upd: commit 22fe803</div>
        </div>
      </div>

      {/* Subtle border frames */}
      <div className="fixed top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00f0ff40]" />
      <div className="fixed top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00f0ff40]" />
      <div className="fixed bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#a855f740]" />
      <div className="fixed bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#a855f740]" />
    </>
  );
};

export default StatusOverlay;