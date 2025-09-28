
export default function Button({ variant = 'primary', className = '', children, ...rest }) {
  const base = 'inline-flex items-center justify-center rounded-full px-10 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
  const variants = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-white/60 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)]',
    secondary: 'bg-purple-600/20 text-purple-200 hover:bg-purple-600/30 border border-purple-400/40 focus-visible:ring-purple-400/60',
  };
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
