import { NextPage } from "next";
import styled from "styled-components";

// 青色のテキストを表示するコンポーネント (p要素を指定)
const Text = styled.p`
  color: #1e90ff;
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <div>
      {/* 青色のテキストを表示 */}
      <Text>World</Text>
      {/* 青色のリンクを表示　*/}
      {/* 元々はp要素にスタイルを当てているが、as="a"とすることで、同じスタイルをaタグに当てている */}
      <Text as="a" href="/">
        Go to index
      </Text>
      <Text as="h1">Go to theme sample</Text>
    </div>
  );
};

export default Page;
