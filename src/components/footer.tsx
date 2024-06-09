export default function Footer() {
  return (
    <footer className="border-t-2 border-black dark:border-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center">
        <p className="text-lg">&copy; Marco Santana {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
