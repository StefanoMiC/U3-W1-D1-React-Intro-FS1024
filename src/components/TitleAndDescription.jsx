const TitleAndDescription = (props) => {
  console.log("PROPS", props);
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      {props.children}
    </>
  );
};
export default TitleAndDescription;
