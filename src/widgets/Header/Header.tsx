import HeaderMenu from "./ui/HeaderMenu";

const Header = () => {
    const menuList = [
        { name: 'Каталог', link: '/catalog' },
        { name: 'Оплата и доставка', link: '/payment' },
        { name: 'О компании', link: '/about' },
        { name: 'Контакты', link: '/contact' }
    ]
    return (
        <header>
            <img src="" alt="" />
            <HeaderMenu list={menuList} />
        </header>
    );
};

export default Header;