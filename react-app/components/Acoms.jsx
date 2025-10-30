import Button from "./Button";

export default function Acoms() {
  const handleClick = () => {
    console.log("Hire");
  };
  return (
    <div className="bg-yellow-500">
      <p>A</p>
      <Button onSmash={handleClick}>Hire Me</Button>
    </div>
  );
}
