import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useCreateCart } from "@/hooks/useCreateCart";
import { ModalType, useModalActions } from "@/store/modal";
import { Product } from "@/types/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface Props {
  countryCode: string;
  products: Product[];
}

const createSchema = (minValue: number, maxValue: number) =>
  z.object({
    region: z.string(),
    quantity: z.number().min(1),
    price: z
      .number()
      .min(minValue, `Price must be at least ${minValue}`)
      .max(maxValue, `Price must not exceed ${maxValue}`)
      .optional(),
  });

type FormData = z.infer<ReturnType<typeof createSchema>>;

export default function GiftCardForm({ countryCode, products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const { openModal } = useModalActions();

  const { mutate } = useCreateCart();

  const [schema, setSchema] = useState(
    createSchema(selectedProduct.minFaceValue, selectedProduct.maxFaceValue)
  );

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      region: countryCode,
      quantity: 1,
    },
  });

  useEffect(() => {
    setSchema(
      createSchema(selectedProduct.minFaceValue, selectedProduct.maxFaceValue)
    );
  }, [selectedProduct]);

  const onSubmit = (data: FormData) => {
    const result = {
      sourceCurrency: selectedProduct.price.currencyCode,
      sourceAmount: data.price ?? selectedProduct.maxFaceValue,
      productId: selectedProduct.id,
      quantity: data.quantity,
    };
    console.log(result);
    openModal(ModalType.Cart);
  };

  const { mutate: addItemToCart } = useAddToCart();

  const addToCart = () => {
    const newItem = {
      sourceCurrency: selectedProduct.price.currencyCode,
      sourceAmount: getValues("price") ?? selectedProduct.maxFaceValue,
      productId: selectedProduct.id,
      quantity: getValues("quantity"),
    };
    console.log({ cartId: "11", newItem });
    addItemToCart({ cartId: "11", newItem });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-3">
      <div className="flex flex-col sm:flex-row gap-4">
        <Controller
          name="region"
          control={control}
          render={({ field }) => (
            <Select {...field} className="sm:max-w-[319px] w-full">
              <SelectItem value={countryCode}>{countryCode}</SelectItem>
            </Select>
          )}
        />
        <Input
          {...register("quantity", {
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Choose quantity"
          className="placeholder:text-primary text-primary outline-none font-primary"
          error={errors.quantity?.message}
        />
      </div>

      <div>
        <label
          htmlFor="productId"
          className="block text-sm font-medium text-primary mb-1"
        >
          Select Product
        </label>
        <Select
          value={selectedProduct.id}
          defaultValue={selectedProduct.id}
          onValueChange={(value) => {
            const product = products.find((p) => p.id === value);
            if (product) {
              setSelectedProduct(product);
            }
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SelectItem key={product.id} value={product.id}>
              {product.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      {selectedProduct.minFaceValue !== selectedProduct.maxFaceValue && (
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-primary mb-1"
          >
            Amount (
            {`${selectedProduct.minFaceValue} - ${selectedProduct.maxFaceValue} ${selectedProduct.price.currencyCode}`}
            )
          </label>
          <Input
            {...register("price", {
              valueAsNumber: true,
            })}
            id="price"
            type="number"
            placeholder="Enter an amount"
            className="w-full outline-none font-primary"
            error={errors.price?.message}
          />
        </div>
      )}

      <div className="flex gap-x-3 justify-between">
        <Button
          type="button"
          name="cart"
          onClick={addToCart}
          variant="alternate"
          className="w-full"
        >
          Add To Cart
        </Button>
        <Button disabled={!isValid} type="submit" className="w-full">
          Checkout
        </Button>
      </div>
    </form>
  );
}

// const promise = mutateAsync({
//   cartId: "11",
//   payload: {
//     cartitems: [
//       {
//         sourceCurrency: selectedProduct.price.currencyCode,
//         sourceAmount:
//           getValues("price").price ?? selectedProduct.maxFaceValue,
//         productId: selectedProduct.id,
//         quantity: getValues("quantity").quantity,
//       },
//     ],
//   },
// });
