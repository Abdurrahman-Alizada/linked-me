import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Ensure the correct path to the Badge component
import Badge from "@/components/ui/Badge";

type PlanFeature = {
  name: string;
  description?: string;
  link?: boolean;
};

type PricingPlan = {
  title: string;
  price: number;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  linkText?: string;
  bgColor?: string;
  priceColor?: string;
};

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card className={`border rounded-3xl h-full ${plan.bgColor || "bg-orange-50/50"}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-center">{plan.title}</CardTitle>
        <div className="flex justify-center items-center mt-2">
          <span className={`text-5xl font-bold ${plan.priceColor || "text-orange-500"}`}>
            {plan.price}
          </span>
          <span className="text-lg font-medium">$/mo</span>
        </div>
        <CardDescription className="text-center text-sm mt-2">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.link ? (
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{feature.name}</span>
                    {feature.description && (
                      <span className="text-xs text-blue-600 cursor-pointer hover:underline">
                        Learn more
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <span className="text-sm">{feature.name}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      {plan.linkText && (
        <CardFooter className="pt-2 pb-4">
          <Badge variant="outline" className="w-full justify-center py-1 border-orange-200">
            {plan.linkText}
          </Badge>
        </CardFooter>
      )}
    </Card>
  );
};

interface PricingTableProps {
  plans: PricingPlan[];
}

const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-orange-400 italic">Biogram</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="flex">
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const BiogramPricing = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      price: 0,
      description: "Create a beautiful page, share all your projects and open instagram audience",
      features: [
        { name: "Deeplink Technology" },
        { name: "Landing Page" },
        { name: "Unlimited Content" },
        { name: "Beautiful Designs" },
      ],
      bgColor: "bg-orange-50",
      priceColor: "text-orange-500",
    },
    {
      title: "Creator",
      price: 9,
      description: "Send links directly to your page, protect your social accounts and collaborate content",
      features: [
        { name: "Everything in Starter" },
        { name: "Direct Link" },
        { name: "Shield Protection", description: "Learn more", link: true },
        { name: "Geo Filter", description: "Learn more", link: true },
        { name: "Link Analytics" },
        { name: "Clicks Tracking" },
        { name: "Engagement Boost" },
      ],
      bgColor: "bg-rose-50",
      priceColor: "text-rose-500",
    },
    {
      title: "Agency",
      price: 49,
      description: "Manage all your creators from in one place & maximize your traffic and content",
      features: [
        { name: "Everything in Creator" },
        { name: "Up to 25 Links" },
        { name: "Shields for 5 Links", description: "Learn more", link: true },
        { name: "All-in-One Dashboard" },
        { name: "Custom Tracking" },
        { name: "White-Label Experience" },
        { name: "VIP Telegram Support" },
      ],
      bgColor: "bg-orange-50",
      priceColor: "text-orange-500",
      linkText: "up to 25 Links",
    },
  ];

  return <PricingTable plans={pricingPlans} />;
};

export default BiogramPricing;