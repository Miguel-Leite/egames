import Image from "next/image";
import Logo from "@/app/assets/eg-positivo.png";
import Mockups from "@/app/assets/mockups.png";
import Link from "next/link";
import { UserRound } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative">

        <div className="container">
          <nav className="flex items-center justify-between py-12">
            <Link href="/"><Image src={Logo} alt="eGames Logo" /></Link>
            <ul className="flex items-center gap-10 text-lg text-white">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Sobre</Link></li>
              <li><Link href="#">Funcionalidade</Link></li>
              <li>
                <Link href="#" className="flex items-center gap-2.5">
                  <UserRound size={16} />
                  <span>Entrar</span>
                </Link>
              </li>
              <li><Link href="#" className="bg-gradient-primary button font-semibold">Cadastrar</Link></li>
            </ul>
          </nav>

          <div className="grid grid-cols-2 mt-24">
            <div className="space-y-20">
              <div className="space-y-8">
                <h1 className="text-[4.125rem] leading-16 font-bold text-white">
                  A maior e mais completa comunidade gamer da internet
                </h1>
                <p className="text-zinc-100 text-lg max-w-105.5">Curta, compartilhe, assista e acompanhe tudo sobre o mundo gamer em um só lugar.</p>
              </div>
              <Link href="#" className="bg-gradient-primary button uppercase font-semibold">Junte-se agora</Link>
            </div>

            <div>
              <Image src={Mockups} alt="Mockups" className="-mt-40" />
            </div>
          </div>

        </div>
        <div className="absolute top-[826px] right-0 w-[179.5] h-[179.5] rounded-full bg-purple-600 blur-[632px]" />
      </section>
    </div>
  );
}
