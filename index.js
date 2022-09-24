const Button = (props) => {
  const { name, style } = props;
  return <button className={style}>{name}</button>;
};

const element = (
  <div class="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div class="button-container">
      <Button name="Like" style="like" />
      <Button name="Comment" style="comment" />
      <Button name="Share" style="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
