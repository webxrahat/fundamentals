export default function Button({ children, onSmash }) {
  return (
    <button onClick={onSmash} className="px-3 py-2 bg-lime-300">
      {children}
    </button>
  );
}
