function List(props) {
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
