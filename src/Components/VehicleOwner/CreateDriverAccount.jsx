import { Button, Card, Label, TextInput } from "flowbite-react";

const CreateDriverAccount = () => {
  return (
    <Card className="mt-8 dark:bg-slate-900">
      <div className="text-center text-2xl font-semibold tracking-wide  ">
        Create Driver Account{" "}
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row ">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="fname" value="First Name" />
            </div>
            <TextInput id="fname" placeholder="John" required type="text" />
          </div>

          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="lname" value="Last Name" />
            </div>
            <TextInput id="lname" placeholder="Samual" required type="text" />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="contactno" value="Contact No" />
          </div>
          <TextInput
            id="contactno"
            placeholder="123-456-79-78"
            required
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            placeholder="abc@gmail.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            placeholder="•••••••••"
            required
            type="password"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Address" />
          </div>
          <TextInput id="address" placeholder="Colombo" required type="text" />
        </div>

        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <div className="flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Create Account
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default CreateDriverAccount;
