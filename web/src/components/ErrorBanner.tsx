import * as React from "react";

interface ErrorBannerProps {
  errorMessage: string;
}

const ErrorBanner = ({errorMessage}: ErrorBannerProps) => (
  <section data-test="error-banner" role="alert" className="alert alert-danger">
    {errorMessage}
  </section>
);

export default ErrorBanner;
