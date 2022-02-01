import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ModelContextWrapper } from "../utils/model";

function MyApp({ Component, pageProps }) {
  return (
    <ModelContextWrapper>
      <Component {...pageProps} />;
    </ModelContextWrapper>
  );
}

export default MyApp;
