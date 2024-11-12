import "./MenuItem.css";

const MenuItem = ({
  title,
  price,
  tags,
}: {
  title: string;
  price: string;
  tags: string;
}) => {
  return (
    <div className="app__menuItems">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-tags">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
{
  /* <div className="app__menuItems-head"> */
}
{
  /* </div>   */
}
