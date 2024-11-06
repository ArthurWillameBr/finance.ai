// import Image from "next/image";

import { Button } from "../_components/ui/button";

export default function LoginPage() {
  return (
    <main className="grid grid-cols-2">
      <div className="mx-auto flex h-full max-w-[650px] flex-col justify-center p-8">
        {/* <Image src="/logo.png" alt="finance AI" width={173} height={39} className="mb-8"/> */}
        <h1 className="4xl mb-3 font-bold">Bem vindo</h1>
        <p className="text-mited-foreground">Um texto grande aqui</p>
        <Button variant="outline">Fazer login ou criar conta</Button>
      </div>

      <div className="relative h-full w-full">
        {/* <Image
          src="/login.png"
          alt="faça login"
          fill
          className="object-cover"
        /> */}
      </div>
    </main>
  );
}
