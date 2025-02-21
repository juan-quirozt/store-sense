'use client'

import Image from "next/image"
import MainPagePhoto from "@/public/main_page_photo.jpg"
import OfferIcon from "@/public/offer_icon.png"
import CustomerSupportIcon from "@/public/customersupport_icon.png"
import PlaceIcon from "@/public/place_icon.png"
import WebIcon from "@/public/web_icon.png"
import Ship1 from "@/public/ship1.png"
import Ship2 from "@/public/ship2.png"
import Ship3 from "@/public/ship3.png"
import { Separator } from "@/components/ui/separator"
import { ReactTyped } from "react-typed"
import { OpinionCard } from "@/components/OpinionCard"

export default function Home() {

  return (
    <div>
      <div className="relative w-full h-auto overflow-hidden">
        <div className="flex items-center z-10">
          <div className="p-1 text-center">
            <div className="flex flex-col items-center">
              <p className="text-textTitle text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"><ReactTyped className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" strings={["Descubre el mundo que ofrece la IA!"]} typeSpeed={100} />📍</p>
            </div>
            <p className="text-textAll text-lg p-5">StoreSense es una plataforma diseñada para ayudarte a tomar mejores decisiones, optimizar tu inventario y ofrecer a tus usuarios mejores recomendaciones.</p>
            <p className="text-textAll italic text-xl"> <span className="text-textTitle font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">StoreSense</span> cuenta con todo,<br></br> a sólo un clic de distancia.</p>
          </div>
          <div className="drop-shadow-md bg-white rounded-xl p-3 m-4 shadow-palleteOrange hover:scale-105 duration-200 ease-in-out hover:shadow-white">
            <Image src={MainPagePhoto} width={564} height={564} alt='StoreSense App Logo' />
          </div>
        </div>
        
        <Image style={{ animationDelay: '0.1s' }} className="absolute top-[30px] left-[-50px] w-24 animate-fly-ship1 z-0 hover:cursor-pointer" src={Ship1} width={100} height={100} alt="Ship1" />
        <Image style={{ animationDelay: '0.2s' }} className="absolute top-[120px] left-[-50px] w-24 animate-fly-ship2 z-0 hover:cursor-pointer" src={Ship2} width={100} height={100} alt="Ship2" />
        <Image style={{ animationDelay: '0.3s' }} className="absolute top-[300px] left-[-50px] w-24 animate-fly-ship3 z-0 hover:cursor-pointer" src={Ship3} width={100} height={100} alt="Ship3" />      </div>

      <Separator className="my-7" />

      <div className="flex justify-center items-center my-10">
        <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-6">
          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={OfferIcon} width={64} height={64} alt='StoreSense App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Predicción de demanda</p>
              <p className="text-textAll">Usa nuestro modelo de predicción de demanda para obtener una estimación para los próximos 30 días.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={CustomerSupportIcon} width={64} height={64} alt='StoreSense App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Soporte</p>
              <p className="text-textAll">Nuestro equipo está disponible 24 horas al día para ayudarte con el uso de la plataforma.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={WebIcon} width={64} height={64} alt='StoreSense App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Clasificador de imágenes</p>
              <p className="text-textAll">Por medio del modelo de clasificación de imágenes puedes etiquetar los productos del inventario.</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <Image className="shadow-2xl bg-white rounded-xl p-3 m-4 shadow-palleteOrangeVariant hover:scale-110 duration-200 ease-in-out" src={PlaceIcon} width={64} height={64} alt='StoreSense App Logo' />
            <div className="flex flex-col">
              <p className="text-textTitle text-xl font-bold">Sistema de recomendación</p>
              <p className="text-textAll">Este modelo permite ayudarte a personalizar la experiencia del usuario por medio de los datos de uso.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-textTitle text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] text-center my-10">Esto es lo que dicen algunos de nuestros usuarios...</p>
        <div className="flex justify-around">
          <OpinionCard name="Juan Esteban Quiroz" user="juanquiroz" date="8:21 PM / Dec 21, 2022">Excelente experiencia con el modelo de predicción de demanda, ¡gran trabajo!</OpinionCard>
          <OpinionCard name="Lionel Ronald" user="ronaldlio" date="4:21 PM / Oct 7, 2021">Es muy fácil de usar y siempre está disponible en el momento que se requiere.</OpinionCard>
          <OpinionCard name="Luke Skywalker" user="forceiswithme" date="6:55 AM / Jan 15, 2021">El personal siempre está disponible para brindar un soporte adecuado en el uso de las herramientas.</OpinionCard>
        </div>
      </div>

    </div>
  );
}
