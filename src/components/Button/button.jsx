export default function CoolButton(props) {
  return (
    <div>
      <button {...props} className="buton">
        {props.text}
      </button>
    </div>
  );
}
