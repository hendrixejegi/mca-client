'use client';

import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const formSchema = z.strictObject({
  email: z.email(),
  password: z.string(),
});

const inputStyle =
  'bg-[#F8F9FB] rounded-xl p-2 h-fit [&>input]:placeholder:text-[#A9B4B9] mb-6';
const labelStyle =
  'uppercase text-[#3C5F95] font-semibold mb-2 leading-[16px] tracking-[1.2px]';

export default function UserLoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [hidePassword, setHidePassword] = useState(true);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <form id="user-login-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          {/* Input field - email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="input-field-email" className={labelStyle}>
                  Institution email
                </FieldLabel>
                <InputGroup className={inputStyle}>
                  <InputGroupInput
                    {...field}
                    id="input-field-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="admin@university.edu"
                  />
                  <InputGroupAddon align="inline-start">
                    <Mail aria-hidden="true" className="text-[#717C82]" />
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          {/* Input field - password */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-center justify-between">
                  <FieldLabel
                    htmlFor="input-field-password"
                    className={labelStyle}
                  >
                    Security key
                  </FieldLabel>
                  <Link
                    href="/"
                    className="text-[#5D5C78] text-sm font-semibold mb-2"
                  >
                    Forgot password?
                  </Link>
                </div>
                <InputGroup className={inputStyle}>
                  <InputGroupInput
                    {...field}
                    type={hidePassword ? 'password' : 'text'}
                    id="input-field-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                  />
                  <InputGroupAddon align="inline-start">
                    <Lock aria-hidden="true" className="text-[#717C82]" />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      onClick={() => setHidePassword((prev) => !prev)}
                      aria-label={
                        hidePassword ? 'Show password' : 'Hide password'
                      }
                    >
                      {hidePassword ? (
                        <EyeOff aria-hidden="true" className="text-[#717C82]" />
                      ) : (
                        <Eye aria-hidden="true" className="text-[#717C82]" />
                      )}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <div className="mt-4">
        <Button
          type="submit"
          form="user-login-form"
          className="w-full mb-6 font-semibold bg-linear-to-r from-[#3C5F95] to-[#2F5388] h-12 shadow-[0_10px_20px_0_#3C5F95]/20"
        >
          Enter Secure Portal
        </Button>
      </div>
    </div>
  );
}
