export default function Status({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Comece adicionando alguns itens a sua lista 🚀</em>
      </p>
    );
  }
  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.floor((itemsPacked * 100) / totalItems);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "Pegou tudo! Vambora ✈️"
          : `💼 Você tem ${totalItems} itens na sua lista e já pegou
          ${itemsPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
