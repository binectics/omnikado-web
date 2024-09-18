import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  handlePage: () => void;
}

const schema = z.object({
  email: z.string().email(),
});

type formData = z.infer<typeof schema>;

export default function ForgotPasswordForm({ handlePage }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: formData) => {
    console.log(data);
    handlePage();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border md:border-none border-primary rounded-2xl p-5 w-full"
    >
      <div>
        <label
          htmlFor="email"
          className="text-primary font-primary font-medium text-sm"
        >
          Email
        </label>
        <Input
          {...register("email")}
          id="email"
          type="text"
          error={errors.email?.message}
          placeholder="Enter your email"
          className="mt-[6px] placeholder:text-primary bg-transparent rounded-lg"
        />
      </div>
      <Button type="submit" className="rounded-lg py-[10px] w-full mt-6">
        <span className="font-semibold text-base text-primary">Login</span>
      </Button>
    </form>
  );
}
