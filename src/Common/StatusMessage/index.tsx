import {
  faCheckCircle,
  faExchange,
  faTimesCircle
} from '@fortawesome/pro-light-svg-icons';
import { useTranslation } from 'react-i18next';

import { Status, StatusIcon } from './styles';

interface ErrorPayload {
  field?: string;
  code: string | null;
  message: string;
}

interface StatusState {
  submitting: boolean;
  succeeded: boolean;
  errors: ErrorPayload[];
}

export const StatusMessage = ({
  state
}: {
  state: StatusState;
}): JSX.Element => {
  const [t] = useTranslation();
  return (
    <Status>
      {state.submitting ? (
        <>
          <StatusIcon icon={faExchange} />
          <span>{t('actions:sending')}</span>
        </>
      ) : (
        <>
          {state.succeeded && (
            <>
              <StatusIcon icon={faCheckCircle} />
              <span>{t('keywords:thank_you')}</span>
            </>
          )}
          {state.errors && state.errors.length > 0 && (
            <>
              <StatusIcon icon={faTimesCircle} />
              {state.errors.map((error) => error.message)}
            </>
          )}
        </>
      )}
    </Status>
  );
};
