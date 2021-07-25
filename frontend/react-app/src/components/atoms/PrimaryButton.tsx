import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
type Props = {
  children: ReactNode;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const {children, disabled = true} = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      size="md"
      align="center"
      m={['auto']}
      height="48px"
      width="200px"
      variant="solid"
      _hover={{opacity: 0.8}}
      disabled={disabled}
      type="submit"
    >
      {children}
    </Button>
  )
})
