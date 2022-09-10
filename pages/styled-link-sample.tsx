import { NextPage } from "next";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";
import sample_image from "../public/sample_image.jpeg";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

type BaseImageProps = React.PropsWithChildren<ImageProps> & {
  className?: string;
  // Imageコンポーネントはchildrenは要らないので、書かない(書いたらエラーになる)
};

// Next.jsのリンクにスタイルを適用するためのヘルパーコンポーネント
// このコンポーネントをstyled-componentsで使用すると、
// 定義したスタイルに対応するclassNameがpropsとして渡される
// このclassNameをa要素に渡す
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  console.log(`children =>  ${children || null}`);
  console.log(`className =>  ${className || null}`);
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};

const BaseImage = (props: BaseImageProps) => {
  const { className, ...rest } = props;
  return <Image {...rest} />;
};

// BaseLinkに充てるスタイルを定義
const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`;

const StyledImage = styled(BaseImage)`
  margin: 5px;
`;

const Page: NextPage = () => {
  return (
    <>
      <div>
        {/* 青色のリンクを表示する */}
        <StyledLink
          href="/"
          className="hoge"
          onClick={() => {
            console.log("clickされました");
          }}
        >
          Go to Index
        </StyledLink>
      </div>
      <div>
        <StyledImage src={sample_image} width={240} height={240} />
      </div>
    </>
  );
};

export default Page;
