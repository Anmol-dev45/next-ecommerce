import { redirect } from "next/navigation";
import prisma from "../../lib/db/prisma";
import FormSumbmitButton from "@/components/FormSumbitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { env } from "@/lib/env";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formdata: FormData) {
  "use server";
  const name = formdata.get("name")?.toString();
  const description = formdata.get("description")?.toString();
  const imageUrl = formdata.get("imageUrl")?.toString();
  const price = Number(formdata.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing Required Fields");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const admin = env.ADMIN_EMAIL_ADDRESS;
  const session = await getServerSession(authOptions);
  if (session?.user?.email !== admin) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          type="text"
          className="input input-bordered mb-3 w-full"
        />

        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <FormSumbmitButton className="btn-block">Add Product</FormSumbmitButton>
      </form>
    </div>
  );
}
