/** @jsxImportSource @emotion/react */
import {jsx, css} from "@emotion/react"

export const Emotion = () => {
    const Style = css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    return (
        <div css={Style}>
            <p>
                ----Emotion----
            </p>
        </div>
    );
};
