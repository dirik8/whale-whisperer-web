
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormValues } from "@/types/application";

type ApplicationFormStep3Props = {
  form: UseFormReturn<ApplicationFormValues>;
};

const ApplicationFormStep3: React.FC<ApplicationFormStep3Props> = ({ form }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="portfolioSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Current Portfolio Size</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                    <SelectValue placeholder="Select portfolio size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under10k">Under $10,000</SelectItem>
                    <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                    <SelectItem value="over1m">Over $1 million</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="investmentBudget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Current Investment Budget</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                    <SelectValue placeholder="Select investment budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="over100k">Over $100,000</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="assetsHeld"
        render={() => (
          <FormItem>
            <FormLabel className="text-white/80">Assets Currently Held</FormLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {["Stocks", "Bonds", "ETFs", "Crypto", "Real Estate", "Commodities"].map((asset) => (
                <div key={asset} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={asset.toLowerCase()}
                    value={asset.toLowerCase()}
                    onChange={(e) => {
                      const currentAssets = form.getValues("assetsHeld") || [];
                      if (e.target.checked) {
                        form.setValue("assetsHeld", [...currentAssets, asset.toLowerCase()]);
                      } else {
                        form.setValue(
                          "assetsHeld",
                          currentAssets.filter((a) => a !== asset.toLowerCase())
                        );
                      }
                    }}
                    className="h-4 w-4 rounded border-gold/50 text-gold focus:ring-gold/50"
                  />
                  <Label htmlFor={asset.toLowerCase()} className="text-white">{asset}</Label>
                </div>
              ))}
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80">Message*</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us about your trading goals and what you hope to achieve with our membership"
                className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold min-h-[150px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ApplicationFormStep3;
