import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Image from "next/image";

interface DetailsProducstsProps {
  title: string;
  description: string;
  price: number;
  img: string;
  moreDetails: string;
  images: string[];
}

export default function DetailsProducsts({
  title,
  description,
  moreDetails,
  price,
  img,
  images,
}: DetailsProducstsProps) {
     const placeholder = "/placeholder.svg";
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="grid gap-4">
              <Image
                alt={title}
                className="object-cover w-full rounded-lg bg-cover bg-center"
                height={1200}
                src={img}
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width={1200}
                quality={100}
                priority
              />
              <div className="grid grid-cols-3 gap-4">
                <Image
                  alt="Producto"
                  className="object-cover w-full rounded-lg"
                  height={200}
                  src={images[0] || placeholder}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                  quality={80}
                  priority
                />
                <Image
                  alt="Producto"
                  className="object-cover w-full rounded-lg"
                  height={200}
                  src={images[1] || placeholder}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                  quality={80}
                  priority
                />
                <Image
                  alt="Producto"
                  className="object-cover w-full rounded-lg"
                  height={200}
                  src={images[2] || placeholder}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200}
                  quality={80}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center ">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs">
                {description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
                {moreDetails}
              </p>

              <div className="mt-8 grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="color">
                    Color
                  </Label>
                  <RadioGroup
                    className="flex items-center gap-2"
                    defaultValue="blanco"
                    id="color"
                  >
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="color-blanco"
                    >
                      <RadioGroupItem id="color-blanco" value="blanco" />
                      Blanco
                    </Label>
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="color-azul"
                    >
                      <RadioGroupItem id="color-azul" value="azul" />
                      Azul
                    </Label>
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="color-rosa"
                    >
                      <RadioGroupItem id="color-rosa" value="rosa" />
                      Rosa
                    </Label>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="talla">
                    Talla
                  </Label>
                  <RadioGroup
                    className="flex items-center gap-2"
                    defaultValue="m"
                    id="talla"
                  >
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="talla-xs"
                    >
                      <RadioGroupItem id="talla-xs" value="xs" />
                      XS
                    </Label>
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="talla-s"
                    >
                      <RadioGroupItem id="talla-s" value="s" />S
                    </Label>
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="talla-m"
                    >
                      <RadioGroupItem id="talla-m" value="m" />M
                    </Label>
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="talla-l"
                    >
                      <RadioGroupItem id="talla-l" value="l" />L
                    </Label>
                    <Label
                      className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                      htmlFor="talla-xl"
                    >
                      <RadioGroupItem id="talla-xl" value="xl" />
                      XL
                    </Label>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label className="text-base" htmlFor="cantidad">
                    Cantidad
                  </Label>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 lg:flex-row">
                  <Button size="lg">Agregar al Carrito</Button>
                  <Button size="lg" variant="outline">
                    AQUI TEM UM ICON Agregar a Favoritos
                  </Button>
                </div>
                <div className="text-3xl font-bold ">
                  {price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                    Em até 12x s/ juros de{" "}
                    {(price / 12).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
