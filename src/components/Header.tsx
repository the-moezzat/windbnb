import logo from '../assets/logo.svg';
import Filter from './Filter';

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16 max-md:flex-col max-md:mb-8">
      <img alt="logo" src={logo} className=" max-md:self-start max-md:mb-8" />
      <Filter />
    </div>
  );
}
