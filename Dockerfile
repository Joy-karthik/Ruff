FROM node:18-alpine
ENV SCOPES='read_own_subscription_contracts,write_own_subscription_contracts,read_customers,read_customer_payment_methods,read_orders'
ENV HOST=''
ENV SHOPIFY_API_KEY=00a44a1b1f46fe0fa599c2a7ccfe7fa0
ENV SHOPIFY_API_SECRET=38bec03c6d4778bb0a2994cd8b43e13a
ENV BACKEND_PORT=8081
EXPOSE 8081
WORKDIR /app
COPY web .
RUN npm install
CMD ["npm", "deploy"]
RUN cd frontend && npm install && npm run build
CMD ["npm", "run", "dev"]