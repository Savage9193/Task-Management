interface ToggleProps {
  enabled: boolean;
  onToggle: () => void;
  leftLabel?: string;
  rightLabel?: string;
}

export const Toggle = ({ enabled, onToggle, leftLabel, rightLabel }: ToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-2 py-1 text-xs font-medium text-white transition hover:bg-white/25"
  >
    {leftLabel ? <span>{leftLabel}</span> : null}
    <span className={`h-5 w-10 rounded-full p-0.5 transition ${enabled ? "bg-sky-500" : "bg-slate-400/90"}`}>
      <span
        className={`block h-4 w-4 rounded-full bg-white transition-transform ${enabled ? "translate-x-5" : "translate-x-0"}`}
      />
    </span>
    {rightLabel ? <span>{rightLabel}</span> : null}
  </button>
);
