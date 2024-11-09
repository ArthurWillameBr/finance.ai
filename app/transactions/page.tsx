import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "../_components/add-transaction-button";

export default async function Transactions() {

   const transactions = await db.transaction.findMany({
   })

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center p-6">
                <h1 className="font-bold text-2xl leading-relaxed">Transações</h1>
                <AddTransactionButton />
            </div>
            <DataTable columns={transactionColumns} data={transactions}/>
        </div>
    )
}