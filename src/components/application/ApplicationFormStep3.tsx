
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ApplicationFormValues } from "@/types/application";

type ApplicationFormStep3Props = {
  form: UseFormReturn<ApplicationFormValues>;
};

const assetOptions = [
  { id: "stocks", label: "Stocks" },
  { id: "crypto", label: "Cryptocurrency" },
  { id: "forex", label: "Forex" },
  { id: "commodities", label: "Commodities" },
  { id: "bonds", label: "Bonds" },
  { id: "real estate", label: "Real Estate" },
  { id: "nfts", label: "NFTs" },
  { id: "options", label: "Options" },
];

const ApplicationFormStep3: React.FC<ApplicationFormStep3Props> = ({ form }) => {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold text-white mb-3">Assets &amp; Experience</h3>
        <p className="text-white/70 mb-4">
          Which of the following assets have you traded before?
        </p>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="assetsHeld"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {assetOptions.map((asset) => (
                    <FormItem
                      key={asset.id}
                      className="flex flex-row items-start space-x-3 space-y-0 bg-charcoal/50 p-4 rounded-md"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(asset.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...(field.value || []), asset.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== asset.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-white cursor-pointer font-normal">
                        {asset.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-3">Additional Information</h3>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Is there anything else you'd like us to know about your trading goals?
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your trading goals and any questions you might have..."
                  className="bg-charcoal/50 border-gold/20 text-white focus:border-gold min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default ApplicationFormStep3;
