import { useCollapsedMenu } from "@/app/context/collapsedMenu.context";

const CollapseButton = () => {
  const { open, toggleOpen } = useCollapsedMenu();
  return(
    <div onClick={() => toggleOpen()}>Button { open ? 'Open' : 'Close'}</div>
  )
};

export default CollapseButton;