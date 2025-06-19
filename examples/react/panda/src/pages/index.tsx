import type * as React from "react";

import { NavLink } from "react-router";

import { Scrollbar } from "#/components/scrollbar";
import { css } from "#/panda/css";

const Page1 = (): React.JSX.Element => {
    // content
    return (
        <>
            <NavLink to="/page2">Page2</NavLink>
            <div className={block}>
                <Scrollbar>
                    <div className={subBlock}>Block</div>
                </Scrollbar>
            </div>
            <br />
            <div className={block}>
                <Scrollbar>
                    <div className={subVBlock}>Vertical Block</div>
                </Scrollbar>
            </div>
            <br />
            <div className={block}>
                <Scrollbar>
                    <div className={subHBlock}>Horizontal Block</div>
                </Scrollbar>
            </div>
            <div className={background} />
        </>
    );
};

const background: string = css({
    display: "block",
    width: "5000px",
    height: "5000px",
});

const block: string = css({
    display: "block",
    width: "200px",
    height: "200px",
    border: "1px solid black",
});

const subBlock: string = css({
    display: "block",
    width: "600px",
    height: "600px",
});

const subVBlock: string = css({
    display: "block",
    height: "600px",
});

const subHBlock: string = css({
    display: "block",
    width: "600px",
});

export default Page1;
