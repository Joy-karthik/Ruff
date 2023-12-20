import {extend, render, Card, Text, TextField, InlineStack} from '@shopify/admin-ui-extensions-react';

export default function Create() {
  // ...

  return (
    <>
      <Text size="titleLarge">Create plan</Text>
      <Card title={`Create subscription plan for Product id ${data.productId}`} sectioned>
        <TextField label="Plan title" value={planTitle} onAfterChange={setPlanTitle} />
      </Card>
      <Card title="Delivery and discount" sectioned>
        <InlineStack>
          <TextField
            type="number"
            label="Delivery frequency (in weeks)"
            value={deliveryFrequency}
            onAfterChange={setDeliveryFrequency}
          />
          <TextField
            type="number"
            label="Percentage off (%)"
            value={percentageOff}
            onAfterChange={setPercentageOff}
          />
        </InlineStack>
      </Card>
      {actions}
    </>
  );
}

// extend('Admin::Product::SubscriptionPlan::Create', render(() => <Create />);
