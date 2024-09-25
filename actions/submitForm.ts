"use server"
import { prisma } from '@/lib/prisma';

export async function submitForm(data: FormData) {
  const carName = data.get('carName')?.toString() || '';
  const phone = data.get('phone')?.toString() || '';

  // Validate phone number format (South Korean mobile number)
  const phoneRegex = /^010-\d{4}-\d{4}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error('Invalid phone number format. Use 010-XXXX-XXXX.');
  }

  // Create a new record in the database
  const formSubmission = await prisma.formSubmission.create({
    data: {
      carName,
      phone,
    },
  });

  return formSubmission;
}
