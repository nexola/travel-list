export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.description} {item.quantity}x
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
