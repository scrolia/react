import type * as React from "react";

import { Scrollbar } from "@scrolia/react";
import Link from "next/link";

export default (): React.JSX.Element => {
    // content
    return (
        <>
            <Link href="/page2">Page 2</Link>
            <div style={block}>
                <Scrollbar>
                    <div style={subBlock}>Block</div>
                </Scrollbar>
            </div>
            <br />
            <div style={block}>
                <Scrollbar>
                    <div style={subVBlock}>Vertical Block</div>
                </Scrollbar>
            </div>
            <br />
            <div style={block}>
                <Scrollbar>
                    <div style={subHBlock}>Horizontal Block</div>
                </Scrollbar>
            </div>
            <div style={background} />
        </>
    );
};

const background: React.CSSProperties = {
    display: "block",
    width: "5000px",
    height: "5000px",
};

const block: React.CSSProperties = {
    display: "block",
    width: "200px",
    height: "200px",
    border: "1px solid black",
};

const subBlock: React.CSSProperties = {
    display: "block",
    width: "600px",
    height: "600px",
};

const subVBlock: React.CSSProperties = {
    display: "block",
    height: "600px",
};

const subHBlock: React.CSSProperties = {
    display: "block",
    width: "600px",
};
