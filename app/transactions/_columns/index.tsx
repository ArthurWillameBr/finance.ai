"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Circle } from "lucide-react";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted bg-opacity-10 text-primary hover:bg-muted font-bold">
            <Circle className="fill-primary size-2 mr-2" /> Depósito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="bg-danger bg-opacity-10 text-danger hover:bg-danger/10 font-bold">
            <Circle className="fill-danger size-2 mr-2" /> Gasto
          </Badge>
        );
      }
      return (
        <Badge className="bg-white bg-opacity-10 text-white hover:bg-white/10 font-bold">
            <Circle className="fill-white size-2 mr-2" /> Investimento
          </Badge>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
];
