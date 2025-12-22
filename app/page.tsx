import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";

import Logo from "@/app/assets/eg-positivo.png";
import Mockups from "@/app/assets/mockups.png";

import FacebookGaming from "@/app/assets/icons/facebook gaming.svg"
import Twitch from "@/app/assets/icons/twitch.svg"
import Youtube from "@/app/assets/icons/youTube.svg"
import Discord from "@/app/assets/icons/discord.svg"


export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
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
              <div className="absolute top-191.5 left-206.5 w-179.5 h-179.5 rounded-full bg-purple-600 blur-[632px] opacity-50" />
              <div className="absolute top-100.75 left-400.5 w-179.5 h-179.5 rounded-full bg-pink-600 blur-[632px] opacity-50" />
            </div>
          </div>

          <div className="border-t border-zinc-700 py-8">
            <p className="text-white/70 text-base font-medium">Integração com os maiores do mundo gamer</p>
            <div className="flex items-center gap-12 mt-8">
              <Image src={FacebookGaming} alt="Facebook Gaming" />
              <Image src={Twitch} alt="Twitch" />
              <Image src={Youtube} alt="YouTube" />
              <Image src={Discord} alt="Discord" />
            </div>
          </div>
        </div>
      </section>
      <div className="border-b border-zinc-700">
        <main className="container py-14">
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <p className="text-2xl font-bold w-96">Confira os números eGames e faça parte você também</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
