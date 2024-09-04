import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
      <div className="mt-8">
        <p className="text-primary font-primary text-center text-sm">
          <span>By signing up you agree to our</span> <br />
          <a href="#" className="text-alternate">
            Terms of Service
          </a>
          <span className="mx-1">and</span>
          <a href="#" className="text-alternate">
            Privacy Policies
          </a>
        </p>
      </div>
    </>
  );
}
