// platform detection code
const platform = (() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) {
      return "Windows";
    } else if (userAgent.includes("Mac")) {
      return "Mac";
    } else {
      return "Unknown";
    }
  })();
  
  export default platform;
  