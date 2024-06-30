import { Link } from "react-router-dom";

const HeaderMenu = ({ list }: { list: { name: string; link: string }[] }) => {
    return (
        <nav>
            <ul>
                {list.map((item, key) => (
                    <li key={key}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderMenu;