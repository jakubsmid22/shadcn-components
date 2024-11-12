import { CreditCard } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";

const InputOTPComponent = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/input-otp"
        className="font-bold underline cursor-pointer"
      >
        Input OTP
      </a>
      <div className="mt-2 flex gap-2">Enter Your Credit Card Number <CreditCard width={15} /> :</div>
      <InputOTP maxLength={16}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={8} />
          <InputOTPSlot index={9} />
          <InputOTPSlot index={10} />
          <InputOTPSlot index={11} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={12} />
          <InputOTPSlot index={13} />
          <InputOTPSlot index={14} />
          <InputOTPSlot index={15} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default InputOTPComponent;
