"use client";

import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

export function AddTransactionButton({
  userCanAddTransaction,
}: AddTransactionButtonProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full"
            onClick={() => setDialogIsOpen(true)}
            disabled={!userCanAddTransaction}
          >
            Adicionar transação
            <ArrowDownUpIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {!userCanAddTransaction &&
            "você atingiu o limite de transações. Atualize seu plano para adicionar mais."}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}