import './App.css';
import {useState, useCallback, useMemo} from "react";
import {ChildArea} from "./component/ChildArea";
import classNames from 'classnames';
import {StyledComponent} from "./component/StyledComponent";
import {Emotion} from "./component/emotion";

function App() {
    const [text, setText] = useState('');
    const [display, setDisplay] = useState(false)
    const onChangeText = (e) => setText(e.target.value);
    const onChangeDisplay = () => setDisplay(!display)
    const onClickClose = useCallback(() => setDisplay(false), []);
    const temp = useMemo(() => 1 + 3, []);
    console.log(temp);

    const containerClass = classNames("App", "style")
    return (
        <div>
            <div className={containerClass}>
                <br/>
                <br/>
                <input value={text} onChange={onChangeText}/>
                <br/>
                <br/>
                <button className={"buttonColor"} onClick={onChangeDisplay}>表示</button>
                <ChildArea display={display} onClickClose={onClickClose}/>
            </div>
            <style jsx>{
                `.style {
                    border: solid 2px #392eff;
                    border-radius: 20px;
                    width: 1000px;
                    padding: 20px;
                }

                .containerStyle {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .buttonColor {
                    background-color: red;
                    border: none;
                    border-radius: 20px;
                }`
            }
            </style>
            <StyledComponent/>
            <Emotion/>
        </div>
    );
}

export default App;
