"use client";
import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/UploadImage";
import { CreateProduct } from "@/utils/Action";
import { Loader } from "lucide-react";

const ProductSchema = z.object({
  title: z.string().min(2).max(50),
  des: z.string().min(2).max(230),
  price: z.string(),
  sale_price: z.string(),
  image: z.string().optional(),
  categoryId: z.string().optional(),
});
type SchemaType = z.infer<typeof ProductSchema>;

export default function ProductForm({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const form = useForm<SchemaType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      des: "",
      title: "",
      price: "0",
      sale_price: "0",
    },
  });

  const submit = async (value: SchemaType) => {
    await CreateProduct(value);
  };
  return (
    <Sheet>
      <SheetTrigger className={className}>{children}</SheetTrigger>
      <SheetContent side="left" dir="ltr">
        <SheetHeader>
          <SheetTitle>إنشاء منتج جديد</SheetTitle>
          <SheetDescription>
            يرجى تعبئة النموذج أدناه لإضافة منتج جديد إلى متجرك. يرجى تقديم جميع
            التفاصيل المطلوبة قبل الإرسال.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-3 px-4">
            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <UploadImage
                      onChange={field.onChange}
                      id="product-image-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-[5px]"
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="des"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      className="h-10 rounded-[5px] border border-zinc-500/85 p-1"
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="price"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-[5px]"
                      placeholder="Price"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="sale_price"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sale Price</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-[5px]"
                      placeholder="Sale Price"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} {...field}>
                      <SelectTrigger className="!h-10 w-full !rounded-[5px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              disabled={form.formState.isSubmitting}
              className="mt-5 h-10 w-full cursor-pointer !rounded-[5px]"
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin" />
              ) : (
                " Create Product"
              )}
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
