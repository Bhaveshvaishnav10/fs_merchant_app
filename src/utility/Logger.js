const Logger = ({ url, headers, body, response, method, isProd = true }) => {
  if (isProd) {
    return null;
  } else {
    console.log("");
    console.log(
      "=============================================API CALL STARTED================================================"
    );
    console.log("-------" + method + " METHOD" + "-------");
    LoggerTile({
      content: url,
      title: "URL",
    });
    LoggerTile({
      content: headers,
      title: "HEADERS",
    });
    {
      method === "POST" &&
        LoggerTile({
          content: body,
          title: "BODY",
        });
    }
    LoggerTile({
      content: response,
      title: "RESPONSE",
    });
    console.log(
      "===========================================API CALL ENDED=================================================="
    );
    console.log("");
  }
};

export default Logger;

const LoggerTile = ({ title, content }) => {
  console.log("");
  console.log(" -- ", title ?? "LOGS", " -- ");
  console.log("");
  console.log(content ?? "");
  console.log("------------------------");
  console.log("");
};
