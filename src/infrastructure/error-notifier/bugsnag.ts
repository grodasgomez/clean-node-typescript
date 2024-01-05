import bugsnag, { NotifiableError } from '@bugsnag/js';
import { Request } from 'express';
import env from 'utils/env';

const { BUGSNAG_API_KEY, BUGSNAG_ENV, NODE_ENV } = env;

NODE_ENV !== 'test'
  ? bugsnag.start({
      apiKey: BUGSNAG_API_KEY,
      releaseStage: BUGSNAG_ENV,
    })
  : null;

const notify = (req: Request, error: NotifiableError) => {
  const { body, query, url, headers, method } = req;
  bugsnag.addMetadata('URL', { url });
  bugsnag.addMetadata('METHOD', { method });
  bugsnag.addMetadata('HEADERS', { headers });
  if (Object.keys(body).length > 0) bugsnag.addMetadata('BODY', { body });

  if (Object.keys(query).length > 0) bugsnag.addMetadata('QUERY', { query });

  bugsnag.notify(error);
};

export { notify, bugsnag };
