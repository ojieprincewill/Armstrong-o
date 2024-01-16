import React, { useEffect, useState } from "react";
import PortSpinner from "./port-spinner.component";

const WithPortSpinner = (WrappedComponent) => {
  const WithLoadingSpinner = (props) => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
      const simulateLoad = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setPageLoaded(true);
      };

      simulateLoad();

      return () => {
        setPageLoaded(false);
      };
    }, []);

    return (
      <div>
        {pageLoaded ? <WrappedComponent {...props} /> : <PortSpinner />}
      </div>
    );
  };

  return WithLoadingSpinner;
};

export default WithPortSpinner;
