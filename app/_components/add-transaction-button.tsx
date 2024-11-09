import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";

export function AddTransactionButton() {
  return (
    <Button className="rounded-full">
      Adicionar transação
      <ArrowDownUpIcon />
    </Button>
  );
}