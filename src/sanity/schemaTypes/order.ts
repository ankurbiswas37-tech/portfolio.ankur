import { defineField, defineType } from 'sanity';

export const order = defineType({
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    }),
    defineField({
      name: 'packageId',
      title: 'Package ID / Slug',
      type: 'string',
    }),
    defineField({
      name: 'packageTitle',
      title: 'Package Title',
      type: 'string',
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
    }),
    defineField({
      name: 'paymentCategory',
      title: 'Payment Category',
      type: 'string',
      options: {
        list: [
          { title: 'International', value: 'international' },
          { title: 'Crypto', value: 'crypto' },
          { title: 'Local', value: 'local' },
        ],
      },
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
    }),
    defineField({
      name: 'trxId',
      title: 'Transaction ID (TrxID)',
      type: 'string',
    }),
    defineField({
      name: 'senderAccount',
      title: 'Sender Account No (Bank)',
      type: 'string',
    }),
    defineField({
      name: 'senderName',
      title: 'Sender Name (Bank)',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    }),
  ],
});