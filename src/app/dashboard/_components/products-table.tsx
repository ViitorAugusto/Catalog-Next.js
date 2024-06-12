import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface ProductsTableProps {
  id: number;
  title: string;
  description: string;
  price: number;
  mainImage?: string;
  onDelete: (id: number) => void;
}

export const ProductsTable = ({
  id,
  description,
  mainImage,
  price,
  title,
  onDelete,
}: ProductsTableProps) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const adjustedImage = mainImage
    ? mainImage.replace(/\\/g, "/")
    : "placeholder.png";
  const imageUrl = mainImage ? adjustedImage : "/images/placeholder.png";
  console.log("Final image URL:", imageUrl);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(id);
        setIsDialogOpen(false);
      } else {
        console.error("Erro ao deletar o produto");
      }
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
    }
  };

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell>
            <Image
              alt="Product image"
              className="aspect-square rounded-md object-cover size-16"
              height={350}
              src={imageUrl}
              width={350}
              quality={100}
              priority
            />
          </TableCell>
          <TableCell className="font-medium max-w-[80px] truncate">
            {title}
          </TableCell>
          <TableCell className="hidden md:table-cell max-w-[300px] truncate">
            {description.split(" ").slice(0, 10).join(" ") + "..."}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </TableCell>
          <TableCell className="flex items-center gap-2">
            <Button size="icon" variant="outline">
              <BiEditAlt className="h-4 w-4" />
              <span className="sr-only">Editar</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsDialogOpen(true)}
            >
              <FaRegTrashAlt className="h-4 w-4" />
              <span className="sr-only">Deletar</span>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger />
        <DialogContent>
          <DialogTitle>Confirmar Exclusão</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja excluir este produto? Esta ação não pode ser
            desfeita.
          </DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
