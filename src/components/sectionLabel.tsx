export function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[9px] text-accent tracking-widest font-medium"
      >
        {number}
      </span>
      <div className="h-px flex-1 bg-border" />
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[9px] text-muted-foreground tracking-widest uppercase font-medium"
      >
        {label}
      </span>
    </div>
  );
}
