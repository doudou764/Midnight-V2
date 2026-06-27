import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          Midnight Store
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
