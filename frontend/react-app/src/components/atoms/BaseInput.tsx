import { Input } from "@chakra-ui/react"
import { memo, VFC } from "react";
type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const BaseInput: VFC<Props> = memo((props) => {
  const { placeholder, value, onChange } = props;
  return (
    <Input
      placeholder={placeholder}
      mt={[2]}
      mb={['2']}
      value={value}
      onChange={onChange}
    />
  )
})
