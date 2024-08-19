import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const options = [
  { label: "Africa", value: "africa" },
  { label: "France", value: "france" },
  { label: "USA", value: "usa" },
];

const schema = z.object({
  region: z.string(),
  quantity: z.coerce
    .number()
    .min(0, { message: "Quantity must be greater than zero" }),
  currency: z.string(),
  amount: z.coerce
    .number()
    .min(0, { message: "Amount must be greater than zero" })
    .max(10000, { message: "Amount must be less than 10000" }),
});

type FormData = z.infer<typeof schema>;

export default function GiftCardForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col sm:flex-row gap-4 mt-5 mb-6">
        <Controller
          name="region"
          control={control}
          render={({ field, fieldState }) => (
            <div className="w-full">
              <Select
                {...field}
                onValueChange={field.onChange}
                placeholder="Select Region"
                className="sm:max-w-[319px] w-full"
                options={options}
              />
              {fieldState.error ? (
                <p className="text-red-500 text-xs mt-1">
                  {fieldState.error.message}
                </p>
              ) : null}
            </div>
          )}
        />
        <Input
          {...register("quantity")}
          error={errors.quantity?.message}
          type="string"
          placeholder="Choose quantity"
          className="placeholder:text-primary text-primary outline-none font-primary"
        />
      </div>
      <div className="mt-6">
        <p className="text-primary text-sm font-primary mb-[6px]">
          Amount (<span>Available amount: 1000+</span>)
        </p>
        <Controller
          name="currency"
          control={control}
          render={({ field, fieldState }) => (
            <div className="mb-3">
              <Select
                {...field}
                onValueChange={field.onChange}
                placeholder="Currency"
                className="w-full"
                options={options}
              />
              {fieldState.error ? (
                <p className="text-red-500 text-xs mt-1">
                  {fieldState.error.message}
                </p>
              ) : null}
            </div>
          )}
        />
        <Input
          {...register("amount")}
          error={errors.amount?.message}
          type="string"
          placeholder="Select amount between 5 - 500"
          className="outline-none font-primary text-[#DBE0EB] placeholder:text-[#DBE0EB]"
        />
      </div>
      <div className="flex gap-x-3 justify-between mt-8">
        <Button
          type="button"
          variant={"alternate"}
          className="w-full"
          // onClick={() => toggleModal(false)}
          //   ref={cancelButtonRef}
        >
          Add To Cart
        </Button>
        <Button
          type="submit"
          className="w-full"
          // onClick={() => toggleModal(false)}
          //   ref={cancelButtonRef}
        >
          Checkout
        </Button>
      </div>
    </form>
  );
}
