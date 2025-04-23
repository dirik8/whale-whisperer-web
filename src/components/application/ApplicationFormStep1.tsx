
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormValues } from "@/types/application";

type ApplicationFormStep1Props = {
  form: UseFormReturn<ApplicationFormValues>;
};

const ApplicationFormStep1: React.FC<ApplicationFormStep1Props> = ({ form }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Full Name*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your full name" 
                  className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                  {...field}
                />
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
              <FormLabel className="text-white/80">Email Address*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your@email.com" 
                  type="email"
                  className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80">Phone Number</FormLabel>
            <FormControl>
              <Input 
                placeholder="+1 (234) 567-8900" 
                className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Age</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your age" 
                  className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Location</FormLabel>
              <FormControl>
                <Input 
                  placeholder="City, Country" 
                  className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="maritalStatus"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white/80">Marital Status</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" className="text-gold" />
                  <Label htmlFor="single" className="text-white">Single</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="married" id="married" className="text-gold" />
                  <Label htmlFor="married" className="text-white">Married</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="divorced" id="divorced" className="text-gold" />
                  <Label htmlFor="divorced" className="text-white">Divorced</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" className="text-gold" />
                  <Label htmlFor="other" className="text-white">Other</Label>
                </div>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default ApplicationFormStep1;
