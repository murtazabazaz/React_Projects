export default function TabButton({ children, onSelect, isSelectedcss }) {
 
    return (
    <li>
    <button className={isSelectedcss ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
    );
}