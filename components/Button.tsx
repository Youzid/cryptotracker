interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
  }
  
  function Button({ title }: Props) {
    return (
      <button
        className={`relative z-30 w-auto cursor-pointer text-sm text- items-center justify-center    background-gradiant px-2 py-2    text-white transition-all duration-300 `}
      onClick={()=> se}
      >
        {title}
        
     
      </button>
    );
  }
  
  export default Button;