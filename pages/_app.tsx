import {AppProps} from "next/app";
import {useEffect} from "react";
import {analytics} from "@/firebase/firebase";


const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        analytics;
    })
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default App;
