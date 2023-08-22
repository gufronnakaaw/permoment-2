import Menu from './Menu';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-[480px] bg-[#eaeaea] min-h-screen pb-32">
      <Navbar />
      {children}
      <Menu />
    </div>
  );
}
