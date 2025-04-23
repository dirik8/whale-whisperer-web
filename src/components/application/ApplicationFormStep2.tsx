
import React from "react";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormValues } from "@/types/application";

type ApplicationFormStep2Props = {
  form: UseFormReturn<ApplicationFormValues>;
};

const ApplicationFormStep2: React.FC<ApplicationFormStep2Props> = ({ form }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Occupation</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your occupation" 
                  className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentJob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Current Job</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your job title" 
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
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80">Company</FormLabel>
            <FormControl>
              <Input 
                placeholder="Your company" 
                className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="previousInvestments"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80">Previous Investments Experience</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No prior investment experience</SelectItem>
                  <SelectItem value="beginner">Beginner (&lt; 1 year)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                  <SelectItem value="expert">Expert (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="broker"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80">Current/Past Broker</FormLabel>
            <FormControl>
              <Input 
                placeholder="Your broker" 
                className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default ApplicationFormStep2;
