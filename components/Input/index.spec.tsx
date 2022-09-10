import {
  render,
  screen,
  RenderResult,
  fireEvent,
  getByRole,
} from "@testing-library/react";
import { Input } from "./index";

// describeで処理をまとめる
describe("Input", () => {
  let renderResult: RenderResult;

  // それぞれのテストケース(it毎に)前にコンポーネントを描画し、renderResultにセットする
  beforeEach(() => {
    console.log("mount");
    renderResult = render(<Input id="username" label="Username" />);
  });

  // テストケース(it毎に)実行後に描画していたコンポーネントを開放する(マウント(使える)状態でなくする)
  afterEach(() => {
    renderResult.unmount();
  });

  // 初期描画時にinput要素が空であることをテスト
  it("should empty in input on initial render", () => {
    // labelがUsernameであるコンポーネントに対応するinputの要素を取得する
    // UserNameは、上のbeforeEachで定義したコンポーネントから
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    // input要素の表示が空か確認する
    expect(inputNode).toHaveValue("");
  });

  // 文字を入力したら、入力した内容が表示されるかをテスト
  it("should show input text", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    // fireEventを使って、input要素のonChangeイベントを発火する
    // 第1引数: DOM, 第2引数: オブジェクトの中に入力する文字列
    // onChangeを呼びたいから、changeメソッド(onを抜いたやつ)
    fireEvent.change(inputNode, { target: { value: inputText } });

    // input要素に入力したテキストが表示されているか確認する
    expect(inputNode).toHaveValue(inputText);
  });

  // ボタンが押されたら、入力テキストがクリアするかチェック
  it("should reset when user clicks button", async () => {
    // 最初にinputにテキストを入力する
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    // ボタンを取得する
    const buttonNode = screen.getByRole("button", {
      name: "Reset",
    }) as HTMLButtonElement;
    // ボタンをクリックする
    // onClickを呼びたいからclickメソッド
    fireEvent.click(buttonNode);

    // input要素の表示が空か確認する
    expect(inputNode).toHaveValue("");
  });
});
