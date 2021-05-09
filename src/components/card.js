const Card = ({ active, clicked, value }) => {
  let Cardclasses = ["Card"];
  let contentClasses = ["iconify"];

  if (active) {
    Cardclasses.push("active");
  }

  return (
    <button
      className={Cardclasses.join(" ")}
      onClick={clicked}
      disabled={active}
    >
      <span
        class={contentClasses.join(" ")}
        data-icon={value}
        data-inline="false"
        data-width="60"
        data-height="60"
      ></span>
    </button>
  );
};

export default Card;
