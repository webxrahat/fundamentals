import Button from "./Button";

export default function Bcoms() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="bg-red-500">
      <p>B</p>
      <Button onSmash={handleClick}>Click Me</Button>
    </div>
  );
}
