import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { UserCheck, MessageSquare, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const products = [
  { value: "cassava", label: "Cassava Flour (Gari)" },
  { value: "coconuts", label: "Fresh Coconuts" },
  { value: "charcoal", label: "Charcoal" },
  { value: "palm-oil", label: "Crude Palm Oil" },
  { value: "cashew", label: "Raw Cashew Nuts" },
  { value: "soybeans", label: "Soybeans" },
  { value: "cocoa", label: "Raw Cocoa Beans" },
  { value: "multiple", label: "Multiple Products" },
];

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Contact us today for quotes, product specifications, or to discuss your agricultural import needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white flex items-center">
                  <UserCheck className="text-yellow-400 mr-3 h-6 w-6" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-white">
                  <UserCheck className="text-yellow-400 mr-4 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Thierry ADJIVEHOU</p>
                    <p className="text-gray-200">Founder - OCEANE CENTER</p>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <FaWhatsapp className="text-green-400 mr-4 h-5 w-5" />
                  <div>
                    <p className="font-semibold">+229 01 58 18 85 52</p>
                    <p className="text-gray-200">WhatsApp available</p>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="text-yellow-400 mr-4 h-5 w-5" />
                  <div>
                    <p className="font-semibold">supremeetfils@gmail.com</p>
                    <p className="text-gray-200">Business inquiries</p>
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="text-yellow-400 mr-4 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Abomey-Calavi, Cotonou</p>
                    <p className="text-gray-200">Benin, West Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-500 bg-opacity-20 backdrop-blur-lg border-yellow-400 border-opacity-30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a href="https://wa.me/22901581885552" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <a href="mailto:supremeetfils@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-white border-opacity-20">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white flex items-center">
                <MessageSquare className="mr-3 h-6 w-6" />
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your full name"
                              className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Company name"
                              className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your@email.com"
                              className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Products of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white bg-opacity-20 border-white border-opacity-30 text-white">
                              <SelectValue placeholder="Select a product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product.value} value={product.value}>
                                {product.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your requirements, quantities needed, and delivery location..."
                            className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold"
                    size="lg"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
