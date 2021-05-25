import { useState } from 'react';
export default () => {
    const [modal, setModal] = useState(false)
    return (
        <div>
            <button onClick={() => { setModal(currentState => !currentState) }}>
                Open Modal
            </button>
            {modal &&
                <div className="modal-background">
                    <div className="modal">
                        <input placeholder="address" />
                        <input placeholder="city" />
                        <input placeholder="coutry" />
                        <button>Confirm</button>
                        <button onClick={() => setModal(currentState => !currentState)} id="close">Close</button>
                    </div>
                </div>
            }
            <style>
                {`
                    button {
                        padding: 1em;
                        border: none;
                    }
                    .modal {
                        background-color: rgb(255, 255, 255);
                        position: fixed;
                        top: 5vh;
                        left: 5vw;
                        bottom: 5vh;
                        right: 5vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .modal > button {
                        margin-top: 2em;
                        background-color: hsl(207, 68%, 52%);
                        color: white;
                        border-radius: 1em;
                        font-size: 1rem;
                        padding: .7em 5em;
                        cursor: pointer;
                    }
                    #close {
                        background-color: hsl(0, 75%, 58%);
                    }
                    #close:hover {
                        background-color: hsl(0, 75%, 38%);
                    }
                    .modal > button:hover {
                        background-color: hsl(207, 68%, 32%);
                    }
                    .modal > input {
                        padding: .7em 5em .7em 0.5em;
                        border: none;
                        border-radius: 1em;
                        box-shadow: 1px 1px 10px #111;
                    }
                    .modal > input + input {
                        margin-top: 2em;
                    }
                    .modal-background {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background-color: rgba(0, 0, 0, 0.342);
                    }
                `}
            </style>
        </div>
    )
}