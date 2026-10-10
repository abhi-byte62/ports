import PropTypes from "prop-types";

export default function PixelMissionArtwork({ projectId, title }) {
  if (projectId === "liquiditylens") {
    return (
      <div className="w-full h-full min-h-[240px] bg-[#050811] border-3 border-[#334366] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-[inset_2px_2px_0px_rgba(255,255,255,0.1),_4px_4px_0px_#04070D]">
        <div className="flex items-center justify-between border-b-2 border-[#334366] pb-2 text-[9px] font-pixel text-[#8AA4FF]">
          <span>[L2_ORDER_BOOK_DEPTH_LADDER]</span>
          <span className="text-[#55E6C1]">~220ns FIFO</span>
        </div>
        
        {/* Visual Ask/Bid depth ladder */}
        <div className="space-y-1.5 py-3 font-pixel text-[8px]">
          {/* Asks */}
          <div className="flex items-center gap-2">
            <span className="w-20 text-[#FF6B6B]">ASK 104.50</span>
            <div className="flex-1 bg-[#0F172A] h-3.5 border-2 border-[#334366] overflow-hidden">
              <div className="bg-[#FF6B6B] h-full w-[85%] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" />
            </div>
            <span className="text-[#94A3B8] w-12 text-right">8.5K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-20 text-[#FF6B6B]">ASK 104.25</span>
            <div className="flex-1 bg-[#0F172A] h-3.5 border-2 border-[#334366] overflow-hidden">
              <div className="bg-[#FF6B6B] h-full w-[60%] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" />
            </div>
            <span className="text-[#94A3B8] w-12 text-right">6.0K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-20 text-[#FF6B6B]">ASK 104.00</span>
            <div className="flex-1 bg-[#0F172A] h-3.5 border-2 border-[#334366] overflow-hidden">
              <div className="bg-[#FF6B6B] h-full w-[35%] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" />
            </div>
            <span className="text-[#94A3B8] w-12 text-right">3.5K</span>
          </div>

          {/* Spread marker */}
          <div className="flex items-center justify-between px-2.5 py-1 bg-[#141E36] border-2 border-[#FFD166] text-[#FFD166] text-[8px] font-pixel my-1 shadow-[2px_2px_0px_#04070D]">
            <span>SPREAD: $0.05</span>
            <span>MID: $103.975</span>
          </div>

          {/* Bids */}
          <div className="flex items-center gap-2">
            <span className="w-20 text-[#55E6C1]">BID 103.95</span>
            <div className="flex-1 bg-[#0F172A] h-3.5 border-2 border-[#334366] overflow-hidden">
              <div className="bg-[#55E6C1] h-full w-[40%] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" />
            </div>
            <span className="text-[#94A3B8] w-12 text-right">4.0K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-20 text-[#55E6C1]">BID 103.70</span>
            <div className="flex-1 bg-[#0F172A] h-3.5 border-2 border-[#334366] overflow-hidden">
              <div className="bg-[#55E6C1] h-full w-[70%] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" />
            </div>
            <span className="text-[#94A3B8] w-12 text-right">7.0K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-20 text-[#55E6C1]">BID 103.50</span>
            <div className="flex-1 bg-[#0F172A] h-3.5 border-2 border-[#334366] overflow-hidden">
              <div className="bg-[#55E6C1] h-full w-[95%] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]" />
            </div>
            <span className="text-[#94A3B8] w-12 text-right">9.5K</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#334366] pt-2 text-[8px] font-pixel text-[#64748B]">
          <span>INT64_T MATH</span>
          <span className="text-[#FFD166]">HAWKES PROCESSES</span>
        </div>
      </div>
    );
  }

  if (projectId === "tradeforge") {
    return (
      <div className="w-full h-full min-h-[240px] bg-[#050811] border-3 border-[#334366] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-[inset_2px_2px_0px_rgba(255,255,255,0.1),_4px_4px_0px_#04070D]">
        <div className="flex items-center justify-between border-b-2 border-[#334366] pb-2 text-[9px] font-pixel text-[#55E6C1]">
          <span>[TICK_SIMULATION_ENGINE]</span>
          <span className="text-[#FFD166]">247K ORD/S</span>
        </div>

        {/* Pixel Candlesticks */}
        <div className="relative h-28 my-auto flex items-end justify-between px-3 border-b-2 border-[#334366] pb-2">
          {/* Candle 1 (Green) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-3 bg-[#55E6C1]" />
            <div className="w-4 h-12 bg-[#55E6C1] border border-[#080D1A] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.5)]" />
            <div className="w-[2px] h-4 bg-[#55E6C1]" />
          </div>
          {/* Candle 2 (Red) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-2 bg-[#FF6B6B]" />
            <div className="w-4 h-8 bg-[#FF6B6B] border border-[#080D1A] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.5)]" />
            <div className="w-[2px] h-3 bg-[#FF6B6B]" />
          </div>
          {/* Candle 3 (Green) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-4 bg-[#55E6C1]" />
            <div className="w-4 h-16 bg-[#55E6C1] border border-[#080D1A] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.5)]" />
            <div className="w-[2px] h-2 bg-[#55E6C1]" />
          </div>
          {/* Candle 4 (Green Long) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-3 bg-[#55E6C1]" />
            <div className="w-4 h-20 bg-[#55E6C1] border border-[#080D1A] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.5)]" />
            <div className="w-[2px] h-5 bg-[#55E6C1]" />
          </div>
          {/* Candle 5 (Red) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-5 bg-[#FF6B6B]" />
            <div className="w-4 h-10 bg-[#FF6B6B] border border-[#080D1A] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.5)]" />
            <div className="w-[2px] h-2 bg-[#FF6B6B]" />
          </div>
          {/* Candle 6 (Green Current) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-4 bg-[#55E6C1]" />
            <div className="w-4 h-14 bg-[#55E6C1] border border-[#080D1A] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.5)] animate-pixel-blink" />
            <div className="w-[2px] h-3 bg-[#55E6C1]" />
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#334366] pt-2 text-[8px] font-pixel text-[#64748B]">
          <span>SYNCHRONOUS PRE-TRADE GATES</span>
          <span className="text-[#55E6C1]">5X MIS MARGIN</span>
        </div>
      </div>
    );
  }

  if (projectId === "stacklens") {
    return (
      <div className="w-full h-full min-h-[240px] bg-[#050811] border-3 border-[#334366] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-[inset_2px_2px_0px_rgba(255,255,255,0.1),_4px_4px_0px_#04070D]">
        <div className="flex items-center justify-between border-b-2 border-[#334366] pb-2 text-[9px] font-pixel text-[#8AA4FF]">
          <span>[DAG_TOPOLOGY_PIPELINE]</span>
          <span className="text-[#55E6C1]">SSRF_SHIELD OK</span>
        </div>

        {/* Pixel Architecture Nodes */}
        <div className="relative h-28 my-auto flex items-center justify-around px-2">
          {/* Node 1: Target Ingress */}
          <div className="border-2 border-[#55E6C1] bg-[#141E36] p-2 text-center shadow-[3px_3px_0px_#04070D]">
            <div className="text-[#55E6C1] font-pixel text-[7px]">INGRESS</div>
            <div className="text-white text-[9px] font-pixel mt-1">RFC 1918</div>
          </div>

          <div className="text-[#8AA4FF] font-pixel text-xs">==&gt;</div>

          {/* Node 2: RabbitMQ Worker */}
          <div className="border-2 border-[#FFD166] bg-[#141E36] p-2 text-center shadow-[3px_3px_0px_#04070D]">
            <div className="text-[#FFD166] font-pixel text-[7px]">RABBITMQ</div>
            <div className="text-white text-[9px] font-pixel mt-1">200+ SIGS</div>
          </div>

          <div className="text-[#8AA4FF] font-pixel text-xs">==&gt;</div>

          {/* Node 3: Topology Graph */}
          <div className="border-2 border-[#8AA4FF] bg-[#141E36] p-2 text-center shadow-[3px_3px_0px_#04070D]">
            <div className="text-[#8AA4FF] font-pixel text-[7px]">DAG GRAPH</div>
            <div className="text-white text-[9px] font-pixel mt-1">&lt;1.2 SEC</div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#334366] pt-2 text-[8px] font-pixel text-[#64748B]">
          <span>JAVA 21 / SPRING BOOT 3</span>
          <span className="text-[#55E6C1]">REDIS 7.2 CACHE</span>
        </div>
      </div>
    );
  }

  if (projectId === "taskflow") {
    return (
      <div className="w-full h-full min-h-[240px] bg-[#050811] border-3 border-[#334366] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-[inset_2px_2px_0px_rgba(255,255,255,0.1),_4px_4px_0px_#04070D]">
        <div className="flex items-center justify-between border-b-2 border-[#334366] pb-2 text-[9px] font-pixel text-[#FFD166]">
          <span>[OCC_STATE_SYNCHRONIZATION]</span>
          <span className="text-[#55E6C1]">&lt;10ms SYNC</span>
        </div>

        {/* Kanban pixel lanes */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          {/* Lane 1 */}
          <div className="bg-[#0F172A] border-2 border-[#334366] p-2 shadow-[2px_2px_0px_#04070D]">
            <div className="text-[7px] font-pixel text-[#8AA4FF] mb-1.5 pb-1 border-b border-[#334366]">TODO</div>
            <div className="bg-[#141E36] border border-[#334366] p-1 text-[8px] font-pixel text-[#94A3B8] mb-1">
              #104 OCC
            </div>
            <div className="bg-[#141E36] border border-[#334366] p-1 text-[8px] font-pixel text-[#94A3B8]">
              #105 RANK
            </div>
          </div>

          {/* Lane 2 */}
          <div className="bg-[#0F172A] border-2 border-[#55E6C1] p-2 shadow-[2px_2px_0px_#04070D]">
            <div className="text-[7px] font-pixel text-[#55E6C1] mb-1.5 pb-1 border-b border-[#334366]">IN PROGRESS</div>
            <div className="bg-[#141E36] border border-[#55E6C1] p-1 text-[8px] font-pixel text-white">
              #102 WS SYNC
            </div>
          </div>

          {/* Lane 3 */}
          <div className="bg-[#0F172A] border-2 border-[#334366] p-2 shadow-[2px_2px_0px_#04070D]">
            <div className="text-[7px] font-pixel text-[#FFD166] mb-1.5 pb-1 border-b border-[#334366]">DONE</div>
            <div className="bg-[#141E36] border border-[#334366] p-1 text-[8px] font-pixel text-[#64748B]">
              #098 O(1)
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#334366] pt-2 text-[8px] font-pixel text-[#64748B]">
          <span>POSTGRESQL 17 / PRISMA</span>
          <span className="text-[#FFD166]">MIDPOINT FRACTIONS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[220px] bg-[#050811] border-3 border-[#334366] p-4 flex flex-col justify-between font-mono text-xs select-none shadow-[inset_2px_2px_0px_rgba(255,255,255,0.1),_4px_4px_0px_#04070D]">
      <div className="flex items-center justify-between border-b-2 border-[#334366] pb-2 text-[9px] font-pixel text-[#55E6C1]">
        <span>[SYSTEM_BLUEPRINT]</span>
        <span>ONLINE</span>
      </div>
      <div className="text-center my-auto text-[#8AA4FF] font-pixel text-[10px]">
        {title || "BLUEPRINT"}
      </div>
      <div className="border-t-2 border-[#334366] pt-2 text-[8px] font-pixel text-[#64748B]">
        VERIFIED REPOSITORY ARCHITECTURE
      </div>
    </div>
  );
}

PixelMissionArtwork.propTypes = {
  projectId: PropTypes.string,
  title: PropTypes.string,
};
