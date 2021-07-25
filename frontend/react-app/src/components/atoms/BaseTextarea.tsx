import { Textarea } from "@chakra-ui/react"
import { memo, VFC } from "react";
type Props = {
  placeholder: string;
  value: string;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const BaseTextarea: VFC<Props> = memo((props) => {
  const { placeholder, value, onChangeTextarea } = props;
  return (
    <Textarea
      placeholder={placeholder}
      mt={[2]}
      mb={['2']}
      value={value}
      onChange={onChangeTextarea}
    >
    </Textarea>
  )
})
