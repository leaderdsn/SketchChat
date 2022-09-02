
export default function render(query: any, block: any) {
  const root = document.querySelector(query);
  // Можно завязаться на реализации вашего класса Block
  root.append(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}