import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmojiResults from "./EmojiResults";

describe("EmojiResults", () => {
  it("should copy emoji to clipboard on click", () => {
    const mockEmojiData = [
      { title: "smile", symbol: "😄" },
      { title: "wink", symbol: "😉" },
      { title: "thinking face", symbol: "🤔" }
    ];
    const { getByText } = render(
      <EmojiResults emojiData={mockEmojiData} />
    );

    // simulate clicking on an emoji
    const smileEmoji = getByText("smile");
    fireEvent.click(smileEmoji);

    // check if the emoji is successfully copied to the clipboard
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("😄");
  });
});
