import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessagesSquare, Share2, Twitter, UserRound, Users } from "lucide-react";

import Logo from "@/app/assets/eg-positivo.png";
import Mockups from "@/app/assets/mockups.png";
import Img01 from "@/app/assets/img01.png";
import Img02 from "@/app/assets/img02.png";

import FacebookGaming from "@/app/assets/icons/facebook gaming.svg";
import Twitch from "@/app/assets/icons/twitch.svg";
import Youtube from "@/app/assets/icons/youTube.svg";
import Discord from "@/app/assets/icons/discord.svg";

import Game01 from "@/app/assets/games/game01.png";
import Game02 from "@/app/assets/games/game02.png";
import Game03 from "@/app/assets/games/game03.png";
import Game04 from "@/app/assets/games/game04.png";
import Game05 from "@/app/assets/games/game05.png";
import Game06 from "@/app/assets/games/game06.png";
import Game07 from "@/app/assets/games/game07.png";
import Game08 from "@/app/assets/games/game08.png";
import Game09 from "@/app/assets/games/game09.png";
import Game10 from "@/app/assets/games/game10.png";
import Symbol from "@/app/assets/symbol.png";


export default function Home() {
  return (
    <div className="overflow-hidden">
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

      <div className="container py-16">
        <div className="flex items-center justify-around mb-44">
          <div>
            <Image src={Img01} alt="Imagem 01" />
          </div>
          <div className="space-y-5">
            <Share2 size={36} />
            <div className="w-110.25 space-y-8">
              <h3 className="text-4xl font-bold text-white leading-11">Uma rede social completa só de gamers</h3>
              <p className="text-zinc-500 text-lg">Uma experiência 100% voltada para jogos. Aqui você pode postar sobre suas partidas, acompanhar seu streamer favorito e muito mais.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="space-y-12">
            <div className="space-y-5">
              <Users size={36} />
              <div className="w-110.25 space-y-8">
                <h3 className="text-4xl font-bold text-white leading-11">Faça amigos para sua próxima partida</h3>
                <p className="text-zinc-500 text-lg">Junte-se em grupos criados por usuários da nossa comunidade e nunca mais jogue sozinho!</p>
              </div>
            </div>
            <div className="py-2 px-5 rounded-full bg-zinc-800 inline-flex items-center gap-2.5">
              <MessagesSquare />
              <p>Grupos</p>
            </div>
          </div>
          <div>
            <Image src={Img02} alt="Imagem 02" />
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden py-36 px-32">
        <div className="container z-50">
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-xl py-12 bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-4 gap-6">
              <Image src={Game01} alt="Game 01" />
              <p>38 mil eGamers fãs</p>
            </div>
            <div className="rounded-xl py-12 bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-4 gap-6">
              <Image src={Game02} alt="Game 02" />
              <p>42 mil eGamers fãs</p>
            </div>
            <div className={`rounded-xl py-12 bg-[url(/cover-fifa.png)] bg-no-repeat bg-cover relative text-zinc-400 p-4`}>
              <div className="absolute left-0 top-0 w-full h-full bg-zinc-900/85 flex flex-col items-center justify-center">
                <Image src={Game03} alt="Game 03" />
                <p>87 mil eGamers fãs</p>
              </div>
            </div>
            <div className="row-span-2 relative rounded-xl py-12 bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-4 gap-6">
              <Image src={Game04} alt="Game 04" className="absolute bottom-0 right-0 w-88" />
              <div className="absolute rounded-b-xl overflow-hidden left-0 top-0 w-full h-full bg-linear-to-b from-zinc-900/15 to-zinc-900 p-5 flex items-end justify-center">
                <div className="flex flex-col items-center justify-center gap-6">
                  <Image src={Game09} alt="Game 09" />
                  <p>95 mil eGamers fãs</p>
                </div>
              </div>
            </div>
            <div className="row-span-2 relative rounded-xl py-12 bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-4 gap-6">
              <Image src={Game05} alt="Game 05" className="absolute bottom-0 right-0" />
              <div className="absolute rounded-b-xl overflow-hidden left-0 top-0 w-full h-full bg-linear-to-b from-zinc-900/15 to-zinc-900 p-5 flex items-end justify-center">
                <div className="flex flex-col items-center justify-center gap-6">
                  <Image src={Game10} alt="Game 10" />
                  <p>22 mil eGamers fãs</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl py-12 bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-4 gap-6">
              <Image src={Game06} alt="Game 06" />
              <p>180 mil eGamers fãs</p>
            </div>
            <div className="row-span-2 relative rounded-xl py-12 bg-linear-to-t from-indigo-500 via-purple-500 to-pink-500">
              <div className="absolute left-0 top-0 w-full h-full py-12 px-12 flex flex-col justify-center items-center text-center gap-3.5">
                <Image src={Symbol} alt="Symbol" />
                <p className="text-2xl font-bold text-white">Na comunidade eGames todo jogo tem seu espaço. Encontre a sua tribo!</p>
                <Link href="#" className="bg-white/20 py-3 px-10 rounded-md text-white font-semibold">Cadastrar agora</Link>
              </div>
            </div>
            <div className={`rounded-xl py-12 bg-[url(/cover-cs-go.png)] bg-no-repeat bg-cover relative text-zinc-400 p-4`}>
              <div className="absolute left-0 top-0 w-full h-full bg-zinc-900/85 flex flex-col items-center justify-center">
                <Image src={Game07} alt="Game 07" />
                <p>125 mil eGamers fãs</p>
              </div>
            </div>
            <div className="rounded-xl py-12 bg-zinc-800 text-zinc-400 flex flex-col items-center justify-center p-4 gap-6">
              <Image src={Game08} alt="Game 08" />
              <p>80 mil eGamers fãs</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-183.5 -left-9.25 w-179.5 h-179.5 -z-10 rounded-full bg-purple-600 blur-[632px] opacity-50" />
        <div className="absolute -bottom-60 -left-185 w-179.5 h-179.5 -z-10 rounded-full bg-pink-600 blur-[632px] opacity-50" />
      </section>

      <footer className="w-full bg-black py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="space-y-7">
                <ul className="font-medium flex flex-col gap-3">
                  <li><Link href="#">Quem somos</Link></li>
                  <li><Link href="#">Perguntas frequentes</Link></li>
                  <li><Link href="#">Assessoria de Imprensa</Link></li>
                  <li><Link href="#">Carreira</Link> <div className="inline-block bg-gradient-primary text-[10px] py-0.5 px-2.5 rounded-full font-medium text-white">temos vagas</div></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Contato</Link></li>
                </ul>
                <div className="flex items-center gap-3.5">
                  <div className="inline-flex p-2.5 bg-zinc-900 text-white rounded-full">
                    <Instagram />
                  </div>
                  <div className="inline-flex p-2.5 bg-zinc-900 text-white rounded-full">
                    <Twitter />
                  </div>
                  <div className="inline-flex p-2.5 bg-zinc-900 text-white rounded-full">
                    <Linkedin />
                  </div>
                  <div className="inline-flex p-2.5 bg-zinc-900 text-white rounded-full">
                    <Facebook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
