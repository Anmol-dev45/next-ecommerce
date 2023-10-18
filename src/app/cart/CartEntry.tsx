import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import QuantitySelect from "./QuantitySelect";
import { setProductQuantity } from "./action";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/products/" + product.id} className="font-bold">
            {product.name}
          </Link>
          <div>Price: {formatPrice(product.price)}</div>
          <QuantitySelect
            quantity={quantity}
            productId={product.id}
            setProductQuantity={setProductQuantity}
          />

          <div className="flex items-center gap-3">
            Total : {formatPrice(product.price * quantity)}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
