import { useState } from "react";
import kanbanImg from "../../assets/images/taskflow/04_kanban_board_full.png";
import dashboardImg from "../../assets/images/taskflow/02_dashboard_overview.png";
import modalImg from "../../assets/images/taskflow/05_task_detail_modal.png";
import workspacesImg from "../../assets/images/taskflow/03_workspaces_management.png";

const tabs = [
  {
    id: "kanban",
    label: "Kanban Board",
    image: kanbanImg,
    caption: "Real-time collaborative Kanban board with fractional midpoint ordering & live Socket.io peer presence.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    image: dashboardImg,
    caption: "Operational overview displaying active sprints, velocity distributions, and workspace health.",
  },
  {
    id: "modal",
    label: "Task Inspector",
    image: modalImg,
    caption: "Version-tracked task inspector with optimistic locking (OCC) preventing dirty concurrent overwrites.",
  },
  {
    id: "workspaces",
    label: "Workspaces",
    image: workspacesImg,
    caption: "Multi-tenant workspace manager with server-enforced role permissions (OWNER > ADMIN > MEMBER).",
  },
];

const TaskFlowShowcase = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0C0C12] overflow-hidden">
      {/* Window Titlebar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#0A0A0E] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 pl-2">
            taskflow // {activeTab.label.toLowerCase().replace(/ /g, "-")}
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 rounded-md bg-white/[0.04] p-0.5 border border-white/[0.06]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`rounded px-2.5 py-1 text-[11px] font-mono transition-colors ${
                activeTab.id === tab.id
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Frame */}
      <div className="bg-[#08080C] p-3 sm:p-4">
        <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#050508]">
          <img
            src={activeTab.image}
            alt={activeTab.label}
            className="w-full h-auto max-h-[380px] object-contain object-top"
          />
        </div>
      </div>

      {/* Footer Caption */}
      <div className="border-t border-white/[0.06] bg-[#0A0A0E] px-4 py-2.5 text-[11px] font-mono text-neutral-400">
        {activeTab.caption}
      </div>
    </div>
  );
};

export default TaskFlowShowcase;
