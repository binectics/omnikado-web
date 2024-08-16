import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";

const options = [
  { label: "Africa", value: "africa" },
  { label: "France", value: "france" },
  { label: "USA", value: "usa" },
];

export default function GiftCardForm() {
  return (
    <div>
      <div className="flex gap-x-4 mt-5 mb-6">
        <Select
          placeholder="Select Region"
          className="max-w-[319px] w-full"
          options={options}
        />
        <Input
          type="text"
          placeholder="Choose quantity"
          className="placeholder:text-primary text-primary outline-none font-primary"
        />
      </div>
      <div className="mt-6">
        <p className="text-primary text-sm font-primary mb-[6px]">
          Amount (<span>Available amount: 1000+</span>)
        </p>
        <Select
          placeholder="Currency"
          className="mb-[6px] w-full"
          options={options}
        />
        <Input
          type="text"
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
          type="button"
          className="w-full"
          // onClick={() => toggleModal(false)}
          //   ref={cancelButtonRef}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
