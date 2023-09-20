export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?:
    | "darkblue"
    | "teal"
    | "lblue"
    | "white"
    | "red"
    | "outline-darkblue"
    | "outline-teal"
    | "outline-lblue"
    | "outline-white"
    | "outline-red";
  paddingLess?: boolean;
}
const Button = ({
  className,
  children,
  variant,
  type = "button",
  ...props
}: IButtonProps) => {
  const getVariant = () => {
    switch (variant) {
      case "darkblue":
        return "bg-darkblue hover:shadow-md text-white active:bg-presseddarkblue-500 active:shadow-inner";
      case "teal":
        return "bg-teal hover:shadow-md text-white active:bg-pressedteal-500 active:shadow-inner";
      case "lblue":
        return "bg-lblue hover:shadow-md text-white active:bg-pressedlblue-500 active:shadow-inner";
      case "white":
        return "bg-white hover:shadow-md text-lblue active:shadow-inner";
      case "red":
        return "bg-red hover:shadow-md text-white active:bg-pressedred-500 active:shadow-inner";
      case "outline-darkblue":
        return "bg-transparent text-darkblue-500 border border-darkblue-500 hover:shadow-md";
      case "outline-teal":
        return "bg-transparent text-teal-500 border border-teal-500 hover:shadow-md";
      case "outline-lblue":
        return "bg-transparent text-lblue-500 border border-lblue-500 hover:shadow-md";
      case "outline-white":
        return "bg-transparent text-white-500 border border-white-500 hover:shadow-md";
      case "outline-red":
        return "bg-transparent text-red-500 border border-red-500 hover:shadow-md";

      default:
        return "bg-darkblue-500 hover:shadow-md text-white active:bg-presseddarkblue-500 active:shadow-inner";
    }
  };
  return (
    <button
      {...props}
      type={type}
      className={`
 
        ${getVariant()}  transition duration-500  ${
        "py-10 px-30"
      }  ${ "rounded-lg"} active:scale-95 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

/* 
    case "outline-primary":
        return "bg-white text-violet-500 border border-violet-500 hover:text-white hover:bg-violet-700  ";
*/