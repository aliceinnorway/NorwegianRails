import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Progress() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 15, 100);
      });
    }, 500);
  return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}