import { Button } from "@/components/ui/button";

type CountProps = {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

export default function Count({
  count,
  handleIncrement,
  handleDecrement,
}: CountProps) {
  return (
    <div>
      <h3 className=" text-4xl">{count}</h3>
      <div className="space-x-3">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
