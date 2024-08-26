"use client";

const { useForm } = require("react-hook-form");
const {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} = require("./ui/form");
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 character",
  }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = (data) => {
    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (data?.id) {
          toast({
            title: "Message sent!",
            description: "Thank you for your message!",
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 items-center gap-4 mt-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Type your message here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <Button variant="outline" type="submit" size="sm" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
