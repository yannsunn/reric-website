import { AnimatedNavItem } from '@/components';

const HeaderNav = () => {
  return (
    <nav className="hidden md:flex gap-8">
      <AnimatedNavItem href="#vision">企業理念</AnimatedNavItem>
      <AnimatedNavItem href="#business">事業内容</AnimatedNavItem>
      <AnimatedNavItem href="#company">会社概要</AnimatedNavItem>
      <AnimatedNavItem href="#contact">お問い合わせ</AnimatedNavItem>
    </nav>
  );
};

export default HeaderNav; 