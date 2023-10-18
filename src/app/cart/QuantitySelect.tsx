"use client";

import { useTransition } from "react";

interface QuantitySelectProps {
  quantity: number;
  productId: string;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function QuantitySelect({
  productId,
  quantity,
  setProductQuantity,
}: QuantitySelectProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="my-1 flex items-center gap-2">
      Quantity:
      <select
        className="select w-full max-w-[80px]"
        defaultValue={quantity}
        onChange={(e) => {
          const newQuantity = parseInt(e.currentTarget.value);
          startTransition(async () => {
            await setProductQuantity(productId, newQuantity);
          });
        }}
      >
        <option value={0}>O (Remove)</option>
        {quantityOptions}
      </select>
      {isPending && <span className="loading loading-spinner loading-sm" />}
    </div>
  );
}
