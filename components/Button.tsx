import Image from "next/image";

//default values for the Button
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;

//
/*This a TypeScript React component named `Button`. This component is designed to create a customizable button with various properties. Here's a breakdown of the code:

1. Import statements: The code starts by importing the `Image` component from the `next/image` package.

2. Type definition: A type `ButtonProps` is defined to define the properties that the `Button` component accepts. The properties include `type` (which can be either "button" or "submit"), `title` (the text displayed on the button), `icon` (an optional icon to be displayed alongside the title), `variant` (the style variant of the button), and `full` (an optional boolean indicating whether the button should take up the full width of its container).

3. `Button` component: The `Button` component is defined as a function that takes `ButtonProps` as its props. Inside the component, a button element is returned with the specified properties.

4. Button styles: The `className` attribute of the button element includes various CSS classes for styling. The `flexCenter` class centers the content horizontally and vertically, the `gap-3` class adds a gap of 3 units between child elements, the `rounded-full` class rounds the corners of the button, the `border` class adds a border, and the `variant` prop determines the style variant of the button. If the `full` prop is true, the `w-full` class is added to make the button take up the full width of its container.

5. Icon rendering: If the `icon` prop is provided, an `Image` component is rendered with the specified `src`, `alt`, `width`, and `height` properties.

6. Button label: The button label is rendered within a `<label>` element with the specified classes (`bold-16`, `whitespace-nowrap`, and `cursor-pointer`).

7. Export statement: Finally, the `Button` component is exported for use in other parts of the application.


What are the default values for the Button component's properties if they are not provided by the user? You may ask: The default values for the Button component's properties if they are not provided by the user are as follows:
type: The default value is "button".
title: There is no default value for title, so it must be provided by the user.
icon: The default value is undefined, meaning no icon will be displayed if not provided by the user.
variant: There is no default value for variant, so it must be provided by the user.
full: The default value is undefined, meaning the button will not take up the full width of its container if not explicitly set by the user.
*/
