import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { LuRotateCw } from 'react-icons/lu'

const buttonVariants = cva(
  'w-fit transition duration-100 disabled:opacity-50 disabled:disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'text-slate-50 bg-violet-700 hover:bg-violet-700/80',
        secondary: 'text-slate-700 bg-slate-300 hover:bg-slate-300/80',
        outline:
          'text-violet-700 border-2 border-violet-700 hover:text-violet-700/80 hover:border-violet-700/80',
        destructive: 'text-slate-50 bg-rose-700 hover:bg-rose-700/80',
        sucess: 'text-teal-50 bg-emerald-500 hover:bg-emerald-500/80',
      },
      size: {
        default: 'text-base px-6 py-2.5',
        sm: 'text-sm px-4 py-1.5',
        lg: 'text-lg px-8 py-3',
      },
      rounded: {
        default: 'rounded-lg',
        sm: 'rounded',
        lg: 'rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  },
)

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  pending?: boolean
}

export default function Button({
  variant,
  size,
  rounded,
  pending = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded }), className)}
      disabled={pending}
      {...props}
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <LuRotateCw className="h-4 w-4 animate-spin" />
          Aguarde
        </div>
      ) : (
        children
      )}
    </button>
  )
}
