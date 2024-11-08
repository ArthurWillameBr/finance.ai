import Image from "next/image";

import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo2.png"
          alt="finance AI"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="4xl mb-3 font-bold">Bem vindo</h1>
        <p className="text-muted-foreground mb-3">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon />
          Fazer login ou criar conta
        </Button>
      </div>

      <div className="relative h-full w-full">
        <Image src="/hero.png" alt="faça login" fill className="object-cover" />
      </div>
    </main>
  );
}