export default function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-primary"
    />
  );
}
