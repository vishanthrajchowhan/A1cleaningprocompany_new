import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition duration-300'
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
  }

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}
