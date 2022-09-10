import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: "StyledButton (2) - actionを使用して、関数の呼び出しを確認",
  // 使用するコンポーネント
  component: StyledButton,
  // onCkickのアクションを定義(定義したメソッドが呼ばれるかをstorybook上で確認できる)
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof StyledButton>;

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Primary
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
