import React, { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Product } from "@/types/service";

interface Props {
  countryCode: string;
  currencyCode: string;
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

export default function GiftCardForm({
  countryCode,
  currencyCode,
  products,
}: Props) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const [schema, setSchema] = useState(
    createSchema(selectedProduct.minFaceValue, selectedProduct.maxFaceValue)
  );

  const {
    register,
    control,
    handleSubmit,
    trigger,
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
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      currency: currencyCode,
      quantity: data.quantity,
      productSourcePlatform: "ozchest",
      price: data.price ?? selectedProduct.maxFaceValue,
    };
    console.log(result);
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
            {`${selectedProduct.minFaceValue} - ${selectedProduct.maxFaceValue} ${currencyCode}`}
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
        <Button type="button" variant="alternate" className="w-full">
          Add To Cart
        </Button>
        <Button disabled={!isValid} type="submit" className="w-full">
          Checkout
        </Button>
      </div>
    </form>
  );
}
