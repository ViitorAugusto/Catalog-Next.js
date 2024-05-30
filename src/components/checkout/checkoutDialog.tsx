import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { StepUser } from "./step-user";
import { StepAddress } from "./step-address";
import { StepFinish } from "./step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";


type CheckoutDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ onOpenChange, open }: CheckoutDialogProps) => {
  const [step, setStep] = useState<CheckoutSteps>("user");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Dados Pessoais"}
            {step === "address" && "Endereço de Entrega"}
            {step === "finish" && "Finalizar Pedido"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAddress setStep={setStep} />}
          {step === "finish" && <StepFinish  />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
