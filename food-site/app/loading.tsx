export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-secondary rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        <p className="text-primary/70 font-medium">Loading...</p>
      </div>
    </div>
  );
}
