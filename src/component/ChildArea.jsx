import {memo} from "react";

const style = {
    width: "100%",
    height: "100px",
    backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {
    const {display, onClickClose} = props
    console.log("Childエリアレンダリング！！！")

    const data = [...Array(2000).keys()];
    console.log(data);
    data.forEach(() => {
        console.log("...");
    });

    return (
        <>
            {display ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>) : null}
        </>
    )
});