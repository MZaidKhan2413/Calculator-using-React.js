export default function Button({ btn }) {
  const classNameMap = {
    "=": "equals button",
    ".": "button",
  };

  const defaultClass = isNaN(btn) ? "opts button" : "button";

  const styling = classNameMap[btn] || defaultClass;

  return (
    <button className={styling}>{btn}</button>
  );
}
