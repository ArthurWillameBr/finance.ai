import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { AddTransactionButton } from "../_components/add-transaction-button";
import { Navbar } from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

export default async function Transactions() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
        userId
    }
  });

  const userCanAddTransaction = await canUserAddTransaction()
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6 overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold leading-relaxed">Transações</h1>
            <AddTransactionButton userCanAddTransaction={userCanAddTransaction}/>
        </div>
        <ScrollArea>
            <DataTable columns={transactionColumns} data={transactions} />
        </ScrollArea>
      </div>
    </>
  );
}