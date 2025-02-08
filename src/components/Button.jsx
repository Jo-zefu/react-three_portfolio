const Button = ({
  name,
  isBeam = false,
  containerClass,
  handleClick = () => {},
}) => {
  return (
    <button className={`btn ${containerClass}`} onClick={handleClick}>
      {isBeam && (
        <span className="relative flex w-3 h-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};
export default Button;
