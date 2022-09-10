import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

// ファイル内のStoryの設定（メタデータオブジェクト）をexport
export default {
  // グループ名
  title: "StyledButton (1)",
  // 使用するコンポーネント
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

// exportしている変数名(ここではPrimary)がStoryの名前
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
      Success
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
