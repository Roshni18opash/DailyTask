import { memo } from "react"; //memo memoised filtering data
interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: Props) => {
  //   console.log("serach is rendering....");
  return (
    <input
      type="text"
      name=""
      placeholder="search here.."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default memo(Search);
