import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/About.module.scss"

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.content}>
                <h1>StashBin | simple pastebin for your text file.</h1>
                <p>
                    Paste, save and share your file easily to everyone in the world
                    <br />
                    Stashbin is an open source pastebin service. You can find the source code on{" "}
                    <a href="https://github.com/mrmissx/stashbin">Github.</a>
                </p>
                <h2>Document Lifetime</h2>
                <p>
                    StashBin have no explicit document expiration time. However old documents may be
                    removed at any time without notice
                </p>
                <h2>API endpoint</h2>
                <p>
                    You can use the API to create, read, update, and delete documents. You can send
                    a http POST with a JSON body containing field named &apos;content&apos;. API
                    only accepts &apos;Content-Type: application/json&apos;. Other than that, it
                    will response a Bad Request. Here an example using curl.
                </p>
                <pre>
                    <code>
                        {`curl -X POST \\
  'https://stashbin.xyz//api/document' \\
  --header 'Content-Type: application/json' \\
  --data-raw '{
  "content": "Hi Mom"
}'`}
                    </code>
                </pre>
                <p>
                    And you can get your document with the key received from POST on{" "}
                    <pre>https://stashbin.xyz/api/document?key=yourKey</pre>
                </p>
            </div>
            <Footer />
        </main>
    )
}
