import { useState } from "react";

const TaskFlowShowcase = () => {
  const [vectorVersion, setVectorVersion] = useState(14);
  const [events, setEvents] = useState([
    { client: "Client A", action: "TASK_REORDER", key: "idx: 1.500", time: "14:10:02" },
    { client: "Client B", action: "STATE_MUTATION", key: "ver: 13 -> 14", time: "14:10:04" },
  ]);

  const pushEvent = () => {
    const nextVer = vectorVersion + 1;
    setVectorVersion(nextVer);
    setEvents((prev) => [
      {
        client: Math.random() > 0.5 ? "Client A" : "Client C",
        action: "OCC_MIDPOINT_INSERT",
        key: `ver: ${nextVer}`,
        time: new Date().toTimeString().split(" ")[0],
      },
      ...prev.slice(0, 2),
    ]);
  };

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0A0A10] p-5 sm:p-6 text-neutral-300 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-white font-medium">Collaborative State Synchronization</span>
        </div>
        <button
          onClick={pushEvent}
          className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition-colors text-[11px]"
        >
          Dispatch Sync Event
        </button>
      </div>

      <div className="pt-4 space-y-4">
        {/* Client -> Event -> Server -> Synchronized State Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-neutral-500">1. CLIENT</div>
            <div className="text-xs text-white font-semibold mt-1">WebSocket Client</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-neutral-500">2. EVENT</div>
            <div className="text-xs text-sky-400 font-semibold mt-1">Fractional Index Delta</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-neutral-500">3. SERVER</div>
            <div className="text-xs text-neutral-200 font-semibold mt-1">Spring Boot OCC Engine</div>
          </div>
          <div className="p-3 rounded-xl bg-sky-500/[0.06] border border-sky-500/20">
            <div className="text-[10px] text-sky-400">4. STATE</div>
            <div className="text-xs text-white font-bold mt-1">v.{vectorVersion} Synchronized</div>
          </div>
        </div>

        {/* Event Log */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
          <div className="text-[10px] text-neutral-500 pb-1 border-b border-white/[0.06]">
            Recent Vector Log
          </div>
          {events.map((ev, i) => (
            <div key={i} className="flex items-center justify-between text-[11px]">
              <span className="text-sky-400">{ev.client}</span>
              <span className="text-neutral-300">{ev.action}</span>
              <span className="text-neutral-500">{ev.key}</span>
              <span className="text-neutral-500">{ev.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskFlowShowcase;
