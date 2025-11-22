
const Typography = ({ 
  variant = 'body', 
  children, 
  className = '', 
  color,
  ...props 
}) => {
  const getTag = () => {
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return variant;
      case 'bold':
        return 'strong';
      case 'body':
      default:
        return 'p';
    }
  };

  const sizeText = {
    h1: 'text-6xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    body: 'text-base',
    bold: 'font-bold',
  };

  const colorText = color || 'neutral-white';
  

  const Tag = getTag();

  return (
    <Tag 
      className={`${className} ${sizeText[variant]}`} 
      style={{ color: `var(--color-${colorText})`}} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;