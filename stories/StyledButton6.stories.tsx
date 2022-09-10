import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "StyledButton (6) - Linkを使用する",
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const Primary = (props) => {
  // クリックしたらStyledButton/Successのストーリーへ遷移する
  return (
    <StyledButton
      {...props}
      variant="primary"
      onClick={linkTo("StyledButton (6) - Linkを使用する", "Success")}
    >
      Primary
    </StyledButton>
  );
};

export const Success = (props) => {
  // クリックしたらStyledButton/Transparentのストーリーへ遷移する
  return (
    <StyledButton
      {...props}
      variant="success"
      onClick={linkTo("StyledButton (6) - Linkを使用する", "Transparent")}
    >
      Primary
    </StyledButton>
  );
};

export const Transparent = (props) => {
  // クリックしたらStyledButton/Primaryのストーリーへ遷移する
  return (
    <StyledButton
      {...props}
      variant="transparent"
      onClick={linkTo("StyledButton (6) - Linkを使用する", "Primary")}
    >
      Transparent
    </StyledButton>
  );
};
