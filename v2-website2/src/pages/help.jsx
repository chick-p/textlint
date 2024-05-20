import Layout from "@theme/Layout";
import React from "react";
import Link from "@docusaurus/Link";

export default () => {
    const supportLinks = [
        {
            content: 'Learn more using the <Link to="/docs/getting-started.html">documentation on this site.</Link>',
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
                            <h2 lassName="margin-top--lg">Need help?</h2>
                        </header>
                        <p>This project is maintained by a dedicated group of people.</p>
                        <div className="row">
                            <div className="col">
                                <h2 className="margin-top--lg">Browse Doc</h2>
                                <p>
                                    Learn more using the{" "}
                                    <Link to="/docs/getting-started.html">documentation on this site.</Link>
                                </p>
                            </div>
                            <div className="col">
                                <h2 className="margin-top--lg">Join the Community</h2>
                                <p>
                                    For bugs and feature requests, please{" "}
                                    <Link to="https://github.com/textlint/textlint/issues">open an issue</Link>. Be sure
                                    to also check out our{" "}
                                    <Link to="/docs/contributing.html">Contributing Guideline</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
