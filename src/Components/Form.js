// This is a Second Component //           
import React, { useState } from 'react'; // -> step 1 :  useState is a 'Hook'. (Internally It is a function)
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function FormText(props) {

    let TextArea = document.getElementById("myBox");
    let status = true;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {

        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!");
        }

        else {
            setShow(true);
        }
    };

    const [Text, newStateText] = useState("");
    /*
         -> 'Text' is A Varible. 
         -> 'newStateText' is a function will set a new state value to 'Text' and wherever is used.  (like Update)
         -> 'useState' is a Hook which will be call Every time when state is changes! (in 'Text' default value will be : '')

         ==> In this u can't do simply Text='Assigning'.
    */

    /*
     console.log(useState('Enter Text here'));
     console.log(Text);
     console.log(newStateText);
     */


    //  Text="new State" // -> Wrong way to change a state
    //    Text=newStateText("New State"); // ->Right way to change a state.

    const ClearAll = () => {

        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!")
        }

        else {
            newStateText("");
            props.setAlertMsg("Text area is clear.", "success");
        }
    }
    // let Mybox=document.getElementById("myBox");

    const ToUpperCase = () => {
        // console.log('clicked On Buton');
        // newStateText("Yes You Are correct");
        // newStateText(Mybox.value.toString().toUpperCase()); // -> Not Correct way

        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!")
        }

        else {
            let newText = Text;
            newText = newText.toString().toUpperCase();
            newStateText(newText);
            props.setAlertMsg("Converted to UpperCase", "success");
        }

    }

    const ToLowerCase = () => {


        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!")
        }

        else {
            let newText = Text;
            newText = newText.toString().toLowerCase();
            newStateText(newText);
            props.setAlertMsg("Converted to LowerCase", "success");
        }

    }


    const handleReplaceAll = () => {

        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!")
        }

        else {
            let findTextIP = document.getElementById("findText");
            let replaceTextIP = document.getElementById("replaceText");

            setShow(false);

            let findText = findTextIP.value.toString();
            let replaceText = replaceTextIP.value.toString();

            if (findText.length == 0) {
                alert("Please Insert a Text First!");
            }

            else {
                let newText = Text;

                let Regfind = new RegExp(findText, "gi");

                newText = newText.replace(Regfind, replaceText);
                newStateText(newText);

                props.setAlertMsg(`Replaced All ${findText} with ${replaceText}`, "success");

            }

        }


    };


    const selectAll = () => {

        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!")
        }

        else {

            TextArea.select();
            navigator.clipboard.writeText(Text);
            props.setAlertMsg("Copied all text to Clipboard", "success");
        }

    }

    const removeExtraSpace = () => {

        status = checkText();

        if (status === false) {
            alert("Please Insert a Text First!")
        }

        else {

            let newText = Text.split(/[ ]+/); // -> it is a regEx
            // console.log("=> Newtext : ",newText);
            newStateText(newText.join(" "));
            props.setAlertMsg("Removed All Extra Spaces", "success");
        }


    }

    const handelOnChange = (event) => {
        // console.log('changed!!');
        newStateText(event.target.value);
    }

    const checkText = () => {

        if (Text.length > 0) {
            return true;
        }

        else {
            return false;
        }

        // If you don't want this function than simpaly you can add in button => disabled={Text.length===0}//
    };

    // let word = 0;

    // if (Text != '') {
    //     word = Text.split(" ").length;
    // }

    const countWord = () => {
        if (Text.length > 0) {
            return Text.trim().split(/[ ]+/).length;
        }
        else {
            return 0;
        }
    }

    return (
        <>

            <div className="container">
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className={`form-control bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} value={Text} placeholder={'Enter Text Here'} onChange={handelOnChange} id="myBox" rows="5"></textarea>
                </div>

                <div className="ButtonsGrp">
                    <button disabled={Text.length===0} className="btn btn-primary m-3" id="btnClr" onClick={ClearAll}>Clear All</button>
                    <button disabled={Text.length===0} className="btn btn-primary m-3" id="btnUC" onClick={ToUpperCase}>To Uppercase</button>
                    <button disabled={Text.length===0} className="btn btn-primary m-3" id="btnLC" onClick={ToLowerCase}>To Lowercase</button>
                    <button disabled={Text.length===0} className="btn btn-primary m-3" id="btCp" onClick={selectAll}>Copy All</button>
                    <button disabled={Text.length===0} className="btn btn-primary m-3" id="btExt" onClick={removeExtraSpace}>Remove Spaces</button>

                    <>
                        <Button disabled={Text.length===0} variant="primary" onClick={handleShow}>
                            ToReplaceAll
                        </Button>

                        <Modal show={show} onHide={handleClose}>

                            <div style={{ background: props.themeProps === 'light' ? 'white' : '#373572' }} >

                                <Modal.Header closeButton>
                                    <Modal.Title>Replace The Word!!</Modal.Title>
                                </Modal.Header>

                                <Modal.Body >
                                    {/* Woohoo, you're reading this text in a modal! */}

                                    <input className={`my-1 form-control bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} type="text" id="findText" placeholder='Enter to be Replace ' />

                                    <input className={`my-2 form-control bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} type="text" id="replaceText" placeholder='Enter Replace By' />

                                </Modal.Body>

                                <Modal.Footer>

                                    <Button disabled={Text.length===0} variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>

                                    <Button disabled={Text.length===0} variant="primary" onClick={handleReplaceAll}>
                                        ReplaceAll
                                    </Button>

                                </Modal.Footer>

                            </div>

                        </Modal>
                    </>

                    {/* <button disabled={Text.length===0} className="btn btn-primary m-3" id="btnReplace" onClick={ToReplaceAll}>To ReplaceAll</button> */}
                </div>
            </div>

            <div className="container">

                <h1>Your Text Summary : </h1>

                <p><b>{countWord()}</b> Words & <b>{Text.length}</b> Characters.</p>

                <p>Time needs to read : <b>{(0.008 * countWord()).toFixed(3)}</b> Minutes.</p>

                <h3>Preview</h3>
                <hr />

                <p>{Text.length > 0 ? Text : "Nothing to preview!"}</p>

            </div>

        </>
    );
}
