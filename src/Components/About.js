import { React, useState } from 'react'

export default function About(props) {

/*    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    }
    ); */

    // const [btnState,setbtnState]=useState("Enable Dark Mode");

    // let myStyle = {
    //     // color: 'white',
    //     // backgroundColor:'black',
    //     // border:"1px solid white"
    // };

/*    const changeTheme = () => {

        if (myStyle.color == 'white') {

            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
    
            });

            setbtnState("Enable Dark Mode");
        }

        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            });

            setbtnState("Enable Light Mode");

        }

    }*/

    return (

        <div className="container">

            <h1>About Us</h1>

            <div className={`accordion my-5 bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} id="accordionExample">

                <div className={`accordion-item bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`}>

                    <h2 className={`accordion-header bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} id="headingOne">
                        
                        <button className={`accordion-button collapsed bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>

                        
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>

                </div>

                <div className={`accordion-item bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`}>

                    <h2 className={`accordion-header bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} id="headingTwo">
                     
                        <button className={`accordion-button collapsed bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>

                </div>

                <div className={`accordion-item bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`}>

                    <h2 className={`accordion-header bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`} id="headingThree">
                    
                        <button className={`accordion-button collapsed bg-${props.themeProps} text-${props.themeProps === 'light' ? 'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>

                </div>

            </div>
{/* 
            <button type="button" class="btn btn-primary" onClick={changeTheme} id="modeTheme">{btnState}</button> */}
        </div>

    );
}
