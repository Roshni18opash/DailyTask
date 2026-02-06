type Props = {
  onLogout: () => void;
};

const Header = ({ onLogout }: Props) => {
  return (
    <header className="header">
      <span>Welcome To ,Admin</span>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
};

export default Header;
