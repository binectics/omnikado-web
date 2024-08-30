import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const schema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export type FormData = z.infer<typeof schema>;

export default function CartForm() {
  const {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex flex-col gap-y-6"
      action=""
    >
      <h2 className="font-header text-lg font-medium">Order Information</h2>
      <div>
        <Input
          {...register("email")}
          error={errors.email?.message}
          type="text"
          className="outline-none font-primary text-[#DBE0EB] placeholder:text-[#DBE0EB]"
          placeholder="Your Email"
        />
      </div>
      <Button type="button" variant={"alternate"} className="w-full">
        Apply
      </Button>
      <Button type="submit" className="w-full">
        Checkout
      </Button>
    </form>
  );
}
