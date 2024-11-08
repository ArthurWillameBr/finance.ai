import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

export default async function Transactions() {

   const transactions = await db.transaction.findMany({
   })

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center p-6">
                <h1 className="font-bold text-2xl leading-relaxed">Transações</h1>
                <Button className="rounded-full">
                    Adicionar transação
                    <ArrowDownUpIcon />
                </Button>
            </div>
            <DataTable columns={transactionColumns} data={transactions}/>
        </div>
    )
}