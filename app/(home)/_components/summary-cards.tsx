import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
    month: string
}

export async function SummaryCards({ month }: SummaryCardsProps) {
  const where = {
    date: {
        gte: new Date(`2024-${month}-01`),
        lt: new Date(`2024-${month}-31`),
    }
  }
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum.amount,
  );

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <main className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        amount={balance}
        title="Saldo"
        size="large"
      />
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          amount={investmentsTotal}
          title="Investido"
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          amount={depositsTotal}
          title="receita"
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          amount={expensesTotal}
          title="Despesas"
        />
      </div>
    </main>
  );
}