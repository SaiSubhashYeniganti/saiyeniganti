export function HeroAtmosphere() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-ink/5 rounded-[40%_60%_70%_30%] blur-[60px] will-change-transform animate-[blob-drift-1_20s_linear_infinite]"
      />
      <div
        className="absolute top-[20%] right-[10%] w-[45vw] h-[50vw] bg-accent/8 rounded-[60%_40%_30%_70%] blur-[80px] will-change-transform animate-[blob-drift-2_25s_linear_infinite]"
      />
    </div>
  );
}
