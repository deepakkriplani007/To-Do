import "@styles/globals.css";
import "@styles/style.css";
import "@styles/style1.css";
import Nav from "@components/Nav";
import Provider from "@components/provider";
export const meatdata = {
  title: "ToDo",
  description: "Create and Do task",
};
const Root = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {/* <Nav /> */}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Root;
