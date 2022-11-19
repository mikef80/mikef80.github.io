import styles from './Header.module.css';

const Header = () => {
  return (
    <header className="flex flex-col sticky top-0 left-0 w-full bg-white">
      <h1 className="text-5xl px-4 pt-4 pb-2 flex align-middle justify-center font-semibold">
        Mike Francis
      </h1>
      <h2 className="text-3xl px-4 flex align-middle justify-center">
        Developer
      </h2>
      <h3 className="text-1 px-4 pb-4 flex align-middle justify-center">
        (/dɪˈvɛləpə/)
      </h3>
    </header>
  );
};

export default Header;
