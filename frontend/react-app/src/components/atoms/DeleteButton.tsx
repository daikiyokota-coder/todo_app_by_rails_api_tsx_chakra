import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const DeleteButton: VFC<Props> = memo((props) => {
  const {children, onClick} = props;
  return (
    <Button
      colorScheme="red"
      size="sm"
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
