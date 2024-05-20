import Layout from "@theme/Layout";
import React from "react";

import GridBlock from "../components/GridBlock";

export default () => {
    const supportLinks = [
        {
            content: "Learn more using the [documentation on this site.](/docs/getting-started.html)",
            title: "Browse Docs"
        },
        {
            content:
                "For bugs and feature requests, please [open an issue](https://github.com/textlint/textlint/issues). Be sure to also check out our [Contributing Guideline](/docs/contributing.html).",
            title: "Join the Community"
        }
    ];
    return (
        <Layout>
            <div className="docMainWrapper wrapper">
                <div className="mainContainer documentContainer postContainer">
                    <div className="post">
                        <header className="postHeader">
                            <h2>Need help?</h2>
                        </header>
                        <p>This project is maintained by a dedicated group of people.</p>
                        <GridBlock contents={supportLinks} layout="threeColumn" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
