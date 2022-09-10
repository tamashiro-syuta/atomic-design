import { Input } from "../components/Input/index";
import { DelayInput } from "../components/DelayInput/index";

// テスト用のコンポーネントがどんなやつか見るためのコンポーネント
const Test = () => {
  return (
    <div>
      <Input label="hoge" />
      <DelayInput
        onChange={() => {
          console.log("onChanged!!!");
        }}
      />
    </div>
  );
};

export default Test;
