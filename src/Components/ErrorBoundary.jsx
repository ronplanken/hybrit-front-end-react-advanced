import { Button, Result } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Result
      status='error'
      title={error.message}
      extra={[<Button onClick={resetErrorBoundary}>Opnieuw proberen</Button>]}
    ></Result>
  );
}

export const ErrorCatcher = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};
